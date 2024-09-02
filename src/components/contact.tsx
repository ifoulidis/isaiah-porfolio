"use client";

import React, { useState, useEffect } from "react";
import emailjs from "@emailjs/browser";
import { motion } from "framer-motion";

interface ContactFormProps {
  initialSubject?: string;
}

export type FormData = {
  name: string;
  email: string;
  message: string;
  subject: string;
};

export default function ContactForm({ initialSubject }: ContactFormProps) {
  const [name, setName] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  const [subject, setSubject] = useState<string>(initialSubject || "");
  const [message, setMessage] = useState<string>("");
  const [confirmation, setConfirmation] = useState<string>("");

  useEffect(() => {
    const timer = setTimeout(() => {
      setConfirmation("");
    }, 3000);
    return () => clearTimeout(timer);
  }, [confirmation]);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // Configure Email.js parameters
    const templateParams = {
      subject: subject,
      user_name: name,
      user_email: email,
      message: message,
    };
    if (subject === "") {
      setConfirmation("Subject cannot be blank");
    } else if (name === "") {
      setConfirmation("Name cannot be blank");
    } else if (email === "") {
      setConfirmation("Email cannot be blank");
    } else if (message === "") {
      setConfirmation("Message cannot be blank");
    } else {
      // Send the email using Email.js
      emailjs
        .send(
          "service_lx7u87q",
          "contact_form",
          templateParams,
          "eCJbOSpcY59_MuyQm"
        )
        .then((response) => {
          console.log("Email sent!", response.status, response.text);
          setconfirmation("Email sent successfully!");
        })
        .catch((error) => {
          console.error("Error sending email:", error);
          setconfirmation(
            "There was an error sending your email! Please refresh the page and try again"
          );
        });
      // Clear form fields
      setName("");
      setEmail("");
      setSubject("");
      setMessage("");
    }
  };

  return (
    <div className="relative max-w-6xl mx-auto px-5 py-10 animate-fade-in delay-1000 opacity-0 duration-500">
      <main className="bg-white dark:bg-gray-900 p-8 rounded-lg shadow-md">
        <h1 className="text-3xl font-bold text-gray-900 dark:text-white mb-6">
          Get In Touch
        </h1>
        <form onSubmit={handleSubmit} className="space-y-6">
          <input
            type="text"
            placeholder="Full Name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
            className="w-full p-4 border border-gray-300 dark:border-gray-700 rounded-lg bg-gray-50 dark:bg-gray-800 text-gray-900 dark:text-gray-100 focus:outline-none focus:border-blue-500"
          />
          <input
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            className="w-full p-4 border border-gray-300 dark:border-gray-700 rounded-lg bg-gray-50 dark:bg-gray-800 text-gray-900 dark:text-gray-100 focus:outline-none focus:border-blue-500"
          />
          <input
            type="text"
            placeholder="Subject"
            value={subject}
            onChange={(e) => setSubject(e.target.value)}
            required
            className="w-full p-4 border border-gray-300 dark:border-gray-700 rounded-lg bg-gray-50 dark:bg-gray-800 text-gray-900 dark:text-gray-100 focus:outline-none focus:border-blue-500"
          />
          <textarea
            placeholder="Message"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            required
            className="w-full p-4 h-[12rem] border border-gray-300 dark:border-gray-700 rounded-lg bg-gray-50 dark:bg-gray-800 text-gray-900 dark:text-gray-100 focus:outline-none focus:border-blue-500 resize-none"
          ></textarea>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            type="submit"
            className="w-full bg-blue-500 text-white  dark:text-gray-900 p-4 rounded-lg font-bold focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50"
          >
            Submit
          </motion.button>
        </form>
        {confirmation && (
          <h2 className="mt-6 text-lg text-center text-gray-900 dark:text-white">
            {confirmation}
          </h2>
        )}
      </main>
    </div>
  );
}
