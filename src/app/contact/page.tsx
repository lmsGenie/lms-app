"use client";

import React from "react";
import Image from "next/image";
import mainImage from "@/assets/contactPage/main.png";
import { branches } from "@/sampledata";
import { SubmitHandler, useForm } from "react-hook-form";

import { IBranch } from "@/types/contact";
import { Button } from "@/components/ui/button";
import Breadcrumb from "@/components/contact/Breadcrumb";
import Icon from "@/components/icon/Icon";

// form data
type IFormData = {
  firstName: string;
  lastName: string;
  email: string;
  subject: string;
  message: string;
};

const page = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<IFormData>({
    defaultValues: {
      email: "",
      firstName: "",
      lastName: "",
      message: "",
      subject: "",
    },
  });

  // handling the form submit
  const onSubmit: SubmitHandler<IFormData> = (data) => console.log(data);

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
            <Icon id="EnvelopeSimple" className="mr-2 w-5" />
            Copy Email
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
            imperdiet id leo quis, luctus auctor nisi.
          </p>
        </div>

        {/* branches details section */}
        <section className="grid grid-cols-1 gap-5 px-2 md:grid-cols-3 lg:grid-cols-4">
          {branches &&
            branches.map((branch: IBranch) => (
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
                  <h3 className="text-sm font-medium">{branch?.branchName}</h3>
                  <p className="text-xs text-gray-600">
                    {branch?.branchDescription}
                  </p>
                </div>
              </div>
            ))}
        </section>
      </section>

      {/* contact form */}
      <section className="flex flex-col items-center gap-2 bg-gray-50 py-5 sm:px-10 md:gap-10 md:py-10 xl:px-48">
        <h1 className="text-xl font-semibold md:text-3xl">Contact Us</h1>
        <div className="grid grid-cols-1 gap-10 md:grid-cols-[40%_auto] md:gap-5 lg:gap-10">
          {/* left one */}
          <div className="space-y-5 p-2">
            <p>
              Will you be in Los Angeles or any other branches any time soon?
              Stop by the office! We'd love to meet.
            </p>
            {/* for details */}
            <div className="grid grid-cols-[40%_auto] gap-5 text-sm">
              <p className="font-medium uppercase text-primary-500">address</p>
              <p>1702 Olympic Boulevard Santa Monica, CA 90404</p>
              <p className="font-medium uppercase text-primary-500">
                phone number
              </p>
              <p>(219) 555-0114</p>
              <p className="font-medium uppercase text-primary-500">
                email address
              </p>
              <p>test@gmail.com</p>
            </div>
          </div>

          {/* contact form */}
          <form onSubmit={handleSubmit(onSubmit)}>
            <div className="flex flex-col gap-5 bg-white p-2 sm:p-5 lg:p-10">
              {/* form header details */}
              <div className="space-y-1">
                <h1 className="text-lg font-semibold md:text-2xl">
                  Get in touch
                </h1>
                <p className="text-sm text-gray-500">
                  Feel free contact with us, we love to make new partners &
                  friends
                </p>
              </div>

              <div className="flex flex-col gap-3">
                {/* for name */}
                <div className="flex flex-col gap-5 lg:flex-row">
                  <label
                    htmlFor="firstName"
                    className="flex flex-col gap-1 text-sm font-medium"
                  >
                    First Name
                    <input
                      type="text"
                      placeholder="First name ..."
                      className={`rounded-md border-2 p-2 outline-none ${
                        errors?.firstName
                          ? "border-primary-500"
                          : "border-gray-500"
                      }`}
                      {...register("firstName", {
                        required: {
                          value: true,
                          message: "Please enter the first name",
                        },
                        minLength: {
                          value: 3,
                          message: "Please enter a valid first name",
                        },
                      })}
                    />
                    {/* for displaying error */}
                    {errors?.firstName && (
                      <p className="text-sm text-red-500">
                        {errors?.firstName?.message}
                      </p>
                    )}
                  </label>
                  <label
                    htmlFor="lastName"
                    className="flex flex-col gap-1 text-sm font-medium"
                  >
                    Last Name
                    <input
                      type="text"
                      placeholder="Last name ..."
                      className={`rounded-md border-2 p-2 outline-none ${
                        errors?.lastName
                          ? "border-primary-500"
                          : "border-gray-500"
                      }`}
                      {...register("lastName", {
                        required: {
                          value: true,
                          message: "Please enter the last name",
                        },
                        minLength: {
                          value: 3,
                          message: "Please enter a valid last name",
                        },
                      })}
                    />
                    {/* for displaying error */}
                    {errors?.lastName && (
                      <p className="text-sm text-red-500">
                        {errors?.lastName?.message}
                      </p>
                    )}
                  </label>
                </div>

                {/* for email */}
                <label
                  htmlFor="email"
                  className="flex flex-col gap-1 text-sm font-medium"
                >
                  Email
                  <input
                    type="email"
                    placeholder="test@gmail.com"
                    className={`rounded-md border-2 p-2 outline-none ${
                      errors?.email ? "border-primary-500" : "border-gray-500"
                    }`}
                    {...register("email", {
                      required: {
                        value: true,
                        message: "Please enter the email id",
                      },
                      pattern: {
                        value: /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/,
                        message: "Please enter a valid email id",
                      },
                    })}
                  />
                  {/* for displaying error */}
                  {errors?.email && (
                    <p className="text-sm text-red-500">
                      {errors?.email?.message}
                    </p>
                  )}
                </label>

                {/* for subject */}
                <label
                  htmlFor="subject"
                  className="flex flex-col gap-1 text-sm font-medium"
                >
                  Subject
                  <input
                    type="text"
                    placeholder="Message subject"
                    className={`rounded-md border-2 p-2 outline-none ${
                      errors?.subject ? "border-primary-500" : "border-gray-500"
                    }`}
                    {...register("subject", {
                      required: {
                        value: true,
                        message: "Please enter the subject",
                      },
                      minLength: {
                        value: 5,
                        message: "Please enter a valid subject title",
                      },
                    })}
                  />
                  {/* for displaying error */}
                  {errors?.subject && (
                    <p className="text-sm text-red-500">
                      {errors?.subject?.message}
                    </p>
                  )}
                </label>

                {/* for message */}
                <label
                  htmlFor="Message"
                  className="flex flex-col gap-1 text-sm font-medium"
                >
                  Message
                  <textarea
                    placeholder="Your message ..."
                    className={`h-32 resize-none rounded-md border-2 p-2 outline-none ${
                      errors?.message ? "border-primary-500" : "border-gray-500"
                    }`}
                    {...register("message", {
                      required: {
                        value: true,
                        message: "Please enter the message",
                      },
                      minLength: {
                        value: 20,
                        message: "Please enter a valid message",
                      },
                    })}
                  />
                  {/* for displaying error */}
                  {errors?.message && (
                    <p className="text-sm text-red-500">
                      {errors?.message?.message}
                    </p>
                  )}
                </label>
              </div>

              {/* submit button */}
              <Button type="submit" className="lg:w-fit">
                Send Message
                <Icon id="PaperPlaneRight" className="ml-2 w-5" />
              </Button>
            </div>
          </form>
        </div>
      </section>
    </div>
  );
};

export default page;
