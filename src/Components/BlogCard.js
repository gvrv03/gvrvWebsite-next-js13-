import Image from "next/image";
import Link from "next/link";

export default function BlogCard(props) {
  const { title, category, description, image, id, views ,fullTitle} = props ? props : {};
  return (
    <div className="w-full border hover:shadow-md md:w-auto ">
      <div className=" rounded-sm">
        <img className="w-full md:h-44" src={image} alt={title} />
        <div className="p-2 bg-white ">
          <h2 className="tracking-widest text-xs title-font text-gray-500  font-medium mb-1">
            {category}
          </h2>
          <h1 className="title-font text-xs md:text-sm font-bold   mb-3">
            {title}
          </h1>
          <p className="leading-relaxed text-justify mb-3 text-[10px] md:text-sm  text-gray-600">
            {description}
          </p>
          <div className="flex items-center flex-wrap ">
            <Link
              href={{
                pathname: `/Blogs/Blog/` + fullTitle.replaceAll(" ", "_"),
                search: "?ID=" + id,
              }}
              className="text-indigo-500 inline-flex items-center text-xs md:text-sm   md:mb-2 lg:mb-0"
            >
              Learn More
              <svg
                className="w-4 h-4 ml-2"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth="2"
                fill="none"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M5 12h14"></path>
                <path d="M12 5l7 7-7 7"></path>
              </svg>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
