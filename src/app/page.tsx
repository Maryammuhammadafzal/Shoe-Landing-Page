import Image from "next/image";
import BannerPage from "./banner/page";
import TestimonialPage from "./testimonial/page";
import ShopPage from "./shop/page";

export default function Home() {
  return (
    <div className="w-full h-auto overflow-hidden">
      <ShopPage/>
      <TestimonialPage/>
      <BannerPage/>
    </div>
  );
}
