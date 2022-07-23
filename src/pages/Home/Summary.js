import React from "react";
import CountUp from "react-countup";
import VisibilitySensor from "react-visibility-sensor";
import { HiOutlineDesktopComputer } from "react-icons/hi";
import {  HiOutlineUserGroup } from "react-icons/hi";
import {  IoPersonOutline } from "react-icons/io5";
import {  BsTrophy } from "react-icons/bs";

const Summary = () => {
  return (
    <div className="text-2xl">
      <div className="grid lg:grid-cols-4 sm:grid-cols-1 gap-4 mx-5 my-10 p-10">
        <div className="p-5">
          <div className="mx-auto">
            <HiOutlineDesktopComputer className="text-5xl text-primary mx-auto"></HiOutlineDesktopComputer>
          </div>
          <h3 className="text-center text-4xl font-extrabold mt-4 text-primary">
            <CountUp
              className="font-bold"
              end={10}
              duration={5}
              suffix="+"
              redraw={true}
            >
              {({ countUpRef, start }) => (
                <VisibilitySensor onChange={start} delayedCall>
                  <span ref={countUpRef} />
                </VisibilitySensor>
              )}
            </CountUp>
          </h3>
          <h1 className="text-2xl mt-4 text-center">Platforms Created</h1>
        </div>
        <div className="p-5">
          <div className="mx-auto">
            <HiOutlineUserGroup className="text-5xl text-primary mx-auto"></HiOutlineUserGroup>
          </div>
          <h3 className="text-center text-4xl font-extrabold mt-4 text-primary">
            <CountUp end={1559} duration={5} suffix="+" redraw={true}>
              {({ countUpRef, start }) => (
                <VisibilitySensor onChange={start} delayedCall>
                  <span ref={countUpRef} />
                </VisibilitySensor>
              )}
            </CountUp>
          </h3>
          <h1 className="text-2xl mt-4 text-center">Total Users</h1>
        </div>
        <div className="p-5">
          <div className="mx-auto">
            <IoPersonOutline className="text-5xl text-primary mx-auto"></IoPersonOutline>
          </div>
          <h3 className="text-center text-4xl font-extrabold mt-4 text-primary">
            <CountUp end={10} duration={5} suffix="+" redraw={true}>
              {({ countUpRef, start }) => (
                <VisibilitySensor onChange={start} delayedCall>
                  <span ref={countUpRef} />
                </VisibilitySensor>
              )}
            </CountUp>
          </h3>
          <h1 className="text-2xl mt-4 text-center">Total Clients</h1>
        </div>
        <div className="p-5">
          <div className="mx-auto">
            <BsTrophy className="text-5xl text-primary mx-auto"></BsTrophy>
          </div>
          <h3 className="text-center text-4xl font-extrabold mt-4 text-primary">
            <CountUp end={300} duration={5} suffix=" Days" redraw={true}>
              {({ countUpRef, start }) => (
                <VisibilitySensor onChange={start} delayedCall>
                  <span ref={countUpRef} />
                </VisibilitySensor>
              )}
            </CountUp>
          </h3>
          <h1 className="text-2xl mt-4 text-center">In Operations</h1>
        </div>
      </div>
    </div>
  );
};

export default Summary;
