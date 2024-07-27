import { motion } from "framer-motion";
import styles from "./TableOfContents.module.css";

interface Heading {
  level: number;
  href: string;
  title: string;
}

interface TableOfContentsProps {
  headings: Heading[];
  isExpanded: boolean;
  handleToggle: () => void;
}

export default function TableOfContents({
  headings,
  isExpanded,
  handleToggle,
}: TableOfContentsProps) {
  if (headings.length === 0) {
    return <br />;
  } else {
    return (
      <div
        id="table-of-contents"
        className={`${styles.tableOfContents} ${
          isExpanded ? styles.expanded : ""
        }`}
      >
        <h2 onClick={handleToggle}>
          Table of Contents
          <span className={styles.expandIcon}>&#x25B2;</span>
        </h2>
        <motion.ul
          animate={{
            height: isExpanded ? "auto" : 0,
            padding: isExpanded ? "0.5rem" : 0,
            // Setting duration here is essential to sync the padding and height animations
            transition: { duration: 0.2 },
          }}
        >
          {headings.map((heading, index) => (
            <li
              key={index}
              className={styles[`heading-level-${heading.level}`]}
            >
              <a href={`#${heading.href}`}>{heading.title}</a>
            </li>
          ))}
        </motion.ul>
      </div>
    );
  }
}
