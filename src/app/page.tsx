'use client';
import {contact} from "@/config/app";
import {scrollToSection} from "@/lib/helper";
import ContactForm from "@/components/contactForm";
import {useEffect, useState} from "react";
import ResumeTabTitle from "@/components/ResumeTabTitle";
import {
  CertificateProps,
  EducationProps,
  ExperienceProps,
  HonorProps,
  ProjectProps,
  ServiceProps,
  SkillProps
} from "@/lib/types";
import CardSkeleton from "@/components/cardSkeleton";
import Service from "@/components/service";
import Experience from "@/components/experience";
import Education from "@/components/education";
import Skill from "@/components/skill"
import Project from "@/components/project";
import FindMeCTA from "@/components/findMeCTA";
import Title from "@/components/Title";
import Certificate from "@/components/certificate";
import Honor from "@/components/honor";
import Link from "next/link";
import Image from "next/image";
import DownloadResumeModal from "@/components/DownloadResumeModal";

export default function Home() {

  const [resumeModalOpen, setResumeModalOpen] = useState(false);
  const [resumeTab, setResumeTab] = useState('experience');
  const [servicesLoading, setServicesLoading] = useState(true);
  const [experiencesLoading, setExperiencesLoading] = useState(true);
  const [educationsLoading, setEducationsLoading] = useState(true);
  const [skillsLoading, setSkillsLoading] = useState(true);
  const [projectsLoading, setProjectsLoading] = useState(true);
  const [certificatesLoading, setCertificatesLoading] = useState(true);
  const [honorsLoading, setHonorsLoading] = useState(true);
  const [services, setServices] = useState([]);
  const [experiences, setExperiences] = useState([]);
  const [educations, setEducations] = useState([]);
  const [skills, setSkills] = useState([]);
  const [projects, setProjects] = useState([]);
  const [certificates, setCertificates] = useState([]);
  const [honors, setHonors] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      await fetch('/api/services')
        .then((res) => res.json())
        .then((data) => setServices(data))
        .finally(()  => setServicesLoading(false));
      await fetch('/api/experiences')
        .then((res) => res.json())
        .then((data) => setExperiences(data))
        .finally(()  => setExperiencesLoading(false));
      await fetch('/api/educations')
        .then((res) => res.json())
        .then((data) => setEducations(data))
        .finally(()  => setEducationsLoading(false));
      await fetch('/api/skills/featured')
        .then((res) => res.json())
        .then((data) => setSkills(data))
        .finally(()  => setSkillsLoading(false));
      await fetch('/api/projects/featured')
        .then((res) => res.json())
        .then((data) => setProjects(data))
        .finally(()  => setProjectsLoading(false));
      await fetch('/api/certificates/featured')
        .then((res) => res.json())
        .then((data) => setCertificates(data))
        .finally(()  => setCertificatesLoading(false));
      await fetch('/api/honors')
        .then((res) => res.json())
        .then((data) => setHonors(data))
        .finally(()  => setHonorsLoading(false));
    }

    fetchData().then(() => console.log('Data fetched'));
  }, []);

  return (
    <div className="lg:px-12 bg-white dark:bg-gray-900">
    <header className="container px-6 py-16 mx-auto">
    <div className="items-center lg:flex lg:flex-row-reverse hover:bg-blue-50 duration-300 transition-colors">
          <div className="relative mx-auto mt-4 md:mt-16 lg:mt-0">
            <div className="flex items-center justify-center">
            <Image alt='avatar' width={300} height={300}
                   className="rounded-full object-cover"
                   src="/profile.svg"
            />
            </div>
            <button
              className="absolute flex -top-14 -left-2 lg:-top-14 lg:-left-32 w-auto h-16 md:h-20 dark:bg-grey-800 place-items-center shadow-blue-500 shadow-md bg-white items-center text-gray-700 dark:text-gray-300 justify-center gap-x-3 text-sm sm:text-base dark:bg-gray-900 dark:border-gray-700 dark:hover:bg-gray-800 rounded-3xl hover:bg-blue-50 duration-300 transition-colors border px-6 py-2">
              <Image unoptimized={true} alt='waving-hand' width={30} height={30} src="/waving-hand.gif"/>
              <div className="text-start">
                <span>Hi there!</span>
                <p className="text-sm text-gray-500">Welcome to my portfolio</p>
              </div>
            </button>
            <button
              className="absolute flex -bottom-8 right-6 lg:-bottom-0 lg:-right-24 w-auto h-16 md:h-20 dark:bg-grey-800 place-items-center shadow-blue-500 shadow-md bg-white items-center text-gray-700 dark:text-gray-300 justify-center gap-x-3 text-sm sm:text-base dark:bg-gray-900 dark:border-gray-700 dark:hover:bg-gray-800 rounded-3xl hover:bg-blue-50 duration-300 transition-colors border px-8 py-2">
              <div className="text-start">
                <span>Data Scientist</span>
                <p className="text-sm text-gray-500">Software Engineer</p>
              </div>
            </button>
          </div>

          <div className="w-full lg:w-1/2 mt-24 md:mt-16 lg:mt-0">
            <div className="lg:max-w-lg">
              <Title textClass="text-3xl font-semibold text-gray-800 dark:text-gray-100 lg:text-4xl">
                {`Hi, I'm Abdelmajid ZADDI`}
              </Title>
              <h3 className="mt-2 text-2xl font-semibold text-gray-100">
                <span className="text-blue-400">Data Scientist & Software Engineer</span>
              </h3>
              <p className="mt-3 text-gray-600 dark:text-gray-400">
                {`I'm a software engineer and data scientist with a passion for developing innovative software solutions.`}
              </p>
              <div className="mt-6 space-x-4 flex justify-start">
                <button onClick={() => setResumeModalOpen(true)}
                        className="px-6 py-2 mt-4 text-sm font-medium text-white capitalize transition-colors duration-300 transform bg-blue-600 rounded-md lg:w-auto hover:bg-blue-500 focus:outline-none focus:bg-blue-500">
                  Resume
                </button>
                <button onClick={() => scrollToSection('contact')}
                        className="px-5 py-2 mt-4 text-sm font-medium text-gray-700 dark:text-white capitalize transition-colors duration-300 transform border rounded-md hover:bg-gray-700 hover:text-white focus:outline-none focus:bg-blue-500">
                  Contact me
                </button>
              </div>
            </div>
          </div>
        </div>
        <FindMeCTA/>
      </header>

      <DownloadResumeModal isOpen={resumeModalOpen} close={() => setResumeModalOpen(false)}/>

      <section id="about" className="max-w-6xl px-6 py-10 mx-auto">
        <h4 className="text-xl font-medium text-blue-500 dark:text-blue-400">About me</h4>
        <Title>
          Passionate Data Scientist & Software Engineer
        </Title>
        <main className="relative z-20 w-full mt-8 md:flex md:items-center xl:mt-12">
          <div className="absolute w-full bg-blue-100 dark:bg-gray-700 -z-10 md:h-96 rounded-2xl"></div>
          <div
            className="w-full p-6 bg-blue-100 dark:bg-gray-700 md:flex md:items-center rounded-2xl md:bg-transparent dark:md:bg-transparent md:p-0 lg:px-12 md:justify-evenly">
            <img
              className="h-24 w-24 md:mx-6 rounded-full object-cover shadow-md md:h-[32rem] md:w-80 lg:h-[36rem] lg:w-[26rem] md:rounded-2xl"
              src="/abdelmajidzaddi.jpg"
              alt="photo"
              loading="lazy"
            />
            <div className="mt-2 md:mx-6">
              <div>
                <p className="text-xl font-medium tracking-tight text-gray-800 dark:text-white">Abdelmajid ZADDI</p>
                <p className="text-blue-700 dark:text-blue-200 ">A passionate Data Scientist and Software Engineer from Morocco</p>
              </div>
              <p className="mt-4 text-lg leading-relaxed text-gray-800 dark:text-white md:text-xl">
              {`I'm Abdelmajid ZADDI, a software engineer and data scientist with a passion for developing innovative software solutions. I have experience working with various programming languages and technologies, including Python, Java, JavaScript, and SQL. I'm passionate about innovation and love exploring blockchain and artificial intelligence.`}
              </p>
              <p className="mt-4 text-lg leading-relaxed text-gray-800 dark:text-white md:text-xl">
                Join me in creating exceptional software experiences and embracing the potential of technology.
              </p>
            </div>
          </div>
        </main>
      </section>

      <section id="services">
        <div className="container px-6 py-10 mx-auto">
          <h4 className="text-xl font-medium text-blue-500 dark:text-blue-400">Services</h4>
          <Title>
            Explore my services
          </Title>
          <p className="mt-4 text-gray-500 xl:mt-6 dark:text-gray-300">
            {`I offer a wide range of services to help you achieve your goals. I'm here to help you with your projects, whether you're a startup or a large company.`}
          </p>

          <div className="grid grid-cols-1 gap-8 mt-8 xl:mt-12 xl:gap-12 md:grid-cols-2 xl:grid-cols-3">
            {servicesLoading ? (
              <>
                <CardSkeleton/>
                <CardSkeleton/>
                <CardSkeleton/>
              </>
            ) : (
              services.map((service: ServiceProps, index: number) => (
                <Service key={index} data={service}/>
              ))
            )}
          </div>
        </div>
      </section>

      <section id="resume">
        <div className="container px-6 py-12 mx-auto">
          <div className="mt-8 xl:mt-16 lg:grid lg:grid-cols-3 lg:gap-12">
            <div className="lg:col-span-1 lg:sticky lg:top-24 lg:self-start">
              <Title>My Resume</Title>
              <p className="mt-4 text-gray-500 xl:mt-6 dark:text-gray-300">
                Below is a summary of my professional experience, educational background, and key skills. Each section
                highlights my journey and the expertise I’ve developed throughout my career.
              </p>
              <div className="mt-4 space-y-4 lg:mt-8">
                <ResumeTabTitle tab="experience" selectedTab={resumeTab}
                                handleClick={() => setResumeTab('experience')}/>
                <ResumeTabTitle tab="education" selectedTab={resumeTab}
                                handleClick={() => setResumeTab('education')}/>
                <ResumeTabTitle tab="skills" selectedTab={resumeTab}
                                handleClick={() => setResumeTab('skills')}/>
                <ResumeTabTitle tab="certificates" selectedTab={resumeTab}
                                handleClick={() => setResumeTab('certificates')}/>
                <ResumeTabTitle tab="honors and awards" selectedTab={resumeTab}
                                handleClick={() => setResumeTab('honors and awards')}/>
              </div>
            </div>

            <div className="lg:col-span-2 mt-4 lg:mt-0">
              {resumeTab === 'experience' && (
                <div className="mb-12">
                  <h2 className="text-2xl font-semibold text-gray-800 capitalize lg:text-3xl dark:text-white">
                    Experience
                  </h2>
                  <p className="my-2 text-gray-600 dark:text-gray-300">
                    My professional experience includes working as a software engineer at various companies.
                  </p>
                  <div className="py-2 grid lg:grid-cols-2 gap-4 lg:max-h-screen lg:overflow-y-auto">
                    {experiencesLoading ? (
                      <>
                        <CardSkeleton/>
                        <CardSkeleton/>
                      </>
                    ) : (
                      experiences.map((experience: ExperienceProps, index: number) => (
                        <Experience key={index} data={experience}/>
                      ))
                    )}
                  </div>
                </div>
              )}
              {resumeTab === 'education' && (
                <div className="mb-12">
                  <h2 className="text-2xl font-semibold text-gray-800 capitalize lg:text-3xl dark:text-white">
                    Education
                  </h2>
                  <p className="my-2 text-gray-600 dark:text-gray-300">
                    My educational background includes a degree in Software Engineering and Computer Systems
                    Integration.
                  </p>
                  <div className="py-2 grid lg:grid-cols-2 gap-4 lg:max-h-screen lg:overflow-y-auto">
                    {educationsLoading ? (
                      <CardSkeleton/>
                    ) : (
                      educations.map((education: EducationProps, index: number) => (
                        <Education key={index} data={education}/>
                      ))
                    )}
                  </div>
                </div>
              )}
              {resumeTab === 'skills' && (
                <div className="mb-12">
                  <h2 className="text-2xl font-semibold text-gray-800 capitalize lg:text-3xl dark:text-white">
                    Skills
                  </h2>
                  <p className="my-2 text-gray-600 dark:text-gray-300">
                    {`I have a wide range of skills that I've developed throughout my career as a software engineer.`}
                  </p>
                  <div
                    className="py-2 grid lg:grid-cols-4 grid-cols-3 gap-4 lg:max-h-screen lg:overflow-y-auto">
                    {skillsLoading ? (
                      <CardSkeleton/>
                    ) : (
                      skills.map((skill: SkillProps, index: number) => (
                        <Skill key={index} data={skill}/>
                      ))
                    )}
                  </div>
                </div>
              )}
              {resumeTab === 'certificates' && (
                <div className="mb-12">
                  <h2 className="text-2xl font-semibold text-gray-800 capitalize lg:text-3xl dark:text-white">
                    Certificates
                  </h2>
                  <p className="my-2 text-gray-600 dark:text-gray-300">
                    {`I have completed various courses and certifications to improve my skills and knowledge.`}
                  </p>
                  <div className="py-2 grid lg:grid-cols-2 gap-4 lg:max-h-screen lg:overflow-y-auto">
                    {certificatesLoading ? (
                      <CardSkeleton/>
                    ) : (
                      certificates.map((certificate: CertificateProps, index: number) => (
                        <Certificate key={index} data={certificate}/>
                      ))
                    )}
                  </div>
                </div>
              )}
              {resumeTab === 'honors and awards' && (
                <div className="mb-12">
                  <h2 className="text-2xl font-semibold text-gray-800 capitalize lg:text-3xl dark:text-white">
                    Honors and Awards
                  </h2>
                  <p className="my-2 text-gray-600 dark:text-gray-300">
                    {`I have received various honors and awards for my work as a software engineer.`}
                  </p>
                  <div className="py-2 grid gap-4 lg:max-h-screen lg:overflow-y-auto">
                    {honorsLoading ? (
                      <CardSkeleton/>
                    ) : (
                      honors.map((honor: HonorProps, index: number) => (
                        <Honor key={index} data={honor}/>
                      ))
                    )}
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </section>

      <section id="work" className="container px-6 py-10 mx-auto">
        <Title className="flex flex-col" textClass="text-center">
          Latest Work
        </Title>
        <p className="mt-4 text-center text-gray-500 xl:mt-6 dark:text-gray-300">
          Take a look at some of my recent projects.
        </p>
        <div className="grid grid-cols-1 gap-6 mt-8 xl:mt-12 xl:gap-8 md:grid-cols-2 lg:grid-cols-3">
          {projectsLoading ? (
            <>
              <CardSkeleton/>
              <CardSkeleton/>
              <CardSkeleton/>
            </>
          ) : (
            projects.map((project: ProjectProps, index: number) => (
              <Project key={index} data={project}/>
            ))
          )}
        </div>
        <div className="flex justify-center">
          <Link href="/projects"
                className="flex mt-4 mx-auto px-6 gap-4 justify-center items-center p-2 text-blue-500 capitalize transition-colors duration-300 transform bg-blue-100 rounded-full rtl:-scale-x-100 dark:bg-gray-700 hover:bg-blue-200 dark:hover:bg-gray-800 dark:text-white hover:underline hover:text-blue-600 dark:hover:text-blue-500">
            <span>View All</span>
            <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6" fill="none" viewBox="0 0 24 24"
                 stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
                    d="M13 9l3 3m0 0l-3 3m3-3H8m13 0a9 9 0 11-18 0 9 9 0 0118 0z"/>
            </svg>
          </Link>
        </div>
      </section>

      <section id="contact" className="container px-6 py-12 mx-auto">
        <div>
          <h4 className="text-xl font-medium text-blue-500 dark:text-blue-400">Contact me</h4>
          <Title>
            {`Interested to work together? Let's talk`}
          </Title>
        </div>
        <div className="grid grid-cols-1 gap-12 mt-8 lg:grid-cols-2">
          <div className="grid gap-4">
            <p className="text-gray-500 dark:text-gray-400">
              {`I'm available for freelance work. If you have a project that you want to get started, think you need my help with something or just fancy saying hey, then get in touch.`}
            </p>
            <div className="grid grid-cols-1 gap-12 md:grid-cols-2">
              <div>
                <span className="inline-block p-3 text-blue-500 rounded-full bg-blue-100/80 dark:bg-gray-800">
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5"
                       stroke="currentColor" className="w-5 h-5">
                    <path strokeLinecap="round" strokeLinejoin="round"
                          d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75"/>
                  </svg>
                </span>
                <h2 className="mt-4 text-base font-medium text-gray-800 dark:text-white">Email</h2>
                <p className="mt-2 text-sm text-gray-500 dark:text-gray-400">
                  Get in touch with me via email.
                </p>
                <p className="mt-2 text-sm text-blue-500 dark:text-blue-400">{contact.email}</p>
              </div>
              <div>
                <span className="inline-block p-3 text-blue-500 rounded-full bg-blue-100/80 dark:bg-gray-800">
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5"
                       stroke="currentColor" className="w-5 h-5">
                    <path strokeLinecap="round" strokeLinejoin="round"
                          d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z"/>
                  </svg>
                </span>
                <h2 className="mt-4 text-base font-medium text-gray-800 dark:text-white">Phone</h2>
                <p className="mt-2 text-sm text-gray-500 dark:text-gray-400">
                  Give me a call.
                </p>
                <p className="mt-2 text-sm text-blue-500 dark:text-blue-400">{contact.phone}</p>
              </div>
              <div>
                <span className="inline-block p-3 text-blue-500 rounded-full bg-blue-100/80 dark:bg-gray-800">
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5"
                       stroke="currentColor" className="w-5 h-5">
                    <path strokeLinecap="round" strokeLinejoin="round"
                          d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z"/>
                    <path strokeLinecap="round" strokeLinejoin="round"
                          d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z"/>
                  </svg>
                </span>
                <h2 className="mt-4 text-base font-medium text-gray-800 dark:text-white">Address</h2>
                <p className="mt-2 text-sm text-gray-500 dark:text-gray-400">

                </p>
                <p className="mt-2 text-sm text-blue-500 dark:text-blue-400">{contact.address}</p>
              </div>
            </div>
          </div>
          <div className="p-4 py-6 rounded-lg bg-gray-50 dark:bg-gray-800 md:p-8">
            <ContactForm/>
          </div>
        </div>
      </section>
    </div>
  );
}
