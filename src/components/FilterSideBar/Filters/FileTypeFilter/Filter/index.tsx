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
  types: SearchCounts["types"];
};

export const Filter = (props: FilterItemProps) => {
  const { types } = props;

  return (
    <>
      <Item Icon={Squares2X2Icon} title="Everything" count={types.all} />
      <Item Icon={FilmIcon} title="Videos" count={types.video} />
      <Item Icon={GifIcon} title="GIFs" count={types.gifs} />
      <Item
        Icon={DocumentTextIcon}
        title="Transcripts"
        count={types.transcripts}
      />
      <Item Icon={PhotoIcon} title="Images" count={types.images} />
    </>
  );
};
