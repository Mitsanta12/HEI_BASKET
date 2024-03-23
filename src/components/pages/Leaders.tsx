import { useState } from "react";
import { Text } from "../atoms/Text";
import { Photos } from "../particles/DataLists";
import { Card } from "../molecules/Card";
import { Calendar } from "@phosphor-icons/react";
import { Image } from "../atoms/Image";
import bgImage from "../../assets/HeroVector.png";
import Dunk from "../../assets/Dunk1.png";
import { Devise } from "../particles/DataLists";
import { Button } from "../atoms/Button";
import { Fade, Slide } from "react-awesome-reveal";

// Import des images des villes
import City1 from "../../assets/entraînement.jpg";
import City2 from "../../assets/soldat1.jpg";
import City3 from "../../assets/entraînement5.jpg";
import City4 from "../../assets/soldat3.jpg";
import City5 from "../../assets/entraînement6.jpg";
import City6 from "../../assets/soldat5.jpg";
import City7 from "../../assets/team1.jpg";
import City8 from "../../assets/team2.jpg";
import City9 from "../../assets/team3.jpg";
import City10 from "../../assets/team4.jpg";
import City11 from "../../assets/Julio.jpg";
import City12 from "../../assets/Coco.jpg";

const Lead = () => {
  const [expandedPhoto, setExpandedPhoto] = useState<number | null>(null);
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 6;
  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = Photos.cards.slice(indexOfFirstItem, indexOfLastItem);

 
  return (
    <>
      {/* Section de la page */}
      <section className="w-full lg:h-screen md:h-[550px] h-[830px] relative overflow-x-hidden flex justify-end">
        <Image
          className="h-[60%] w-[80%] lg:h-[90vh] md:h-[50vh] lg:w-1/2 md:w-[55%]"
          image={bgImage}
          alt="Hero Background Vector"
        />
        <main className="w-full lg:h-full h-auto grid md:grid-cols-2 absolute top-0 left-0 lg:px-24 md:px-8 px-5 pt-24 md:pt-32 lg:pt-0">
          <div className="flex flex-col justify-center md:gap-6 gap-3 md:order-1 order-2">
            <Text
              as="h1"
              className=" text-color3 lg:text-7xl md:text-5xl text-3xl font-medium"
            >
              <Fade>LEADERS</Fade>
            </Text>
            <Text
              as="p"
              className="text-color3 md:text-base text-sm text-justify font-light"
            >
              <Fade>{Devise.fourthText}</Fade>
            </Text>
          </div>
          <div className="flex flex-col items-center justify-end md:order-2 order-1">
            <Slide direction="right">
              <Image
                image={Dunk}
                alt="Hero Image"
                className=" lg:h-[85%] lg:w-[90%] md:h-[100%] md:w-full w-[90%] h-[50vh]"
              />
            </Slide>
          </div>
        </main>
      </section>

   
    </>
  );
};

export default Lead;

