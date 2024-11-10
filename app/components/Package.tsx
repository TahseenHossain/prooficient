import { FaCheck } from "react-icons/fa6";

export default function Package() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 justify-center mx-auto px-10">
      <div className="rounded-3xl p-10 shadow-md mt-6 w-full max-w-sm h-[500px] mx-auto">
        <h1 className="font-700 text-[22px] text-[#121212]">Book </h1>
        <p className="text-[#3E3E59] text-base font-normal">Pay as you go</p>
        <h1 className="text-[#121212] text-5xl font-bold mt-4 mb-2">
          BDT 1999
        </h1>
        <h2 className="text-base font-normal">Per book (up to 500 pages)</h2>
        <div className="text-base font-normal">
          <p className="flex gap-1 items-center">
            <FaCheck className="text-[#20C997]" />
            Unlimited downloads
          </p>
          <p className="flex gap-1 items-center">
            <FaCheck className="text-[#20C997]" />
            Cloud storage
          </p>
          <p className="flex gap-1 items-center">
            <FaCheck className="text-[#20C997]" />
            Free templates
          </p>
          <p className="flex gap-1 items-center">
            <FaCheck className="text-[#20C997]" />
            5GB bandwidth
          </p>
          <p className="flex gap-1 items-center">
            <FaCheck className="text-[#20C997]" />
            10 downloads
          </p>
          <div className="flex justify-center">
            <button className="text-[#FFFFFF] text-2xl font-bold bg-[#121212] w-80 lg:w-5/6 h-16 rounded-xl mt-20 text-center">
              Get started
            </button>
          </div>
        </div>
      </div>
      <div className="rounded-3xl p-10 shadow-md mt-6 w-full max-w-sm h-[500px] mx-auto">
        <h1 className="font-700 text-[22px] text-[#121212]">Article </h1>
        <p className="text-[#3E3E59] text-base font-normal">Pay as you go</p>
        <h1 className="text-[#121212] text-5xl font-bold mt-4 mb-2">BDT 20</h1>
        <h2 className="text-base font-normal">Per article (up to 500 pages)</h2>
        <div className="text-base font-normal">
          <p className="flex gap-1 items-start">
            <FaCheck className="text-[#20C997]" />
            Minimum BDT 60,000 per month
          </p>
          <p className="flex gap-1 items-center">
            <FaCheck className="text-[#20C997]" />
            Cloud storage
          </p>
          <p className="flex gap-1 items-center">
            <FaCheck className="text-[#20C997]" />
            Free templates
          </p>
          <p className="flex gap-1 items-center">
            <FaCheck className="text-[#20C997]" />
            5GB bandwidth
          </p>
          <p className="flex gap-1 items-center">
            <FaCheck className="text-[#20C997]" />
            10 downloads
          </p>
          <div className="flex justify-center">
            <button className="text-[#FFFFFF] text-2xl font-bold bg-[#121212] w-80 lg:w-5/6 h-16 rounded-xl mt-20 text-center">
              Get started
            </button>
          </div>
        </div>
      </div>
      <div className="rounded-3xl p-10 shadow-md mt-6 w-full max-w-sm h-[500px] mx-auto">
        <h1 className="font-700 text-[22px] text-[#121212]">Custom plan </h1>
        <p className="text-[#3E3E59] text-base font-normal">Enterprise only</p>
        <h1 className="text-[#121212] text-5xl font-bold mt-4 mb-2">Custom</h1>
        <h2 className="text-base font-normal">Contact for pricing</h2>
        <div className="text-base font-normal">
          <p className="flex gap-1 items-center">
            <FaCheck className="text-[#20C997]" />
            Unlimited downloads
          </p>
          <p className="flex gap-1 items-center">
            <FaCheck className="text-[#20C997]" />
            Cloud storage
          </p>
          <p className="flex gap-1 items-center">
            <FaCheck className="text-[#20C997]" />
            Free templates
          </p>
          <p className="flex gap-1 items-center">
            <FaCheck className="text-[#20C997]" />
            5GB bandwidth
          </p>
          <p className="flex gap-1 items-center">
            <FaCheck className="text-[#20C997]" />
            10 downloads
          </p>
          <div className="flex justify-center">
            <button className="text-[#FFFFFF] text-2xl font-bold bg-[#121212] w-80 lg:w-5/6 h-16 rounded-xl mt-20 text-center">
              Get started
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
