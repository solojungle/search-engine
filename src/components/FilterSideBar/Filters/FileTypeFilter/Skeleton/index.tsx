import {
  DocumentTextIcon,
  FilmIcon,
  GifIcon,
  PhotoIcon,
  Squares2X2Icon,
} from '@heroicons/react/24/outline';

import { Item } from './item';

export const Skeleton = () => {
  return (
    <>
      <Item Icon={Squares2X2Icon} title="Everything" />
      <Item Icon={FilmIcon} title="Videos" />
      <Item Icon={GifIcon} title="GIFs" />
      <Item Icon={DocumentTextIcon} title="Transcripts" />
      <Item Icon={PhotoIcon} title="Images" />
    </>
  );
};
