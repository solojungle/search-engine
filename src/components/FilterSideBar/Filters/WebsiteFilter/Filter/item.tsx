import { ResolvedCount } from '../../ResolvedCount';

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
        <img
          className="pointer-events-none select-none"
          src={icon}
          alt={title}
          width={20}
          height={20}
        />
        <div className="flex w-full items-center justify-between">
          <p className="ml-3 text-sm">{title}</p>
          <ResolvedCount count={count} />
        </div>
      </a>
    </li>
  );
};
