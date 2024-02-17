import Breadcumb1 from "@/components/breadcumb/Breadcumb1";
import React from "react";

const page = () => {
  return (
    <div>
      <Breadcumb1
        title={"Help & Support"}
        brief={`Welcome to ProContractorsPlus.com Help & Support`}
        isBtnActive={false}
      />
      <div className="container for-hire">
        <p className="text mb30">
          At ProContractorsPlus.com, we are dedicated to providing exceptional
          support to ensure a smooth experience for our users. Whether you're a
          homeowner or a contractor, our Help & Support resources are designed
          to assist you.
        </p>

        <h4 className="mb-3">How Can We Assist You Today? </h4>
        <div className="d-flex gap-1">
          <h5>FAQs:</h5>
          <p>
            Browse through our Frequently Asked Questions for quick solutions to
            common queries
          </p>
        </div>
        <div className="d-flex gap-1">
          <h5>Contact Us:</h5>
          <p>
            Reach out to our support team via email at
            support@procontractorsplus.com
          </p>
        </div>
        <div className="d-flex gap-1 ">
          <h5>Live Chat:</h5>
          <p>
            Connect with a support representative in real-time through our live
            chat feature, accessible on our website.
          </p>
        </div>
        <div className="d-flex gap-1 mb30">
          <h5>User Guides:</h5>
          <p>
            Explore our comprehensive user guides and tutorials for step-by-step
            assistance.
          </p>
        </div>

        <h4 className="mb-2">Your Feedback Matters: </h4>
        <p className="text mb45">
          We value your feedback. If you have suggestions, encounter issues, or
          want to share your experience, please let us know. Your insights help
          us enhance our services
        </p>
        <h4 className="mb-2">Stay Connected: </h4>
        <p className="text mb45">
          Follow us on social media for updates, tips, and announcements
        </p>
      </div>
    </div>
  );
};

export default page;
