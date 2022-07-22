import React from "react";
import tablet from '../../asset/tablet 1.png';
import phone from '../../asset/phone 1.png';
const Home = () => {
  return (
    <div>
      <div className="flex justify-center mt-24">
        <h2 className="text-4xl font-semibold">
          {" "}
          Analytics that transform your <br />{" "}
          <span className="ml-20">product inside-out</span>{" "}
        </h2>
      </div>

      <div className="flex justify-center mt-10 gap-5">
        <button class="btn btn-primary">Request for Demo</button>
        <button class="btn glass text-primary">Download</button>
      </div>

      <div className="mt-16 relative">
        <img className="mx-auto " src={tablet} width={1009} height={774} alt="" />
        <img className="absolute bottom-0" style={{right: '160px', top:'215px'}} src={phone} width={310} height={624} alt="" />
      </div>
    </div>
  );
};

export default Home;
