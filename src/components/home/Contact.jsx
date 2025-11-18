"use client";
import React, { useRef } from "react";
import emailjs from "@emailjs/browser";
import toast from "react-hot-toast";
import MotionWrapper from "../shared/MotionWrapper";
import { FaLocationArrow } from "react-icons/fa";
import { IoLogoWhatsapp } from "react-icons/io";
import { MdEmail } from "react-icons/md";

const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    const box = e.target;

    emailjs
      .sendForm(
        "service_1yhzth8",
        "template_hw3rlyo",
        form.current,
        "S9Rp-FcmZ-4WjaZII"
      )
      .then(
        (result) => {
          if (result.text === "OK") {
            toast.success("Message Sent");
            box.reset();
          }
        },
        (error) => {
          console.log(error.text);
        }
      );
  };

  return (
    <MotionWrapper
      id="contact"
      variantName="fadeInUp"
      className="container mx-auto my-14"
    >
      <h3 className="box mb-14">Contact</h3>

      <section className="py-6 text-primary">
        <div className="grid max-w-6xl grid-cols-1 px-6 mx-auto md:grid-cols-2 md:divide-x divide-primary">

          <div className="px-6 py-6">
            <h1 className="text-2xl font-semibold">Get in touch</h1>
            <p className="pt-2 pb-4 text-sm">
              I’d love to hear from you! Fill out the form or contact me using
              the details below.
            </p>

            <div className="space-y-3 text-sm">
              <p className="flex items-center gap-2">
                <FaLocationArrow />
                <span className="text-gray-300">Bagerhat, Bangladesh</span>
              </p>

              <p className="flex items-center gap-2">
                <IoLogoWhatsapp />
                <span className="text-gray-300">+8801929378419</span>
              </p>

              <p className="flex items-center gap-2">
                <MdEmail />
                <span className="text-gray-300">
                  mdmehedicse01@gmail.com
                </span>
              </p>
            </div>
          </div>

          <form
            ref={form}
            onSubmit={sendEmail}
            className="flex flex-col py-6 space-y-4 px-6"
          >
            <label className="block">
              <span className="mb-2">Full name</span>
              <input
                type="text"
                name="user_name"
                placeholder="Name..."
                className="mt-1 block w-full rounded-md text-gray-200 text-sm border py-1 pl-2 bg-transparent border-primary outline-none ring-none"
                required
              />
            </label>

            <label className="block">
              <span className="mb-2">Email address</span>
              <input
                type="email"
                name="user_email"
                placeholder="Email..."
                className="mt-1 block w-full rounded-md text-gray-200 text-sm border py-1 pl-2 bg-transparent border-primary outline-none ring-none"
                required
              />
            </label>

            <label className="block">
              <span className="mb-2">Message</span>
              <textarea
                name="message"
                rows="3"
                placeholder="Write Here..."
                className="mt-1 block w-full rounded-md text-gray-200 text-sm border py-1 pl-2 bg-transparent border-primary outline-none ring-none"
                required
              ></textarea>
            </label>

            <input
              type="submit"
              style={{ fontFamily: "cursive" }}
              className="px-1 py-1 font-semibold rounded bg-[#4290a4] text-gray-300 cursor-pointer italic -skew-x-6 w-24"
              value="Send"
            />
          </form>

        </div>
      </section>
    </MotionWrapper>
  );
};

export default Contact;
