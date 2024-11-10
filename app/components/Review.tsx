import Image from "next/image";
import ReviewImage from "@/public/pictures/image5.png";

export default function Review() {
  return (
    <div className="shadow-md flex mx-auto rounded-3xl max-w-[1200px]">
      <div className="p-4 md:p-12 lg:p-16 max-w-[850px]">
        <h1 className="text-left font-bold text-xl mb-4">Testimonials</h1>
        <h2 className="font-bold text-2xl rounded-3xl">
          “With Prooficient, everyone in my team works towards the same goal.
          This enabled our teams to ship new ideas and feel more capable.”
        </h2>
        <div className="flex items-center gap-4 my-4">
          <Image src={ReviewImage} alt="" className="rounded-full w-20"></Image>
          <div>
            <h1 className="text-xl font-bold">Mike Portnoy</h1>
            <h1>Head of Design — Nike</h1>
          </div>
        </div>
      </div>
    </div>
  );
}
