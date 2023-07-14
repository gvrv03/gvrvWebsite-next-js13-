import React from "react";



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


const ProductLayout = ({ children }) => {
  const HeaderName = (props) => {
    return (
      <h2 className="font-bold     -b pb-2 relative">{props.name}</h2>
    );
  };

  const FollowUs = () => {
    return (
      <div className="flex gap-2 justify-between items-center">
        <div className=" flex w-full py-2 justify-center items-center flex-col text-sm bg-gray-100">
          <i className=" text-3xl uil uil-facebook" />
          <span>100</span> <span>Fans</span>
        </div>

        <div className=" flex w-full py-2 justify-center items-center flex-col text-sm bg-gray-100">
          <i className=" text-3xl uil uil-instagram" />
          <span>500</span> <span>Followers</span>
        </div>
        <div className=" flex w-full py-2 justify-center items-center flex-col text-sm bg-gray-100">
          <i className=" text-3xl uil uil-youtube" />
          <span>50</span> <span>Subscribers</span>
        </div>
      </div>
    );
  };
  return (
    <div className=" container m-auto       md:relative justify-between  flex-col-reverse md:flex-row flex  gap-5 ">
      <aside className=" md:w-[15%] md:fixed  md:mt-[141px] w-full p-5   flex bg-white    flex-col gap-5 items-start ">
        <div className="w-full">
          <HeaderName name="Category" />
          <div className="mt-2 flex-col items-start  flex gap-2">
            <button className="text-gray-600 hover:text-black hover:font-semibold">
              - Template
            </button>
            <button className="text-gray-600 hover:text-black hover:font-semibold">
              - PS Presets
            </button>
            <button className="text-gray-600 hover:text-black hover:font-semibold">
              - Microprojects
            </button>
            <button className="text-gray-600 hover:text-black hover:font-semibold">
              - Cheetsheets
            </button>
            <button className="text-gray-600 hover:text-black hover:font-semibold">
              - Web Template
            </button>

            <button className="text-gray-600 hover:text-black hover:font-semibold">
              - EBooks
            </button>
            <button className="text-gray-600 hover:text-black hover:font-semibold">
              - Capstone Project
            </button>
          </div>
        </div>{" "}
        <div className="w-full">
          <HeaderName name="Follow Us" />
          <div className="mt-2 flex-col flex gap-2">
            <FollowUs />
          </div>
        </div>{" "}
      </aside>
      <main className=" w-full md:w-4/5 md:absolute md:right-0 text-justify">
        {children}
      </main>
    </div>
  );
};

export default ProductLayout;
