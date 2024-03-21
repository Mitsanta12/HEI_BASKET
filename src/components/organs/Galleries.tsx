import { useCallback } from "react";
import { Text } from "../atoms/Text";
import { Photos } from "../particles/DataLists";
import { Card } from "../molecules/Card";
import City1 from "../../assets/entraînement.jpg";
import City2 from "../../assets/soldat1.jpg";
import City3 from "../../assets/entraînement5.jpg";
import { Calendar, CaretRight } from "@phosphor-icons/react";
import { Link } from "react-router-dom";

const ClubPhoto = () => {
  const renderCities = useCallback((element: number) => {
    switch (element) {
      case 0:
        return City1;
      case 1:
        return City2;
      case 2:
        return City3;
      default:
        return "";
    }
  }, []);

  // Limit to first 3 cards
  const limitedCards = Photos.cards.slice(0, 3);

  return (
    <section className="w-full h-auto flex flex-col items-center justify-center relative lg:px-24 md:px-20 px-6 my-20">
      <Text
        as="h2"
        className="md:text-4xl text-2xl font-medium capitalize text-color3"
      >
        {Photos.firstText}
      </Text>

      {/* Photos */}
      <div className="grid grid-cols-3 gap-4 mt-4">
        {limitedCards.map((card, index) => (
          <div key={index} className="md:px-6 px-3">
            <Card
              cardClass="overflow-hidden shadow-md rounded-lg cursor-pointer group"
              imageAlt={card.action}
              imageSrc={renderCities(index)}
              imageWrapperClass="w-full h-[250px] overflow-hidden"
              cover="group-hover:scale-125 transition date-500 ease"
              textWrapperClass="flex flex-col gap-4 w-full px-5 py-5"
            >
              <div className="flex justify-between">
                <Text as="h4" className="text-base font-medium text-color3">
                  {card.action}
                </Text>
                <div className="flex gap-2 items-center text-color3">
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

      <Text
        as="p"
        className="font-light text-base text-center text-color3/80 tracking-widest mt-8"
      >
        {Photos.secondText}
      </Text>

      <div className="flex justify-center mt-2">
        <Link to="/photos" className="flex items-center  underline">
          Voir plus <CaretRight size={24} />
        </Link>
      </div>
    </section>
  );
};

export default ClubPhoto;
