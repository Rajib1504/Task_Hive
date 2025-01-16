import React from "react";

const SectionTitle = ({ heading, subHeading }) => {
  return (
    <div className="text-center w-3/4 md:w-1/2 mx-auto my-14">
      {/* <div className="divider"></div> */}
      <h3 className="md:text-3xl lg:text-4xl text-xl py-2 font-semibold ">
        {heading}
      </h3>
      <p className="text-secondary mb-2 md:text-lg text-sm ">{subHeading}</p>
    </div>
  );
};

export default SectionTitle;
