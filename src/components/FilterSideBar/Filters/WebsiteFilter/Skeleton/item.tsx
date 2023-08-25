type ItemProps = {
  icon: string;
  title: string;
};

export const Item = (props: ItemProps) => {
  const { icon, title } = props;
  return (
    <li className="group">
      <a className="flex items-center rounded-md p-2 hover:bg-neutral-200">
        <img src={icon} alt={title} width={20} height={20} />
        <div className="flex w-full items-center justify-between">
          <p className="ml-3 text-sm">{title}</p>
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
            <span className="h-5 w-5 rounded-xl bg-neutral-200 group-hover:bg-neutral-300" />
          </div>
        </div>
      </a>
    </li>
  );
};
