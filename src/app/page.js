import AboutUs from "@/Components/Home/AboutUs";
import ContactUs from "@/Components/Home/ContactUs";
import FeatureBlog from "@/Components/Home/FeatureBlog";
import LandingPage from "@/Components/Home/LandingPage";
import Skills from "@/Components/Home/Skills";

export default function Home() {
  return (
    <main>
      <LandingPage />
      <AboutUs />
      <Skills />
      <FeatureBlog />
      <ContactUs />
    </main>
  );
}
