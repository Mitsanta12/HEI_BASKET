import { Image } from "../atoms/Image";
import logo from "../../assets/Logo.png";
import { Text } from "../atoms/Text";
import { FooterTexts } from "../particles/DataLists";
import { List } from "../atoms/List";
import { Link } from "react-router-dom";
import {
  FacebookLogo,
  InstagramLogo,
  TwitterLogo,
} from "@phosphor-icons/react";

const Footer = () => {
  return (
    <footer className="w-full flex flex-col bg-white gap-10 py-10">
      <section className="w-full h-auto grid lg:grid-cols-3 md:grid-cols-3 sm:grid-cols-1 lg:px-20 md:px-12 px-6 gap-7">
       {/* Logo et description */}
        <div className="flex flex-col items-center md:items-start gap-4">
          <a href="/">
            <Image className="w-28" image={logo} alt="Logo HEI Basket" />
          </a>
          <Text className="text-sm text-color4 text-center md:text-left">
            {FooterTexts.underLogoText}
          </Text>
        </div>


        {/* Icônes de réseaux sociaux */}
        <div className="flex flex-col items-center w-full gap-6">
          <ul className="flex items-center justify-center gap-8">
            <List>
              <Link
                to={`/`}
                aria-label="Facebook"
                className="text-color3 border border-color3/50 p-2.5 flex rounded-full transition-all duration-300 hover:bg-gradient-to-tr from-color1 to-color2 hover:text-white"
              >
                <FacebookLogo size={35} color="currentColor" weight="fill" />
              </Link>
            </List>
            <List>
              <Link
                to={`/`}
                aria-label="Instagram"
                className="text-color3 border border-color3/50 p-2.5 flex rounded-full transition-all duration-300 hover:bg-gradient-to-tr from-color1 to-color2 hover:text-white"
              >
                <InstagramLogo size={35} color="currentColor" weight="fill" />
              </Link>
            </List>
            <List>
              <Link
                to={`/`}
                aria-label="Twitter"
                className="text-color3 border border-color3/50 p-2.5 flex rounded-full transition-all duration-300 hover:bg-gradient-to-tr from-color1 to-color2 hover:text-white"
              >
                <TwitterLogo size={35} color="currentColor" weight="fill" />
              </Link>
            </List>
          </ul>
        </div>

        {/* Contacts */}
        <div className="flex flex-col items-center gap-4">
          <Text className="text-xl text-color3">
            {FooterTexts.contacts.caption}
          </Text>
          <ul className="flex flex-col gap-2">
            {FooterTexts.contacts.links.map((link, index) => (
              <List key={index} className="text-sm">
                <Link
                  to={link.url}
                  className="text-color4 transition-all duration-300 hover:underline"
                >
                  {link.name}
                </Link>
              </List>
            ))}
          </ul>
        </div>
      </section>

      {/* Copyright */}
      <Text className="text-center bg-color4 text-white text-xs py-4 font-light">
        &copy; 2023 HEI BASKET. Tous droits réservés.
      </Text>
    </footer>
  );
};

export default Footer;
