"use client";

import { useCallback, useEffect, useRef, useState, type CSSProperties, type PointerEvent } from "react";
import {
  MEMBERSHIPS,
  type MembershipExample,
} from "@/lib/v2-landing";

const SWIPE_PX = 48;

function cyclicOffset(index: number, active: number, length: number) {
  let diff = index - active;
  const half = Math.floor(length / 2);
  if (diff > half) diff -= length;
  if (diff < -half) diff += length;
  return diff;
}

export default function MembershipShowcase() {
  const [active, setActive] = useState(0);
  const [paused, setPaused] = useState(false);
  const [dragX, setDragX] = useState(0);
  const [dragging, setDragging] = useState(false);
  const pointer = useRef<{ id: number; startX: number } | null>(null);
  const skipClick = useRef(false);
  const count = MEMBERSHIPS.length;
  const current = MEMBERSHIPS[active];

  const go = useCallback(
    (next: number) => {
      setActive(((next % count) + count) % count);
    },
    [count],
  );

  const next = useCallback(() => go(active + 1), [active, go]);
  const prev = useCallback(() => go(active - 1), [active, go]);

  const endDrag = useCallback(
    (clientX: number) => {
      const session = pointer.current;
      pointer.current = null;
      setDragging(false);
      setDragX(0);
      if (!session) return;
      const delta = clientX - session.startX;
      skipClick.current = Math.abs(delta) > 8;
      if (delta < -SWIPE_PX) next();
      if (delta > SWIPE_PX) prev();
    },
    [next, prev],
  );

  const onPointerDown = useCallback((event: PointerEvent<HTMLDivElement>) => {
    if (event.pointerType === "mouse" && event.button !== 0) return;
    pointer.current = { id: event.pointerId, startX: event.clientX };
    setDragging(true);
    setPaused(true);
    event.currentTarget.setPointerCapture(event.pointerId);
  }, []);

  const onPointerMove = useCallback((event: PointerEvent<HTMLDivElement>) => {
    const session = pointer.current;
    if (!session || session.id !== event.pointerId) return;
    setDragX(event.clientX - session.startX);
  }, []);

  const onPointerUp = useCallback(
    (event: PointerEvent<HTMLDivElement>) => {
      if (pointer.current?.id !== event.pointerId) return;
      if (event.currentTarget.hasPointerCapture(event.pointerId)) {
        event.currentTarget.releasePointerCapture(event.pointerId);
      }
      endDrag(event.clientX);
    },
    [endDrag],
  );

  useEffect(() => {
    if (paused || dragging) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    const id = window.setInterval(() => {
      setActive((value) => (value + 1) % count);
    }, 4500);
    return () => window.clearInterval(id);
  }, [paused, dragging, count]);

  useEffect(() => {
    function onKey(event: KeyboardEvent) {
      if (event.key === "ArrowRight") next();
      if (event.key === "ArrowLeft") prev();
    }
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [next, prev]);

  return (
    <div
      className="v2-showcase"
      onPointerEnter={() => setPaused(true)}
      onPointerLeave={() => setPaused(false)}
    >
      <div
        className={`v2-stage${dragging ? " is-dragging" : ""}`}
        aria-roledescription="carrusel"
        aria-label="Ejemplos de membresías"
        onPointerDown={onPointerDown}
        onPointerMove={onPointerMove}
        onPointerUp={onPointerUp}
        onPointerCancel={onPointerUp}
      >
        {MEMBERSHIPS.map((item, index) => {
          const offset = cyclicOffset(index, active, count);
          const abs = Math.abs(offset);
          const scale = abs === 0 ? 1 : abs === 1 ? 0.86 : 0.76;
          const opacity = abs === 0 ? 1 : abs === 1 ? 0.42 : 0.16;
          const blur = abs === 0 ? 0 : abs === 1 ? 2.5 : 5;

          return (
            <MembershipCard
              key={item.id}
              item={item}
              active={abs === 0}
              style={{
                transform: `translateX(calc(${offset} * var(--v2-peek) + ${dragX}px)) scale(${scale})`,
                opacity,
                filter: blur ? `blur(${blur}px)` : "none",
                zIndex: 10 - abs,
                pointerEvents: abs > 1 ? "none" : "auto",
              } satisfies CSSProperties}
              onSelect={() => {
                if (skipClick.current) return;
                go(index);
              }}
            />
          );
        })}
      </div>

      <div className="v2-controls">
        <button
          type="button"
          className="v2-arrow"
          aria-label="Membresía anterior"
          onClick={prev}
        >
          ←
        </button>
        <div className="v2-dots">
          {MEMBERSHIPS.map((item, index) => (
            <button
              key={item.id}
              type="button"
              className="v2-dot"
              aria-label={item.name}
              aria-current={index === active ? "true" : undefined}
              onClick={() => go(index)}
            />
          ))}
        </div>
        <button
          type="button"
          className="v2-arrow"
          aria-label="Membresía siguiente"
          onClick={next}
        >
          →
        </button>
      </div>

      <p className="sr-only" aria-live="polite">
        {current.name}. {current.category}. {current.price}. {current.members}.
        {formatEarns(current.membersCount, current.priceAmount)}.
      </p>
    </div>
  );
}

function formatEarns(membersCount: number, priceAmount: number) {
  const total = membersCount * priceAmount;
  return `Gana $${total.toLocaleString("es-AR")}/mes`;
}

function MembershipCard({
  item,
  active,
  style,
  onSelect,
}: {
  item: MembershipExample;
  active: boolean;
  style: CSSProperties;
  onSelect: () => void;
}) {
  const earns = formatEarns(item.membersCount, item.priceAmount);

  return (
    <article
      className={`v2-card${active ? "" : " is-side"}`}
      style={style}
      aria-hidden={!active}
      onClick={() => {
        if (active) return;
        onSelect();
      }}
    >
      <div className="v2-cover">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img src={item.image} alt={active ? item.name : ""} draggable={false} />
        <div className="v2-scrim">
          <p className="v2-category">{item.category}</p>
          <h2 className="v2-name">{item.name}</h2>
          <p className="v2-tagline">{item.tagline}</p>
        </div>
      </div>
      <div className="v2-earn" aria-hidden={!active}>
        <strong>{item.name}</strong>
        <span>{earns}</span>
      </div>
    </article>
  );
}
