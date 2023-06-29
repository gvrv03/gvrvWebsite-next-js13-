import * as React from "react";
import Box from "@mui/material/Box";
import ImageList from "@mui/material/ImageList";
import ImageListItem from "@mui/material/ImageListItem";

export default function ProductImageList({ ImageData, title }) {
  return (
    <ImageList variant="masonry" cols={3} gap={8}>
      {ImageData.map((item, index) => (
        <ImageListItem key={index}>
          <img
            src={`${item}?w=248&fit=crop&auto=format`}
            alt={title}
            loading="lazy"
          />
        </ImageListItem>
      ))}
    </ImageList>
  );
}
