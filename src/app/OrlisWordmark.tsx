import {
  ORLIS_LOGO_ALT,
  ORLIS_WORDMARK_HEIGHT,
  ORLIS_WORDMARK_SRC,
  ORLIS_WORDMARK_WIDTH,
} from "@/lib/brand";

export default function OrlisWordmark({
  height,
  className,
}: {
  height: number;
  className?: string;
}) {
  const width = Math.round(
    (height * ORLIS_WORDMARK_WIDTH) / ORLIS_WORDMARK_HEIGHT,
  );

  return (
    <img
      src={ORLIS_WORDMARK_SRC}
      alt={ORLIS_LOGO_ALT}
      width={width}
      height={height}
      className={className}
      decoding="async"
    />
  );
}
