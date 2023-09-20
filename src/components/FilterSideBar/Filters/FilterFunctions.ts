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
