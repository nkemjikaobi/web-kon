import React from "react";

const PageNotFound = () => {
  return (
    <div>
      <div className="flex justify-center items-center mt-10">
        <div className="smallLaptop:w-[65%] my-auto text-center ">
          <div className="flex justify-center">
            <h4 className="text-citiBlue-600 bg-citiBlue-b50 w-fit px-4 py-2 rounded-[36px] font-bold text-16">ERROR 404</h4>
          </div>
          <h1 className="font-recoleta font-semibold text-[32px] smallLaptop:text-64 text-citiBlue-900 mt-4">Page Not Found</h1>
          <p className="text-[#0C4A6A] text-16 mt-2">Yes, we know the in’s and out’s of the city, but not this one.</p>
          <div className="bg-citiBlue-b50 mt-8 px-7 smallLaptop:px-20 pt-4 pb-8">
            <h1 className="text-[#147AB0] font-bold mb-2">WHAT HAPPENED?</h1>
            <p>You tried to access a resource, webpage that is not on this site, or no longer on this site. Click on the back button to return to the previous page.</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PageNotFound;
