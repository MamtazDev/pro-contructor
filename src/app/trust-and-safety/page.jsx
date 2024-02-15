import Breadcumb1 from "@/components/breadcumb/Breadcumb1";
import Header12 from "@/components/header/Header12";
import React from "react";
export const metadata = {
  title:
    "Freeio - Freelance Marketplace React/Next Js Template | privacy policy",
};
const page = () => {
  return (
    <div>
      <Header12 />
      <Breadcumb1
        title={"Trust & Safety"}
        brief={`Building Trust and Ensuring Safety on ProContractorsPlus.com`}
        isBtnActive={false}
      />
      <div className="container for-hire">
        <p className="text mb30 mt-4">
          At ProContractorsPlus.com, your trust and safety are paramount. We are
          committed to creating a secure platform for both homeowners and
          contractors.
        </p>
        <h4 className="mb-3">Key Trust & Safety Measures: </h4>

        <div className="d-flex gap-1">
          <h5>Verified Accounts:</h5>
          <p>
            Encourage contractors and homeowners to verify their accounts for
            enhanced trust within the community.
          </p>
        </div>
        <div className="d-flex gap-1">
          <h5>Secure Transactions:</h5>
          <p>
            Our platform employs secure payment methods to protect your
            financial information.
          </p>
        </div>
        <div className="d-flex gap-1 ">
          <h5>Community Guidelines:</h5>
          <p>
            Familiarize yourself with our community guidelines to maintain a
            respectful and secure environment for all users.
          </p>
        </div>
        <div className="d-flex gap-1 mb30">
          <h5>Reporting Issues:</h5>
          <p>
            {" "}
            If you come across any suspicious activity or have concerns,
            promptly report them to our Trust & Safety team.
          </p>
        </div>
        <h4 className="mb-3">Your Role in Trust & Safety: </h4>
        <p className="text mb30 ">
          Every member plays a crucial role in maintaining a safe environment.
          Follow best practices, report issues promptly, and communicate
          respectfully.
        </p>
        <h4 className="mb-3">Contact Trust & Safety: </h4>
        <p className="text mb45 ">
          If you have concerns related to trust and safety, please contact our
          Trust & Safety team at trustandsafety@procontractorsplus.com.
        </p>
      </div>
    </div>
  );
};

export default page;
