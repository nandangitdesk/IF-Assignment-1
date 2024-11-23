import React from 'react';

export default function ArticleCard({ title, description, image }) {
  return (
    <div className="flex flex-col h-[484px]  md:h-[554px] w-[271px] md:w-[381px] mx-auto p-4 md:p-5 overflow-hidden rounded-2xl border-[0.88px] border-[#373737] bg-white shadow-sm transition-shadow hover:shadow-md">
      <div className="relative h-[200px] md:h-[257px] w-full overflow-hidden mx-auto">
        <img
          src={image}
          alt={title}
          className="h-full w-full object-cover"
        />
      </div>

      <div className="flex flex-1 flex-col mt-4 px-4 md:px-6">
        <h3 className="mb-3 text-lg md:text-[21px] leading-[1.5] font-bold text-[#0E2368]">
          {title}
        </h3>
        <p className="text-sm md:text-base leading-[1.5] font-normal text-[#444957]">
          {description}
        </p>
        <button className="mt-4 md:mt-6 self-start rounded-full border border-[#424961] px-4 py-2 text-sm md:text-base font-semibold text-[#424961] transition-colors hover:bg-gray-50">
          Read More
        </button>
      </div>
    </div>
  );
}
