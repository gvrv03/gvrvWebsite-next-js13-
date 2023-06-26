import { Skeleton } from "@mui/material";
import Image from "next/image";
import Link from "next/link";

export default function BlogSkeleton() {
  return (
    <div className="w-full  border md:w-auto bg-white ">
      <div className=" rounded-sm">
        <Skeleton variant="rectangular" width="100%"  className="h-[200px] md:h-[250px]" />
        <div className="p-2 ">
          <Skeleton variant="rectangular" width="100%" height={15} />
          <Skeleton variant="rectangular" width="100%" height={40} />

          <div className="flex gap-1 items-center justify-between flex-wrap mt-2 ">
            <Skeleton variant="rectangular" width={200} height={15} />
            <Skeleton variant="rectangular" width={100} height={15} />
          </div>
        </div>
      </div>
    </div>
  );
}
