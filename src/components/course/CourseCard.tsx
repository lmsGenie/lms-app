import Image from "next/image";
import mentorImage from "@/assets/mentorImage.png";

import { CourseDataPartial } from "@/types/course";
import {
  HoverCard,
  HoverCardContent,
  HoverCardTrigger,
} from "@/components/ui/hover-card";

import Icon from "../icon/Icon";
import { Button } from "../ui/button";

interface IProps {
  data: CourseDataPartial;
}

const CourseCard = ({ data }: IProps) => {
  return (
    <HoverCard>
      <HoverCardTrigger>
        <div className="w-72 bg-white shadow-sm transition-all duration-200 ease-in-out hover:-translate-y-1 hover:shadow-md dark:bg-black lg:w-80">
          <Image
            className="w-full object-cover"
            src={data?.thumbnail!}
            alt="course card image"
          />
          {/* card header */}
          <div className="mt-2 flex items-center justify-between px-3">
            <p className="bg-success-100 px-2 py-[1px] text-[10px] font-semibold text-success-700">
              {data?.category?.[0]}
            </p>
            {/* for price */}
            <div className=" flex items-center gap-1 text-xs font-bold text-orange-500">
              {/* for currency symbol */}
              {data?.discountedPrice?.price ? (
                <div className="flex items-center gap-1">
                  {data?.discountedPrice?.currencySymbol +
                    data?.discountedPrice?.price}
                  <s className="self-end text-[9px] text-orange-400">
                    {data?.listPrice &&
                      data?.listPrice?.currencySymbol + data?.listPrice?.price}
                  </s>
                  <p>{data?.discountPercentage}% OFF</p>
                </div>
              ) : (
                data?.discountedPrice?.currencySymbol! +
                data?.discountedPrice?.price
              )}
            </div>
          </div>

          {/* card body */}
          <p className="my-2 line-clamp-1 px-3 text-sm font-semibold leading-tight">
            {data?.title}
          </p>

          {/* card footer */}
          <div className="flex items-center justify-between border-t-[1.5px] border-gray-100 px-3 py-2">
            {/* card footer left */}
            <div className="flex items-center gap-1">
              <Icon id="Star" className="w-4 fill-orange-500 stroke-none" />
              <p className="text-sm font-semibold text-gray-700">
                {data?.averageRating}
              </p>
            </div>

            {/* card footer right */}
            <p className="flex items-center gap-1 text-sm font-semibold text-gray-700">
              {data?.totalEnrollments}
              <span className="text-xs font-normal text-gray-500">
                students
              </span>
            </p>
          </div>
        </div>
      </HoverCardTrigger>

      <HoverCardContent className="w-72 p-0 lg:w-80" side="right">
        <div className="space-y-2 py-2">
          <div className="space-y-2 px-2">
            <p className="w-fit bg-success-100 px-1 py-[1px] text-[10px] font-semibold text-success-700">
              {data?.category}
            </p>
            <h1 className="line-clamp-3 text-sm font-bold">{data?.title}</h1>
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
              <div className="text-xs">
                <p className="text-gray-500">Course by</p>
                <h4 className="font-semibold">Harvi</h4>
              </div>
            </div>

            {/* for course rating */}
            <div className="flex items-center gap-1">
              <Icon id="Star" className="w-4 fill-orange-500 stroke-none" />
              <p className="flex items-center text-xs font-bold">
                {data?.averageRating}{" "}
                <span className="font-normal text-gray-500">
                  ({data?.totalEnrollments})
                </span>
              </p>
            </div>
          </div>

          {/* more course details */}
          <div className="flex items-center justify-between px-2 text-sm font-semibold">
            {/* course enrollment */}
            <div className="flex items-center gap-1">
              <Icon id="User" className="w-4 stroke-blue-500" />
              <p>
                {data?.totalEnrollments}K <span>students</span>
              </p>
            </div>

            {/* course level */}
            <div className="flex items-center gap-1">
              <Icon id="ChartBar" className="w-4 stroke-orange-500" />
              <p>Beginner</p>
            </div>

            {/* cour content length */}
            <div className="flex items-center gap-1">
              <Icon id="Clock" className="w-4 stroke-success-500" />
              <p>6 hour</p>
            </div>
          </div>

          {/* price and wishlist option */}
          <div className="flex items-center justify-between  p-2">
            {/* for pricing */}
            <div className=" flex w-fit items-center gap-1">
              {data?.discountedPrice?.price ? (
                <p className="flex items-center gap-1">
                  {data?.discountedPrice?.currencySymbol +
                    data?.discountedPrice?.price}
                  <s className="text-xs text-gray-400">
                    {data?.listPrice &&
                      data?.listPrice?.currencySymbol + data?.listPrice?.price}
                  </s>
                  <p className="ml-2 w-fit bg-orange-100 px-2 py-1 text-xs font-semibold text-orange-500">
                    {data?.discountPercentage}% OFF
                  </p>
                </p>
              ) : (
                data?.discountedPrice?.currencySymbol! +
                data?.discountedPrice?.price
              )}
            </div>

            {/* for wishlist */}
            <Button variant={"primarylight"} className="px-3">
              <Icon id="Heart" className="w-5 stroke-orange-500" />
            </Button>
          </div>

          {/* course list description */}
          <div className="border-b border-t border-gray-200 p-2">
            <h5 className="mb-2 text-xs font-semibold">WHAT YOU WILL LEARN</h5>
            <ul className="space-y-1">
              <li className="flex items-start gap-2">
                <Icon id="Check" className="w-12 stroke-success-500" />
                <p className="text-xs text-gray-500">
                  Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                  Reprehenderit veniam esse cum vitae qui veritatis ab neque
                  soluta, fuga enim?
                </p>
              </li>
              <li className="flex items-start gap-2">
                <Icon id="Check" className="w-12 stroke-success-500" />
                <p className="text-xs text-gray-500">
                  Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                  Reprehenderit veniam esse cum vitae qui veritatis ab neque
                  soluta, fuga enim?
                </p>
              </li>
              <li className="flex items-start gap-2">
                <Icon id="Check" className="w-12 stroke-success-500" />
                <p className="text-xs text-gray-500">
                  Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                  Reprehenderit veniam esse cum vitae qui veritatis ab neque
                  soluta, fuga enim?
                </p>
              </li>
            </ul>
          </div>

          {/* buttons */}
          <div className="flex w-full flex-col gap-2 px-2">
            <Button className="space-x-2">
              <Icon id="ShoppingCart" className="w-5 " />
              <p>Add to Cart</p>
            </Button>
            <Button variant="primarylight">
              <p>Course Details</p>
            </Button>
          </div>
        </div>
      </HoverCardContent>
    </HoverCard>
  );
};

export default CourseCard;
