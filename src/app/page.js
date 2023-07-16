import AboutUs from "@/Components/Home/AboutUs";
import ContactUs from "@/Components/Home/ContactUs";
import FeatureBlog from "@/Components/Home/FeatureBlog";
import LandingPage from "@/Components/Home/LandingPage";
import Skills from "@/Components/Home/Skills";

export const metadata = {
  title: "Gaurav Narnaware || Personal Website ",
  applicationName: "Gaurav Narnaware || Personal Website ",
  description:
    "  Hi, I'm Gaurav Narnaware, an Indian web developer   working out of Maharashtra. I have a strong desire to make the technical and aesthetic components of digital goods come to life. When I'm creating, learning, exploring, and considering ways to improve things, I'm happy.",
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
      "  Hi, I'm Gaurav Narnaware, an Indian web developer working out of Maharashtra. I have a strong desire to make the technical and aesthetic components of digital goods come to life. When I'm creating, learning, exploring, and considering ways to improve things, I'm happy.",
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
      "  Hi, I'm Gaurav Narnaware, an Indian web developer working out of Maharashtra. I have a strong desire to make the technical and aesthetic components of digital goods come to life. When I'm creating, learning, exploring, and considering ways to improve things, I'm happy.",
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
      <div className="container flex flex-col gap-20 m-auto">
        <AboutUs />
        <Skills />
        <FeatureBlog />
        <ContactUs />
      </div>
    </main>
  );
}
