import { useEffect, useState } from "react";
import ActivityCard from "../components/ActivityCard";
import SkillCard from "../components/SkillCard";
import CerCard from "../components/CerCard";
import EducationCard from "../components/EducationCard";
import { AiFillLinkedin, AiFillFacebook, AiFillInstagram, AiFillPhone } from "react-icons/ai";
import { BsFillMoonStarsFill } from "react-icons/bs";
import Image from "next/image";
import me from "../public/myself.JPG";
import SW2 from "../public/SW2.jpg";
import SWN from "../public/SWN.png";
import MU from "../public/MU.png";
import act1 from "../public/tctt-1.jpg";
import act2 from "../public/MyMind.JPG";
import act3 from "../public/Op1.JPG";
import act4 from "../public/AAA.JPG";
import act5 from "../public/freshy.JPG";
import act6 from "../public/freshy2.JPG";
import act7 from "../public/Innovation.jpg";
import leet from "../public/LeetCode.png";
import go from "../public/exercism.png";
import picoic from "../public/picoicon.png"
import hunt from "../public/Hunt.png"
import huntic from "../public/huntic.png"
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
import cer11 from "../public/IntroDeep.jpeg";
import cer12 from "../public/DataClean.jpeg";
import SkillImg from "../components/SkillImg";
import SkillTab from "../components/SkillTab";
import Head from 'next/head'


export default function Home() {
  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
    setDarkMode(prefersDark);
  }, []);

  const handleScroll = (sectionId) => {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
      window.history.replaceState(null, null, " ");
    }
  };

  return (
    <div className={darkMode ? "dark" : ""}>
      <Head>
        <title>Nithimeth&apos;s Page</title>
      </Head>
      <main className="bg-white dark:bg-gray-900 ">

        <section className="min-h-screen">
          <nav className="py-6 mb-12 bg-white dark:bg-gray-900 w-full fixed z-10 my-auto flex">
            <div className="place-items-center flex dark:text-white justify-around my-auto mx-auto w-3/5">
              <button onClick={() => handleScroll("home")}>Home</button>
              <button onClick={() => handleScroll("Experience")}>Experience</button>
              <button onClick={() => handleScroll("Act")}>Activities</button>
              <button onClick={() => handleScroll("Skill")}>Skills</button>
              <button onClick={() => handleScroll("Imp")}>Improving</button>
              <button onClick={() => handleScroll("cer")}>Certificates</button>
            </div>
            <div className="dark:text-white mx-10">
              <div className="flex-none">
                <BsFillMoonStarsFill
                  onClick={() => setDarkMode(!darkMode)}
                  className="cursor-pointer text-2xl"
                />
              </div>
            </div>
          </nav>

          {/* About */}
          <div className="text-center py-10" id="home">
            <div className="flex items-center justify-center mx-auto bg-gradient-to-b from-teal-500 rounded-full w-80 h-80 mb-12 relative overflow-hidden mt-20 md:h-96 md:w-96">
              <Image src={me} layout="fill" objectFit="cover" alt="Nithimeth Mandee" />
            </div>
            <h2 className="text-5xl py-2 text-teal-600 font-medium dark:text-teal-400 md:text-6xl">
              Nithimeth Mandee
            </h2>
            <h3 className="text-2xl py-2 dark:text-white md:text-3xl">
              Machine Learning &amp; Data Science | B.Sc. Computer Science, Mahidol University
            </h3>
            <p className="text-md py-5 leading-8 text-gray-800 dark:text-gray-200 max-w-xl mx-auto md:text-xl">
              I&apos;m a machine learning and data science graduate with hands-on experience in deep learning and computer vision. 
              I have worked on transformer-based medical imaging models, public health data analysis, and real-time object detection systems. 
              I&apos;m passionate about applying AI to solve real-world problems and always eager to learn and grow.
            </p>
            <div className="text-gray-700 dark:text-gray-300 font-medium mb-2">
              GPA: 3.45 / 4.00 &nbsp;|&nbsp; TOEIC: 825
            </div>
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
            <a className="flex items-center justify-center text-gray-600 dark:text-gray-400" href="mailto:nithimeth.man@gmail.com">
              <span>nithimeth.man@gmail.com</span>
            </a>
            <a className="flex items-center justify-center text-gray-600 dark:text-gray-400 mt-1" aria-label="Call Me">
              <AiFillPhone />
              <span className="ml-2">+66 85-317-7659</span>
            </a>
          </div>
        </section>

        {/* Experience */}
        <section className="py-10 px-10">
          <h3 className="text-3xl py-1 dark:text-white" id="Experience">Experience</h3>
          <p className="text-md py-2 leading-8 text-gray-800 dark:text-gray-200">
            Key projects and professional experience in <span className="text-teal-500">machine learning, data science, and AI research:</span>
          </p>
          <div className="flex flex-col gap-8 py-6">

            {/* Senior Project */}
            <div className="border border-gray-200 dark:border-gray-700 rounded-2xl p-6 shadow-sm dark:bg-gray-800">
              <div className="flex flex-col md:flex-row md:justify-between md:items-start mb-2">
                <h4 className="text-xl font-semibold text-teal-600 dark:text-teal-400">
                  Senior Project: d-ASPECTS
                </h4>
                <span className="text-gray-500 dark:text-gray-400 text-sm mt-1 md:mt-0">Aug 2025 – Apr 2026</span>
              </div>
              <p className="text-gray-700 dark:text-gray-300 font-medium mb-3">
                Deep Learning for Automated Prediction of ASPECTS from CT Imaging
              </p>
              <ul className="list-disc list-inside text-gray-700 dark:text-gray-300 space-y-1">
                <li>Preprocessed CT medical images including DICOM handling, NIfTI conversion, and normalization.</li>
                <li>Built a transformer-based model for multi-class ASPECTS prediction from CT images.</li>
                <li>Improved model performance using augmentation and cross-attention techniques.</li>
                <li>Evaluated results using F1-score, accuracy, precision, and recall.</li>
              </ul>
              <div className="flex flex-wrap gap-2 mt-4">
                {["PyTorch", "Transformer", "Computer Vision", "DICOM", "NIfTI"].map(tag => (
                  <span key={tag} className="bg-teal-100 dark:bg-teal-900 text-teal-700 dark:text-teal-300 text-sm px-3 py-1 rounded-full">{tag}</span>
                ))}
              </div>
            </div>

            {/* Malaria Research Internship */}
            <div className="border border-gray-200 dark:border-gray-700 rounded-2xl p-6 shadow-sm dark:bg-gray-800">
              <div className="flex flex-col md:flex-row md:justify-between md:items-start mb-2">
                <h4 className="text-xl font-semibold text-teal-600 dark:text-teal-400">
                  Malaria Data Analysis Research Internship
                </h4>
                <span className="text-gray-500 dark:text-gray-400 text-sm mt-1 md:mt-0">19 May – 31 Jul 2025</span>
              </div>
              <p className="text-gray-700 dark:text-gray-300 font-medium mb-3">
                BSCC, University of Bremen, Germany &nbsp;·&nbsp;
                <span className="text-teal-600 dark:text-teal-400">DAAD Scholarship Recipient</span>
              </p>
              <ul className="list-disc list-inside text-gray-700 dark:text-gray-300 space-y-1">
                <li>Cleaned and structured real-world datasets with missing values and multiple event records.</li>
                <li>Analyzed malaria case and IRS deployment data to evaluate intervention effectiveness.</li>
                <li>Performed regional trend analysis on seasonal malaria cases.</li>
                <li>Awarded the DAAD Scholarship from the University of Bremen and Mahidol University.</li>
              </ul>
              <div className="flex flex-wrap gap-2 mt-4">
                {["Python", "pandas", "NumPy", "Seaborn", "Data Analysis", "Public Health"].map(tag => (
                  <span key={tag} className="bg-teal-100 dark:bg-teal-900 text-teal-700 dark:text-teal-300 text-sm px-3 py-1 rounded-full">{tag}</span>
                ))}
              </div>
            </div>

            {/* AAA Hackathon */}
            <div className="border border-gray-200 dark:border-gray-700 rounded-2xl p-6 shadow-sm dark:bg-gray-800">
              <div className="flex flex-col md:flex-row md:justify-between md:items-start mb-2">
                <h4 className="text-xl font-semibold text-teal-600 dark:text-teal-400">
                  Mahidol University Hackathon — AAA Detection
                </h4>
                <span className="text-gray-500 dark:text-gray-400 text-sm mt-1 md:mt-0">Oct 2024</span>
              </div>
              <ul className="list-disc list-inside text-gray-700 dark:text-gray-300 space-y-1">
                <li>Developed a deep learning model to detect alveolar antral artery (AAA) in CBCT images.</li>
                <li>Built a multi-class classifier to identify anatomical artery positions from 2D slices.</li>
                <li>Optimized training via data preprocessing, augmentation, and macro F1-score evaluation.</li>
              </ul>
              <div className="flex flex-wrap gap-2 mt-4">
                {["PyTorch", "Torchvision", "Deep Learning", "CBCT Imaging"].map(tag => (
                  <span key={tag} className="bg-teal-100 dark:bg-teal-900 text-teal-700 dark:text-teal-300 text-sm px-3 py-1 rounded-full">{tag}</span>
                ))}
              </div>
            </div>

          </div>
        </section>

        {/* Activities & Competitions */}
        <section className="py-10 px-10">
          <h3 className="text-3xl py-1 dark:text-white" id="Act">Activities &amp; Competitions</h3>
          <p className="text-md py-2 leading-8 text-gray-800 dark:text-gray-200">
            As a student, I actively participate in <span className="text-teal-500">IT activities and competitions:</span>
          </p>
          <div className="flex flex-col gap-10 py-10 lg:flex-row lg:flex-wrap">
          `<ActivityCard
              src={act7}
              title="Innovation Day 2026 Thailand"
              desc="Innovation Day 2026 Thailand — Presented CTnavi⁺, an AI-powered brain navigator by Asst. Prof. Dr. Akara Supratak."
              skills={["Presentation"]}
            />
            <ActivityCard
              src={act1}
              title="Thailand Cyber Top Talent 2024"
              desc="Our team (500OurBrainError) ranked 93/340 in the Thailand Cyber Top Talent 2024 CTF competition by NCSA."
              skills={["Web Security", "Penetration Testing", "Capture the Flag (CTF)"]}
              link="https://cloud.ctf.in.th/score/view.html?id=QR66WITOOJ&t=WpUCDQyoXaG7MSteD4BK/Jg3qyIsUCRErURQa7xkesp4Qkqb69hVsz/Ka3jmVg9Zaf9xaUTR0yk="
            />
            <ActivityCard
              src={act2}
              title="MU My Mind Hackathon"
              desc="MU My Mind Hackathon: Designed an app to help people with depression."
              skills={["Figma"]}
              link="https://www.figma.com/proto/iOarAmlnFDDPFmvJlDDKt2/ReMind?type=design&node-id=236-248"
              buttonLabel="View Prototype"
            />
            <ActivityCard
              src={act5}
              title="Welcome Freshy"
              desc="Entertainment Team Drummer, MUICT Welcome Freshy 2023"
              skills={["Entertainment"]}
              link="https://www.ict.mahidol.ac.th/muict-welcome-freshy-2023/"
              buttonLabel="View Details"
            />
            <ActivityCard
              src={act6}
              title="Openhouse"
              desc="MUICT Open House 2023"
              skills={["Entertainment"]}
            />
            <ActivityCard
              src={act3}
              title="Teacher Assistant"
              desc="Helped teach coding in Python & C programming to high school students."
              skills={["Teaching","Python"]}
            />
          </div>
        </section>

        {/* Skills */}
        <section className="py-10 px-10">
          <h3 className="text-3xl py-1 dark:text-white" id="Skill">Skills</h3>
          <SkillTab />
        </section>

        {/* Improving */}
        <section className="py-10 px-10">
          <h3 className="text-3xl py-1 dark:text-white" id="Imp">Improving</h3>
          <p className="text-md py-2 leading-8 text-gray-800 dark:text-gray-200">
            What I do to improve my skills:
          </p>
          <div className="flex flex-col gap-10 py-10 lg:flex-row lg:flex-wrap">
            <SkillCard
              src={leet}
              name="LeetCode"
              description="A website that I use to practice my coding logic."
              link="https://leetcode.com/u/MaRoonRedSky/"
            />
            <SkillCard
              src={go}
              name="Exercism"
              description="A website that I use to learn and practice Go language."
              link="https://exercism.org/profiles/NithimethM/"
            />
            <SkillCard
              src={picoic}
              name="Pico CTF"
              description="A website where I practice my CTF skills."
              link="https://play.picoctf.org/users/Nithimeth"
            />
            <SkillImg
              src={huntic}
              name="Huntress CTF"
              description="A competition where I practice my CTF skills."
              viewImage={hunt}
            />
          </div>
        </section>

        {/* Certificates */}
        <section className="py-10 px-10">
          <h3 className="text-3xl py-1 dark:text-white" id="cer">Certificates</h3>
          <p className="text-md py-2 leading-8 text-gray-800 dark:text-gray-200">
            All of my certificates that I have earned:
          </p>
          <div className="flex flex-col gap-10 py-10 lg:flex-row lg:flex-wrap">
            <CerCard src={cer11} title="Intro to Deep Learning" desc="Issued by Kaggle — Apr 2026" />
            <CerCard src={cer12} title="Data Cleaning" desc="Issued by Kaggle — Apr 2026" />
            <CerCard src={cer10} title="Thailand Cyber Top Talent 2024" desc="My team ranked 93/340 in the Thailand Cyber Top Talent 2024 CTF competition by NCSA." />
            <CerCard src={cer3} title="Hackathon MU My Mind App Challenge" desc="MU My Mind Hackathon: Designed an app to help people with depression." />
            <CerCard src={cer1} title="Basic JavaScript for Frontend Developer" desc="Basic JavaScript for Frontend Developer" />
            <CerCard src={cer2} title="Getting Started with DevOps" desc="Getting Started with DevOps" />
            <CerCard src={cer5} title="Basic React 1" desc="Basic React 1: Components & JSX" />
            <CerCard src={cer4} title="Basic React 2" desc="Basic React 2: State & Event" />
            <CerCard src={cer7} title="Basic Cybersecurity" desc="Basic Cybersecurity" />
            <CerCard src={cer6} title="Network Security & Cybersecurity" desc="Network Security & Cybersecurity" />
            <CerCard src={cer8} title="Node.js" desc="Introduction to Back-end Developer by Node.js" />
            <CerCard src={cer9} title="Ethical Hacking & Penetration Testing" desc="Ethical Hacking & Penetration Testing" />
          </div>
        </section>

        {/* Education */}
        <section className="py-10 px-10">
          <h3 className="text-3xl py-1 dark:text-white">Education</h3>
          <div className="lg:flex gap-10">
            <EducationCard src={SWN} title="Sarasas Witaed Nimitmai School" desc="Grade 1 – 6" />
            <EducationCard src={SW2} title="Satriwitthaya 2 School" desc="Grade 7 – 12" />
            <EducationCard src={MU} title="Mahidol University" desc={
                <>
                  Faculty of Information and Communication Technolog<br />
                  Major: Computer Science <br />
                  GPA: 3.45 / 4.00 &nbsp;·&nbsp; Aug 2022 – Apr 2026
                </>
              }/>
          </div>
        </section>
      </main>
    </div>
  );
}