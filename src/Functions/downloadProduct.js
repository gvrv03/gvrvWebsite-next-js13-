import { toast } from "react-toastify";
import { downloadProductURL } from "../../allLinks";

export const downloadProduct = async (id, title) => {
  const res = await fetch(downloadProductURL, {
    method: "POST", // or 'GET', 'PUT', 'DELETE', etc.
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      pid: id,
    }),
  });
  const productLink = await res.json();
  const link = document.createElement("a");
  link.href = productLink;
  link.download = title + ".zip";
  link.click();
  toast.success("Product Downloaded");
};
