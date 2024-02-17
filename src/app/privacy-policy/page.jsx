import Breadcumb1 from "@/components/breadcumb/Breadcumb1";
import React from "react";
export const metadata = {
  title:
    "Freeio - Freelance Marketplace React/Next Js Template | privacy policy",
};
const page = () => {
  return (
    <div>
      <Breadcumb1
        title={"Privacy Policy"}
        brief={`Your Privacy Matters at ProContractorsPlus.com`}
        isBtnActive={false}
      />
      <div className="container for-hire">
        <p className="text mb30 mt-4">
          At ProContractorsPlus.com, we are committed to protecting your
          privacy. Our Privacy Policy outlines how we collect, use, and
          safeguard your personal information.
        </p>
        <h4 className="mb-3">Key Privacy Principles: </h4>

        <div className="d-flex gap-1">
          <h5>Data Collection:</h5>
          <p>Understand what personal information we collect and why</p>
        </div>
        <div className="d-flex gap-1">
          <h5>Data Usage:</h5>
          <p>
            Learn how we use your information to enhance your experience on
            ProContractorsPlus.com.
          </p>
        </div>
        <div className="d-flex gap-1 mb30">
          <h5>Security Measures:</h5>
          <p>Discover the security measures in place to protect your data</p>
        </div>
        <h4 className="mb-3">Your Privacy Choices: </h4>
        <p className="text mb45 ">
          Explore your privacy choices and how to manage your preferences on
          ProContractorsPlus.com.
        </p>
      </div>
    </div>
  );
};

export default page;
