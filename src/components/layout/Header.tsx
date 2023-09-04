"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { categories } from "@/sampledata";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
} from "@/components/ui/navigation-menu";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTrigger,
} from "@/components/ui/sheet";

import Icon from "../icon/Icon";
import { ModeToggle } from "../toggle/ModeToggle";
import { Separator } from "../ui/separator";

const Header = () => {
  /* Get the current route */
  const currentRoute = usePathname();

  return (
    <header className="sticky top-0">
      {/* header top section */}
      <div className="hidden h-16 items-center justify-between bg-gray-900 px-4 text-gray-500 md:px-6 lg:flex lg:px-8">
        {/* nav links */}
        <NavigationMenu>
          <NavigationMenuList className="gap-6">
            <NavigationMenuItem
              className={`flex h-16 w-20 items-center justify-center border-t-2 border-gray-900 bg-gray-900 transition-colors ease-in-out hover:border-t-2 hover:border-primary-500 hover:text-white ${
                currentRoute === "/" ? "border-t-2 border-primary-500" : ""
              }`}
            >
              <Link href="/" legacyBehavior passHref>
                <NavigationMenuLink>Home</NavigationMenuLink>
              </Link>
            </NavigationMenuItem>
            <NavigationMenuItem
              className={`flex h-16 w-20 items-center justify-center border-t-2 border-gray-900 bg-gray-900 transition-colors ease-in-out hover:border-t-2 hover:border-primary-500 hover:text-white ${
                currentRoute === "/courses"
                  ? "border-t-2 border-primary-500"
                  : ""
              }`}
            >
              <Link href="/courses" legacyBehavior passHref>
                <NavigationMenuLink>Courses</NavigationMenuLink>
              </Link>
            </NavigationMenuItem>
            <NavigationMenuItem
              className={`flex h-16 w-20 items-center justify-center border-t-2 border-gray-900 bg-gray-900 transition-colors ease-in-out hover:border-t-2 hover:border-primary-500 hover:text-white ${
                currentRoute === "/about" ? "border-t-2 border-primary-500" : ""
              }`}
            >
              <Link href="/about" legacyBehavior passHref>
                <NavigationMenuLink>About</NavigationMenuLink>
              </Link>
            </NavigationMenuItem>
            <NavigationMenuItem
              className={`flex h-16 w-20 items-center justify-center border-t-2 border-gray-900 bg-gray-900 transition-colors ease-in-out hover:border-t-2 hover:border-primary-500 hover:text-white ${
                currentRoute === "/contact"
                  ? "border-t-2 border-primary-500"
                  : ""
              }`}
            >
              <Link href="/contact" legacyBehavior passHref>
                <NavigationMenuLink>Contact</NavigationMenuLink>
              </Link>
            </NavigationMenuItem>
            <NavigationMenuItem
              className={`flex h-16 w-44 items-center justify-center border-t-2 border-gray-900 bg-gray-900 transition-colors ease-in-out hover:border-t-2 hover:border-primary-500 hover:text-white ${
                currentRoute === "/instructor"
                  ? "border-t-2 border-primary-500"
                  : ""
              }`}
            >
              <Link href="/instructor" legacyBehavior passHref>
                <NavigationMenuLink>Become an Instructor</NavigationMenuLink>
              </Link>
            </NavigationMenuItem>
          </NavigationMenuList>
        </NavigationMenu>

        {/* toggle currency, language, theme */}
        <div className="flex gap-2">
          <Select>
            <SelectTrigger className="border-none bg-gray-900">
              <SelectValue placeholder="USD" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="usd">USD</SelectItem>
              <SelectItem value="rs">Rupees</SelectItem>
            </SelectContent>
          </Select>

          <Select>
            <SelectTrigger className="border-none bg-gray-900">
              <SelectValue placeholder="English" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="english">English</SelectItem>
              <SelectItem value="hindi">Hindi</SelectItem>
            </SelectContent>
          </Select>
          <div>
            <ModeToggle></ModeToggle>
          </div>
        </div>
      </div>

      {/* header bottom section*/}
      <div className="flex h-20 items-center justify-between gap-4 bg-white px-3 shadow-sm dark:bg-gray-900 dark:shadow-gray-800 md:px-6 lg:px-8">
        {/* logo, browse, search */}
        <div className="flex items-center  gap-1 lg:gap-4">
          {/* logo */}
          <div className="flex items-center gap-2">
            <Icon
              id="EtutorLogo"
              className="h-8 w-8 stroke-primary dark:stroke-primary-500"
            />
            <span className="hidden text-2xl font-semibold text-gray-900 dark:text-white lg:inline">
              E-tutor
            </span>
          </div>

          {/* browse */}
          <div className="hidden lg:block">
            <Select>
              <SelectTrigger className="w-44">
                <SelectValue placeholder="Browse" />
              </SelectTrigger>
              <SelectContent>
                {categories.map((item, index) => (
                  <SelectItem key={index} value={item.name}>
                    {item.name}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>

          {/* search */}
          <div>
            <Input
              className="w-full lg:w-96"
              type="text"
              placeholder="What do you want learn..."
            />
          </div>
        </div>

        {/* alert, like, cart */}
        <div className="hidden items-center gap-4 lg:flex ">
          <Icon id="Bell" />
          <Icon id="Heart" />
          <Icon id="ShoppingCart" />
          <Button variant="primarylight">Create Account</Button>
          <Button>Sign In</Button>
        </div>

        {/* mobile menu */}
        <div className="lg:hidden">
          <Sheet>
            <SheetTrigger className="flex items-center">
              <Icon id="Menu" className="h-8 w-8" />
            </SheetTrigger>
            <SheetContent className="overflow-scroll">
              {/* singin */}
              <SheetHeader>
                {/* create account */}
                <div>
                  <Button variant="primarylight">Create Account</Button>
                </div>
              </SheetHeader>
              <Separator className="my-4" />

              <div>
                {/* nav links */}
                <ul>
                  <li className="my-2">
                    <Link href="/" legacyBehavior passHref>
                      Home
                    </Link>
                  </li>
                  <li className="my-2">
                    <Link href="/courses" legacyBehavior passHref>
                      Courses
                    </Link>
                  </li>
                  <li className="my-2">
                    <Link href="/about" legacyBehavior passHref>
                      About
                    </Link>
                  </li>
                  <li className="my-2">
                    <Link href="/contact" legacyBehavior passHref>
                      Contact
                    </Link>
                  </li>
                  <li className="my-2">
                    <Link href="/instructor" legacyBehavior passHref>
                      Become an Instructor
                    </Link>
                  </li>
                </ul>
                <Separator className="my-4" />

                {/* browse link */}
                <div>
                  <div className="font-semibold">Browse</div>
                  <ul className="pl-4">
                    {categories.map((item, index) => (
                      <li className="my-2" key={index}>
                        <Link href={item.path}>{item.name}</Link>
                      </li>
                    ))}
                  </ul>
                </div>
                <Separator className="my-4" />

                {/* toggle language, currency and theme */}
                <div>
                  <div className="my-2 w-24">
                    <Select>
                      <SelectTrigger>
                        <SelectValue placeholder="USD" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="usd">USD</SelectItem>
                        <SelectItem value="rs">Rupees</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>

                  <div className="my-2 w-24">
                    <Select>
                      <SelectTrigger>
                        <SelectValue placeholder="English" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="english">English</SelectItem>
                        <SelectItem value="hindi">Hindi</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                </div>
                <Separator className="my-4" />

                <div className="flex items-center justify-between">
                  <Button>Sign In</Button>
                  <ModeToggle></ModeToggle>
                </div>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
};

export default Header;
