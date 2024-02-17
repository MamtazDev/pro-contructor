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
        title={"Careers"}
        brief={`Join Our Team at ProContractorsPlus.com`}
        isBtnActive={false}
      />
      <div className="container for-hire">
        <p className="text mb30 mt-4">
          Welcome to ProContractorsPlus.com Careers! We are always on the
          lookout for passionate, talented individuals to join our team and
          contribute to our mission of revolutionizing project management.
        </p>
        <h4 className="mb-3">Why Choose ProContractorsPlus.com? </h4>

        <div className="d-flex gap-1">
          <h5>Innovative Environment:</h5>
          <p>
            Be part of a dynamic and innovative work culture where your ideas
            and contributions matter.
          </p>
        </div>
        <div className="d-flex gap-1">
          <h5>Career Growth:</h5>
          <p>
            We believe in investing in our employees. Grow your skills and
            advance your career with opportunities for professional development.
          </p>
        </div>
        <div className="d-flex gap-1 mb30">
          <h5>Collaborative Team:</h5>
          <p>
            Join a diverse and collaborative team that values teamwork,
            communication, and a shared commitment to excellence
          </p>
        </div>
        <h4 className="mb-3">Current Openings: </h4>
        <p className="text mb45 ">
          Explore our current job openings and apply to be a part of our
          exciting journey. We look forward to welcoming new talents to the
          ProContractorsPlus.com family.
        </p>

        <a className="mb45 d-block" href="/">
          [View Current Openings]
        </a>
      </div>
    </div>
  );
};

export default page;
