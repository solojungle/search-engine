type ResultProps = {
  title: string;
  description: string;
  url: string;
  thumbnail: string;
};

export const Item = (props: ResultProps) => {
  const { title, description, url, thumbnail } = props;

  return (
    <div className="flex flex-col gap-4">
      <div className="relative h-56 w-full overflow-hidden rounded-md">
        <a href={url} className="">
          <img
            className="absolute h-full w-full object-cover"
            src={thumbnail}
            alt={title}
          />
        </a>
      </div>
      <div className="flex flex-col gap-1">
        <a className="text-lg font-bold" href={url}>
          {title}
        </a>
        <p className="text-sm">{description}</p>
      </div>
    </div>
  );
};
