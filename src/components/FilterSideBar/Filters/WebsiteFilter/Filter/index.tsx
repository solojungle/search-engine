import { type SearchCounts } from 'components/types';

import { Item } from './item';

type FilterItemProps = {
  sites: SearchCounts['sites'];
};

export const Filter = (props: FilterItemProps) => {
  const { sites } = props;

  return (
    <>
      <Item icon="/icons/yt-icon.png" title="YouTube" count={sites.youtube} />
      <Item icon="/icons/vimeo-icon.png" title="Vimeo" count={sites.vimeo} />
      <Item icon="/icons/tiktok-icon.png" title="TikTok" count={sites.tiktok} />
      <Item
        icon="/icons/insta-icon.png"
        title="Instagram"
        count={sites.instagram}
      />
    </>
  );
};
