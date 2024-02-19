import Breadcumb3 from "@/components/breadcumb/Breadcumb3";

import HeaderInfo1 from "@/components/section/HeaderInfo1";
import ShopArea1 from "@/components/section/ShopArea1";

export const metadata = {
  title: "Pro Contractors Plus",
};

export default function page() {
  return (
    <>
      <Breadcumb3 path={["Home", "Services", "Design & Creative"]} />
      <HeaderInfo1
        title="Quality Tools and Supplies, Delivered to Your Doorstep:"
        brief="Visit our online shop for a curated selection of high-quality tools and supplies for your home
        improvement projects. From power tools to safety gear, we've got everything you need to tackle
        your projects with confidence. Enhance your project experience with top-notch tools from ProContractorsPlus.com.

        "
      />
      <ShopArea1 />
    </>
  );
}
