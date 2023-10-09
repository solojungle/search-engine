type ResolvedCountProps = {
  count: number;
  selected: boolean;
};

export const ResolvedCount = (props: ResolvedCountProps) => {
  const { count, selected } = props;

  return (
    <p
      className={`rounded-xl bg-neutral-200 px-2 text-xs font-semibold leading-5 group-hover:bg-neutral-300 dark:bg-neutral-600 dark:group-hover:bg-neutral-700 ${
        selected && 'bg-neutral-300 dark:bg-neutral-700'
      }`}
    >
      {count}
    </p>
  );
};
