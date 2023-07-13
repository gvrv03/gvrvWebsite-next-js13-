"use client";

import { ToggleButton } from "@mui/material";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import FavoriteIcon from "@mui/icons-material/Favorite";
import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { SavedProduct } from "@/Store/Actions/favouriteAction";
import { toast } from "react-hot-toast";
import { checkSavedProductURL } from "../../../allLinks";
import LoadingSpinner, {
  BtnSpinner2,
  BtnSpinnerBlue,
} from "../Spinner/LoadingSpinner";
import { useUserNextAuth } from "@/Context/useNextAuthContext";

const SavedButton = ({ productID, style, styleicon }) => {
  const [selected, setSelected] = useState(false);
  const [loading, setloading] = useState(false);
  const { isLogin } = useUserNextAuth();

  const checkSvaedAPi = async () => {
    const uID = localStorage.getItem("id");
    const res = await fetch(checkSavedProductURL, {
      method: "POST",
      body: JSON.stringify({
        productID: productID,
        userId: uID,
      }),
    });
    const data = await res.json();
    setSelected(data.isSaved);
  };

  const dispatch = useDispatch();

  const savedProduct = async (e) => {
    e.preventDefault();
    setloading(true);
    if (!isLogin) {
      setloading(false);
      return toast.error("You need to Login !");
    }

    const { payload } = await dispatch(SavedProduct(productID));
    if (payload?.isSuccess) {
      setloading(false);
      return toast.success(payload.message);
    } else {
      setloading(false);
      return toast.error(payload.error);
    }
  };

  useEffect(() => {
    checkSvaedAPi();
  }, [savedProduct]);

  return (
    <button
      type="button"
      disabled={loading ? true : false}
      onClick={savedProduct}
      className={`${style} border `}
    >
      {loading ? (
        <div className=" grid place-items-center">
          <BtnSpinnerBlue />
        </div>
      ) : (
        <i
          className={`bi  ${styleicon}  ${
            selected ? "bi-heart-fill text-red-500 " : "bi-heart"
          }  `}
        />
      )}
    </button>
  );
};

export default SavedButton;
