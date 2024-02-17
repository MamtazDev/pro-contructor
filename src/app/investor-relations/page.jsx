import Breadcumb1 from "@/components/breadcumb/Breadcumb1";
import React from "react";

const page = () => {
  return (
    <div>

      <Breadcumb1
        title={"Investor Relations"}
        brief={`Investor Relations at ProContractorsPlus.com`}
        isBtnActive={false}
      />
      <div className="container for-hire">
        <p className="text mb30">
          Welcome to the Investor Relations hub of ProContractorsPlus.com. Here,
          you'll find information about our financial performance, corporate
          governance, and updates for our valued investors.
        </p>

        <h4 className="mb-3">Investor Resources: </h4>
        <div className="d-flex gap-1">
          <h5>Financial Reports:</h5>
          <p>
            Access our quarterly and annual financial reports for in-depth
            insights into our performance.
          </p>
        </div>
        <div className="d-flex gap-1">
          <h5>Investor Presentations:</h5>
          <p>
            Explore presentations providing an overview of
            ProContractorsPlus.com's strategy, goals, and achievements.
          </p>
        </div>
        <div className="d-flex gap-1 mb30 ">
          <h5>Shareholder Information:</h5>
          <p>
            Find details about our stock, dividends, and other information
            relevant to our shareholders.
          </p>
        </div>

        <h4 className="mb-2">Contact Investor Relations: </h4>
        <p className="text mb45">
          For inquiries related to investor relations, please contact our
          Investor Relations team at investors@procontractorsplus.com. <br />
          We appreciate your interest in ProContractorsPlus.com and look forward
          to keeping you informed about our company's progress.
        </p>
      </div>
    </div>
  );
};

export default page;
