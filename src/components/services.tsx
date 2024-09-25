"use client";

import { motion } from "framer-motion";
import {
  ComputerDesktopIcon,
  ShoppingCartIcon,
  DevicePhoneMobileIcon,
  TableCellsIcon,
} from "@heroicons/react/24/outline";
import Link from "next/link";

type Service = {
  title: string;
  description: string;
  icon: JSX.Element;
  queryString: string;
};

const services: Service[] = [
  {
    title: "E-commerce",
    description:
      "Build and manage online stores with all the bells and whistles.",
    icon: <ShoppingCartIcon className="h-12 w-12 text-blue-500" />,
    queryString: "E-commerce",
  },
  {
    title: "Web Design",
    description:
      "Get a full-featured, eye-catching website tailored to your needs.",
    icon: <ComputerDesktopIcon className="h-12 w-12 text-green-500" />,
    queryString: "Website",
  },
  {
    title: "Internal Apps",
    description:
      "Request custom applications to streamline your business operations.",
    icon: <DevicePhoneMobileIcon className="h-12 w-12 text-yellow-500" />,
    queryString: "Internal App",
  },
  {
    title: "Data Migration",
    description:
      "Securely transfer your data between systems with minimal downtime.",
    icon: <TableCellsIcon className="h-12 w-12 text-red-500" />,
    queryString: "Data Migration",
  },
];

export default function Services() {
  return (
    <div className="max-w-6xl h-[max-content] mx-auto px-4 py-16 border-y-2 border-gray-500">
      <h2 className="text-3xl font-bold text-center mb-12 text-gray-900 dark:text-gray-100">
        Services
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
        {services.map((service, index) => (
          <Link href={`/contact?subject=${service.queryString}`} key={index}>
            <motion.div
              initial={{ opacity: 0, y: 100 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-lg flex flex-col items-center text-center"
            >
              {service.icon}
              <h3 className="text-xl font-semibold text-gray-900 dark:text-gray-100 mt-4">
                {service.title}
              </h3>
              <p className="text-gray-600 dark:text-gray-400 mt-2">
                {service.description}
              </p>
            </motion.div>
          </Link>
        ))}
      </div>
    </div>
  );
}
