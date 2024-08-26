"use client";
// src/components/Modal.tsx
import React from "react";
import { motion } from "framer-motion";
import styles from "@/styles/modal.module.css";
import Link from "next/link";

interface ModalProps {
  index: number;
  close: () => void;
}

const ImageModal: React.FC<ModalProps> = ({ index, close }) => {
  const projects = [
    {
      id: 0,
      title: "Grappling HQ",
      link: "https://grapplinghq.com/",
      skills: ["design", "animation"],
      client: "Grappling HQ",
      description: (
        <p>
          Grappling HQ is a competitive Jui Jitsu gym in Tauranga. The website
          is slick, easy to navigate and helpful.{" "}
          {/* <Link href="/projects/grappling-hq">Learn More...</Link> */}
        </p>
      ),
    },
    {
      id: 1,
      title: "Spitfire Records",
      link: "https://spitfirerecords.co.nz",
      skills: ["PHP", "mySQL", "Apache", "CSS", "JQuery"],
      client: "Spitfire Records",
      description: (
        <>
          <p>
            Spitfire Records is an online record store in New Zealand,
            specialising in Hard Rock and Metal.{" "}
            <Link href="/projects/spitfire-records">Learn More...</Link>
          </p>
        </>
      ),
    },
    {
      id: 2,
      title: "What Is Truth",
      link: "https://whatistruth.co.nz",
      skills: ["NextJS", "CSS", "MD", "animation"],
      client: "Self",
      description: (
        <p>
          What Is Truth is an apologetics website that features custom quizzes,
          feature-packed articles, headless CMS integration, and more.{" "}
          <Link href="/projects/spitfire-records">Learn More...</Link>
        </p>
      ),
    },
  ];

  const imageData = [
    { id: 0, url: "/grappling-hq-demo.mp4" },
    { id: 1, url: "/spitfire-records-demo.mp4" },
    { id: 2, url: "/what-is-truth-demo.mp4" },
  ];

  const projectData = projects[index];
  const image = imageData[index];

  return (
    <div className={styles.backdrop} onClick={close}>
      <motion.div
        className={`${styles.modal} bg-background text-foreground`}
        initial={{ opacity: 0, scale: 0.7, x: 300 }}
        animate={{ opacity: 1, scale: 1, x: 0, transition: { duration: 0.5 } }}
        exit={{ opacity: 0, scale: 0.7, x: -300 }}
      >
        {/* Main content */}
        <div className="md:w-[80%]">
          <video
            src={image.url}
            autoPlay
            preload="auto"
            playsInline
            className="w-full h-auto mb-4 sm:block hidden"
          />
          <div className="sm:hidden block mt-4">
            <video
              src={image.url}
              autoPlay
              preload="auto"
              playsInline
              className="w-full h-auto"
            />
          </div>
        </div>
        {/* Sidebar */}
        <div className="sm:w-[20%] px-4 overflow-y-auto flex-col my-auto">
          <h2 className="text-xl font-bold">{projectData.title}</h2>
          <br />
          <p>
            <a
              target="_blank"
              rel="noopener noreferrer"
              href={projectData.link}
            >
              {projectData.link}
            </a>
          </p>
          <br />
          <p>
            {projectData.skills.map((item) => (
              <span
                key={item}
                className="inline-block bg-gray-300 dark:bg-white rounded-lg px-2 py-0 text-sm mr-2 font-semibold text-gray-700 mb-4"
              >
                {item}
              </span>
            ))}
          </p>
          <br />
          {projectData.description}
        </div>
      </motion.div>
    </div>
  );
};

export default ImageModal;
