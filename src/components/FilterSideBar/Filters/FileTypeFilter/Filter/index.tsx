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
        filterBy="everything"
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
        filterBy="video"
        selected={isSelected({
          valueToCheck: 'video',
          selectedValue: selectedFileType,
        })}
        setSelectedFileType={setSelectedFileType}
      />
      <Item
        Icon={GifIcon}
        title="GIFs"
        count={types.gifs}
        filterBy="gif"
        selected={isSelected({
          valueToCheck: 'gif',
          selectedValue: selectedFileType,
        })}
        setSelectedFileType={setSelectedFileType}
      />
      <Item
        Icon={DocumentTextIcon}
        title="Transcripts"
        count={types.transcripts}
        filterBy="transcript"
        selected={isSelected({
          valueToCheck: 'transcript',
          selectedValue: selectedFileType,
        })}
        setSelectedFileType={setSelectedFileType}
      />
      <Item
        Icon={PhotoIcon}
        title="Images"
        count={types.images}
        filterBy="image"
        selected={isSelected({
          valueToCheck: 'image',
          selectedValue: selectedFileType,
        })}
        setSelectedFileType={setSelectedFileType}
      />
    </>
  );
};
