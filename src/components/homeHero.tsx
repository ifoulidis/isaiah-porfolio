"use client";

import React from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect } from "react";
import Screenshot1 from "../../public/images/grappling-hq-1.png";
import Screenshot2 from "../../public/images/spitfire-records-1.png";
import Screenshot3 from "../../public/images/what-is-truth-screenshot-2.png";

import Image from "next/image";
import ImageModal from "./ui/image-modal";
import useScreenSize from "./ui/screen-size";

type VisibilityState = {
  opacity: number;
};

function HomeHero() {
  const [index, setIndex] = useState<number>(1);
  const [visible, setVisible] = useState<boolean>(false);
  const { width } = useScreenSize();

  const [clickTap, setClickTap] = useState<string>(
    width < 776 ? "Tap" : "Click"
  );

  const images: string[] = [Screenshot1.src, Screenshot2.src, Screenshot3.src];

  const tops: string[] = [
    "calc(60% - 175px)",
    "calc(60% - 250px)",
    "calc(60% - 325px)",
  ];

  const lefts: string[] = [
    "calc(50% - 375px)",
    "calc(50% - 250px)",
    "calc(50% - 125px)",
  ];

  const mobileLefts: string[] = [
    "calc(50% - 200px)",
    "calc(50% - 150px)",
    "calc(50% - 100px)",
  ];

  const animateTops = [
    "calc(60% - 250px)",
    "calc(60% - 325px)",
    "calc(60% - 400px)",
  ];

  const [disappear, setDisappear] = useState<VisibilityState>({ opacity: 1 });

  function onTap(i: number) {
    setIndex(i);
    setDisappear({ opacity: 0 });
  }

  function inspect(i: number) {
    setIndex(i);
    setVisible(true);
  }

  function reappear() {
    setDisappear({ opacity: 1 });
    setVisible(false);
  }

  useEffect(() => {
    const html = document.getElementsByTagName("html")[0];

    if (visible) {
      html.classList.add("lock-scroll");
    } else {
      html.classList.remove("lock-scroll");
    }
  }, [visible]);

  useEffect(() => {
    if (width < 776 && clickTap !== "Tap") {
      setClickTap("Tap");
    } else if (width >= 776 && clickTap !== "Click") {
      setClickTap("Click");
    }
  }, [width]);

  const imgDimensions: number[] = [500, 250, 300, 150];

  return (
    <div className="h-[100vh] flex justify-center items-center sticky">
      <AnimatePresence>
        {visible && (
          <ImageModal
            close={() => {
              reappear();
            }}
            index={index}
          />
        )}
      </AnimatePresence>
      {tops.map((value, inx) => (
        <motion.div
          key={inx}
          className="cursor-pointer absolute p-2 rounded-sm bg-gray-200 dark:bg-slate-800"
          initial={{
            top: value,
            rotateX: "20deg",
            rotateY: "30deg",
            translateZ: "0px",
          }}
          style={{
            left: width < 776 ? mobileLefts[inx] : lefts[inx],
            zIndex: `${inx === 0 ? "6" : inx === 1 ? "4" : "2"}`,
          }}
          whileHover={{
            top: animateTops[inx],
          }}
          animate={disappear}
          onTap={() => onTap(inx)}
          onClick={() => inspect(inx)}
        >
          <Image
            src={images[inx]}
            width={width < 776 ? imgDimensions[2] : imgDimensions[0]}
            height={width < 776 ? imgDimensions[3] : imgDimensions[1]}
            alt={`Portfolio Screenshot ${inx}`}
          />
        </motion.div>
      ))}
      <p className="absolute text-black dark:text-white bottom-[25%] md:bottom-[20%]">
        {clickTap} to see more
      </p>
    </div>
  );
}

export default HomeHero;
