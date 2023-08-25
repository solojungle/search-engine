import { Filter } from "./Filter";

export const AdvancedOptionsFilter = () => {
  return (
    <>
      <h2 className="pb-2 pl-2 text-xs font-semibold text-neutral-700">
        Advanced
      </h2>
      <ol className="mb-5 border-b border-borderColor pb-6">
        <Filter />
      </ol>
    </>
  );
};
