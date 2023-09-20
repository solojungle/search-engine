type ResolvedCountProps = {
  count: number;
};

export const ResolvedCount = (props: ResolvedCountProps) => {
  const { count } = props;

  return (
    <p className="rounded-xl bg-neutral-200 px-2 text-xs font-semibold leading-5 group-hover:bg-neutral-300">
      {count}
    </p>
  );
};