import React from "react";
import tablet from "../../asset/tablet 1.png";
import phone from "../../asset/phone 1.png";
import phone2 from "../../asset/Central phone 2.png";
import gp from "../../asset/Group 34037.png";
import gp1 from "../../asset/Group 34027.png";
import p1 from "../../asset/Ellipse 1.png";
import Summary from "./Summary";
import FAQ from "./FAQ";
import Collabs from "./Collabs";

const Home = () => {
  return (
    <div>
      <div className="flex justify-center mt-64">
        <h2 className="text-4xl font-semibold">
          {" "}
          Analytics that transform your <br />{" "}
          <span className="ml-20">product inside-out</span>{" "}
        </h2>
      </div>

      <div className="flex justify-center mt-10 gap-5">
        <button className="btn btn-primary">Request for Demo</button>
        <button className="btn glass text-primary">Download</button>
      </div>

      <div className="mt-16 relative">
        <img
          className="mx-auto drop-shadow-2xl"
          src={tablet}
          width={1009}
          height={774}
          alt=""
        />
        <img
          className="absolute bottom-0"
          style={{ right: "160px", top: "215px" }}
          src={phone}
          width={310}
          height={624}
          alt=""
        />
      </div>
      <div className="flex flex-col justify-center mt-52">
        <h5 className="mx-auto text-primary">Product Features</h5>
        <h2 className="text-2xl font-semibold mx-auto mt-3">
          Make more out of your data
        </h2>
      </div>
      <div className="grid grid-rows-3 grid-flow-col  mx-auto mt-16">
        <div className="mx-auto row-start-1 row-end-4">
          <div className="grid grid-rows-3 grid-flow-col gap-y-14">
            <div>
              <img src={gp} alt="" />
              <h2 className="text-2xl font-extrabold mt-5">
                Real-time analytics
              </h2>
              <p className="text-base mt-5">
                See product usage, sign-ins, feature <br /> metrics change as
                users work on your.
              </p>
            </div>
            <div>
              <img src={gp} alt="" />
              <h2 className="text-2xl font-extrabold mt-5">
                Intuitive dashboard
              </h2>
              <p className="text-base mt-5">
                See product usage, sign-ins, feature <br /> metrics change as
                users work on your.
              </p>
            </div>
            <div>
              <img src={gp} alt="" />
              <h2 className="text-2xl font-extrabold mt-5">
                Smart suggestions
              </h2>
              <p className="text-base mt-5">
                See product usage, sign-ins, feature <br /> metrics change as
                users work on your.
              </p>
            </div>
          </div>
        </div>
        <div className="mx-auto row-start-1 row-end-4 drop-shadow-2xl">
          <img src={phone2} width={372} height={744} alt="" />
        </div>
        <div className="mx-auto row-start-1 row-end-4">
          <div className="grid grid-rows-3 grid-flow-col gap-y-14">
            <div>
              <img src={gp} alt="" />
              <h2 className="text-2xl font-extrabold mt-5">Multiple views</h2>
              <p className="text-base mt-5">
                See product usage, sign-ins, feature <br /> metrics change as
                users work on your.
              </p>
            </div>
            <div>
              <img src={gp} alt="" />
              <h2 className="text-2xl font-extrabold mt-5">AI-led diagnoses</h2>
              <p className="text-base mt-5">
                See product usage, sign-ins, feature <br /> metrics change as
                users work on your.
              </p>
            </div>
            <div>
              <img src={gp} alt="" />
              <h2 className="text-2xl font-extrabold mt-5">Responsive</h2>
              <p className="text-base mt-5">
                See product usage, sign-ins, feature <br /> metrics change as
                users work on your.
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="flex justify-center mt-56 gap-x-36">
        <div className="">
          <img src={gp1} width={484} height={588} alt="" />
        </div>
        <div>
          <p className="font-semibold text-xl text-primary">About Us</p>
          <h3 className="text-4xl mt-5 font-extrabold">
            A dedicated solution for <br /> startups and enterprises
          </h3>
          <p className="text-xl mt-10">
            Sed ut perspiciatis unde omnis iste natus error sit voluptatem{" "}
            <br /> accusantium doloremque laudantium, totam rem aperiam,
            <br /> eaque ipsa quae ab illo inventore veritatis et quasi
            architecto <br /> beatae vitae dicta sunt explicabo.
          </p>
          <div className="flex justify-center items-center mt-20 gap-x-12 mr-24">
            <img src={p1} alt="" />
            <div>
              <q className="text-xl">
                Fieldx is for teams that care about <br /> their product growth.
              </q>
              <p className="text-xl font-bold">CEO, FieldX</p>
            </div>
          </div>
        </div>
      </div>
      <Summary></Summary>
      <FAQ></FAQ>
      <Collabs></Collabs>
    </div>
  );
};

export default Home;
