export const Keybindings = () => {
  return (
    <div className="mb-5">
      <h2 className="mb-2 text-lg font-bold">Keybindings</h2>
      <div className="grid select-none grid-cols-4 gap-y-2">
        <div className="flex">
          <div className="keybinding">Return</div>
        </div>
        <div className="col-span-3 text-sm">Search for results</div>
        <div className="flex">
          <div className="keybinding">Escape</div>
        </div>
        <div className="col-span-3 text-sm">Clear the search bar</div>
        <div className="flex">
          <div className="keybinding">/</div>
        </div>
        <div className="col-span-3 text-sm">Focuses the search bar</div>
      </div>
    </div>
  );
};
