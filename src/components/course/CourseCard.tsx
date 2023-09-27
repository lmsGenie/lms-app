import Image from "next/image";
import mentorImage from "@/assets/mentorImage.png";

import { ICourseCard } from "@/types/course";
import {
  HoverCard,
  HoverCardContent,
  HoverCardTrigger,
} from "@/components/ui/hover-card";

import Icon from "../icon/Icon";
import { Button } from "../ui/button";

interface IProps {
  data: ICourseCard;
}

const CourseCard = ({ data }: IProps) => {
  return (
    <HoverCard>
      <HoverCardTrigger>
        <div className="w-64 bg-white shadow-sm transition-all duration-200 ease-in-out hover:-translate-y-1 hover:shadow-md dark:bg-black dark:bg-gray-800 dark:shadow-gray-100">
          <Image
            className="w-full object-cover"
            src={data?.thumbnail!}
            alt="course card image"
            width={200}
            height={200}
          />
          {/* card header */}
          <div className="mt-2 flex items-center justify-between px-[14px]">
            <p className="bg-primary-100 px-[10px] py-[4px] text-[10px] font-semibold text-success-700">
              {data?.category?.[0]}
            </p>
            {/* for price */}
            <p className="font-bold text-primary-500">
              {data?.discountedPrice?.price
                ? data?.discountedPrice?.currencySymbol +
                  data?.discountedPrice?.price
                : data?.discountedPrice?.currencySymbol! +
                  data?.discountedPrice?.price}
            </p>
          </div>

          {/* card body */}
          <h3 className="my-2 line-clamp-2 px-[14px] text-sm font-medium leading-tight">
            {data?.title}
          </h3>

          {/* card footer */}
          <div className="flex items-center justify-between border-t-[1px] border-gray-100 px-[14px] py-2">
            {/* card footer left */}
            <div className="flex items-center gap-1">
              <Icon id="Star" className="w-4 fill-primary-500 stroke-none" />
              <p className="text-sm font-medium text-gray-700">
                {data?.averageRating}
              </p>
            </div>

            {/* card footer right */}
            <p className="flex items-center gap-1 text-sm font-medium text-gray-700">
              {data?.totalEnrollments}
              <span className="text-sm font-normal text-gray-500">
                students
              </span>
            </p>
          </div>
        </div>
      </HoverCardTrigger>

      {/* content on hover */}
      <HoverCardContent
        className="w-80 p-0 dark:bg-gray-800 2xl:w-[26.5rem]"
        side="right"
      >
        <div className="space-y-2 py-2">
          {/* header */}
          <div className="space-y-3 px-2 2xl:space-y-5">
            {/* hover card header */}
            <div className="space-y-2">
              <p className="w-fit bg-secondary-100 px-[6px] py-1 text-[10px] font-medium text-secondary-700">
                {data?.category}
              </p>
              <h1 className="line-clamp-3 text-sm font-medium text-gray-900 dark:text-gray-50 2xl:text-lg">
                {data?.title}
              </h1>
            </div>

            {/* for course review and mentor details */}
            <div className="flex items-center justify-between px-2">
              {/* for mentor details */}
              <div className="flex items-center gap-2">
                <Image
                  src={mentorImage}
                  alt="mentor image"
                  className="h-12 w-12 rounded-full"
                />
                <div className="text-sm font-normal">
                  <p className="text-gray-500 dark:text-gray-100">Course by</p>
                  <h4 className="text-gray-900 dark:text-gray-50">Harvi</h4>
                </div>
              </div>

              {/* for course rating */}
              <div className="flex items-center gap-1">
                <Icon id="Star" className="w-5 fill-primary-500 stroke-none" />
                <p className="flex items-center font-medium text-gray-900 dark:text-gray-100">
                  {data?.averageRating}{" "}
                  <span className="text-sm font-normal text-gray-600 dark:text-gray-50">
                    ({data?.totalEnrollments})
                  </span>
                </p>
              </div>
            </div>
          </div>

          {/* more course details */}
          <div className="flex items-center justify-between px-2 text-sm font-semibold 2xl:px-5">
            {/* course enrollment */}
            <div className="flex items-center gap-1">
              <Icon id="User" className="w-4 stroke-secondary-500 2xl:w-5" />
              <p className="text-xs text-gray-700 dark:text-gray-100 2xl:text-sm">
                {data?.totalEnrollments}K <span>students</span>
              </p>
            </div>

            {/* course level */}
            <div className="flex items-center gap-1">
              <Icon id="ChartBar" className="w-4 stroke-primary-500 2xl:w-5" />
              <p className="text-xs text-gray-700 dark:text-gray-100 2xl:text-sm">
                Beginner
              </p>
            </div>

            {/* cour content length */}
            <div className="flex items-center gap-1">
              <Icon id="Clock" className="w-4 stroke-success-500 2xl:w-5" />
              <p className="text-xs text-gray-700 dark:text-gray-100 2xl:text-sm">
                6 hour
              </p>
            </div>
          </div>

          {/* price and wishlist option */}
          <div className="flex items-center justify-between p-2">
            {/* for pricing */}
            <div className=" flex w-fit items-center gap-1">
              {data?.discountedPrice?.price ? (
                <p className="flex items-center gap-1 text-lg text-gray-900 dark:text-gray-100 2xl:text-2xl">
                  {data?.discountedPrice?.currencySymbol +
                    data?.discountedPrice?.price}
                  <s className="text-sm text-gray-500 dark:text-gray-50 2xl:text-base">
                    {data?.listPrice &&
                      data?.listPrice?.currencySymbol + data?.listPrice?.price}
                  </s>
                  <p className="ml-2 w-fit bg-primary-100 px-3 py-2 text-xs font-medium text-primary-500 2xl:text-sm">
                    {data?.discountPercentage}% OFF
                  </p>
                </p>
              ) : (
                data?.discountedPrice?.currencySymbol! +
                data?.discountedPrice?.price
              )}
            </div>

            {/* for wishlist */}
            <Button
              variant={"primarylight"}
              size={"sm"}
              className="px-3 2xl:p-3"
            >
              <Icon id="Heart" className="w-4 stroke-primary-500 2xl:w-6" />
            </Button>
          </div>

          {/* course list description */}
          <div className="border-b border-t border-gray-100 px-2 py-2 2xl:py-4">
            <h5 className="mb-2 text-xs font-semibold">WHAT YOU WILL LEARN</h5>
            <ul className="space-y-1">
              <li className="flex items-start gap-2">
                <Icon id="Check" className="w-10 stroke-success-500 2xl:w-12" />
                <p className="text-xs text-gray-600 dark:text-gray-50 2xl:text-sm">
                  Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                  Reprehenderit veniam esse cum vitae qui veritatis ab neque
                  soluta, fuga enim?
                </p>
              </li>
              <li className="flex items-start gap-2">
                <Icon id="Check" className="w-10 stroke-success-500 2xl:w-12" />
                <p className="text-xs text-gray-600 dark:text-gray-100 2xl:text-sm">
                  Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                  Reprehenderit veniam esse cum vitae qui veritatis ab neque
                  soluta, fuga enim?
                </p>
              </li>
            </ul>
          </div>

          {/* buttons */}
          <div className="flex w-full flex-col gap-2 px-2">
            <Button className="space-x-2" size={"sm"}>
              <Icon id="ShoppingCart" className="w-5 2xl:w-6" />
              <p className="text-sm 2xl:text-base">Add to Cart</p>
            </Button>
            <Button variant="primarylight" size={"sm"}>
              <p className="text-sm 2xl:text-base">Course Details</p>
            </Button>
          </div>
        </div>
      </HoverCardContent>
    </HoverCard>
  );
};

export default CourseCard;
