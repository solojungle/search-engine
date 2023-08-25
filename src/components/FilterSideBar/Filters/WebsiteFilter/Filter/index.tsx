import { type SearchCounts } from "components/types";
import { Item } from "./item";

type FilterItemProps = {
  counts: SearchCounts;
};

export const Filter = (props: FilterItemProps) => {
  const { counts } = props;

  return (
    <>
      <Item
        icon="/icons/yt-icon.png"
        title="YouTube"
        count={counts.sites.youtube}
      />
      <Item
        icon="/icons/vimeo-icon.png"
        title="Vimeo"
        count={counts.sites.vimeo}
      />
      <Item
        icon="/icons/tiktok-icon.png"
        title="TikTok"
        count={counts.sites.tiktok}
      />
      <Item
        icon="/icons/insta-icon.png"
        title="Instagram"
        count={counts.sites.instagram}
      />
    </>
  );
};
