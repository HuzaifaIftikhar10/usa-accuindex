import React from 'react'
import line from "../../images/Vector.png";
import { Navbar, SlideOne, SlideTwo, SlideThree, SlideFour, SlideFive, SlideSix, SlideSeven, SlideEight } from "../../components";

const index = () => {
  return (
    <>
      <Navbar />
      <SlideOne />
      <SlideTwo />

      <div
  className="
    bg-no-repeat w-full
    bg-[length:1100px] bg-[position:px]
    md:bg-[length:1300px] md:bg-[position:30px]
    lg:bg-[length:700px] lg:bg-[position:80px]
    xl:bg-[length:800px] xl:bg-[position:190px]
    2xl:bg-[length:800px] 2xl:bg-[position:300px]
  "
  style={{
    backgroundImage: `url(${line})`,
  }}
>
        <SlideThree />
      </div>

      <SlideFour />
      <SlideFive />
      <SlideSix />
      <SlideSeven />
      <SlideEight />
    </>
  )
}

export default index
