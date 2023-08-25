import {
  DocumentTextIcon,
  FilmIcon,
  GifIcon,
  PhotoIcon,
  Squares2X2Icon,
} from "@heroicons/react/24/outline";
import { type SearchCounts } from "components/types";
import { Item } from "./item";

type FilterItemProps = {
  counts: SearchCounts;
};

export const Filter = (props: FilterItemProps) => {
  const { counts } = props;

  return (
    <>
      <Item Icon={Squares2X2Icon} title="Everything" count={counts.types.all} />
      <Item Icon={FilmIcon} title="Videos" count={counts.types.video} />
      <Item Icon={GifIcon} title="GIFs" count={counts.types.gifs} />
      <Item
        Icon={DocumentTextIcon}
        title="Transcripts"
        count={counts.types.transcripts}
      />
      <Item Icon={PhotoIcon} title="Images" count={counts.types.images} />
    </>
  );
};
