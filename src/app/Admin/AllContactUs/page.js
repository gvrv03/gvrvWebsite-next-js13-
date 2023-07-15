"use client";
import { FullScreenLoader } from "@/Components/Spinner/LoadingSpinner";
import ContactUsTable from "@/Components/Table/ContactUsTable";
import { AdminPageHeader, NoDataFound } from "@/Components/UtilComponent";
import { useUserNextAuth } from "@/Context/useNextAuthContext";
import { User } from "@/DataSet/DataSet";
import { fetchContacts } from "@/Store/Actions/contactAction";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { utils, write } from "xlsx";

const AllContactUs = () => {
  const dispatch = useDispatch();
  const { userIDS } = useUserNextAuth();

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  const contact = useSelector((state) => state.contact);
  const { isLoading, error, count, totatlPages, data } = contact;

  // download Data
  function convertJsonToXls(jsonData) {
    const worksheet = utils.json_to_sheet(jsonData);
    const workbook = utils.book_new();
    utils.book_append_sheet(workbook, worksheet, "Sheet1");
    const xlsData = write(workbook, { bookType: "xlsx", type: "array" });
    return new Blob([xlsData], {
      type: "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet",
    });
  }

  function downloadXlsFile(jsonData) {
    const xlsBlob = convertJsonToXls(jsonData);
    const fileName = "Contact.xlsx";

    if (navigator.msSaveBlob) {
      // For IE and Edge
      navigator.msSaveBlob(xlsBlob, fileName);
    } else {
      // For other browsers
      const downloadLink = document.createElement("a");
      downloadLink.href = URL.createObjectURL(xlsBlob);
      downloadLink.download = fileName;
      downloadLink.click();
      URL.revokeObjectURL(xlsBlob);
    }
  }

  return (
    <div>
      <AdminPageHeader
        pageName="All Contact"
        totalCount={count}
        refreshFun={() => {
          dispatch(
            fetchContacts({
              queryObj: {},
              page: 1,
              limit: 10,
            })
          );
        }}
        downloadData={() => downloadXlsFile(data)}
        routeLocation="/Admin/CreatePost"
        btnName="Add Contact"
      />

      {error && (
        <div className="  p-5 mt-5">
          Unexpected error occured !{" "}
          <span className="p-1 text-center bg-red-200          -red-300">
            {error}
          </span>{" "}
        </div>
      )}
      {isLoading && <FullScreenLoader />}
      {!isLoading && data.length === 0 ? (
        <NoDataFound
          nameHead="No Contact Found"
          location="/Admin/CreatePost"
          btnTitle="Create New Blog"
        />
      ) : (
        <ContactUsTable
          contact={data}
          totatlPages={totatlPages}
          count={count}
        />
      )}
    </div>
  );
};

export default AllContactUs;
