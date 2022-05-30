import React, { useState } from "react"
import reviews from "./Data"
import { FaChevronLeft, FaChevronRight } from "react-icons/fa"

const Testimonial = () => {
  const [index, setIndex] = useState(0)
  const { name, job, image, text } = reviews[index]

  // step 3 :
  const checkIndex = (number) => {
    // yad number chai data bhanada - xa bhaen return 0
    if (number > reviews.length - 1) {
      return 0
    }
    if (number < 0) {
      return reviews.length - 1
    }
    return number
  }

  // step 1 :
  const next = () => {
    // i want change index number
    setIndex((index) => {
      let newIndex = index + 1
      //  return newIndex
      return checkIndex(newIndex)
    })
  }
  // step 2 :
  const prev = () => {
    setIndex((index) => {
      let newIndex = index - 1
      //  return newIndex
      return checkIndex(newIndex)
    })
  }

  // radmonly person
  const randomPerson = () => {
    //let randomNumber = Math.random() * reviews.length
    /*
	floor => 0.566 - 1  round off garne
	*/
    let randomNumber = Math.floor(Math.random() * reviews.length)

    if (randomNumber === index) {
      randomNumber = index + 1
    }
    setIndex(checkIndex(randomNumber))
    console.log(randomNumber)
  }
  return (
    <>
      <section>
        <div className='img'>
          <img src={image} alt='' />
          <i className='fa fa-quote-right '></i>
        </div>
        <h4>{name}</h4>
        <label>{job}</label>
        <p>{text}</p>
        <div className='button-container'>
          <button className='prev' onClick={prev}>
            <FaChevronLeft />
          </button>
          <button className='next' onClick={next}>
            <FaChevronRight />
          </button>
        </div>
        <button className='random' onClick={randomPerson}>
          Random
        </button>
      </section>
    </>
  )
}

export default Testimonial
