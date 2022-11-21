import React, { useState } from "react";
// import { FaChevronLeft, FaChevronRight, FaQuoteRight } from "react-icons/fa";




const ReviewCard = () => {

  const people = [{
    id: 1,
    name: 'anymnDev',
    time: 'Monday, May 31 21 03:47 am EDT',
    image:
      '',
    text:
      "online pharmacy without prescriptions [url=https://cjepharmacy.com/ ]canadian pharmacy hydrocodone[/url] canada pharmacy on line reviews",
  },
  ];



  const [index, setIndex] = useState(0);
  const { id, name, time, image, text } = people[index];
  const checkNumber = (number) => {
    if (number > people.length - 1) {
      return 0;
    }
    if (number < 0) {
      return people.length - 1;
    }
    return number;
  };

  const nextPerson = () => {
    setIndex((index) => {
      let newIndex = index + 1;
      return checkNumber(newIndex);
    });
  };

  const prevPerson = () => {
    setIndex((index) => {
      let newIndex = index - 1;
      return checkNumber(newIndex);
    });
  };

  const minIndex = 0;
  const maxIndex = people.length - 1;


  const getRandomPerson = () => {
    const getRandomIntInclusive = (min, max) => {
      min = Math.ceil(min);
      max = Math.floor(max);
      return Math.floor(Math.random() * (max - min + 1) + min); //The maximum is inclusive and the minimum is inclusive
    }

    let randomIndex = getRandomIntInclusive(minIndex, maxIndex);
    if (randomIndex === index) {
      randomIndex = index + 1
    }
    setIndex(checkNumber(randomIndex));

  }


  return (
    <div className="review">
      <div className="img-container">
        <img src={image} alt={name} className="person-img" />
        <span className="quote-icon">

        </span>
      </div>
      <h4 className="author">{name}</h4>
      <p className="time">{time}</p>
      <p className="info">{text}</p>
      <div className="button-container">
        <button className="prev-btn" onClick={prevPerson}>

        </button>
        <button className="next-btn" onClick={nextPerson}>

        </button>
      </div>
      <button className="random-btn" onClick={getRandomPerson}>Get Random Review</button>
    </div>
  );
};

export default ReviewCard;
