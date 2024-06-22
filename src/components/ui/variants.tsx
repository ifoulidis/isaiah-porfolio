export const cardList = {
  visible: {
    opacity: 1,
    transition: {
      when: "beforeChildren",
      staggerChildren: 0.3,
      duration: 0.2,
    },
  },
  hidden: { opacity: 0 },
};

export const menuList = {
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.5,
      duration: 0.3,
    },
  },
  hidden: { opacity: 0 },
};

export const cardVariant = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      duration: 0.3,
    },
  },
};
