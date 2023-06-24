import * as React from "react";
import Box from "@mui/material/Box";
import ImageList from "@mui/material/ImageList";
import ImageListItem from "@mui/material/ImageListItem";

export default function ProductImageList({ ImageData, title }) {
  return (
    <Box sx={{ width: "100%", height: 450, overflowY: "scroll" }}>
      <ImageList variant="masonry" cols={3} gap={8}>
        {ImageData.map((item) => (
          <ImageListItem key={item.img}>
            <img
              src={`${item}?w=248&fit=crop&auto=format`}
              alt={title}
              loading="lazy"
            />
          </ImageListItem>
        ))}
      </ImageList>
    </Box>
  );
}
