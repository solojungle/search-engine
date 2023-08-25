import { PlusCircleIcon } from "@heroicons/react/24/outline";
import { Item } from "./item";

export const Filter = () => {
  return (
    <>
      <Item Icon={PlusCircleIcon} title="Date published" />
      <Item Icon={PlusCircleIcon} title="Views" />
      <Item Icon={PlusCircleIcon} title="Duration" />
    </>
  );
};
