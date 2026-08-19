export default function SubscribeForm({ sellerId }: { sellerId: string }) {
  return (
    <form
      action="/api/subscribe"
      method="POST"
      className="flex flex-col gap-3"
    >
      <input type="hidden" name="sellerId" value={sellerId} />
      <label className="flex flex-col gap-1 text-sm">
        Email
        <input
          type="email"
          name="email"
          required
          className="rounded border border-zinc-300 px-3 py-2"
        />
      </label>
      <button
        type="submit"
        className="cursor-pointer rounded bg-black px-4 py-2 text-white"
      >
        Suscribirme
      </button>
    </form>
  );
}
