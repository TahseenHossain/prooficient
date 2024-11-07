import Image from "next/image";
import People from "@/public/pictures/People.png";
import Link from "next/link";

export default function FlawlessPunctuation() {
  return (
    <div className="relative z-50 bg-white">
      <div className="mx-auto my-12 md:my-20 p-4 lg:my-40 hidden lg:flex flex-col lg:flex-row justify-between w-5/6 items-center">
        <Image src={People} alt="" className="w-[600px] h-[379px]"></Image>
        <div className="my-12 lg:ml-24">
          <button className="rounded-[100px] border-[#121212] border-2 py-1 px-3 text-sm font-semibold my-6">
            Flawless Punctuation
          </button>
          <h1 className="font-bold text-5xl">Flawless Punctuation</h1>
          <p className="text-xl font-normal py-4">
            Ensure perfect punctuation across your content, making it polished,
            professional, and easy to read.
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
      </div>
    </div>
  );
}
