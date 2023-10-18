import React from "react";
import Image from "next/image";
import mainImage from "@/assets/contactPage/main.png";

import { Button } from "@/components/ui/button";
import Breadcrumb from "@/components/contact/Breadcrumb";
import Icon from "@/components/icon/Icon";

const page = () => {
  return (
    <div>
      {/* adding the breadcrumb */}
      <Breadcrumb title="Contact" />

      {/* main section */}
      <main className="flex flex-col-reverse items-center gap-3 border-b-[1px] border-orange-500 pt-2 sm:flex-row sm:px-10 xl:gap-20 xl:px-48 xl:pt-10">
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
    </div>
  );
};

export default page;
