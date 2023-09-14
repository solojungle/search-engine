type FilterItemProps = {
  Icon: React.ForwardRefExoticComponent<
    Omit<React.SVGProps<SVGSVGElement>, 'ref'> & { title?: string | undefined }
  >;
  title: string;
};

export const Item = (props: FilterItemProps) => {
  const { Icon, title } = props;

  return (
    <li className="group">
      <a className="flex items-center rounded-md p-2 hover:bg-neutral-200">
        <Icon className="h-5 w-5 text-black" />
        <div className="flex w-full items-center justify-between">
          <p className="ml-3 text-sm">{title}</p>
        </div>
      </a>
    </li>
  );
};
