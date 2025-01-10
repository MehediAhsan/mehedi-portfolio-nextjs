"use client";
import React, { useRef } from "react";
import emailjs from "@emailjs/browser";
import toast from "react-hot-toast";
import MotionWrapper from "../shared/MotionWrapper"; // Import the MotionWrapper

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
          console.log(result.text);
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
    <MotionWrapper id="contact" variantName="fadeInUp" className="container mx-auto my-28">
      <h3 className="box mb-14">
        Contact
      </h3>

      <section className="py-6 text-primary">
        <div className="grid max-w-6xl grid-cols-1 px-6 mx-auto lg:px-8 md:grid-cols-2 md:divide-x divide-gray-400">
          {/* Contact Info */}
          <MotionWrapper variantName="fadeIn" delay={0.1}>
            <div className="py-6 md:py-0 px-6">
              <h1 className="text-3xl" style={{ fontFamily: "cursive" }}>
                Get in touch
              </h1>
              <p className="pt-2 pb-4">Fill in the form to start a conversation</p>
              <div className="space-y-4">
                <p className="flex items-center">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                    className="w-5 h-5 mr-2 sm:mr-6 text-teal-500"
                  >
                    <path
                      fillRule="evenodd"
                      d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z"
                      clipRule="evenodd"
                    ></path>
                  </svg>
                  <span>Bagerhat, Bangladesh</span>
                </p>
                <p className="flex items-center">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                    className="w-5 h-5 mr-2 sm:mr-6 text-teal-500"
                  >
                    <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z"></path>
                  </svg>
                  <span>+8801929378419</span>
                </p>
                <p className="flex items-center">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                    className="w-5 h-5 mr-2 sm:mr-6 text-teal-500"
                  >
                    <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z"></path>
                    <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z"></path>
                  </svg>
                  <span>mdmehedicse01@gmail.com</span>
                </p>
              </div>
            </div>
          </MotionWrapper>

          {/* Contact Form */}
          <MotionWrapper variantName="fadeIn" delay={0.2}>
            <form
              ref={form}
              onSubmit={sendEmail}
              className="flex flex-col py-6 space-y-6 md:py-0 px-6 ng-untouched ng-pristine ng-valid"
            >
              <label className="block">
                <span className="mb-2">Full name</span>
                <input
                  type="text"
                  name="user_name"
                  placeholder="Name..."
                  className="mt-2 block w-full rounded-md shadow-sm text-gray-200 border-b py-2 pl-2 bg-transparent border-teal-700 outline-none ring-none focus:ring-1 focus:ring-teal-700"
                  required
                />
              </label>
              <label className="block">
                <span className="mb-2">Email address</span>
                <input
                  type="email"
                  name="user_email"
                  placeholder="Email..."
                  className="mt-2 block w-full rounded-md shadow-sm text-gray-200 border-b py-2 pl-2 bg-transparent border-teal-700 outline-none ring-none focus:ring-1 focus:ring-teal-700"
                  required
                />
              </label>
              <label className="block">
                <span className="mb-2">Message</span>
                <textarea
                  name="message"
                  rows="3"
                  placeholder="Write Here..."
                  className="mt-2 block w-full rounded-md text-gray-200 border-b py-2 pl-2 bg-transparent border-teal-700 outline-none ring-none focus:ring-1 focus:ring-teal-700"
                  required
                ></textarea>
              </label>
              <input
                type="submit"
                style={{ fontFamily: "cursive" }}
                className="px-1 py-1 text-lg rounded bg-[#0b6a8f] text-gray-300 mt-8 cursor-pointer italic -skew-x-6"
                value="Send"
              />
            </form>
          </MotionWrapper>
        </div>
      </section>
    </MotionWrapper>
  );
};

export default Contact;
