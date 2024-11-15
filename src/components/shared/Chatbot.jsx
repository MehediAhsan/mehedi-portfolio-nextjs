// app/components/Chatbot.js
"use client";
import React, { useRef, useState } from "react";
import { RiMessage2Line } from "react-icons/ri";
import Modal from "./Modal";
import emailjs from "@emailjs/browser";
import { toast } from "react-hot-toast";
import MotionWrapper from "./MotionWrapper";
import { FaLocationArrow, FaPhone } from "react-icons/fa";
import { MdEmail } from "react-icons/md";

export default function Chatbot() {
  const [open, setOpen] = useState(false);
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
    <div>
      <button
        onClick={() => setOpen(true)}
        className="fixed bottom-5 right-10 p-2 text-white shadow-lg rounded-full bg-teal-600 hover:bg-teal-700 transition-all"
        aria-label="Open chat"
      >
        <RiMessage2Line size={26} />
      </button>

      <Modal open={open} setOpen={setOpen} title="Contact Me">
        <>
          <section className="text-primary py-2">
            <div className="grid grid-cols-1 md:grid-cols-2 md:divide-x divide-gray-400">
              {/* Contact Info */}
              <>
                <div className="px-2">
                  <h1 className="text-xl md:text-2xl font-semibold">
                    Get in touch
                  </h1>
                  <p className="pt-2 pb-4 text-sm">
                    I’d love to hear from you! Fill out the form or contact us
                    using the details below.
                  </p>
                  <div className="space-y-3">
                    <p className="flex items-center gap-1 text-sm font-semibold">
                      <FaLocationArrow />
                      <span>Dhaka, Bangladesh</span>
                    </p>
                    <p className="flex items-center gap-1 text-sm font-semibold">
                      <FaPhone />
                      <span>+8801929378419</span>
                    </p>
                    <p className="flex items-center gap-1 text-sm font-semibold">
                      <MdEmail />
                      <span>mdmehedicse01@gmail.com</span>
                    </p>
                  </div>
                </div>
              </>

              {/* Contact Form */}
              <>
                <form
                  ref={form}
                  onSubmit={sendEmail}
                  className="flex flex-col py-6 space-y-3 md:py-0 px-4 ng-untouched ng-pristine ng-valid"
                >
                  <label className="block">
                    <span className="mb-2">Full name</span>
                    <input
                      type="text"
                      name="user_name"
                      placeholder="Name..."
                      className="mt-1 block w-full rounded-md shadow-sm text-gray-800 text-sm border-b py-2 pl-2 bg-transparent border-teal-700 outline-none ring-none focus:ring-1 focus:ring-teal-700"
                      required
                    />
                  </label>
                  <label className="block">
                    <span className="mb-2">Email address</span>
                    <input
                      type="email"
                      name="user_email"
                      placeholder="Email..."
                      className="mt-1 block w-full rounded-md shadow-sm text-gray-800 text-sm border-b py-2 pl-2 bg-transparent border-teal-700 outline-none ring-none focus:ring-1 focus:ring-teal-700"
                      required
                    />
                  </label>
                  <label className="block">
                    <span className="mb-2">Message</span>
                    <textarea
                      name="message"
                      rows="2"
                      placeholder="Write Here..."
                      className="mt-1 block w-full rounded-md text-gray-800 text-sm border-b py-2 pl-2 bg-transparent border-teal-700 outline-none ring-none focus:ring-1 focus:ring-teal-700"
                      required
                    ></textarea>
                  </label>
                  <input
                    type="submit"
                    style={{ fontFamily: "cursive" }}
                    className="px-1 py-1 font-semibold rounded bg-[#0b6a8f] text-gray-300 cursor-pointer italic -skew-x-6"
                    value="Send"
                  />
                </form>
              </>
            </div>
          </section>
        </>
      </Modal>
    </div>
  );
}
