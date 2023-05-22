import { Skeleton } from "@mui/material";
import Image from "next/image";
import Link from "next/link";

export default function BlogSkeleton() {
  return (
    <div className="w-full md:w-auto bg-white ">
      <div className=" rounded-sm">
        <Skeleton variant="rectangular" width="100%" height={250} />
        <div className="p-5 ">
          <Skeleton variant="rectangular" width="100%" height={20} />
          <Skeleton variant="rectangular" width="100%" height={20} />
          <Skeleton variant="rectangular" width="100%" height={40} />

          <div className="flex items-center justify-between flex-wrap mt-5 ">
            <Skeleton variant="rectangular" width={200} height={20} />
            <Skeleton variant="rectangular" width={100} height={20} />
          </div>
        </div>
      </div>
    </div>
  );
}
