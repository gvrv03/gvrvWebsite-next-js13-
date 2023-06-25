import { Skeleton } from "@mui/material";
import Image from "next/image";
import Link from "next/link";

export default function BlogSkeleton() {
  return (
    <div className="w-full md:w-auto bg-white ">
      <div className=" rounded-sm">
        <Skeleton variant="rectangular" width="100%" height={150} />
        <div className="p-5 ">
          <Skeleton variant="rectangular" width="100%" height={15} />
          <Skeleton variant="rectangular" width="100%" height={40} />

          <div className="flex gap-1 items-center justify-between flex-wrap mt-5 ">
            <Skeleton variant="rectangular" width={200} height={15} />
            <Skeleton variant="rectangular" width={100} height={15} />
          </div>
        </div>
      </div>
    </div>
  );
}
