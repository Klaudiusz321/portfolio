import Globe from "react-globe.gl"

import Button from "../components/Button.jsx";
import React, { useState } from "react";


const About = () =>{
  const [hasCopied, SetHasCopied] = useState(false);
  const handleCopy = () =>{
    navigator.clipboard.writeText('claudiuswebdesign@gmail.com');
      SetHasCopied(true);
      SetTimeout(()=>{
        SetHasCopied(false);
      },2000)
  }
  return(
    <section className="c-space my-20" id="about">
  <div className="grid xl:grid-cols-3 xl:grid-rows-6 md:grid-cols-2 grid-cols-1 gap-5 h-full">
    <div className="col-span-1 xl:row-span-3">
      <div className="grid-container">
        <img src="assets/1.svg" alt="grid-1" className="w-full sm:h-[276px] h-fit object-contain" />
        <div>
          <p className="grid-headtext">Hi, I’m Klaudiusz Sroka</p>
          <p className="grid-subtext">
          I have honed my skills in both frontend and backend development. I specialize in creating dynamic and responsive websites. My focus is always on delivering efficient and high-quality solutions.
          </p>
        </div>
      </div>
    </div>

    <div className="col-span-1 xl:row-span-3">
      <div className="grid-container">
        <img src="assets/2.svg" alt="grid-2" className="w-full sm:h-[276px] h-fit object-contain" />
        <div>
          <p className="grid-headtext">Tech Stack</p>
          <p className="grid-subtext">
            I specialize in a variety of languages, frameworks, and tools that allow me to build robust and scalable
            applications
          </p>
        </div>
      </div>
    </div>

    
    <div className="col-span-1 xl:row-span-3">
      <div className="grid-container">
        <img src="assets/3.svg" alt="grid-3" className="w-full sm:h-[276px] h-fit object-contain" />
        <div>
          <p className="grid-headtext">Projects & Portfolio</p>
          <p className="grid-subtext">
            Check out some of the projects I've worked on, featuring modern design, efficient code, and great
            user experiences.
          </p>
        </div>
      </div>
      </div>
        <div className="col-span-1 xl:row-span-4">
            <div className="grid-container">
                <div className="rouned-3xl w-full sm:h[326px] h-fit justify-center items-center"> 
                    <Globe 
                    height={326} s
                    width={326} 
                    backgroundColor="rgba(0, 0, 0, 0)" 
                    backgroundImageOpacity={0.5}
                    showAtmosphere
                    showGraticules
                    globeImageUrl={"//unpkg.com/three-globe/example/img/earth-dark.jpg"}
                    bumpImageUrl={"//unpkg.com/three-globe/example/img/earth-topology.jpg"}
                    labelsData={[{
                      lat: 50,
                      lng: 20,
                      text: "Hi there",
                      color: 'white',
                      size: 1000, 
                    }]}
                    />
                </div>
                <div>
                  <p className="grid-headtext">
                    I am focused on working remotly in every timezone
                  </p>
                  <p className="grid-subtext">
                    I am based in Poland with remote work available.
                  </p>
                  <Button name="Contact Me!" isBeam containerClass="w-full m-10"/>
                </div>
            </div>
        </div>
        <div className="xl:col-span-2 xl:row-span-3">
                  <div className="grid-container">
                    <img src="/assets/div1.svg" alt="grid-3" className="w-full sm:h-[266px] h-fit object-contain " />  
                    <div>
                      <p className="grid-headtext">
                        Why I love coding?
                      </p>
                      <p className="grid-subtext">
                      I've always been passionate about solving problems. I enjoy analyzing situations, finding the best solutions, and putting them into action. Solving challenges gives me a great sense of satisfaction and drives me to keep improving.
                      </p>
                    </div>  
                  </div>
        </div>
        <div className="xl:col-span-2 xl:row-span-1">
          <div className="grid-container">
            <img
              src="assets/div2.svg"
              alt="grid-4"
              className="w-full md:h-[126px] sm:h-[276px] h-fit object-cover sm:object-top"
            />

            <div className="space-y-2">
              <p className="grid-subtext text-center">Contact me</p>
              <div className="copy-container" onClick={handleCopy}>
                <img src={hasCopied ? 'assets/ticket.svg' : 'assets/copy.svg'} alt="copy" className="w-8 h-8" />
                <p className="lg:text-2xl md:text-xl font-medium text-gray_gradient text-white">claudiuswebdesign@gmail.com</p>
              </div>
            </div>
          </div>
        </div>
  </div>
</section>


)
}

export default About 