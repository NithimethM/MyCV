import { useEffect, useState } from "react";
import ActivityCard from "../components/ActivityCard";
import SkillCard from "../components/SkillCard";
import CerCard from "../components/CerCard";
import EducationCard from "../components/EducationCard";
import { AiFillLinkedin, AiFillFacebook, AiFillInstagram, AiFillPhone } from "react-icons/ai";
import { BsFillMoonStarsFill } from "react-icons/bs";
import Image from "next/image";
import me from "../public/myself.jpg";
import SW2 from "../public/SW2.jpg";
import SWN from "../public/SWN.png";
import MU from "../public/MU.png";
import act1 from "../public/tctt-1.jpg";
import act2 from "../public/MyMind.JPG";
import act3 from "../public/Op1.JPG";
import act4 from "../public/AAA.JPG";
import s1 from "../public/Pico.png";
import s2 from "../public/go.png";
import cer1 from "../public/cer1.JPG";
import cer2 from "../public/cer2.JPG";
import cer3 from "../public/cer3.JPG";
import cer4 from "../public/cer4.JPG";
import cer5 from "../public/cer6.JPG";
import cer6 from "../public/cer7.JPG";
import cer7 from "../public/cer8.JPG";
import cer8 from "../public/cer10.JPG";
import cer9 from "../public/cer11.JPG";
import cer10 from "../public/cer12.JPG";

export default function Home() {
  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
    setDarkMode(prefersDark);
  }, []);

  return (
    <div className={darkMode ? "dark" : ""}>
      <main className="bg-white px-10 dark:bg-gray-900 md:px-20 lg:px-40">
        <section className="min-h-screen">
          <nav className="py-10 mb-12 flex items-center justify-between dark:text-white">
            <div className="flex-none">
              <BsFillMoonStarsFill
                onClick={() => setDarkMode(!darkMode)}
                className="cursor-pointer text-2xl"
              />
            </div>
          </nav>
          <div className="text-center p-10 py-10">
            <h2 className="text-5xl py-2 text-teal-600 font-medium dark:text-teal-400 md:text-6xl">
              Nithimeth Mandee
            </h2>
            <h3 className="text-2xl py-2 dark:text-white md:text-3xl">
              Third-year student in the Faculty of Information and Communication Technology at Mahidol University.
            </h3>
            <p className="text-md py-5 leading-8 text-gray-800 dark:text-gray-200 max-w-xl mx-auto md:text-xl">
            I&apos;m junior developer with a focus on developing software engineer, full-stack development, and cybersecurity. I love to learn new things, pursue new passions, gain experience, and am always ready to develop myself.
            </p>
            <div className="text-5xl flex justify-center gap-10 py-3 text-gray-600 dark:text-gray-400">
              <a href="https://www.linkedin.com/in/nithimeth-mandee-b5b9a6278" target="_blank" rel="noopener noreferrer">
                <AiFillLinkedin />
              </a>
              <a href="https://www.facebook.com/nithimeth.mandee.7" target="_blank" rel="noopener noreferrer">
                <AiFillFacebook />
              </a>
              <a href="https://www.instagram.com/c.sea._" target="_blank" rel="noopener noreferrer">
                <AiFillInstagram />
              </a>
            </div>
            <a className="flex items-center justify-center text-gray-600 dark:text-gray-400" aria-label="Call Me">
              <AiFillPhone />
              <span className="ml-2">66+ 85-317-7659</span>
            </a>
            <div className="flex items-center justify-center mx-auto bg-gradient-to-b from-teal-500 rounded-full w-80 h-80 relative overflow-hidden mt-20 md:h-96 md:w-96">
              <Image src={me} layout="fill" objectFit="cover" alt="Nithimeth Mandee" />
            </div>
          </div>
        </section>
        <section className="py-10">
          <h3 className="text-3xl py-1 dark:text-white">Activities & Competitions</h3>
          <p className="text-md py-2 leading-8 text-gray-800 dark:text-gray-200">
            As a student, I actively participate in <span className="text-teal-500">IT activities and competitions:</span>
          </p>
          <div className="flex flex-col gap-10 py-10 lg:flex-row lg:flex-wrap">
            {/* Activity Cards */}
            <ActivityCard src={act4} title="AAA Hackathon" desc="Hackathon Alveola Antral Artery Detection In CBCT Images" skills={["Python","Pytorch","Torchvision", "Deep Learning"]} />
            <ActivityCard src={act1} title="Thailand Cyber Top Talent 2024" desc="My team ranked 93/340 in the Thailand Cyber Top Talent 2024 CTF competition." skills={["Web Security", "Penetration Testing", "Vulnerability Assessment"]} />
            <ActivityCard src={act2} title="MU My Mind Hackathon" desc="MU My Mind Hackathon: Designed an app to help people with depression." skills={["Figma"]} />
            <ActivityCard src={act3} title="Teacher Assistant" desc="Helped teach coding in Python & C programming to high school students." skills={["Teaching"]} />
          </div>
        </section>
        <section className="py-10">
          <h3 className="text-3xl py-1 dark:text-white">Skills</h3>
          <p className="text-md py-2 leading-8 text-gray-800 dark:text-gray-200">
            These are what I do to improve my skills:
          </p>
          <div className="flex flex-col gap-10 py-10 lg:flex-row lg:flex-wrap">
            <SkillCard src={s2} title="GO Language Exercises" desc="Solved exercises on Exercism using GO Language." />
            <SkillCard src={s1} title="PicoCTF Challenges" desc="Completed challenges on PicoCTF." />
          </div>
        </section>
        <section className="py-10">
          <h3 className="text-3xl py-1 dark:text-white">Certificates</h3>
          <p className="text-md py-2 leading-8 text-gray-800 dark:text-gray-200">
            All of my certificates that I have earned:
          </p>
          <div className="flex flex-col gap-10 py-10 lg:flex-row lg:flex-wrap">
            <CerCard src={cer1} title="Basic Javascript for Frontend Developer" desc="Basic Javascript for Frontend Developer" />
            <CerCard src={cer2} title="Getting Started with DevOps" desc="Getting Started with DevOps" />
            <CerCard src={cer3} title="Hackathon MU My Mind app challenge" desc="MU My Mind Hackathon: Designed an app to help people with depression." />
            <CerCard src={cer5} title="Basic React 1" desc="Basic React 1: Components & JSX" />
            <CerCard src={cer4} title="Basic React 2" desc="Basic React 2: State & Event" />
            <CerCard src={cer7} title="Basic Cybersecurity" desc="Basic Cybersecurity" />
            <CerCard src={cer6} title="Network Security & Cybersecurity" desc="Network Security & Cybersecurity" />
            <CerCard src={cer8} title="Node.js" desc="Introduction to Back-end Developer by Node.js" />
            <CerCard src={cer9} title="Ethical Hacking & Penetration Testing" desc="Ethical Hacking & Penetration Testing" />
            <CerCard src={cer10} title="Thailand Cyber Top Talent 2024" desc="My team ranked 93/340 in the Thailand Cyber Top Talent 2024 CTF competition." />
          </div>
        </section>
        <section className="py-10">
          <h3 className="text-3xl py-1 dark:text-white">My Education</h3>
          <div className="lg:flex gap-10">
            <EducationCard src={SWN} title="Sarasas Witaed Nimitmai School" desc="Grade 1 - 6" />
            <EducationCard src={SW2} title="Satriwitthaya 2 School" desc="Grade 7 - 12" />
            <EducationCard src={MU} title="Mahidol University" desc="Faculty of Information and Communication Technology" />
          </div>
        </section>
      </main>
    </div>
  );
}
