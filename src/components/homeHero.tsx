"use client";

import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import Screenshot1 from "../../public/images/grappling-hq-1.png";
import Screenshot2 from "../../public/images/spitfire-records-1.png";
import Screenshot3 from "../../public/images/what-is-truth-screenshot-2.png";
import ImageModal from "./ui/image-modal";
import useScreenSize from "./ui/screen-size";

type VisibilityState = {
  opacity: number;
};

function HomeHero() {
  const [index, setIndex] = useState<number>(1);
  const [visible, setVisible] = useState<boolean>(false);
  const [disappear, setDisappear] = useState<VisibilityState>({ opacity: 1 });
  const { width } = useScreenSize();

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

  const animateTops = [
    "calc(60% - 250px)",
    "calc(60% - 325px)",
    "calc(60% - 400px)",
  ];

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

  const imgDimensions: number[] = [500, 250, 300, 150];

  return (
    <div className="min-h-[80vh] flex justify-center sm:items-center sm:py-20 p-3 sm:mt-[80px] sticky">
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
      {width > 776 ? (
        <>
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
                left: lefts[inx],
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
                width={imgDimensions[0]}
                height={imgDimensions[1]}
                alt={`Portfolio Screenshot ${inx}`}
              />
            </motion.div>
          ))}
          <p className="absolute font-bold text-black dark:text-white bottom-[25%] md:bottom-[20%]">
            Click to see more
          </p>
        </>
      ) : (
        <div className="flex flex-col items-center py-0">
          {images.map((src, inx) => (
            <motion.div
              key={inx}
              className="cursor-pointer p-2 rounded-sm bg-gray-200 dark:bg-slate-800 my-3"
              initial={{ opacity: 1 }}
              animate={{ opacity: disappear.opacity }}
              onTap={() => onTap(inx)}
              onClick={() => inspect(inx)}
            >
              <Image
                src={src}
                width={imgDimensions[2]}
                height={imgDimensions[3]}
                alt={`Portfolio Screenshot ${inx}`}
              />
            </motion.div>
          ))}
          <p className="font-bold py-10">Tap to see more</p>
        </div>
      )}
    </div>
  );
}

export default HomeHero;
