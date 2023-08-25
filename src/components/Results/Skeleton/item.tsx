export const Item = () => {
  return (
    <div
      className="
        relative
        isolate
        flex
        flex-col
        items-start
        justify-center
        overflow-hidden
        before:absolute
        before:inset-0
        before:-translate-x-full
        before:animate-[shimmer_2s_infinite]
        before:bg-gradient-to-r
        before:from-transparent
        before:via-gray-100/50
        before:to-transparent"
    >
      <div className="mb-4 h-56 w-full rounded-md bg-neutral-200" />
      <div className="mb-2 h-4 w-2/3 rounded-md bg-neutral-200" />
      <div className="mb-2 h-4 w-3/4 rounded-md bg-neutral-200" />
      <div className="mb-2 h-4 w-3/4 rounded-md bg-neutral-200" />
    </div>
  );
};
