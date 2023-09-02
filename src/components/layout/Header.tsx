import Image from "next/image";
import Link from "next/link";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

const Header = () => {
  return (
    <header className="sticky top-0">
      <nav className="flex items-center justify-between bg-gray-900 px-5 text-gray-500 md:px-8 lg:px-10">
        <ul className="flex  gap-4  md:gap-6 lg:gap-8 ">
          <li>
            <Link
              className="flex h-16 w-20 items-center justify-center border-t-2 border-gray-900 transition-colors ease-in-out hover:border-t-2 hover:border-primary-500 hover:text-white active:border-primary-500"
              href="/"
            >
              Home
            </Link>
          </li>
          <li>
            <Link
              className="flex h-16 w-20 items-center justify-center border-t-2 border-gray-900  transition-colors ease-in-out  hover:border-t-2 hover:border-primary-500 hover:text-white active:border-primary-500"
              href="/"
            >
              Courses
            </Link>
          </li>
          <li>
            <Link
              className="flex h-16 w-20 items-center justify-center border-t-2 border-gray-900  transition-colors ease-in-out  hover:border-t-2 hover:border-primary-500 hover:text-white active:border-primary-500"
              href="/"
            >
              About
            </Link>
          </li>
          <li>
            <Link
              className="flex h-16 w-20 items-center justify-center border-t-2 border-gray-900  transition-colors ease-in-out  hover:border-t-2 hover:border-primary-500 hover:text-white active:border-primary-500"
              href="/"
            >
              Contact
            </Link>
          </li>
          <li>
            <Link
              className="flex h-16 w-48 items-center justify-center border-t-2 border-gray-900  transition-colors ease-in-out  hover:border-t-2 hover:border-primary-500 hover:text-white active:border-primary-500"
              href="/"
            >
              Become an Instructor
            </Link>
          </li>
        </ul>
        <div className="flex gap-2">
          <Select>
            <SelectTrigger className="border-none bg-slate-900">
              <SelectValue placeholder="USD" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="usd">USD</SelectItem>
              <SelectItem value="rs">Rupees</SelectItem>
            </SelectContent>
          </Select>

          <Select>
            <SelectTrigger className="border-none bg-slate-900">
              <SelectValue placeholder="English" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="english">English</SelectItem>
              <SelectItem value="hindi">Hindi</SelectItem>
            </SelectContent>
          </Select>
        </div>
      </nav>
      <div className="flex h-16 items-center justify-between bg-white px-5 md:px-8 lg:px-10">
        <div className="flex gap-4">
          <div>
            <Image
              src="/lmsg.png"
              alt="lmsg logo"
              width={120}
              height={80}
            ></Image>
          </div>

          <Select>
            <SelectTrigger className="w-44">
              <SelectValue placeholder="Browse" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="browse">Browse</SelectItem>
            </SelectContent>
          </Select>

          <Input
            className="w-72"
            type="text"
            placeholder="What do you want learn..."
          />
        </div>
        <div className="flex gap-4">
          <Button>Create Account</Button>
          <Button>Sign In</Button>
        </div>
      </div>
    </header>
  );
};

export default Header;
