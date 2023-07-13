import React from "react";

const SingleStarCount = ({starCounts}) => {
  return (
    <div className="p-5          -gray-200 rounded-md">
      <div className="flex items-center w-full gap-3">
        <div>5</div>
        <div>
          <i className="bi bi-star-fill text-yellow-500" />
        </div>
        <div className="w-full      rounded-full">
          <div
            style={{
              width: !starCounts.star5 ? "0%" : starCounts.star5 + "%",
            }}
            className="p-1 rounded-full bg-yellow-300"
          />
        </div>
        <div> {!starCounts.star5 ? "0%" : starCounts.star5 + "%"}</div>
      </div>

      <div className="flex items-center w-full gap-3">
        <div>4</div>
        <div>
          <i className="bi bi-star-fill text-yellow-500" />
        </div>
        <div className="w-full      rounded-full">
          <div
            style={{
              width: !starCounts.star4 ? "0%" : starCounts.star4 + "%",
            }}
            className="p-1 rounded-full bg-yellow-300"
          />
        </div>
        <div>{!starCounts.star4 ? "0%" : starCounts.star4 + "%"}</div>
      </div>

      <div className="flex items-center w-full gap-3">
        <div>3</div>
        <div>
          <i className="bi bi-star-fill text-yellow-500" />
        </div>
        <div className="w-full      rounded-full">
          <div
            style={{
              width: !starCounts.star3 ? "0%" : starCounts.star3 + "%",
            }}
            className="p-1 rounded-full bg-yellow-300"
          />
        </div>
        <div>{!starCounts.star3 ? "0%" : starCounts.star3 + "%"}</div>
      </div>

      <div className="flex items-center w-full gap-3">
        <div>2</div>
        <div>
          <i className="bi bi-star-fill text-yellow-500" />
        </div>
        <div className="w-full      rounded-full">
          <div
            style={{
              width: !starCounts.star2 ? "0%" : starCounts.star2 + "%",
            }}
            className="p-1 rounded-full bg-yellow-300"
          />
        </div>
        <div>{!starCounts.star2 ? "0%" : starCounts.star2 + "%"}</div>
      </div>

      <div className="flex items-center w-full gap-3">
        <div>1</div>
        <div>
          <i className="bi bi-star-fill text-yellow-500" />
        </div>
        <div className="w-full      rounded-full">
          <div
            style={{
              width: !starCounts.star1 ? "0%" : starCounts.star1 + "%",
            }}
            className="p-1 rounded-full bg-yellow-300"
          />
        </div>
        <div>{!starCounts.star1 ? "0%" : starCounts.star1 + "%"}</div>
      </div>
    </div>
  );
};

export default SingleStarCount;
