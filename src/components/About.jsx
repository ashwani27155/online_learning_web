import React from "react";
import HeroSection from "./HeroSection";
const About=()=>{
    const data={
        name:"Ashwani Kumar Kushwaha",
        button:"Know More"
    }
    return(
        <>
        <HeroSection {...data}/>
        </>
    )
}
export default About