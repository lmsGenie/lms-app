import Link from "next/link";
import { categories } from "@/sampledata";

import Icon from "@/components/icon/Icon";

export default function Home() {
  return (
    <main>
      {/* top categories section */}
      <section className="my-4 mt-4 px-10 md:my-6 md:mt-6 md:px-16 lg:my-8 lg:mt-8 lg:px-20">
        <h1 className="my-4 text-center text-lg font-semibold md:my-5 md:text-xl lg:my-6 lg:text-2xl">
          Browse Top Category
        </h1>
        <div className="grid grid-cols-1 gap-2 sm:grid-cols-2 md:grid-cols-3 md:gap-4 lg:grid-cols-4 lg:gap-5">
          {categories.map((item, index) => {
            return (
              <Link
                href={item.path}
                key={index}
                className={`${index > 3 ? "hidden" : "block"} 
                sm:${index > 5 ? "hidden" : "block"} 
                lg:${index > 11 ? "hidden" : "block"}`}
              >
                <div className="flex gap-4 border border-gray-200 p-3 hover:shadow-lg dark:hover:shadow-md dark:hover:shadow-gray-600 md:p-4 lg:p-5">
                  <div className="flex h-14 w-14 items-center justify-center">
                    <Icon id={item.iconId} className="stroke-primary-500" />
                  </div>
                  <div className="md:text-md flex flex-col justify-center text-sm">
                    <h4> {item.name}</h4>
                    <div>{item.totalCourses} Courses</div>
                  </div>
                </div>
              </Link>
            );
          })}
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
    </main>
  );
}
