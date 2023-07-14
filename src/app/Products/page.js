"use client";
import Allproducts from "@/Components/Product/Allproducts";
import React from "react";
import { useState } from "react";
export const metadata = {
  title: "Products || Gaurav Narnaware",
  description: "Premium Digital products that helps to complete your need ",
  keywords: [
    "Products",
    "DigitalProducts",
    "WebTemplates",
    "WebSites",
    "Ebooks",
    "Templates",
    "Presets",
  ],
  images: ["/gaurav.svg"],
  url: "/Products",
  twitter: {
    card: "summary_large_image",
    title: "Products || Gaurav Narnaware",
    description: "Premium Digital products that helps to complete your need ",
    keywords: [
      "Products",
      "DigitalProducts",
      "WebTemplates",
      "WebSites",
      "Ebooks",
      "Templates",
      "Presets",
    ],
    images: ["/gaurav.svg"],
    url: "/Products",
  },
  openGraph: {
    title: "Products || Gaurav Narnaware",
    description: "Premium Digital products that helps to complete your need ",
    keywords: [
      "Products",
      "DigitalProducts",
      "WebTemplates",
      "WebSites",
      "Ebooks",
      "Templates",
      "Presets",
    ],
    images: ["/gaurav.svg"],
    url: "/Products",
  },

  robots: {
    index: true,
    follow: true,
    nocache: true,
    googleBot: {
      index: true,
      follow: true,
      noimageindex: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

const AllProducts = () => {
  const [page, setpage] = useState(1);

  return (
    <div className=" h-full">
      <Allproducts setpage={setpage} page={page} />
    </div>
  );
};

export default AllProducts;
