import Image from "next/image";
import Statistic from "@/public/pictures/Statistic.png";
import Link from "next/link";

export default function Analyze() {
  return (
    <div className="relative z-50 bg-white">
      <div className="mx-auto my-12 md:my-20 lg:hidden flex flex-col items-center px-4">
        <div className="my-12">
          <button className="rounded-[100px] border-[#121212] border-2 py-1 px-3 text-sm font-semibold my-6">
            Strategies
          </button>
          <h1 className="font-bold text-2xl">
            Analyze active visitors in realtime
          </h1>
          <p className="text-sm font-normal py-4">
            Podcasting operational — change management inside of workflows to
            establish a framework. Taking seamless key indicators.
          </p>
          <Link href="/">
            <p className="text-lg font-bold flex gap-2">
              See all integrations{" "}
              <svg
                width="24"
                height="25"
                viewBox="0 0 24 25"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M5 12.5H19"
                  stroke="#212121"
                  stroke-width="1.5"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
                <path
                  d="M15 16.5L19 12.5"
                  stroke="#212121"
                  stroke-width="1.5"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
                <path
                  d="M15 8.5L19 12.5"
                  stroke="#212121"
                  stroke-width="1.5"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </svg>
            </p>
          </Link>
        </div>
        <Image src={Statistic} alt="" className="w-[600px] h-[379px]"></Image>
      </div>
    </div>
  );
}
