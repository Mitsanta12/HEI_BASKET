import { useCallback } from "react";
import { List } from "../atoms/List";
import { Text } from "../atoms/Text";
import { ObjectifClub } from "../particles/DataLists";
import { Shield, Calendar, MapTrifold, Wallet } from "@phosphor-icons/react";
import { Card } from "../molecules/Card";
import CardImage1 from "../../assets/Objectif.jpg";

const ClubObjectif = () => {
  const renderIcons = useCallback((element: number) => {
    switch (element) {
      case 0:
        return <MapTrifold size={25} color="currentColor" weight="fill" />;
      case 1:
        return <Wallet size={25} color="currentColor" weight="fill" />;
      case 2:
        return <Shield size={25} color="currentColor" weight="fill" />;
      default:
        return "";
    }
  }, []);

  return (
    <section className="w-full h-auto flex flex-col items-start justify-center relative lg:px-24 md:px-10 px-6 my-28 gap-5">
      <main className="w-full grid md:grid-cols-2 lg:gap-6 gap-12 md:gap-5">
        {/* Text and Steps Container  */}
        <div className="w-full flex flex-col gap-6 order-2 md:order-1">
          <Text
            as="h1"
            className="lg:text-5xl md:text-3xl text-4xl text-color3 font-medium"
          >
            {ObjectifClub.secondText}
          </Text>
          <ul className="flex flex-col gap-8 lg:mt-5 mt-3">
            {ObjectifClub.listOfSteps.map((step, index) => (
              <List
                className="flex gap-5 items-center justify-start"
                key={index}
              >
                <Text
                  as="p"
                  className={`text-white ${
                    index === 0
                      ? "bg-color2"
                      : index === 1
                      ? "bg-color1"
                      : "bg-color3"
                  } p-2 rounded-md`}
                >
                  {renderIcons(index)}
                </Text>
                <Text as="p" className="text-sm text-color3 font-light">
                  {step.text}
                </Text>
              </List>
            ))}
          </ul>
        </div>
        {/* Card Container  */}
        <div className="w-full flex flex-col justify-center lg:items-center items-start relative order-1 md:order-2">
          {/* First Card  */}
          <Card
            cardClass="lg:w-[100%] md:w-[100%] w-[100%] shadow-2xl shadow-sky-500/70 p-4 rounded-xl flex flex-col gap-4"
            imageAlt={ObjectifClub.cardOne.date}
            imageSrc={CardImage1}
            imageWrapperClass="h-[100%] w-[100%] overflow-hidden rounded-xl shadow"
            cover="object-cover object-top"
            textWrapperClass="flex flex-col gap-3"
          >
            <Text as="h4" className="text-base font-medium text-color3">
              {ObjectifClub.cardOne.titre}
            </Text>
            <Text as="p" className="text-sm font-light text-color3">
              {ObjectifClub.cardOne.Objectif}
            </Text>
            <Text
              as="p"
              className="text-sm font-light text-center text-color3 flex items-center gap-3"
            >
              <Calendar size={32} color="currentColor" weight="light" />
              {ObjectifClub.cardOne.date}
            </Text>
          </Card>
        </div>
      </main>
    </section>
  );
};

export default ClubObjectif;
