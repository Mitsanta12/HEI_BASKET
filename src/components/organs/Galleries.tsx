import { useCallback, useRef } from "react";
import { Text } from "../atoms/Text";
import { Photos } from "../particles/DataLists";
import Slider from "react-slick";
import { Card } from "../molecules/Card";
import City1 from "../../assets/entraînement.jpg";
import City2 from "../../assets/soldat1.jpg";
import City3 from "../../assets/entraînement5.jpg";
import City4 from "../../assets/soldat3.jpg";
import City5 from "../../assets/entraînement6.jpg";
import City6 from "../../assets/soldat5.jpg";
import { Calendar, CaretRight } from "@phosphor-icons/react";
import { Link } from "react-router-dom";

const ClubPhoto = () => {
  const sliderRef = useRef<Slider | null>();

  // Function for next button
  const next = () => {
    if (sliderRef.current) {
      sliderRef.current.slickNext();
    }
  };

  // Slider settings
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          infinite: true,
          dots: false,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          initialSlide: 2,
          dots: false,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          dots: false,
        },
      },
    ],
  };

  const renderCities = useCallback((element: number) => {
    switch (element) {
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
      default:
        return "";
    }
  }, []);

  return (
    <section className="w-full h-auto flex flex-col items-center justify-center relative lg:px-24 md:px-20 px-6 my-20">
      <Text
        as="h2"
        className="md:text-4xl text-2xl font-medium capitalize text-color3"
      >
        {Photos.firstText}
      </Text>

      {/* Slides  */}
      <div className="w-full h-auto mt-4">
        <Slider ref={(slider) => (sliderRef.current = slider)} {...settings}>
          {Photos.cards.map((card, index) => (
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
        </Slider>
        <div className="flex justify-center mt-2">
          <Link to="/photos" className="flex items-center  underline">
            Voir plus <CaretRight size={24} />
          </Link>
        </div>
      </div>

      <Text
        as="p"
        className="font-light text-base text-center text-color3/80 tracking-widest mt-8"
      >
        {Photos.secondText}
      </Text>
    </section>
  );
};

export default ClubPhoto;
