type IsSelectedProps = {
  valueToCheck: string;
  selectedValue: string;
};

export function isSelected({
  valueToCheck,
  selectedValue,
}: IsSelectedProps): boolean {
  if (valueToCheck === selectedValue) return true;

  return false;
}

type HandleSelectItemProps = {
  defaultValue?: string;
  selected: boolean;
  title: string;
  setValue: React.Dispatch<React.SetStateAction<any>>;
};

export function handleSelectItem({
  defaultValue,
  selected,
  title,
  setValue,
}: HandleSelectItemProps) {
  if (selected && defaultValue !== undefined) {
    setValue(defaultValue);
    return;
  }

  setValue(title);
}
