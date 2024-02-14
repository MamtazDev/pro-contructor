import Breadcumb1 from "@/components/breadcumb/Breadcumb1";
import Header12 from "@/components/header/Header12";
import React from "react";

const page = () => {
  return (
    <div>
      <Header12 />
      <Breadcumb1
        title={"Partnerships"}
        brief={`Forge Collaborative Partnerships with ProContractorsPlus.com`}
        isBtnActive={false}
      />
      <div className="container for-hire">
        <p className="text mb30">
          At ProContractorsPlus.com, we believe in the power of partnerships to
          create mutually beneficial opportunities. If you're interested in
          collaborating with us, we welcome the chance to explore innovative
          partnerships
        </p>

        <h4 className="mb-2">Why Partner with ProContractorsPlus.com? </h4>
        <div className="d-flex gap-1">
          <h5>Market Leadership:</h5>
          <p>
            Join forces with a market leader in the project management and
            contractor services industry.
          </p>
        </div>
        <div className="d-flex gap-1">
          <h5>Innovative Solutions:</h5>
          <p>
            Leverage our cutting-edge platform and tools to enhance your
            services and reach a broader audience
          </p>
        </div>
        <div className="d-flex gap-1 mb30">
          <h5>Shared Values:</h5>
          <p>
            Partner with a company that values integrity, transparency, and
            excellence in service
          </p>
        </div>

        <h4 className="mb-2">How to Partner: </h4>
        <p className="text mb45">
          If you're interested in exploring partnership opportunities, please
          reach out to our partnership team at
          partnerships@procontractorsplus.com
        </p>
      </div>
    </div>
  );
};

export default page;
