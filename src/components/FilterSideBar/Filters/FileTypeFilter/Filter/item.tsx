import { handleSelectItem } from '../../FilterFunctions';
import { ResolvedCount } from '../../ResolvedCount';

type FilterItemProps = {
  Icon: React.ForwardRefExoticComponent<
    Omit<React.SVGProps<SVGSVGElement>, 'ref'> & { title?: string | undefined }
  >;
  title: string;
  count: number;
  selected: boolean;
  filterBy: string;
  setSelectedFileType: React.Dispatch<React.SetStateAction<any>>;
};

export const Item = (props: FilterItemProps) => {
  const { Icon, title, count, selected, setSelectedFileType, filterBy } = props;

  return (
    <li className="group">
      <button
        type="button"
        onClick={() => {
          handleSelectItem({
            selected,
            value: filterBy,
            setValue: setSelectedFileType,
          });
        }}
        className={`${
          selected && 'bg-neutral-200 dark:bg-primaryLowlight'
        } flex w-full items-center rounded-md p-2 hover:bg-neutral-200 dark:hover:bg-primaryHighlight`}
      >
        <Icon className="h-5 w-5 text-black dark:text-white" />
        <div className="flex w-full items-center justify-between">
          <p className="ml-3 text-sm">{title}</p>
          <ResolvedCount count={count} selected={selected} />
        </div>
      </button>
    </li>
  );
};
