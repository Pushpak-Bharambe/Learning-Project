import { useState } from "react";
import { CalculateAge } from "../Services/ageCalculator";

export const Accordian = ({ data }) => {
  const [curOpen, SetIsOpen] = useState(-1);
  return (
    <div className="accordion">
      {data.map((item, index) => (
        <AccordianItem
          items={item}
          index={index}
          curOpen={curOpen}
          setcurOpen={SetIsOpen}
        />
      ))}
    </div>
  );
};

const AccordianItem = ({ items, index, curOpen, setcurOpen }) => {
  //   const isOpen = index === curOpen;
  function handleOnClick() {
    // setcurOpen(isOpen ? null : index);
    setcurOpen((prev) => (prev === index ? -1 : index));
  }

  return (
    <div className="items" onClick={handleOnClick}>
      <h1 className="number">{index < 9 ? `0${index + 1}` : index + 1}</h1>
      <h1 className="name">{items.firstName + items.lastName}</h1>
      <p className="icon">{index === curOpen ? "-" : "+"}</p>
      {index === curOpen && (
        <div className="content">
          <p>UserName :{items.userName}</p>
          <p>Email:{items.userEmail}</p>
          <p>Mobilenum :{items.mobilenum}</p>
          <p>{CalculateAge(items.dob)}</p>
        </div>
      )}
    </div>
  );
};
