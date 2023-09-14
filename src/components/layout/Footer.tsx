import Link from "next/link";

import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

import Icon from "../icon/Icon";

function Footer() {
  return (
    <footer className="border-t border-gray-800 bg-gray-900 text-gray-500">
      {/* important links section */}
      <div className="flex flex-wrap gap-x-4 gap-y-5 px-10 py-12 md:px-16 md:py-16  lg:flex-nowrap lg:px-20 lg:py-20">
        {/* logo branding */}
        <div className="w-full sm:w-72">
          <div className="flex items-center gap-2">
            <Icon
              id="EtutorLogo"
              className="h-8 w-8 stroke-primary dark:stroke-primary-500"
            />
            <span className="text-2xl font-semibold text-white">E-tutor</span>
          </div>
          <p className="lg:text-md mt-4 text-sm">
            liquam rhoncus ligula est, non pulvinar elit convallis nec. Donec
            mattis odio at.
          </p>
          <div className="mt-4 flex gap-2">
            <Link
              href="/"
              className="flex h-10 w-10 items-center justify-center bg-gray-800 hover:bg-primary-500 hover:shadow-md hover:shadow-primary-700"
            >
              <Icon
                id="FacebookLogo"
                className="h-6 w-6 fill-white stroke-none"
              />
            </Link>

            <Link
              href="/"
              className="flex h-10 w-10 items-center justify-center bg-gray-800 hover:bg-primary-500 hover:shadow-md hover:shadow-primary-700"
            >
              <Icon
                id="InstagramLogo"
                className="h-6 w-6 fill-white stroke-none"
              />
            </Link>

            <Link
              href="/"
              className="flex h-10 w-10 items-center justify-center bg-gray-800 hover:bg-primary-500 hover:shadow-md hover:shadow-primary-700"
            >
              <Icon
                id="LinkedinLogo"
                className="h-6 w-6 fill-white stroke-none"
              />
            </Link>

            <Link
              href="/"
              className="flex h-10 w-10 items-center justify-center bg-gray-800 hover:bg-primary-500 hover:shadow-md hover:shadow-primary-700"
            >
              <Icon
                id="TwitterLogo"
                className="h-6 w-6 fill-white stroke-none"
              />
            </Link>

            <Link
              href="/"
              className="flex h-10 w-10 items-center justify-center bg-gray-800 hover:bg-primary-500 hover:shadow-md hover:shadow-primary-700"
            >
              <Icon
                id="YoutubeLogo"
                className="h-6 w-6 fill-white stroke-none"
              />
            </Link>
          </div>
        </div>

        {/* top 4 categories */}
        <ul className="lg:text-md w-full text-sm sm:w-56">
          <li className="text-md mb-3 text-white lg:mb-4 lg:text-lg">
            TOP 4 CATEGORY
          </li>
          <li className="group my-1 w-fit border-b-2 border-gray-900 pb-1 transition-all ease-in-out hover:border-b-2 hover:border-primary-500 hover:text-white lg:my-2">
            <Link
              href="/courses/development"
              className="flex items-center gap-3"
            >
              Development
              <Icon
                id="ArrowRight"
                className="h-5 w-5 opacity-0 transition-all ease-in-out group-hover:opacity-100"
              />
            </Link>
          </li>
          <li className="group my-1 w-fit border-b-2 border-gray-900 pb-1 transition-all ease-in-out hover:border-b-2 hover:border-primary-500 hover:text-white lg:my-2">
            <Link
              href="/courses/finance-accounting"
              className="flex items-center gap-3"
            >
              Finance & Accounting
              <Icon
                id="ArrowRight"
                className="h-5 w-5 opacity-0 transition-all ease-in-out group-hover:opacity-100"
              />
            </Link>
          </li>
          <li className="group my-1 w-fit border-b-2 border-gray-900 pb-1 transition-all ease-in-out hover:border-b-2 hover:border-primary-500 hover:text-white lg:my-2">
            <Link href="/courses/design" className="flex items-center gap-3">
              Design
              <Icon
                id="ArrowRight"
                className="h-5 w-5 opacity-0 transition-all ease-in-out group-hover:opacity-100"
              />
            </Link>
          </li>
          <li className="group my-1 w-fit border-b-2 border-gray-900 pb-1 transition-all ease-in-out hover:border-b-2 hover:border-primary-500 hover:text-white lg:my-2">
            <Link href="/courses/business" className="flex items-center gap-3">
              Business
              <Icon
                id="ArrowRight"
                className="h-5 w-5 opacity-0 transition-all ease-in-out group-hover:opacity-100"
              />
            </Link>
          </li>
        </ul>

        {/* quick links */}
        <ul className="lg:text-md w-full text-sm sm:w-56">
          <li className="text-md mb-3 text-white lg:mb-4 lg:text-lg">
            QUICK LINKS
          </li>
          <li className="group my-1 w-fit border-b-2 border-gray-900 pb-1 transition-all ease-in-out hover:border-b-2 hover:border-primary-500 hover:text-white lg:my-2">
            <Link href="/about" className="flex items-center gap-3">
              About
              <Icon
                id="ArrowRight"
                className="h-5 w-5 opacity-0 transition-all ease-in-out group-hover:opacity-100"
              />
            </Link>
          </li>
          <li className="group my-1 w-fit border-b-2 border-gray-900 pb-1 transition-all ease-in-out hover:border-b-2 hover:border-primary-500 hover:text-white lg:my-2">
            <Link href="/becomeinstructor" className="flex items-center gap-3">
              Become Instructor
              <Icon
                id="ArrowRight"
                className="h-5 w-5 opacity-0 transition-all ease-in-out group-hover:opacity-100"
              />
            </Link>
          </li>
          <li className="group my-1 w-fit border-b-2 border-gray-900 pb-1 transition-all ease-in-out hover:border-b-2 hover:border-primary-500 hover:text-white lg:my-2">
            <Link href="/contact" className="flex items-center gap-3">
              Contact
              <Icon
                id="ArrowRight"
                className="h-5 w-5 opacity-0 transition-all ease-in-out group-hover:opacity-100"
              />
            </Link>
          </li>
          <li className="group my-1 w-fit border-b-2 border-gray-900 pb-1 transition-all ease-in-out hover:border-b-2 hover:border-primary-500 hover:text-white lg:my-2">
            <Link href="/career" className="flex items-center gap-3">
              Career
              <Icon
                id="ArrowRight"
                className="h-5 w-5 opacity-0 transition-all ease-in-out group-hover:opacity-100"
              />
            </Link>
          </li>
        </ul>

        {/* support */}
        <ul className="lg:text-md w-full text-sm sm:w-56">
          <li className="text-md mb-3 text-white lg:mb-4 lg:text-lg">
            SUPPORT
          </li>
          <li className="group my-1 w-fit border-b-2 border-gray-900 pb-1 transition-all ease-in-out hover:border-b-2 hover:border-primary-500 hover:text-white lg:my-2">
            <Link href="/help" className="flex items-center gap-3">
              Help Center
              <Icon
                id="ArrowRight"
                className="h-5 w-5 opacity-0 transition-all ease-in-out group-hover:opacity-100"
              />
            </Link>
          </li>
          <li className="group my-1 w-fit border-b-2 border-gray-900 pb-1 transition-all ease-in-out hover:border-b-2 hover:border-primary-500 hover:text-white lg:my-2">
            <Link href="/faqs" className="flex items-center gap-3">
              FAQs
              <Icon
                id="ArrowRight"
                className="h-5 w-5 opacity-0 transition-all ease-in-out group-hover:opacity-100"
              />
            </Link>
          </li>
          <li className="group my-1 w-fit border-b-2 border-gray-900 pb-1 transition-all ease-in-out hover:border-b-2 hover:border-primary-500 hover:text-white lg:my-2">
            <Link href="/terms-conditions" className="flex items-center gap-3">
              Terms & Condition
              <Icon
                id="ArrowRight"
                className="h-5 w-5 opacity-0 transition-all ease-in-out group-hover:opacity-100"
              />
            </Link>
          </li>
          <li className="group my-1 w-fit border-b-2 border-gray-900 pb-1 transition-all ease-in-out hover:border-b-2 hover:border-primary-500 hover:text-white lg:my-2">
            <Link href="/privacy-policy" className="flex items-center gap-3">
              Privacy Policy
              <Icon
                id="ArrowRight"
                className="h-5 w-5 opacity-0 transition-all ease-in-out group-hover:opacity-100"
              />
            </Link>
          </li>
        </ul>

        {/* download our app */}
        <ul className="lg:text-md w-full text-sm sm:w-56">
          <li className="text-md mb-3 text-white lg:mb-4 lg:text-lg">
            DOWNLOAD OUR APP
          </li>
          <li className="grid w-fit grid-cols-[50px_100px] gap-x-2 bg-gray-800/40 p-3">
            <div className="row-start-1 row-end-3 self-center justify-self-center">
              <Icon id="AppleLogo" className="h-9 w-9 fill-white stroke-none" />
            </div>
            <div className="text-xs">Download now</div>
            <div className="text-lg text-white lg:text-xl">App Store</div>
          </li>

          <li className="mt-4 grid w-fit grid-cols-[50px_100px] gap-x-2 bg-gray-800/40 p-3">
            <div className="row-start-1 row-end-3 self-center justify-self-center">
              <Icon id="GooglePlayLogo" className="h-9 w-9" />
            </div>
            <div className="text-xs">Download now</div>
            <div className="text-lg text-white lg:text-xl">Play Store</div>
          </li>
        </ul>
      </div>
      <hr className="border-gray-800" />
      {/* copyright section */}
      <div className="flex flex-wrap items-center justify-between gap-y-2 px-10 py-4 md:px-16 md:py-5 lg:px-20 lg:py-6">
        <p className="lg:text-md text-sm">
          © 2021 - Eduflex. Designed by Templatecookie. All rights reserved
        </p>
        <div className="lg:text-md w-28 border border-gray-200 text-sm">
          <Select>
            <SelectTrigger className="border-none bg-gray-900">
              <SelectValue placeholder="English" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="english">English</SelectItem>
              <SelectItem value="hindi">Hindi</SelectItem>
            </SelectContent>
          </Select>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
