type ResultProps = {
  title: string;
  description: string;
  url: string;
  thumbnail: string;
};

export const Result = (props: ResultProps) => {
  const { title, description, url, thumbnail } = props;

  return (
    <div className="flex flex-col gap-2">
      <div className="relative h-56 w-full overflow-hidden rounded-md">
        <img
          className="absolute h-full w-full object-cover"
          src={thumbnail}
          alt={title}
        />
      </div>
      <div className="flex flex-col gap-1">
        <a className="text-lg font-bold" href={url}>
          {title}
        </a>
        <p className="text-sm">{description}</p>
        <a className="text-sm text-blue-500" href={url}>
          {url}
        </a>
      </div>
    </div>
  );
};
