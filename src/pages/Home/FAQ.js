import React from "react";
import { Fragment, useState } from "react";
import {
  Accordion,
  AccordionHeader,
  AccordionBody,
} from "@material-tailwind/react";

const FAQ = () => {
  const [open, setOpen] = useState(0);
  const handleOpen = (value) => {
    setOpen(open === value ? 0 : value);
  };
  return (
    <div
      className="px-28 py-36 text-white"
      style={{ backgroundColor: "#0052cc" }}
    >
      <h4 className="text-xl text-center">Common Question</h4>
      <h2 className="text-5xl text-center mt-6">Frequently asked questions</h2>
      <div className="flex justify-center gap-x-8 mt-20">
        <div>
          <Fragment>
            <Accordion
              className="bg-white p-8 rounded-lg"
              open={open === 1}
              onClick={() => handleOpen(1)}
            >
              <AccordionHeader>
                What kind of data can I see in FieldX?
              </AccordionHeader>
              <AccordionBody>
                Quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
                commodo consequat. Duis aute irure dolor in voluptate.
              </AccordionBody>
            </Accordion>
            <Accordion
              className="bg-white p-8 my-8 rounded-lg"
              open={open === 2}
              onClick={() => handleOpen(2)}
            >
              <AccordionHeader>
                Does Bizzy read my customers' data?
              </AccordionHeader>
              <AccordionBody>
                We're not always in the position that we want to be at. We're
                constantly growing. We're constantly making mistakes. We're
                constantly trying to express ourselves and actualize our dreams.
              </AccordionBody>
            </Accordion>
            <Accordion
              className="bg-white p-8 rounded-lg"
              open={open === 3}
              onClick={() => handleOpen(3)}
            >
              <AccordionHeader>
                What's your refund policy?
              </AccordionHeader>
              <AccordionBody>
                We're not always in the position that we want to be at. We're
                constantly growing. We're constantly making mistakes. We're
                constantly trying to express ourselves and actualize our dreams.
              </AccordionBody>
            </Accordion>
          </Fragment>
        </div>
        <div>
          <Fragment>
            <Accordion
              className="bg-white p-8 rounded-lg"
              open={open === 4}
              onClick={() => handleOpen(4)}
            >
              <AccordionHeader>How do you take payments?</AccordionHeader>
              <AccordionBody>
                We're not always in the position that we want to be at. We're
                constantly growing. We're constantly making mistakes. We're
                constantly trying to express ourselves and actualize our dreams.
              </AccordionBody>
            </Accordion>
            <Accordion
              className="bg-white p-8 my-8 rounded-lg"
              open={open === 5}
              onClick={() => handleOpen(5)}
            >
              <AccordionHeader>
                Can I track website on fieldX?
              </AccordionHeader>
              <AccordionBody>
                We're not always in the position that we want to be at. We're
                constantly growing. We're constantly making mistakes. We're
                constantly trying to express ourselves and actualize our dreams.
              </AccordionBody>
            </Accordion>
            <Accordion
              className="bg-white p-8 rounded-lg"
              open={open === 6}
              onClick={() => handleOpen(6)}
            >
              <AccordionHeader>
                What makes Bizzy analytics tools?
              </AccordionHeader>
              <AccordionBody>
                We're not always in the position that we want to be at. We're
                constantly growing. We're constantly making mistakes. We're
                constantly trying to express ourselves and actualize our dreams.
              </AccordionBody>
            </Accordion>
          </Fragment>
        </div>
      </div>
    </div>
  );
};

export default FAQ;
