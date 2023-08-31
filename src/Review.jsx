import React, { useState } from 'react';
import people from './data';
import { FaChevronLeft, FaChevronRight, FaQuoteRight } from 'react-icons/fa';

const Review = () => {
  let [index, setIndex] = useState(0);
  const {name, job, image, text } = people[index];

  const len = people.length;

  function handleLeftClick(){
    index--;
    if(index<0)
    index = len - 1;

    setIndex(index);
  }

  function handleRightClick(){
    index++;
    if(index>len-1)
    index = 0;

    setIndex(index);
  }

  function handleRandomClick(){
    let idx = Math.floor(Math.random()*len);
    setIndex(idx);
  }

  return <article className='review'>
    <div className="img-container">
      <img src={image} alt={name} className='person-img'/>
      <span className="quote-icon"><FaQuoteRight /></span>
    </div>
    <h4 className="author">{name}</h4>
    <p className="job">{job}</p>
    <p className="info">{text}</p>
    <div className="button-container">
      <button className='prev-btn' onClick={handleLeftClick}>
        <FaChevronLeft />
      </button>
      <button className='next-btn' onClick={handleRightClick}>
        <FaChevronRight />
      </button>
    </div>
    <button className='random-btn' onClick={handleRandomClick}>surprise me</button>
  </article>;
};

export default Review;
