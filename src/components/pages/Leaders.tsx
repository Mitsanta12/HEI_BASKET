import { Text } from "../atoms/Text";
import { Image } from "../atoms/Image";
import bgImage from "../../assets/HeroVector.png";
import Dunk from "../../assets/Dunk1.png";
import Leader1 from "../../assets/Vice_president.jpg";
import Leader2 from "../../assets/President.jpg";
import Leader3 from "../../assets/profile3.jpeg";
import { Devise } from "../particles/DataLists";
import { Fade, Slide } from "react-awesome-reveal";

const leaders = [
  { id: 1, name: "Leader 1", title: "President", image: Leader1, description: "Description of Leader 1." },
  { id: 2, name: "Leader 2", title: "Vice President", image: Leader2, description: "Description of Leader 2." },
  { id: 3, name: "Leader 3", title: "Secretary", image: Leader3, description: "Description of Leader 3." },
  { id: 3, name: "Leader 3", title: "Secretary", image: Leader3, description: "Description of Leader 3." },
];

const Lead = () => {
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
                className=" lg:h-[85%] lg:w-[90%] md:h-[100%] md:w-full w-[90%] h-[50vh] object-cover"
              />
            </Slide>
          </div>
        </main>
      </section>

      {/* Section des leaders */}
      <section className="w-full py-12 bg-gray-100">
        <div className="container mx-auto px-4">
          <Text as="h2" className="text-4xl font-bold text-center mb-8">
            Nos Leaders
          </Text>
          <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {leaders.map((leader) => (
              <div key={leader.id} className="bg-white rounded-lg shadow-lg overflow-hidden">
                <Image
                  image={leader.image}
                  alt={`Photo de ${leader.name}`}
                  className="w-full h-48 object-cover"
                />
                <div className="p-6">
                  <Text as="h3" className="text-xl font-bold text-color3 mb-2">
                    {leader.name}
                  </Text>
                  <Text as="h4" className="text-lg text-gray-600 mb-4">
                    {leader.title}
                  </Text>
                  <Text as="p" className="text-gray-700">
                    {leader.description}
                  </Text>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default Lead;
