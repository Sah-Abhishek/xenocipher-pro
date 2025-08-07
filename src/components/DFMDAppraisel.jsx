import React from "react";

const DfmdAppraisal = () => {
  return (
    <section className="bg-black text-white py-16 px-4 md:px-10 lg:px-20">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
        {/* Left: Textual content */}
        <div className="space-y-6">
          <h2 className="text-2xl md:text-3xl font-semibold">
            Best DFMD Device Appraisal
          </h2>
          <p className="text-gray-400">
            Evaluate and compare top Door Frame Metal Detectors with our expert
            appraisals. Discover the best performance, accuracy, and reliability
            to enhance your security checkpoints with confidence.
          </p>

          <div className="space-y-4 mt-20 font-bold mt-6">
            <div className="border-b pb-5 border-gray-700 pb-2">
              <span className="text-white mr-2">01.</span>
              Installation & Calibration Services
            </div>
            <div className="border-b pb-5 border-gray-700 pb-2">
              <span className="text-white mr-2">02.</span>
              Detection Accuracy Evaluation
            </div>
            <div className="border-b pb-5 border-gray-700 pb-2">
              <span className="text-white mr-2">03.</span>
              Performance Monitoring Solutions
            </div>
          </div>
        </div>

        {/* Right: DFMD image */}
        <div className="flex justify-center md:justify-end">
          <img
            src="/imgi_4_D270.png" // Make sure this path points to your DFMD image
            alt="DFMD Device"
            className="rounded-xl w-full max-w-md object-cover"
          />
        </div>
      </div>
    </section>
  );
};

export default DfmdAppraisal;
