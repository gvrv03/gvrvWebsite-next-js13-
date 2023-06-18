"use client";
import Footer from "@/Components/Footer";
import Navbar from "@/Components/Navbar";
import { UserAuthContexProvider } from "@/Context/UserAuthContext";
import store from "@/Store/store";
import { Provider } from "react-redux";
import ScrollToTop from "react-scroll-up";
import "./globals.css";

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link
          rel="stylesheet"
          href="https://unicons.iconscout.com/release/v4.0.8/css/line.css"
        />
        <link
          rel="stylesheet"
          href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.10.3/font/bootstrap-icons.css"
        />
      </head>
      <body className="bgBackground  text-black">
        <Provider store={store}>
          <UserAuthContexProvider>
            <Navbar />
            <div className="">
              {children}
            </div>
             {/* <Footer /> */}
            {/* <ScrollToTop showUnder={160}>
              <i className="bi text-3xl pColor bi-arrow-up-square-fill"></i>
            </ScrollToTop> */}
          </UserAuthContexProvider>
        </Provider>
      </body>
    </html>
  );
}
