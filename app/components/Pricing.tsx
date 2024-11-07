import React from "react";

export default function Pricing() {
  return (
    <div className="flex flex-col justify-center items-center text-center mx-auto my-2">
      <div>
        <button className="rounded-[100px] border-[#121212] border-2 py-1 px-3 text-sm font-semibold my-6">
          Flexible Pricing
        </button>
      </div>
      <h1 className="font-bold text-2xl md:text-3xl lg:text-5xl">
        Flexible Plans for Every Need
      </h1>
      <ul className="text-xl font-semibold hidden lg:flex gap-4 pt-8 pb-4">
        <li>Pay Monthly</li>
        <li>
          <label className="inline-flex items-center cursor-pointer">
            <input type="checkbox" value="" className="sr-only peer" />
            <div className="relative w-11 h-6 bg-[#121212] peer-focus:outline-none peer-focus:ring-4 rounded-full peer peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:start-[2px] after:bg-white after:rounded-full after:h-5 after:w-5 after:transition-all"></div>
          </label>
        </li>
        <li>Pay Yearly</li>
      </ul>
      <h2 className="font-normal text-sm flex flex-col justify-center items-center lg:hidden">
        Completely synergize resource taxing relationships via premier niche
        markets. Professionally cultivate customer service.
      </h2>
      <div className="py-4 flex gap-3 lg:hidden">
        <label className="inline-flex items-center cursor-pointer">
          <input type="checkbox" value="" className="sr-only peer" />
          <div className="relative w-11 h-6 bg-[#121212] peer-focus:outline-none peer-focus:ring-4 rounded-full peer peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:start-[2px] after:bg-white after:rounded-full after:h-5 after:w-5 after:transition-all"></div>
        </label>
        <h1 className="text-base font-semibold">Switch to yearly</h1>
      </div>
    </div>
  );
}
