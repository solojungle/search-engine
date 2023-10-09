type ItemProps = {
  Icon: React.ForwardRefExoticComponent<
    Omit<React.SVGProps<SVGSVGElement>, 'ref'> & { title?: string | undefined }
  >;
  title: string;
};

export const Item = (props: ItemProps) => {
  const { Icon, title } = props;

  return (
    <li className="group">
      <a className="flex items-center rounded-md p-2 ">
        <Icon className="h-5 w-5 text-black dark:text-white" />
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
              overflow-hidden"
          >
            <span className="h-5 w-5 rounded-xl bg-neutral-200  dark:bg-neutral-500" />
          </div>
        </div>
      </a>
    </li>
  );
};
