import { SlSocialFacebook } from "react-icons/sl";
import { LuTwitter } from "react-icons/lu";
import { SlSocialYoutube } from "react-icons/sl";
import { CiInstagram } from "react-icons/ci";
import Link from "next/link";

export default function Footer() {
  return (
    <div>
      <footer className="mx-auto lg:my-16 p-4">
        <div>
          <div className="flex flex-col lg:flex-row">
            <div className="lg:mx-20">
              <h1 className="font-bold text-3xl">Get exclusive content</h1>
              <p className="font-normal text-lg py-2">
                Subscribe to Beyond the Canvas and get the latest design news,
                articles, resources and inspiration.
              </p>
            </div>
            <div className="lg:mx-20">
              <div className="flex flex-col lg:flex-row items-center gap-3 mb-2">
                <input
                  type="text"
                  placeholder="Your email"
                  className="w-96 h-14 boundary-[#C4C4C4] text-[#C4C4C4] p-2 rounded-md border-2"
                />
                <button className="bg-[#212121] text-white py-2 px-3 h-14 w-96 lg:w-36 rounded-md text-base font-bold flex items-center justify-center">
                  Sign up
                  <svg
                    width="20"
                    height="20"
                    viewBox="0 0 20 20"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M4.16699 10.0007H15.8337"
                      stroke="white"
                      stroke-width="1.25"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                    <path
                      d="M12.5 13.3333L15.8333 10"
                      stroke="white"
                      stroke-width="1.25"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                    <path
                      d="M12.5 6.66602L15.8333 9.99935"
                      stroke="white"
                      stroke-width="1.25"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                  </svg>
                </button>
              </div>
              <div className="flex gap-2 justify-center lg:justify-start p-4">
                <input type="radio" name="" id="" />
                <h1 className="font-light text-sm">
                  I agree to receive marketing emails from prooficient.
                </h1>
              </div>
            </div>
          </div>
        </div>
      </footer>
      <footer className="mx-6 lg:mx-20 lg:my-16">
        <div className="flex justify-start lg:justify-center py-16 gap-6 h-7">
          <svg
            width="150"
            height="29"
            viewBox="0 0 150 29"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="M63.0879 8.5216C62.0959 8.5216 61.3271 7.7528 61.3271 6.7608C61.3271 5.744 62.0959 5 63.0879 5C64.1047 5 64.8736 5.744 64.8736 6.7608C64.8736 7.7528 64.1047 8.5216 63.0879 8.5216ZM61.6992 23.3024V10.6544H64.4767V23.3024H61.6992ZM83.2137 8.5216C82.2217 8.5216 81.4529 7.7528 81.4529 6.7608C81.4529 5.744 82.2217 5 83.2137 5C84.2305 5 84.9993 5.744 84.9993 6.7608C84.9993 7.7528 84.2305 8.5216 83.2137 8.5216ZM81.8249 23.3024V10.6544H84.6025V23.3024H81.8249ZM125.016 13.184H121.445V19.1608C121.445 20.3512 122.114 20.9216 123.28 20.9216C123.974 20.9216 124.52 20.7232 125.016 20.4752V23.0792C124.321 23.4264 123.627 23.6 122.709 23.6C119.981 23.6 118.667 22.0624 118.667 19.6072V13.184H116.534V10.6544H118.667V7.3808H121.445V10.6544H125.016V13.184ZM109.914 10.3568C112.915 10.3568 114.924 12.3408 114.924 15.3416V23.3024H112.146V16.2592C112.146 14.3248 110.906 13.0352 108.997 13.0352C106.988 13.0352 105.649 14.3496 105.649 16.3088V23.3024H102.871V10.6544H105.649V12.2912C106.665 11.0264 108.129 10.3568 109.914 10.3568ZM100.378 18.0944C100.428 17.7472 100.453 17.3504 100.453 17.0032C100.453 13.184 97.6006 10.3568 93.8062 10.3568C90.0118 10.3568 87.135 13.184 87.135 16.9288C87.135 20.7232 90.111 23.6 94.1286 23.6C96.5094 23.6 98.5926 22.5832 99.8822 20.9712L97.9974 19.3592C97.2782 20.3016 95.8646 21.0952 94.203 21.0952C92.1446 21.0952 90.5822 19.9048 90.1358 18.0944H100.378ZM90.111 15.8128C90.5574 14.052 91.971 12.8616 93.7814 12.8616C95.5918 12.8616 97.055 14.0272 97.4766 15.8128H90.111ZM67.0093 16.9784C67.0093 20.748 69.9109 23.6 73.7797 23.6C76.3093 23.6 78.4421 22.36 79.5829 20.4504L77.1773 18.9872C76.5077 20.1528 75.2677 20.9216 73.7797 20.9216C71.5477 20.9216 69.8613 19.2104 69.8613 16.9784C69.8613 14.7464 71.5477 13.0352 73.7797 13.0352C75.2677 13.0352 76.5077 13.804 77.1773 14.9696L79.5829 13.5064C78.4421 11.5968 76.3093 10.3568 73.7797 10.3568C69.9109 10.3568 67.0093 13.2088 67.0093 16.9784ZM55.9808 9.4392C55.9808 8.2488 56.6504 7.7032 57.8408 7.7032C58.5104 7.7032 59.0312 7.852 59.5272 8.1248V5.6696C58.8328 5.3224 58.1632 5.1488 57.2456 5.1488C54.5176 5.1488 53.2032 6.736 53.2032 9.2656V10.6544H51.0704V13.184H53.2032V23.3024H55.9808V13.184H59.3536V10.6544H55.9808V9.4392ZM21.9734 10.456H22.4446V13.308H21.9734C19.4934 13.308 18.0302 14.8208 18.0302 17.152V23.3024H15.2526V10.6544H18.0302V12.5144C18.9726 11.2248 20.3118 10.456 21.9734 10.456ZM12.9952 11.7704C12.9952 8.5712 10.5152 6.1904 7.2664 6.1904H0V23.3024H2.9512V17.3256H7.2664C10.5152 17.3256 12.9952 14.9448 12.9952 11.7704ZM9.9696 11.7704C9.9696 13.3576 8.7792 14.548 7.2168 14.548H2.9512V8.968H7.2168C8.7792 8.968 9.9696 10.1584 9.9696 11.7704ZM30.0704 21.3024C32.2796 21.3024 34.0704 19.5115 34.0704 17.3024C34.0704 15.0933 32.2796 13.3024 30.0704 13.3024C27.8613 13.3024 26.0704 15.0933 26.0704 17.3024C26.0704 19.5115 27.8613 21.3024 30.0704 21.3024ZM36.5704 19.9055C35.5375 22.4824 33.0165 24.3024 30.0704 24.3024C26.2044 24.3024 23.0704 21.1684 23.0704 17.3024C23.0704 13.4364 26.2044 10.3024 30.0704 10.3024C33.0165 10.3024 35.5375 12.1224 36.5704 14.6993C37.6034 12.1224 40.1244 10.3024 43.0704 10.3024C46.9364 10.3024 50.0704 13.4364 50.0704 17.3024C50.0704 21.1684 46.9364 24.3024 43.0704 24.3024C40.1244 24.3024 37.6034 22.4824 36.5704 19.9055ZM47.0704 17.3024C47.0704 19.5115 45.2796 21.3024 43.0704 21.3024C40.8613 21.3024 39.0704 19.5115 39.0704 17.3024C39.0704 15.0933 40.8613 13.3024 43.0704 13.3024C45.2796 13.3024 47.0704 15.0933 47.0704 17.3024Z"
              fill="#121212"
            />
          </svg>
        </div>
        <div>
          <ul className="flex flex-col lg:flex-row gap-4 lg:gap-10 text-base font-bold justify-start lg:justify-center h-7">
            <li className="pb-1 pt-1.5 border-[#EAEAEA] border-b-[1px] lg:border-none">
              <Link href="/">About</Link>
            </li>
            <li className="pb-1 pt-1.5 border-[#EAEAEA] border-b-[1px] lg:border-none">
              <Link href="/">Account</Link>
            </li>
            <li className="pb-1 pt-1.5 border-[#EAEAEA] border-b-[1px] lg:border-none">
              <Link href="/">Support</Link>
            </li>
            <li className="pb-1 pt-1.5 border-[#EAEAEA] border-b-[1px] lg:border-none">
              <Link href="/">Privacy</Link>
            </li>
          </ul>
        </div>
        <div className="hidden lg:flex justify-center gap-10 mt-16">
          <Link href="/">
            <SlSocialFacebook />
          </Link>
          <Link href="/">
            <LuTwitter />
          </Link>
          <Link href="/">
            <SlSocialYoutube />
          </Link>
          <Link href="/">
            <CiInstagram />
          </Link>
        </div>
        <div className="text-center my-5 flex justify-center text-xs font-normal">
          © 2024 Prooficinet
        </div>
      </footer>
    </div>
  );
}
