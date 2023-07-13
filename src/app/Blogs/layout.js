import React from "react";
const BlogsLayout = ({ children }) => {
  const HeaderName = (props) => {
    return (
      <h2 className="font-bold     -b-2  relative">{props.name}</h2>
    );
  };

  const SingleBlogCard = () => {
    return (
      <div className="flex bg-gray-100  rounded-sm justify-start items-center gap-5 p-2">
        <img
          src="https://www.stxnext.com/hubfs/blog-post-graphic-Best-Django-packages-and-libraries.webp"
          alt=""
          className="w-20"
          srcSet=""
        />{" "}
        <span>
          <h4 className="text-[10px] font-semibold">
            Using dangerouslySetInnerHTML in a React application
          </h4>
          <h6 className="text-xs mt-2 font-light">Python</h6>
        </span>
      </div>
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
    <div className=" container m-auto   md:relative justify-between  flex-col-reverse md:flex-row flex  gap-5 ">
      <aside className=" md:w-[15%] md:fixed  md:mt-[140px] w-full    flex bg-white    p-5 flex-col gap-5 items-start ">
        <div className="w-full">
          <HeaderName name="Recent Post" />
          <div className="mt-2 flex-col flex gap-2">
            <div className="mt-2 flex-col flex gap-2">
              <SingleBlogCard />
              <SingleBlogCard />
              <SingleBlogCard />
              <SingleBlogCard />
            </div>
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

export default BlogsLayout;
