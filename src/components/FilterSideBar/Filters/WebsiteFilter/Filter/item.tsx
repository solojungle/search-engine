import { ResolvedCount } from '../../ResolvedCount';

type ItemProps = {
  icon: string;
  title: string;
  count: number;
  selected: boolean;
  setSelectedWebsite: React.Dispatch<React.SetStateAction<any>>;
};

export const Item = (props: ItemProps) => {
  const { icon, title, count, selected, setSelectedWebsite } = props;

  return (
    <li className="group">
      <button
        type="button"
        onClick={() => {
          setSelectedWebsite(title.toLowerCase());
        }}
        className={`${
          selected && 'bg-neutral-200'
        } flex w-full items-center rounded-md p-2 hover:bg-neutral-200`}
      >
        <img
          className="pointer-events-none select-none"
          src={icon}
          alt={title}
          width={20}
          height={20}
        />
        <div className="flex w-full items-center justify-between">
          <p className="ml-3 text-sm">{title}</p>
          <ResolvedCount count={count} selected={selected} />
        </div>
      </button>
    </li>
  );
};
