import Image from "next/image";
import Link from "next/link";
import becomeInstructor from "@/assets/becomeInstructor.png";
import bannerImage from "@/assets/hero.png";
import googleImage from "@/assets/trustedCompanies/google.png";
import lenovoImage from "@/assets/trustedCompanies/lenovo.png";
import lexmarkImage from "@/assets/trustedCompanies/lexmark.png";
import microsoftImage from "@/assets/trustedCompanies/microsoft.png";
import netflixImage from "@/assets/trustedCompanies/netflix.png";
import slackImage from "@/assets/trustedCompanies/slack.png";
import verizonImage from "@/assets/trustedCompanies/verizon.png";
import youtubeImage from "@/assets/trustedCompanies/youtube.png";
import { categories, courses, users } from "@/sampledata";

import { ICoursePartial } from "@/types/course";
import { Button } from "@/components/ui/button";
import CourseCard from "@/components/course/CourseCard";
import FeaturedCourseCard from "@/components/course/FeaturedCourseCard";
import Icon from "@/components/icon/Icon";

export default function Home() {
  return (
    <main className="relative">
      {/* hero section */}
      <section className="mb-4 flex gap-6 bg-gray-50 py-5 pl-10 dark:bg-gray-900 md:mb-6 md:gap-8 md:py-0 md:pl-16 lg:mb-8 lg:gap-10 lg:pl-20">
        <div className="flex flex-col justify-center gap-3">
          <h1 className="text-2xl font-semibold sm:text-3xl md:text-4xl lg:text-5xl">
            Learn with expert anytime anywhere
          </h1>
          <p className="md:text-md text-sm lg:text-lg">
            Our mission is to help people to find the best course online and
            learn with expert anytime, anywhere.
          </p>
          <Button className="w-fit">Create Account</Button>
        </div>

        <Image
          className="hidden md:block md:w-[700px] lg:w-[800px]"
          src={bannerImage}
          alt="banner image"
        />
      </section>

      {/* top categories section */}
      <section className="my-4 px-10 md:my-6 md:px-16 lg:my-14 lg:px-20">
        <h1 className="my-4 text-center text-lg font-semibold md:my-5 md:text-xl lg:my-6 lg:text-2xl">
          Browse Top Category
        </h1>
        <div className="grid grid-cols-1 gap-2 sm:grid-cols-2 md:grid-cols-3 md:gap-4 lg:grid-cols-4 lg:gap-5">
          {categories.map((item, index) => (
            <Link
              href={item.path}
              key={Date.now() + index}
              className={`${index > 3 ? "hidden" : "block"}
                sm:${index > 5 ? "hidden" : "block"}
                lg:${index > 11 ? "hidden" : "block"}`}
            >
              <div className="flex gap-4 border border-gray-200 p-3 hover:shadow-lg dark:hover:shadow-md dark:hover:shadow-gray-600 md:p-4 lg:p-5">
                <div className="flex h-14 w-14 items-center justify-center">
                  <Icon id={item.iconId} className="stroke-primary-500" />
                </div>
                <div className="md:text-md flex flex-col justify-center text-sm">
                  <h4>{item.name}</h4>
                  <div>
                    {item.totalCourses}
                    &nbsp;Courses
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>
        <div className="md:text-md mt-4 flex items-center justify-center gap-2 text-sm">
          <p className="hidden sm:block">
            We have more category & subcategory.
          </p>
          <Link
            href="/categories"
            className="flex items-center gap-1 text-primary-500"
          >
            Browse All
            <Icon id="ArrowRight" className="w-6 stroke-primary-500" />
          </Link>
        </div>
      </section>

      {/* best selling courses */}
      <section className="relative my-4 bg-gray-50 p-2 px-10 dark:bg-gray-900 md:my-6 md:px-16 lg:my-14 lg:px-20">
        <h1 className="my-4 text-center text-lg font-semibold dark:text-white md:my-5 md:text-xl lg:my-6 lg:text-2xl">
          Best selling courses
        </h1>
        {/* container for courses card */}
        <div className="grid cursor-pointer grid-cols-1 gap-5 pb-40 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {courses.map((courseData: ICoursePartial) => (
            <CourseCard key={courseData.id} data={courseData} />
          ))}
        </div>
      </section>

      {/* for feature courses section */}
      <section className="relative -top-40 mx-2 space-y-5 border-2 border-gray-100 bg-white p-2 dark:bg-gray-800 md:mx-11 md:p-5 lg:mx-10 lg:p-10">
        {/* header part */}
        <div className="flex flex-col items-center justify-between lg:flex-row">
          <h1 className=" text-lg font-semibold dark:text-white md:text-xl lg:text-2xl">
            Our feature courses
          </h1>
          <p className="w-full text-center text-sm md:w-96 lg:text-left">
            we are here to provide you the best quality content from best
            mentors across the whole galaxy.
          </p>
        </div>

        {/* container for featured courses card */}
        <div className="grid grid-cols-1 gap-5  md:grid-cols-2">
          {courses.map((courseData: ICoursePartial) => (
            <FeaturedCourseCard key={courseData.id} data={courseData} />
          ))}
        </div>
      </section>

      {/* recently added courses */}
      <section className="relative -top-40 my-4 px-10 dark:bg-gray-900 md:my-6 md:px-16 lg:mt-14 lg:px-20">
        <h1 className="mb-4 text-center text-lg font-semibold dark:text-white md:mb-5 md:text-xl lg:mb-6 lg:text-2xl">
          Recently added courses
        </h1>
        {/* container for courses card */}
        <div className="grid cursor-pointer grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {courses.map((courseData: ICoursePartial) => (
            <CourseCard key={courseData.id} data={courseData} />
          ))}
        </div>

        {/* button for explore more */}
        <div className="text-center">
          <Button
            variant="primarylight"
            type="button"
            className="mx-auto mt-10"
          >
            Browse All Course <Icon id="ArrowRight" className="ml-2 w-5" />
          </Button>
        </div>
      </section>

      {/* become an instructor */}
      <section className="relative -top-40 my-4 grid grid-cols-1 gap-10 bg-gray-50 p-2 pb-40 dark:bg-gray-800 md:my-6 md:grid-cols-2 md:p-12 md:pb-40 lg:my-14 lg:p-20 lg:pb-40">
        <div className="relative space-y-3 bg-gradient-to-r from-orange-500 to-orange-400 p-2 lg:p-4 xl:p-8">
          <h1 className="text-center text-2xl font-semibold text-white lg:text-left">
            Become an instructor
          </h1>
          <div className="flex flex-col-reverse gap-3 lg:flex-row">
            <div className="flex flex-col gap-3">
              <p className="text-sm text-white md:w-64">
                Instructors from around the world teach millions of students on
                LMS Ginie. We provide the tools and skills to teach what you
                love.
              </p>
              <Button
                variant="primarylight"
                type="button"
                className="self-center bg-white hover:bg-gray-50 lg:self-start"
                size="sm"
              >
                Start Teaching <Icon id="ArrowRight" className="ml-2 w-5" />
              </Button>
            </div>
            <Image
              src={becomeInstructor}
              alt="instructor"
              className="bottom-0 w-44 self-center md:w-32 lg:absolute lg:right-5 lg:w-40 xl:right-10 xl:w-44"
            />
          </div>
        </div>

        {/* for more details */}
        <div className="flex flex-col items-center justify-center space-y-6 bg-white p-2 dark:bg-gray-900 lg:p-4 xl:p-8">
          <h1 className="self-start text-2xl font-semibold">
            Your teaching & earning steps
          </h1>
          {/* for steps */}
          <div className="grid grid-cols-1 gap-5 self-start lg:grid-cols-2">
            <div className="flex items-center gap-2">
              <div className="flex h-8 w-8 items-center justify-center rounded-full bg-blue-100 font-bold text-blue-500">
                1
              </div>
              <p className="text-sm font-medium">Apply to become instructor</p>
            </div>

            <div className="flex items-center gap-2">
              <div className="flex h-8 w-8 items-center justify-center rounded-full bg-orange-100 font-bold text-orange-500">
                2
              </div>
              <p className="text-sm font-medium">Build & edit your profile</p>
            </div>

            <div className="flex items-center gap-2">
              <div className="flex h-8 w-8 items-center justify-center rounded-full bg-purple-100 font-bold text-purple-500">
                3
              </div>
              <p className="text-sm font-medium">Create your new course</p>
            </div>

            <div className="flex items-center gap-2">
              <div className="flex h-8 w-8 items-center justify-center rounded-full bg-green-100 font-bold text-green-500">
                4
              </div>
              <p className="text-sm font-medium">Start teaching and earning</p>
            </div>
          </div>
        </div>
      </section>

      {/* top instructor of the month */}
      <section className="relative -top-80 mx-2 mb-40 flex flex-col items-center justify-center space-y-5 border-2 border-gray-100 bg-white p-2 dark:bg-gray-800 md:mx-11 md:mb-10 md:p-5 lg:mx-10 lg:mb-10 lg:p-10">
        <h1 className="text-center text-lg font-semibold dark:text-white md:text-xl lg:text-2xl">
          Top instructor of the month
        </h1>

        {/* container for top mentors */}
        <div className="grid grid-cols-2 gap-2 sm:grid-cols-2 sm:gap-5 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5">
          {users &&
            users.map((user) => (
              <div
                key={user?.id}
                className="w-32 border-[1.5px] border-gray-100 dark:bg-gray-900 sm:w-48"
              >
                <Image
                  width={200}
                  height={100}
                  src={user?.profilePicture!}
                  alt="mentor"
                />
                <div className="p-1 sm:p-2">
                  <h2 className="line-clamp-1 text-center text-sm font-medium text-gray-900 dark:text-white sm:text-base">
                    {`${user?.firstName} ${user?.lastName}`}
                  </h2>
                  <p className="line-clamp-2 text-center text-xs text-gray-500 sm:text-sm">
                    {user?.biography}
                  </p>
                </div>
                <div className="flex flex-col items-center justify-between border-t-[1.5px] border-gray-100 px-2 sm:flex-row sm:py-1">
                  <div className="flex items-center gap-1 text-sm">
                    <Icon
                      id="Star"
                      className="w-3 fill-primary-500 stroke-none sm:w-4"
                    />{" "}
                    <p className="text-xs sm:text-base">{user?.rating}</p>
                  </div>
                  <p className="text-sm text-gray-900 sm:text-sm">
                    {user?.totalStudents}
                    <span className="ml-1 text-xs text-gray-500 sm:text-sm">
                      students
                    </span>
                  </p>
                </div>
              </div>
            ))}
        </div>

        {/* bottom line */}
        <p className="flex flex-col items-center gap-1 text-center text-xs lg:flex-row lg:text-sm">
          Thousands of students waiting for a instructor. Start teaching &
          earning now!.{" "}
          <span className="flex cursor-pointer items-center gap-1 text-primary-500">
            Become Instructor <Icon id="ArrowRight" className="w-4" />
          </span>
        </p>
      </section>

      {/* trusted companies section */}
      <section className="absolute -bottom-32 flex w-full flex-col items-center justify-center gap-10 md:-bottom-2 lg:flex-row xl:bottom-14">
        <div className="space-y-2 lg:w-96">
          <h2 className="text-xl font-semibold md:text-2xl">
            6.3k trusted companies
          </h2>
          <p className="w-72 text-xs text-gray-600">
            Nullam egestas tellus at enim ornare tristique. Class aptent taciti
            sociosqu ad litora torquent per conubia nostra.
          </p>
        </div>

        {/* for companies logos */}
        <div className="grid grid-cols-2 gap-6 md:grid-cols-4 lg:grid-cols-3 xl:grid-cols-4">
          <div className="px-7 py-5 shadow-md dark:bg-gray-800 dark:shadow-gray-700 sm:px-10 sm:py-7">
            <Image src={netflixImage} width={65} height={50} alt="netflix" />
          </div>
          <div className="px-7 py-5 shadow-md dark:bg-gray-800 dark:shadow-gray-700 sm:px-10 sm:py-7">
            <Image src={youtubeImage} width={65} height={50} alt="youtube" />
          </div>
          <div className="px-7 py-5 shadow-md dark:bg-gray-800 dark:shadow-gray-700 sm:px-10 sm:py-7">
            <Image src={googleImage} width={65} height={50} alt="google" />
          </div>
          <div className="px-7 py-5 shadow-md dark:bg-gray-800 dark:shadow-gray-700 sm:px-10 sm:py-7">
            <Image src={lenovoImage} width={65} height={50} alt="lenovo" />
          </div>
          <div className="px-7 py-5 shadow-md dark:bg-gray-800 dark:shadow-gray-700 sm:px-10 sm:py-7">
            <Image src={slackImage} width={65} height={50} alt="slack" />
          </div>
          <div className="px-7 py-5 shadow-md dark:bg-gray-800 dark:shadow-gray-700 sm:px-10 sm:py-7">
            <Image src={verizonImage} width={65} height={50} alt="verizon" />
          </div>
          <div className="px-7 py-5 shadow-md dark:bg-gray-800 dark:shadow-gray-700 sm:px-10 sm:py-7">
            <Image src={lexmarkImage} width={65} height={50} alt="lexmark" />
          </div>
          <div className="px-7 py-5 shadow-md dark:bg-gray-800 dark:shadow-gray-700 sm:px-10 sm:py-7">
            <Image
              src={microsoftImage}
              width={65}
              height={50}
              alt="microsoft"
            />
          </div>
        </div>
      </section>
    </main>
  );
}
