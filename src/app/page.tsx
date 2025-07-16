import Image from "next/image";
import BannerPage from "./banner/page";

export default function Home() {
  return (
    <div className="w-full h-auto overflow-hidden">
      <BannerPage/>
    </div>
  );
}
