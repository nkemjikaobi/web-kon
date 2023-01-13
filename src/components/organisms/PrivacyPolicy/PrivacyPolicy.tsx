import React from "react";

import PrivacyPolicyContent from "./PrivacyPolicyContent";

const PrivacyPolicy = () => {
  return (
    <div>
      <div className="pt-20 smallLaptop:pt-[140px] bg-gradient-to-b from-[#B7D9EC] to-[white]">
        <div className="flex justify-center items-center">
          <div>
            <h1 className="text-center font-recoleta  text-24 smallLaptop:text-64 font-semibold text-citiBlue-b800">Legal Information</h1>
            <p className="mt-4 text-center text-14 smallLaptop:text-16">Citisquare’s Terms and Conditions, Privacy Policy.</p>
          </div>
        </div>
        <div>
          <img src="/images/png/carsAndMountain.png" />
        </div>
      </div>

      <div className="px-4 smallLaptop:px-[205px] mt-8 flex">
        <div className="hidden smallLaptop:block w-[30%]">
          <h3 className="text-14 smallLaptop:text-18 text-citiBlue-400 font-bold">Privacy Policy</h3>
          <ol className="hidden smallLaptop:block list-decimal pl-6 text-16 text-citiBlue-b100">
            <a className="active:text-citiBlue-400 target:text-citiBlue-400 focus:text-citiBlue-400" href="#introduction">
              <li className="mt-2">&nbsp; Introduction</li>
            </a>
            <a href="#definition">
              <li className="mt-2">&nbsp; Definition</li>
            </a>
            <a href="#information">
              <li className="mt-2">&nbsp; Information Collection and Use</li>
            </a>
            <a href="#data-collection">
              <li className="mt-2">&nbsp; Types of Data Collected</li>
            </a>
            <a href="#data-use">
              <li className="mt-2">&nbsp; Use of Data</li>
            </a>
            <a href="#data-retention">
              <li className="mt-2">&nbsp; Retention of Data</li>
            </a>
            <a href="#data-transfer">
              <li className="mt-2">&nbsp; Transfer of Data</li>
            </a>
            <a href="#data-disclosure">
              <li className="mt-2">&nbsp; Disclosure of Data</li>
            </a>
            <a href="#data-security">
              <li className="mt-2">&nbsp; Security of Data</li>
            </a>
            <a href="#gdpr">
              <li className="mt-2">&nbsp; Your Data Protection Rights (GDPR)</li>
            </a>
            <a href="#oppa">
              <li className="mt-2">&nbsp; Your Data Protection Rights (calOPPA)</li>
            </a>
            <a href="#ccpa">
              <li className="mt-2">&nbsp; Your Data Protection Rights (CCPA)</li>
            </a>
            <a href="#service-providers">
              <li className="mt-2">&nbsp; Service Providers</li>
            </a>
            <a href="#analytics">
              <li className="mt-2">&nbsp; Analytics</li>
            </a>
            <a href="#ci-cd">
              <li className="mt-2">&nbsp; CI/CD Tools</li>
            </a>
            <a href="#remarketing">
              <li className="mt-2">&nbsp; Behavioural Re-marketing</li>
            </a>
            <a href="#payments">
              <li className="mt-2">&nbsp; Payments</li>
            </a>
            <a href="#other-sites">
              <li className="mt-2">&nbsp; Links to Other Sites</li>
            </a>
            <a href="#children-privacy">
              <li className="mt-2">&nbsp; Children’s Privacy</li>
            </a>
            <a href="#change-policy">
              <li className="mt-2">&nbsp; Changes to the Privacy Policy</li>
            </a>
            <a href="#contact-us">
              <li className="mt-2">&nbsp; Contact Us</li>
            </a>
          </ol>
        </div>
        <div className="w-full smallLaptop:w-[70%]">
          <PrivacyPolicyContent />
        </div>
      </div>
    </div>
  );
};

export default PrivacyPolicy;
