import Image from "next/image";
import mentorImage from "@/assets/mentorImage.png";

import { CourseDataPartial } from "@/types/course";

import Icon from "../icon/Icon";

interface IProps {
  data: CourseDataPartial;
}

const FeaturedCourseCard = ({ data }: IProps) => {
  return (
    <div className="flex w-fit cursor-pointer flex-col border-[1.5px] border-gray-100 transition-all duration-200 ease-in-out hover:-translate-y-1 hover:shadow-md lg:flex-row">
      <Image
        src={data?.thumbnail!}
        alt="thumbnail"
        className="w-full object-cover lg:w-40"
      />
      <div className="w-[17rem] space-y-1 lg:w-80">
        {/* for right side header */}
        <div className="mt-3 flex items-center justify-between px-3">
          <label className="bg-primary-100 px-[10px] py-[4px] text-[10px] font-semibold text-success-700">
            {data?.category?.[0]}
          </label>

          {data?.discountedPrice ? (
            data?.listPrice && (
              <p className="text-[16px] text-gray-900">
                {data?.listPrice?.currencySymbol} {data?.listPrice?.price}
                <s className="ml-1 text-sm text-gray-400">
                  {data?.discountedPrice?.currencySymbol}
                  {data?.discountedPrice?.price}
                </s>
              </p>
            )
          ) : (
            <p className="text-[16px] text-gray-900">
              {data?.listPrice?.currencySymbol} {data?.listPrice?.price}
            </p>
          )}
        </div>

        <h1 className="line-clamp-1 px-3 text-sm font-medium text-gray-900 md:text-base">
          {data?.title}
        </h1>

        {/* for mentor and course review */}
        <div className="flex items-center justify-between px-3">
          {/* for metor */}
          <div className="flex h-7 w-7 items-center rounded-full">
            <Image src={mentorImage} alt="mentor" />
            <p className="ml-2 text-xs text-gray-700 md:text-sm">Harvi</p>
          </div>

          {/* for course rating */}
          <div className="flex items-center gap-1">
            <Icon
              id="Star"
              className="w-4 fill-primary-500 stroke-none md:w-5"
            />
            <p className="flex items-center text-sm font-medium text-gray-900 dark:text-gray-100 md:text-base">
              {data?.averageRating}{" "}
              <span className="text-xs font-normal text-gray-600 dark:text-gray-50 md:text-sm">
                ({data?.totalEnrollments})
              </span>
            </p>
          </div>
        </div>

        {/* more course details */}
        <div className="flex items-center justify-between border-t border-gray-100 px-3 py-2 text-sm font-semibold">
          {/* course enrollment */}
          <div className="flex items-center gap-1">
            <Icon id="User" className="w-4 stroke-secondary-500 2xl:w-5" />
            <p className="text-xs text-gray-700 dark:text-gray-100 2xl:text-sm">
              {data?.totalEnrollments}K{" "}
              <span className="hidden lg:block">students</span>
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
      </div>
    </div>
  );
};

export default FeaturedCourseCard;
