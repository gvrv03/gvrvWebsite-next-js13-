import AboutUs from "@/Components/Home/AboutUs";
import ContactUs from "@/Components/Home/ContactUs";
import FeatureBlog from "@/Components/Home/FeatureBlog";
import LandingPage from "@/Components/Home/LandingPage";
import Skills from "@/Components/Home/Skills";

export const metadata = {
  title: "Gaurav Narnaware || Personal Website ",
  applicationName: "Gaurav Narnaware || Personal Website ",
  description:
    "Transforming the Digital Landscape: Expert Web & Software Development Services",
  keywords: [
    "its.gvrv_n",
    "gvrv_n",
    "Gaurav Narnaware",
    "Gaurav Narnaware Ghatanji",
    "Ghatanji",
    "Narnaware Garuav",
  ],
  images: ["/gaurav.svg"],
  url: "/",
  twitter: {
    card: "summary_large_image",
    title: "Gaurav Narnaware || Personal Website ",
    url: "/",
    images: ["/gaurav.svg"],
    creator: "@gvrv_n",
    description:
      "Transforming the Digital Landscape: Expert Web & Software Development Services",
    keywords: [
      "its.gvrv_n",
      "gvrv_n",
      "Gaurav Narnaware",
      "Gaurav Narnaware Ghatanji",
      "Ghatanji",
      "Narnaware Garuav",
    ],
  },
  openGraph: {
    title: "Gaurav Narnaware || Personal Website ",
    url: "/",
    images: ["/gaurav.svg"],
    description:
      "Transforming the Digital Landscape: Expert Web & Software Development Services",
    keywords: [
      "its.gvrv_n",
      "gvrv_n",
      "Gaurav Narnaware",
      "Gaurav Narnaware Ghatanji",
      "Ghatanji",
      "Narnaware Garuav",
    ],
  },

  robots: {
    index: true,
    follow: true,
    nocache: true,
    googleBot: {
      index: true,
      follow: true,
      noimageindex: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

export default function Home() {
  return (
    <main>
      <LandingPage />
      <div className="container  m-auto">
        <AboutUs />
        <Skills />
        <FeatureBlog />
        <ContactUs />
      </div>
    </main>
  );
}
