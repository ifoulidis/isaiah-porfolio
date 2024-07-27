"use client";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import type { OstDocument } from "outstatic";
import "../styles/global.css";
import styles from "../styles/content-grid.module.css";
import { motion, useTransform } from "framer-motion";
import { cardList } from "./ui/variants";
import { useScroll } from "framer-motion";
import { useRef } from "react";

type Item = {
  tags?: { value: string; label: string }[];
} & OstDocument;

type Props = {
  collection: string;
  title?: string;
  items: Item[];
  priority?: boolean;
  viewAll?: boolean;
};

const ContentGrid = ({
  title = "More",
  items,
  collection,
  priority = false,
  viewAll = false,
}: Props) => {
  const refs = items.map(() => useRef(null));
  const scrollProgresses = items.map((_, index) =>
    useScroll({ target: refs[index], offset: ["center end", "end end"] })
  );

  const scales = items.map((_, index) =>
    useTransform(scrollProgresses[index].scrollYProgress, [0, 1], ["0.2", "1"])
  );

  return (
    <section id={collection} className="mb-24 relative max-w-6xl">
      <div className="flex gap-4 md:gap-6 items-end">
        <h2 className="text-4xl md:text-6xl font-bold tracking-tighter leading-tight capitalize">
          {title}
        </h2>
        {viewAll ? (
          <Button asChild variant="outline" className="hidden md:flex">
            <Link href={`/${collection}`} className="gap-2">
              View all <ArrowRight size={16} />
            </Link>
          </Button>
        ) : null}
      </div>
      <motion.div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 sm:gap-x-6 lg:gap-x-8 gap-y-5 sm:gap-y-6 lg:gap-y-8 mt-4 md:mt-8">
        {items.map((item, id) => (
          <Link key={item.slug} href={`/${collection}/${item.slug}`}>
            <motion.div
              className={styles.customCard}
              ref={refs[id]}
              style={{ scale: scales[id] }}
            >
              <motion.div
                variants={cardList}
                className="h-[calc(100%-4px)] w-[calc(100%-4px)] bg-slate-800 text-white border relative rounded-md "
              >
                <Image
                  src={item.coverImage || `/api/og?title=${item.title}`}
                  alt=""
                  className="border-b md:h-[180px] w-[100%] object-cover object-center"
                  width={430}
                  height={180}
                  sizes="(min-width: 768px) 347px, 192px"
                  priority={priority && id <= 2}
                />
                <div className="p-4">
                  {Array.isArray(item?.tags)
                    ? item.tags.map(({ label }) => (
                        <span
                          key={label}
                          className="inline-block bg-gray-200 rounded-full px-2 py-0 text-sm font-semibold text-gray-700 mr-2 mb-4"
                        >
                          {label}
                        </span>
                      ))
                    : null}
                  <h3 className="text-xl mb-2 leading-snug font-bold hover:underline ">
                    {item.title}
                  </h3>

                  <p className="text-md leading-relaxed mb-4">
                    {item.description}
                  </p>
                </div>
              </motion.div>
            </motion.div>
          </Link>
        ))}
      </motion.div>

      {viewAll ? (
        <Button asChild variant="secondary" className="md:hidden w-full mt-4">
          <Link href={`/${collection}`} className="gap-2">
            View all {title}
            <ArrowRight size={16} />
          </Link>
        </Button>
      ) : null}
    </section>
  );
};

export default ContentGrid;
