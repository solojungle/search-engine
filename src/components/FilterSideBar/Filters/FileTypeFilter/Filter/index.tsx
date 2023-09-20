import {
  DocumentTextIcon,
  FilmIcon,
  GifIcon,
  PhotoIcon,
  Squares2X2Icon,
} from '@heroicons/react/24/outline';
import { type SearchCounts } from 'components/types';

import { isSelected } from '../../FilterFunctions';
import { Item } from './item';

type FilterItemProps = {
  types: SearchCounts['types'];
  selectedFileType: string;
  setSelectedFileType: React.Dispatch<React.SetStateAction<any>>;
};

export const Filter = (props: FilterItemProps) => {
  const { types, selectedFileType, setSelectedFileType } = props;

  return (
    <>
      <Item
        Icon={Squares2X2Icon}
        title="Everything"
        count={types.all}
        selected={isSelected({
          valueToCheck: 'everything',
          selectedValue: selectedFileType,
        })}
        setSelectedFileType={setSelectedFileType}
      />
      <Item
        Icon={FilmIcon}
        title="Videos"
        count={types.video}
        selected={isSelected({
          valueToCheck: 'videos',
          selectedValue: selectedFileType,
        })}
        setSelectedFileType={setSelectedFileType}
      />
      <Item
        Icon={GifIcon}
        title="GIFs"
        count={types.gifs}
        selected={isSelected({
          valueToCheck: 'gifs',
          selectedValue: selectedFileType,
        })}
        setSelectedFileType={setSelectedFileType}
      />
      <Item
        Icon={DocumentTextIcon}
        title="Transcripts"
        count={types.transcripts}
        selected={isSelected({
          valueToCheck: 'transcripts',
          selectedValue: selectedFileType,
        })}
        setSelectedFileType={setSelectedFileType}
      />
      <Item
        Icon={PhotoIcon}
        title="Images"
        count={types.images}
        selected={isSelected({
          valueToCheck: 'images',
          selectedValue: selectedFileType,
        })}
        setSelectedFileType={setSelectedFileType}
      />
    </>
  );
};
