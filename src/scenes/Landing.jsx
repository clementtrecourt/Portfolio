import React from "react";
import SocialMediaIcons from "../components/SocialMediaIcons";
import useMediaQuery from "../hooks/useMediaQuery";
import { motion } from "framer-motion";
import AnchorLink from "react-anchor-link-smooth-scroll";
import Tilt from "react-parallax-tilt";
const Landing = ({ setSelectedPage }) => {
  const isAboveMediumScreens = useMediaQuery("(min-width: 1060px)");
  const isAboveLarge = useMediaQuery("(min-width: 1060px)");

  return (
    <section
      id="accueil"
      className="md:flex md:justify-between md:items-center gap-16 md:h-full py-10 md:mt-[110px]"
    >
      {/* IMAGE SECTION */}
      <div className="basis-3/5 z-10 mt-16 md:mt-32 flex justify-center md:order-2">
        {isAboveLarge ? (
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 0.5 }}
            variants={{
              hidden: { opacity: 0, x: +50 },
              visible: { opacity: 1, x: 0 },
            }}
          >
            <div
              className="relative z-0 ml-20 before:absolute before:-top-20 before:-left-20 
          before:w-full before:max-w-[400px] md:before:max-w-[600px] before:h-full before:border-2 before:border-blue before:z-[-1]"
            >
              <Tilt>
                <img
                  alt="profile"
                  className="hover:filter hover:saturate-150 transition duration-500 z-10 w-full max-w-[400px] md:max-w-[600px] shadow-black"
                  src="assets/profile-image.png"
                />
              </Tilt>
            </div>
          </motion.div>
        ) : (
          <img
            alt="profile"
            className="z-10 w-full max-w-[400px] md:max-w-[600px]"
            src="assets/profile-image.png"
          />
        )}
      </div>

      {/* MAIN TEXT */}
      <div className="z-30 basis-2/5 mt-12 md:mt-32">
        {/* HEADINGS */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.5 }}
          variants={{
            hidden: { opacity: 0, x: -50 },
            visible: { opacity: 1, x: 0 },
          }}
        >
          <p className="text-6xl font-playfair z-10 text-center md:text-start">
            Clément {""}
            <span
              className="xs:relative xs:text-deep-blue xs:font-semibold z-20 xs:before:content-brush
            before:absolute before:-left-[30px] before:-top-[128px] before:z-[-1]"
            >
              Trécourt
            </span>
          </p>

          <p className="mt-10 mb-7 text-sm text-center md:text-start">
            Bonjour ! Développeur Full-Stack, passionné de nouvelles
            technologies et plein de bonnes idées, je propose un développement
            performant dans la simplicité. Ma stack de prédilection se compose
            de React, Node.js et MongoDB.
          </p>
        </motion.div>

        {/* CALL TO ACTIONS */}
        <motion.div
          className="flex mt-5 justify-center md:justify-start"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          transition={{ delay: 0.2, duration: 0.5 }}
          variants={{
            hidden: { opacity: 0, x: -50 },
            visible: { opacity: 1, x: 0 },
          }}
        >
          <AnchorLink
            className="bg-gradient-rainblue text-deep-blue  py-3 px-7 font-semibold
            hover:bg-blue hover:text-white transition duration-500"
            onClick={() => setSelectedPage("contact")}
            href="#contact"
          >
            Contactez-moi
          </AnchorLink>
          <AnchorLink
            className="rounded-r-sm bg-gradient-rainblue py-0.5 pr-0.5"
            onClick={() => setSelectedPage("projets")}
            href="#projets"
          >
            <div className="bg-deep-blue hover:text-red transition duration-500 w-full h-full flex items-center justify-center px-10">
              Mes Projets
            </div>
          </AnchorLink>
        </motion.div>

        <motion.div
          className="flex mt-5 justify-center md:justify-start"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          transition={{ delay: 0.4, duration: 0.5 }}
          variants={{
            hidden: { opacity: 0, x: -50 },
            visible: { opacity: 1, x: 0 },
          }}
        >
          <SocialMediaIcons />
        </motion.div>
      </div>
    </section>
  );
};

export default Landing;
