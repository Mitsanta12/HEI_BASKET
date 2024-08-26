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
import City13 from "../../assets/La_team.jpg";
import City14 from "../../assets/IFT_FOTO.jpg";
import City15 from "../../assets/La_team2.jpg";
import City16 from "../../assets/Supp.jpg";
import City17 from "../../assets/entraînement8.jpg";
import City18 from "../../assets/Supp2.jpg";

const Galleries = () => {
  const [expandedPhoto, setExpandedPhoto] = useState<number | null>(null);
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 6;
  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = Photos.cards.slice(indexOfFirstItem, indexOfLastItem);

  // Fonction pour afficher les images 
  const renderCities = (elementIndex: number) => {
    const photoIndex = indexOfFirstItem + elementIndex;
    switch (photoIndex) {
      case 0:
        return City1;
      case 1:
        return City2;
      case 2:
        return City3;
      case 3:
        return City4;
      case 4:
        return City5;
      case 5:
        return City6;
      case 6:
        return City7;
      case 7:
        return City8;
      case 8:
        return City9;
      case 9:
        return City10;
      case 10:
        return City11;
      case 11:
        return City12;
      case 12:
        return City13;
      case 13:
        return City14;
      case 14:
        return City15;
      case 15:
        return City16;
      case 16:
        return City17;
      case 17:
        return City18;
      default:
        return "";
    }
  };

  // Calcul du nombre total de pages pour la pagination
  const totalPages = Math.ceil(Photos.cards.length / itemsPerPage);

  // Fonction pour changer de page
  const changePage = (page: number) => {
    if (page >= 1 && page <= totalPages) {
      setCurrentPage(page);
    }
  };

  return (
    <>
      {/* Section de la page */}
      <section className="w-full lg:h-screen md:h-[550px] h-[830px] relative overflow-x-hidden flex justify-end">
        <Image
          className="h-[60%] w-[80%] lg:h-[90vh] md:h-[50vh] lg:w-1/2 md:w-[55%] object-cover"
          image={bgImage}
          alt="Hero Background Vector"
        />
        <main className="w-full lg:h-full h-auto grid md:grid-cols-2 absolute top-0 left-0 lg:px-24 md:px-8 px-5 pt-24 md:pt-32 lg:pt-0">
          <div className="flex flex-col justify-center md:gap-6 gap-3 md:order-1 order-2">
            <Text
              as="h1"
              className=" text-color3 lg:text-7xl md:text-5xl text-3xl font-medium"
            >
              <Fade>GALLERIES PHOTOS</Fade>
            </Text>
            <Text
              as="p"
              className="text-color3 md:text-base text-sm text-justify font-light"
            >
              <Fade>{Devise.firstText}</Fade>
            </Text>
          </div>
          <div className="flex flex-col items-center justify-end md:order-2 order-1">
            <Slide direction="right">
              <Image
                image={Dunk}
                alt="Hero Image"
                className=" lg:h-[85%] lg:w-[90%] md:h-[100%] md:w-full w-[90%] h-[50vh] object-contain"
              />
            </Slide>
          </div>
        </main>
      </section>

      {/* Section de la galerie de photos */}
      <section className="w-full h-auto flex flex-col items-center justify-center relative lg:px-24 md:px-20 px-6 my-20">
        <Text
          as="h2"
          className="md:text-4xl text-2xl font-medium capitalize text-color3"
        >
          {Photos.firstText}
        </Text>

        {/* Description de la galerie */}
        <Text
          as="p"
          className="font-light text-base text-center text-color3/80 tracking-widest mt-8"
        >
          {Photos.secondText}
        </Text>

        {/* Grille des cartes de photos */}
        <div className="flex flex-wrap md:grid md:grid-cols-2 lg:grid-cols-3 gap-4 mt-8">
          {currentItems.map((card, index) => (
            <div key={index} className="relative flex-1 min-w-[250px]">
              {/* Affichage en plein écran de la photo au clic */}
              {expandedPhoto === index && (
                <div
                  className="fixed inset-0 bg-black bg-opacity-80 z-50 flex items-center justify-center cursor-pointer"
                  onClick={() => setExpandedPhoto(null)}
                >
                  <img
                    src={renderCities(index)}
                    alt={card.action}
                    className="max-h-screen max-w-screen"
                  />
                </div>
              )}

              {/* Carte de la photo */}
              <Card
                cardClass="overflow-hidden shadow-md rounded-lg cursor-pointer group"
                imageAlt={card.action}
                imageSrc={renderCities(index)}
                imageWrapperClass="w-full h-[250px] overflow-hidden"
                cover="group-hover:scale-125 transition date-500 ease"
                textWrapperClass="flex flex-col gap-4 w-full px-5 py-5"
                onClick={() => setExpandedPhoto(index)} // Gestion de l'expansion de la photo
              >
                {/* Contenu de la carte */}
                <div className="absolute bottom-0 left-0 w-full bg-black bg-opacity-50 px-3 py-2 flex justify-between items-center">
                  <Text
                    as="h4"
                    className="text-base font-medium text-white"
                  >
                    {card.action}
                  </Text>
                  <div className="flex gap-2 items-center text-white">
                    <Calendar size={24} color="currentColor" />
                    <Text as="p" className="font-light text-sm">
                      {card.date}
                    </Text>
                  </div>
                </div>
              </Card>
            </div>
          ))}
        </div>

        {/* Pagination */}
        <div className="flex justify-center mt-8">
          {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
            <Button
              key={page}
              onClick={() => changePage(page)}
              className={`rounded-full px-3 py-1 mx-1 ${
                currentPage === page
                  ? "bg-gray-800 text-white"
                  : "text-gray-800 hover:bg-gray-200"
              }`}
            >
              {page}
            </Button>
          ))}
        </div>
      </section>
    </>
  );
};

export default Galleries;
