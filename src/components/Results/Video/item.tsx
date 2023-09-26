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
      <div className="relative aspect-video overflow-hidden rounded-md">
        <a href={url} className="">
          <img
            className="h-full w-full object-cover"
            src={thumbnail}
            alt={title}
          />
        </a>
      </div>
      <div className="flex flex-col gap-1">
        <a
          title={title}
          className="line-clamp-1 text-ellipsis text-lg font-semibold"
          href={url}
        >
          {title}
        </a>
        <p className="text-sm text-neutral-600">{description}</p>
      </div>
    </div>
  );
};
