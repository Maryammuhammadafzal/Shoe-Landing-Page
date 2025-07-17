import Image from "next/image";
import BannerPage from "./banner/page";
import TestimonialPage from "./testimonial/page";
import ShopPage from "./shop/page";
import FeaturedPage from "./featured/page";
import Slider from "@/components/Slider";
import AboutPage from "./about/page";

export default function Home() {
  return (
    <div className="w-full h-auto overflow-hidden">
      <AboutPage/>
      <Slider/>
      <FeaturedPage/>
      <ShopPage/>
      <TestimonialPage/>
      <BannerPage/>
    </div>
  );
}
