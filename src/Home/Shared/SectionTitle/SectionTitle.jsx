import React from "react";

const SectionTitle = ({ heading, subHeading }) => {
  return (
    <div className="text-center  w-1/2 border-y-4 mx-auto my-10">
      {/* <div className="divider"></div> */}
      <h3 className="md:text-2xl text-2xl py-2 font-semibold ">{heading}</h3>
      <p className="text-secondary mb-2 md:text-lg ">{subHeading}</p>
    </div>
  );
};

export default SectionTitle;
