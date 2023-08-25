type ItemProps = {
  icon: string;
  title: string;
  count: number;
};

export const Item = (props: ItemProps) => {
  const { icon, title, count } = props;

  return (
    <li className="group">
      <a className="flex items-center rounded-md p-2 hover:bg-neutral-200">
        <img src={icon} alt={title} width={20} height={20} />
        <div className="flex w-full items-center justify-between">
          <p className="ml-3 text-sm">{title}</p>
          <p className="rounded-xl bg-neutral-200 px-2 text-xs font-semibold leading-5 group-hover:bg-neutral-300">
            {count}
          </p>
        </div>
      </a>
    </li>
  );
};
