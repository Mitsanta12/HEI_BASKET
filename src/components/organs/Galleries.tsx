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
import { Button } from "../atoms/Button";
import { Calendar, CaretLeft, CaretRight } from "@phosphor-icons/react";

const ClubPhoto = () => {
  const sliderRef = useRef<Slider | null>();

  // Function for next button
  const next = () => {
    if (sliderRef.current) {
      sliderRef.current.slickNext();
    }
  };
  // function for previous button
  const previous = () => {
    if (sliderRef.current) {
      sliderRef.current.slickPrev();
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

      {/* Controllers  */}
      <div className="mt-12 w-full flex justify-end gap-5 items-center md:px-6 px-3">
        <Button
          onClick={previous}
          className="cursor-pointer outline-none border-none bg-color2/30 text-color3 hover:bg-color2 p-2 rounded-full"
          type="button"
        >
          <CaretLeft size={18} color="currentColor" weight="fill" />
        </Button>
        <Button
          onClick={next}
          className="cursor-pointer outline-none border-none bg-color2/30 text-color3 hover:bg-color2 p-2 rounded-full"
          type="button"
        >
          <CaretRight size={18} color="currentColor" weight="fill" />
        </Button>
      </div>

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
                <div className="flex justify-between items-center">
                  <Text as="h4" className="text-base font-medium text-color3">
                    {card.action}
                  </Text>
                </div>
                <div className="w-full flex gap-4 items-center text-color3">
                  <Calendar size={32} color="currentColor" weight="fill" />
                  <Text as="p" className=" text-color3 font-light text-base">
                    {card.date}
                  </Text>
                </div>
              </Card>
            </div>
          ))}
        </Slider>
      </div>

      <Text
        as="p"
        className="font-light text-base text-center text-color3/80 tracking-widest"
      >
        {Photos.secondText}
      </Text>
    </section>
  );
};

export default ClubPhoto;
