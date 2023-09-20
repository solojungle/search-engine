import { type SearchCounts } from 'components/types';

import { isSelected } from '../../FilterFunctions';
import { Item } from './item';

type FilterItemProps = {
  sites: SearchCounts['sites'];
  selectedWebsite: string;
  setSelectedWebsite: React.Dispatch<React.SetStateAction<any>>;
};

export const Filter = (props: FilterItemProps) => {
  const { sites, selectedWebsite, setSelectedWebsite } = props;

  return (
    <>
      <Item
        icon="/icons/yt-icon.png"
        title="YouTube"
        count={sites.youtube}
        selected={isSelected({
          valueToCheck: 'youtube',
          selectedValue: selectedWebsite,
        })}
        setSelectedWebsite={setSelectedWebsite}
      />
      <Item
        icon="/icons/vimeo-icon.png"
        title="Vimeo"
        count={sites.vimeo}
        selected={isSelected({
          valueToCheck: 'vimeo',
          selectedValue: selectedWebsite,
        })}
        setSelectedWebsite={setSelectedWebsite}
      />
      <Item
        icon="/icons/tiktok-icon.png"
        title="TikTok"
        count={sites.tiktok}
        selected={isSelected({
          valueToCheck: 'tiktok',
          selectedValue: selectedWebsite,
        })}
        setSelectedWebsite={setSelectedWebsite}
      />
      <Item
        icon="/icons/insta-icon.png"
        title="Instagram"
        count={sites.instagram}
        selected={isSelected({
          valueToCheck: 'instagram',
          selectedValue: selectedWebsite,
        })}
        setSelectedWebsite={setSelectedWebsite}
      />
    </>
  );
};
