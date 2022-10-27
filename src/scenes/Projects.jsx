import LineGradient from "../components/LineGradient";
import { motion } from "framer-motion";
import { BsWordpress } from "react-icons/bs";
import { DiJavascript1, DiReact } from "react-icons/di";
import { SiExpress, SiTailwindcss } from "react-icons/si";
import { FaPassport, FaStripeS } from "react-icons/fa";
const container = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.2,
    },
  },
};

const projectVariant = {
  hidden: { opacity: 0, scale: 0.8 },
  visible: { opacity: 1, scale: 1 },
};

const Project = ({
  title,
  desc,
  link,
  github,
  wordpress,
  javascript,
  express,
  session,
  stripe,
  react,
  tailwind,
}) => {
  const overlayStyles = `absolute h-full w-full opacity-0 hover:opacity-90 transition duration-500
    bg-grey z-30 flex flex-col justify-center items-center text-center p-16 text-deep-blue `;
  const projectTitle = title.split(" ").join("-").toLowerCase();
  console.log(github);
  return (
    <motion.div variants={projectVariant} className="relative">
      <div className={overlayStyles}>
        <p className="text-2xl font-playfair">{title}</p>
        <p className="mt-7">{desc}</p>
        <div className="flex">
          {link ? (
            <a href={link} target="_blank" rel="noreferrer">
              <button className=" bg-[#010026] text-white p-2 mt-6 rounded hover:bg-[#00B5EE] duration-500	">
                Visiter
              </button>
            </a>
          ) : (
            ""
          )}

          {github ? (
            <a href={github} target="_blank" rel="noreferrer" className="ml-2">
              <button className=" bg-[#010026] text-white p-2 mt-6 rounded hover:bg-[#00B5EE] duration-500	">
                Github
              </button>
            </a>
          ) : (
            ""
          )}
        </div>
        <div className="flex mt-4">
          {wordpress ? <BsWordpress size={40} /> : ""}
          {javascript ? <DiJavascript1 size={40} /> : ""}
          {express ? <SiExpress size={40} /> : ""}
          {session ? <FaPassport size={40} /> : ""}
          {stripe ? <FaStripeS size={40} /> : ""}
          {react ? <DiReact size={40} /> : ""}
          {tailwind ? <SiTailwindcss size={40} /> : ""}
        </div>
      </div>
      <img src={`../assets/${projectTitle}.png`} alt={projectTitle} />
    </motion.div>
  );
};

const Projects = () => {
  return (
    <section id="projects" className="pt-48 pb-48">
      {/* HEADINGS */}
      <motion.div
        className="md:w-2/5 mx-auto text-center"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.5 }}
        transition={{ duration: 0.5 }}
        variants={{
          hidden: { opacity: 0, y: -50 },
          visible: { opacity: 1, y: 0 },
        }}
      >
        <div>
          <p className="font-playfair font-semibold text-4xl">
            <span className="text-red">PRO</span>JETS
          </p>
          <div className="flex justify-center mt-5">
            <LineGradient width="w-2/3" />
          </div>
        </div>
        <p className="mt-10 mb-10">
          Au cours des années j'ai pus toucher a beaucoup de technologies
          différentes, en passant de Wordpress, à Vanilla Javascript, à React.
        </p>
      </motion.div>

      {/* PROJECTS */}
      <div className="flex justify-center">
        <motion.div
          className="sm:grid sm:grid-cols-3"
          variants={container}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
        >
          <Project
            title="Project 1"
            desc="Site E-commerce"
            wordpress
            link="https://reecristavie.com/"
          />
          <Project
            title="Project 2"
            desc="Site Vitrine"
            wordpress
            link="http://liliwhite.fr/"
          />
          <Project
            title="Project 3"
            desc="Projet E-commerce"
            javascript
            express
            session
            stripe
            link="https://bike-shop987.herokuapp.com/"
            github="https://github.com/clementtrecourt/BikeShop"
          />
          <Project
            title="Project 4"
            desc="Ce Portfolio !"
            react
            tailwind
            github="https://github.com/clementtrecourt/portfolio"
          />
        </motion.div>
      </div>
    </section>
  );
};

export default Projects;
