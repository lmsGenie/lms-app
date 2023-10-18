import React from "react";
import Image from "next/image";
import mainImage from "@/assets/contactPage/main.png";
import { branches } from "@/sampledata";

import { IBranch } from "@/types/contact";
import { Button } from "@/components/ui/button";
import Breadcrumb from "@/components/contact/Breadcrumb";
import Icon from "@/components/icon/Icon";

const page = () => {
  return (
    <div>
      {/* adding the breadcrumb */}
      <Breadcrumb title="Contact" />

      {/* main section */}
      <main className="flex flex-col-reverse items-center gap-3 border-b-[1px] border-orange-500 py-5 sm:flex-row sm:px-10 sm:py-0 sm:pt-2 xl:gap-20 xl:px-48 xl:pt-10">
        <div className="flex flex-col items-center space-y-3 p-2 sm:items-start lg:p-0">
          <h1 className="text-2xl font-semibold lg:text-3xl">
            Connect with us
          </h1>
          <p className="text-sm text-gray-700 lg:text-base">
            Want to chat? We’d love to hear from you! Get in touch with our
            Customer Success Team to inquire about speaking events, advertising
            rates, or just say hello.
          </p>
          <Button>
            <Icon id="EnvelopeSimple" className="mr-2 w-5" /> Copy Email
          </Button>
        </div>

        {/* for image */}
        <div>
          <Image src={mainImage} width={1500} alt="main image" />
        </div>
      </main>

      {/* branches section */}
      <section className="flex flex-col items-center gap-10 py-10 sm:px-10 xl:px-48">
        <div className="space-y-2 text-center md:w-[30rem]">
          <h1 className="text-xl font-semibold md:text-3xl">
            Our branches all over the world.
          </h1>
          <p className="px-5 text-sm text-gray-700 md:text-base">
            Phasellus sed quam eu eros faucibus cursus. Quisque mauris urna,
            imperdiet id leo quis, luctus auctor nisi.{" "}
          </p>
        </div>

        {/* branches details section */}
        <section className="grid grid-cols-1 gap-5 px-2 md:grid-cols-3 lg:grid-cols-4">
          {branches &&
            branches.map((branch: IBranch) => {
              return (
                <div
                  key={branch?.id}
                  className={`flex h-72 items-end bg-[url("../assets/contactPage/building.jpg")] bg-contain`}
                >
                  <div className="m-5 bg-white p-2 text-center">
                    {branch?.branchType && (
                      <p className="text-xs font-medium text-primary-500">
                        {branch?.branchType}
                      </p>
                    )}
                    <h3 className="text-sm font-medium">
                      {branch?.branchName}
                    </h3>
                    <p className="text-xs text-gray-600">
                      {branch?.branchDescription}
                    </p>
                  </div>
                </div>
              );
            })}
        </section>
      </section>
    </div>
  );
};

export default page;
