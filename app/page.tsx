import styles from "./page.module.css";
import Carousel from "./components/ui/carousel/carousel";
import Info from "./components/homepage/info/info";
import Statistics from "./components/homepage/statistics/statistics";
import Banner from "./components/homepage/banner/banner";
import FeaturesGrid from "./components/homepage/featuresGrid/featuresGrid";
import { heroSlides, completedProjects } from "@/app/data/others/appData";
import FeaturesStories from "./components/homepage/featuresStories/featuresStories";

export default function Home() {
  return (
    <div className={styles.page}>
      <Carousel slides={heroSlides} />
      <Info />
      <Statistics />
      <Banner />
      <FeaturesGrid />
      <Carousel slides={completedProjects} />
      <FeaturesStories />
    </div>
  );
}
