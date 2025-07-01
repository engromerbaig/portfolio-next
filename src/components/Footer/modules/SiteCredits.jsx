import React from "react";

function SiteCredits() {
  const currentYear = new Date().getFullYear();

  return (
    <div className="flex justify-center items-center py-3 border-b-2 border-gray-200">
      <p>
        Copyright ©<span className="text-theme-blue"> Muhammad Omer Baig {currentYear}.</span>
      </p>
    </div>
  );
}

export default SiteCredits;
