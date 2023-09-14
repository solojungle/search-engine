import { Item } from './item';

export const Skeleton = () => {
  return (
    <div className="grid grid-cols-1 gap-2 pt-5 sm:grid-cols-2 lg:grid-cols-3 lg:gap-4">
      {[1, 2, 3, 4, 5, 6, 7, 8, 9].map((item) => (
        <Item key={item.toString()} />
      ))}
    </div>
  );
};
