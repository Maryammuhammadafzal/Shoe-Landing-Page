import Image from "next/image";
import BannerPage from "./banner/page";
import TestimonialPage from "./testimonial/page";

export default function Home() {
  return (
    <div className="w-full h-auto overflow-hidden">
      <TestimonialPage/>
      <BannerPage/>
    </div>
  );
}
