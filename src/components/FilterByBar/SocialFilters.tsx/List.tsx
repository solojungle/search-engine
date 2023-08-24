export const FilterSocialList = () => {
  return (
    <div className="mb-5">
      <h2 className="pb-2 pl-2 text-xs font-semibold text-neutral-700">
        Websites
      </h2>
      <ol className="border-b border-borderColor pb-6">
        <li className="group">
          <a
            href={""}
            className="flex items-center rounded-md p-2 hover:bg-neutral-200"
          >
            <img src="/icons/yt-icon.png" alt="My SVG" width={20} height={20} />
            <div className="flex w-full items-center justify-between">
              <p className="ml-3 text-sm">YouTube</p>
              <div
                className="
                relative
                isolate
                flex
                flex-col
                items-start
                justify-center
                overflow-hidden
                before:absolute
                before:inset-0
                before:-translate-x-full
                before:animate-[shimmer_2s_infinite]
                before:bg-gradient-to-r
                before:from-transparent
                before:via-gray-100/50
                before:to-transparent"
              >
                <span className="h-5 w-5 rounded-xl bg-neutral-200 group-hover:bg-neutral-300" />
              </div>
            </div>
          </a>
        </li>
        <li className="group">
          <a
            href={""}
            className="flex items-center rounded-md p-2 hover:bg-neutral-200"
          >
            <img
              src="/icons/vimeo-icon.png"
              alt="My SVG"
              width={20}
              height={20}
            />
            <div className="flex w-full items-center justify-between">
              <p className="ml-3 text-sm">Vimeo</p>
              <div
                className="
                relative
                isolate
                flex
                flex-col
                items-start
                justify-center
                overflow-hidden
                before:absolute
                before:inset-0
                before:-translate-x-full
                before:animate-[shimmer_2s_infinite]
                before:bg-gradient-to-r
                before:from-transparent
                before:via-gray-100/50
                before:to-transparent"
              >
                <span className="h-5 w-5 rounded-xl bg-neutral-200 group-hover:bg-neutral-300" />
              </div>
            </div>
          </a>
        </li>
        <li className="group">
          <a
            href={""}
            className="flex items-center rounded-md p-2 hover:bg-neutral-200"
          >
            <img
              src="/icons/tiktok-icon.png"
              alt="My SVG"
              width={20}
              height={20}
            />
            <div className="flex w-full items-center justify-between">
              <p className="ml-3 text-sm">TikTok</p>
              <div
                className="
                relative
                isolate
                flex
                flex-col
                items-start
                justify-center
                overflow-hidden
                before:absolute
                before:inset-0
                before:-translate-x-full
                before:animate-[shimmer_2s_infinite]
                before:bg-gradient-to-r
                before:from-transparent
                before:via-gray-100/50
                before:to-transparent"
              >
                <span className="h-5 w-5 rounded-xl bg-neutral-200 group-hover:bg-neutral-300" />
              </div>
            </div>
          </a>
        </li>
        <li className="group">
          <a
            href={""}
            className="flex items-center rounded-md p-2 hover:bg-neutral-200"
          >
            <img
              src="/icons/insta-icon.png"
              alt="My SVG"
              width={20}
              height={20}
            />
            <div className="flex w-full items-center justify-between">
              <p className="ml-3 text-sm">Instagram</p>
              <div
                className="
                relative
                isolate
                flex
                flex-col
                items-start
                justify-center
                overflow-hidden
                before:absolute
                before:inset-0
                before:-translate-x-full
                before:animate-[shimmer_2s_infinite]
                before:bg-gradient-to-r
                before:from-transparent
                before:via-gray-100/50
                before:to-transparent"
              >
                <span className="h-5 w-5 rounded-xl bg-neutral-200 group-hover:bg-neutral-300" />
              </div>
            </div>
          </a>
        </li>
      </ol>
    </div>
  );
};
