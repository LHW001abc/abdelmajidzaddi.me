'use client';
import {contact, socials} from "@/config/app";
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
import Title from "@/components/Title";
import Certificate from "@/components/certificate";
import Honor from "@/components/honor";
import Link from "next/link";
import Image from "next/image";
import DownloadResumeModal from "@/components/DownloadResumeModal";
import AnimatedTechnologies from "@/components/AnimatedTechnologies";
import { motion } from 'framer-motion';
import { fadeIn, staggerContainer } from "@/lib/animations"; // Create this file for reusable animations

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
    <div className="items-center lg:flex lg:flex-row-reverse duration-300 transition-colors">
          <div className="relative mx-auto mt-4 md:mt-16 lg:mt-0">
            <div className="flex items-center justify-center">
            <Image alt='avatar' width={300} height={300}
                   className="rounded-full object-cover"
                   src="/profile.svg"
            />
            </div>
            <button
              className="absolute flex -top-14 -left-2 lg:-top-14 lg:-left-32 w-auto h-16 md:h-20 dark:bg-grey-800 place-items-center shadow-blue-500 shadow-md bg-white items-center text-gray-700 dark:text-gray-300 justify-center gap-x-3 text-sm sm:text-base dark:bg-gray-900 dark:border-gray-700 dark:hover:bg-gray-800 rounded-3xl hover:bg-blue-50 dark:hover:bg-transparent duration-300 transition-colors border px-6 py-2 hover:border-orange-300 dark:hover:border-orange-600 group"
            >
              <Image unoptimized={true} alt='waving-hand' width={30} height={30} src="/waving-hand.gif"/>
              <div className="text-start">
                <span className="font-medium text-transparent bg-clip-text bg-gradient-to-r from-gray-700 to-gray-900 dark:from-gray-200 dark:to-white group-hover:from-orange-500 group-hover:to-pink-600 transition-all duration-300">Hi there!</span>
                <p className="text-sm text-gray-500 dark:text-gray-400 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-orange-400 group-hover:to-pink-500 transition-all duration-300">Welcome to my portfolio</p>
              </div>
            </button>

            <button
              className="absolute flex -bottom-8 right-6 lg:-bottom-0 lg:-right-24 w-auto h-16 md:h-20 dark:bg-grey-800 place-items-center shadow-blue-500 shadow-md bg-white items-center text-gray-700 dark:text-gray-300 justify-center gap-x-3 text-sm sm:text-base dark:bg-gray-900 dark:border-gray-700 dark:hover:bg-gray-800 rounded-3xl hover:bg-blue-50 dark:hover:bg-transparent duration-300 transition-colors border px-8 py-2 hover:border-orange-300 dark:hover:border-orange-600 group"
            >
              <div className="text-start">
                <span className="font-medium text-transparent bg-clip-text bg-gradient-to-r from-gray-700 to-gray-900 dark:from-gray-200 dark:to-white group-hover:from-orange-500 group-hover:to-pink-600 transition-all duration-300">AI Engineer</span>
                <p className="text-sm text-gray-500 dark:text-gray-400 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-orange-400 group-hover:to-pink-500 transition-all duration-300">Software Engineer</p>
              </div>
            </button>
          </div>

          <div className="w-full lg:w-3/5 mt-24 md:mt-16 lg:mt-0">
            {/* Simple Professional Hero Content */}
            <div className="space-y-8 group">
              <div>
                <div className="relative">
                  {/* Subtle background glow effect */}
                  <div className="absolute -inset-4 bg-gradient-to-r from-blue-600/10 via-indigo-600/5 to-purple-600/10 rounded-2xl blur-2xl opacity-60"></div>
                  
                  <h2 className="relative text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
                    {/* "Hi, I'm" in elegant gray */}
                    <span className="text-gray-800 dark:text-gray-200 block mb-2">Hi, I&apos;m</span>
                    
                    {/* Name with stunning gradient and effects */}
                    <span className="relative inline-block">
                      {/* Gradient text with hover animation */}
                      <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 hover:from-purple-600 hover:via-indigo-600 hover:to-blue-600 transition-all duration-700 cursor-default">
                        Abdelmajid ZADDI
                      </span>
                      
                      {/* Animated underline */}
                      <div className="absolute -bottom-2 left-0 w-0 h-1 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full animate-pulse group-hover:w-full transition-all duration-1000"></div>
                      
                      {/* Subtle shine effect */}
                      <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -skew-x-12 transform translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-1000 opacity-0 group-hover:opacity-100"></div>
                    </span>
                  </h2>
                </div>
                
                <h3 className="mt-4 text-xl md:text-2xl text-gray-600 dark:text-gray-400 font-medium">
                  AI Engineer & Software Engineer
                </h3>
                
                <p className="mt-6 text-lg text-gray-600 dark:text-gray-300 leading-relaxed max-w-2xl">
                  I&apos;m a software engineer and data scientist with a passion for developing innovative software solutions.
                </p>
              </div>
              
              {/* Action Buttons */}
              <div className="flex gap-4 flex-wrap">
                <button onClick={() => setResumeModalOpen(true)}
                      className="px-8 py-3 text-base font-medium text-white bg-blue-600 hover:bg-blue-700 rounded-lg transition-colors duration-200">
                  My Resume
                </button>
                <button onClick={() => scrollToSection('contact')}
                      className="px-8 py-3 text-base font-medium text-gray-900 dark:text-white border border-gray-300 dark:border-gray-600 hover:bg-gray-50 dark:hover:bg-gray-800 rounded-lg transition-colors duration-200">
                  Contact Me
                </button>
              </div>
              
              {/* Skills Tags */}
              <div className="flex flex-wrap gap-2">
                <span className="px-3 py-1 text-sm bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-blue-300 rounded-full">Software Engineering</span>
                <span className="px-3 py-1 text-sm bg-green-100 dark:bg-green-900/30 text-green-700 dark:text-green-300 rounded-full">AI Engineering</span>
                <span className="px-3 py-1 text-sm bg-purple-100 dark:bg-purple-900/30 text-purple-700 dark:text-purple-300 rounded-full">DevOps-Cloud</span>
                <span className="px-3 py-1 text-sm bg-orange-100 dark:bg-orange-900/30 text-orange-700 dark:text-orange-300 rounded-full">Machine Learning & Deep Learning & LLM & RAG & Agentic AI & Fine-Tuning</span>
              </div>

              {/* Social Links */}
              <div className="flex items-center gap-6 pt-4">
                <span className="text-sm text-gray-500 dark:text-gray-400">Find me on</span>
                <div className="flex gap-3">
                  <Link 
                    href={socials.github} 
                    target="_blank"
                    title="GitHub"
                    className="group relative p-2 text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white transition-all duration-300 hover:scale-110 hover:-translate-y-1"
                  >
                    <div className="absolute inset-0 bg-gray-100 dark:bg-gray-800 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300 scale-75 group-hover:scale-100"></div>
                    <svg className="w-5 h-5 relative z-10 transform group-hover:rotate-12 transition-transform duration-300" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12 0C5.374 0 0 5.373 0 12 0 17.302 3.438 21.8 8.207 23.387c.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23A11.509 11.509 0 0112 5.803c1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576C20.566 21.797 24 17.3 24 12c0-6.627-5.373-12-12-12z"/>
                    </svg>
                  </Link>
                  
                  <Link 
                    href={socials.linkedin} 
                    target="_blank"
                    title="LinkedIn"
                    className="group relative p-2 text-gray-600 dark:text-gray-400 hover:text-blue-600 transition-all duration-300 hover:scale-110 hover:-translate-y-1"
                  >
                    <div className="absolute inset-0 bg-blue-50 dark:bg-blue-900/20 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300 scale-75 group-hover:scale-100"></div>
                    <svg className="w-5 h-5 relative z-10 transform group-hover:rotate-12 transition-transform duration-300" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                    </svg>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>

      <DownloadResumeModal isOpen={resumeModalOpen} close={() => setResumeModalOpen(false)}/>

      <section id="about" className="max-w-7xl px-6 py-20 mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h4 className="text-sm font-semibold text-blue-600 dark:text-blue-400 tracking-wide uppercase mb-4">About me</h4>
          <div className="relative inline-block">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white">
              Passionate <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-600">AI Engineer</span>
            </h2>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mt-2">
              & <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 to-purple-600">Software Engineer</span>
            </h2>
            {/* Elegant underline */}
            <div className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 w-24 h-1 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full"></div>
          </div>
        </div>

        {/* Main Content */}
        <div className="grid lg:grid-cols-2 gap-8 items-stretch">
          {/* Photo Section */}
          <div className="relative order-2 lg:order-1">
            <div className="relative overflow-hidden rounded-3xl h-full">
              <Image
                className="w-full h-full object-cover"
                src="/zadi.jpg"
                alt="Abdelmajid ZADDI"
                width={500}
                height={500}
                priority
              />
              {/* Overlay gradient */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
            </div>
            
            {/* Floating badge */}
            <div className="absolute -bottom-6 -right-6 bg-white dark:bg-gray-800 rounded-2xl p-4 shadow-xl border border-gray-100 dark:border-gray-700">
              <div className="text-center">
                <div className="text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-600">2+</div>
                <div className="text-sm text-gray-600 dark:text-gray-400">Years Experience</div>
              </div>
            </div>
          </div>

          {/* Content Section */}
          <div className="flex flex-col order-1 lg:order-2 h-full">
            {/* Introduction */}
            <div className="mb-8">
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
                Hello, I&apos;m <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-600">Abdelmajid ZADDI</span>
              </h3>
              <p className="text-lg text-gray-600 dark:text-gray-300 leading-relaxed">
                A passionate AI Engineer and Software Engineer from Morocco, dedicated to developing innovative software solutions that make a difference.
              </p>
            </div>

            {/* Key Points */}
            <div className="space-y-4 mb-8">
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0 w-2 h-2 bg-blue-600 rounded-full mt-3"></div>
                <p className="text-gray-600 dark:text-gray-300">
                  <span className="font-semibold text-gray-900 dark:text-white">Data Science Expertise:</span> Transforming complex data into actionable insights using cutting-edge machine learning techniques.
                </p>
              </div>
              
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0 w-2 h-2 bg-indigo-600 rounded-full mt-3"></div>
                <p className="text-gray-600 dark:text-gray-300">
                  <span className="font-semibold text-gray-900 dark:text-white">Software Engineering:</span> Building scalable, efficient applications with modern technologies and best practices.
                </p>
              </div>
              
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0 w-2 h-2 bg-purple-600 rounded-full mt-3"></div>
                <p className="text-gray-600 dark:text-gray-300">
                  <span className="font-semibold text-gray-900 dark:text-white">AI Engineering:</span> Leveraging advanced algorithms and models to build intelligent systems that learn and adapt.
                </p>
              </div>
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0 w-2 h-2 bg-purple-600 rounded-full mt-3"></div>
                <p className="text-gray-600 dark:text-gray-300">
                  <span className="font-semibold text-gray-900 dark:text-white">DevOps Engineering & Cloud Computing:</span> Implementing CI/CD pipelines and managing cloud infrastructure for seamless deployment and scalability.
                </p>
              </div>
            </div>

            {/* Tech Stack - Now takes remaining space */}
            <div className="flex-1 flex flex-col">
              <h4 className="font-semibold text-gray-900 dark:text-white mb-6 text-lg">Technologies I Work With</h4>
              <div className="relative flex-1">
                {/* Background decoration */}
                <div className="absolute inset-0 bg-gradient-to-r from-blue-50/50 via-indigo-50/30 to-purple-50/50 dark:from-blue-900/10 dark:via-indigo-900/5 dark:to-purple-900/10 rounded-3xl -m-4"></div>
                
                {/* Animated Technologies Component */}
                <div className="relative z-10 py-8 h-full flex items-center">
                  <AnimatedTechnologies />
                </div>
              </div>
            </div>

            {/* CTA */}
            <div className="pt-8">
              <p className="text-lg font-medium text-gray-800 dark:text-gray-200 mb-4">
                Let&apos;s create exceptional software experiences together.
              </p>
              <div className="flex gap-4">
                <button 
                  onClick={() => scrollToSection('contact')}
                  className="px-6 py-3 bg-gradient-to-r from-blue-600 to-indigo-600 text-white rounded-lg font-medium hover:from-blue-700 hover:to-indigo-700 transition-colors duration-200"
                >
                  Get In Touch
                </button>
                <button 
                  onClick={() => scrollToSection('work')}
                  className="px-6 py-3 border border-gray-300 dark:border-gray-600 text-gray-700 dark:text-gray-300 rounded-lg font-medium hover:bg-gray-50 dark:hover:bg-gray-800 transition-colors duration-200"
                >
                  View My Work
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="services" className="relative overflow-hidden bg-gradient-to-b from-gray-50/50 via-blue-50/30 to-indigo-50/20 dark:from-gray-900/50 dark:via-gray-800/30 dark:to-gray-700/20">
        {/* Enhanced Background Elements */}
        <div className="absolute inset-0 bg-gradient-to-br from-blue-100/20 via-indigo-50/15 to-purple-100/25 dark:from-blue-900/15 dark:via-indigo-900/10 dark:to-purple-900/15"></div>
        
        {/* Enhanced Floating Background Icons with better visibility */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          {/* Web Dev Icons */}
          <div className="absolute top-32 left-16 opacity-15 dark:opacity-25 transform rotate-12">
            <svg className="w-20 h-20 text-blue-500 animate-bounce" style={{animationDuration: '3s', animationDelay: '0s'}} fill="currentColor" viewBox="0 0 24 24">
              <path d="M8.5 12L4 7.5L5.5 6L11 11.5L5.5 17L4 15.5L8.5 12Z"/>
              <path d="M15.5 12L20 16.5L18.5 18L13 12.5L18.5 7L20 8.5L15.5 12Z"/>
            </svg>
          </div>
          
          {/* AI/Neural Network Icon */}
          <div className="absolute top-20 right-20 opacity-15 dark:opacity-25 transform -rotate-12">
            <svg className="w-24 h-24 text-purple-500 animate-pulse" style={{animationDuration: '4s', animationDelay: '2s'}} fill="currentColor" viewBox="0 0 24 24">
              <circle cx="7" cy="7" r="2" fillOpacity="0.6"/>
              <circle cx="17" cy="7" r="2" fillOpacity="0.6"/>
              <circle cx="12" cy="17" r="2" fillOpacity="0.6"/>
              <circle cx="12" cy="12" r="1.5" fillOpacity="0.8"/>
              <path d="M9 7L15 7M9.5 9L11 15M14.5 9L13 15M7 9L12 11M17 9L12 11M12 13L7 15M12 13L17 15" stroke="currentColor" strokeWidth="0.5" fill="none" opacity="0.7"/>
            </svg>
          </div>
          
          {/* Database/Cloud Icon */}
          <div className="absolute bottom-32 left-24 opacity-15 dark:opacity-25 transform rotate-6">
            <svg className="w-22 h-22 text-indigo-500 animate-bounce" style={{animationDuration: '5s', animationDelay: '4s'}} fill="currentColor" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="0.5">
              <ellipse cx="12" cy="5" rx="9" ry="3" fillOpacity="0.6"/>
              <path d="M3 5V19C3 20.7 7 22 12 22S21 20.7 21 19V5" fillOpacity="0.4"/>
              <path d="M3 12C3 13.7 7 15 12 15S21 13.7 21 12" fillOpacity="0.5"/>
            </svg>
          </div>
          
          {/* Mobile/Device Icon */}
          <div className="absolute bottom-40 right-32 opacity-15 dark:opacity-25 transform -rotate-6">
            <svg className="w-16 h-16 text-cyan-500 animate-pulse" style={{animationDuration: '3s', animationDelay: '1s'}} fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
              <rect x="5" y="2" width="14" height="20" rx="2" ry="2" fill="currentColor" fillOpacity="0.2"/>
              <rect x="5" y="2" width="14" height="20" rx="2" ry="2"/>
              <line x1="12" y1="18" x2="12.01" y2="18"/>
            </svg>
          </div>
          
          {/* Automation/Gear Icon */}
          <div className="absolute top-80 left-1/3 opacity-15 dark:opacity-25 transform rotate-45">
            <svg className="w-18 h-18 text-green-500" style={{animation: 'spin 8s linear infinite'}} fill="currentColor" viewBox="0 0 24 24">
              <path d="M12 15.5A3.5 3.5 0 0 1 8.5 12A3.5 3.5 0 0 1 12 8.5A3.5 3.5 0 0 1 15.5 12A3.5 3.5 0 0 1 12 15.5M19.43 12.98C19.47 12.66 19.5 12.34 19.5 12C19.5 11.66 19.47 11.34 19.43 11.02L21.54 9.37C21.73 9.22 21.78 8.95 21.66 8.73L19.66 5.27C19.54 5.05 19.27 4.97 19.05 5.05L16.56 6.05C16.04 5.65 15.48 5.32 14.87 5.07L14.49 2.42C14.46 2.18 14.25 2 14 2H10C9.75 2 9.54 2.18 9.51 2.42L9.13 5.07C8.52 5.32 7.96 5.66 7.44 6.05L4.95 5.05C4.72 4.96 4.46 5.05 4.34 5.27L2.34 8.73C2.21 8.95 2.27 9.22 2.46 9.37L4.57 11.02C4.53 11.34 4.5 11.67 4.5 12C4.5 12.33 4.53 12.66 4.57 12.98L2.46 14.63C2.27 14.78 2.21 15.05 2.34 15.27L4.34 18.73C4.46 18.95 4.72 19.03 4.95 18.95L7.44 17.95C7.96 18.35 8.52 18.68 9.13 18.93L9.51 21.58C9.54 21.82 9.75 22 10 22H14C14.25 22 14.46 21.82 14.49 21.58L14.87 18.93C15.48 18.68 16.04 18.34 16.56 17.95L19.05 18.95C19.28 19.04 19.54 18.95 19.66 18.73L21.66 15.27C21.78 15.05 21.73 14.78 21.54 14.63L19.43 12.98Z" fillOpacity="0.3"/>
            </svg>
          </div>
          
          {/* Code brackets scattered around */}
          <div className="absolute top-96 right-16 opacity-10 dark:opacity-20">
            <span className="text-4xl font-bold text-blue-400 animate-pulse" style={{animationDelay: '3s'}}>{'{ }'}</span>
          </div>
          
          <div className="absolute bottom-80 left-40 opacity-10 dark:opacity-20">
            <span className="text-3xl font-bold text-purple-400 animate-pulse" style={{animationDelay: '5s'}}>{'< />'}</span>
          </div>
          
          {/* Enhanced decorative dots */}
          <div className="absolute top-16 right-32 w-3 h-3 bg-blue-400 rounded-full opacity-40 animate-ping"></div>
          <div className="absolute bottom-24 left-16 w-4 h-4 bg-purple-400 rounded-full opacity-30 animate-ping" style={{animationDelay: '1s'}}></div>
          <div className="absolute top-1/2 right-1/4 w-2 h-2 bg-indigo-400 rounded-full opacity-50 animate-ping" style={{animationDelay: '2s'}}></div>
          <div className="absolute top-1/3 left-1/3 w-2 h-2 bg-green-400 rounded-full opacity-40 animate-ping" style={{animationDelay: '4s'}}></div>
        </div>
        
        {/* Gradient Orbs */}
        <div className="absolute top-20 right-10 w-72 h-72 bg-blue-400/10 rounded-full blur-3xl glow-pulse-animation"></div>
        <div className="absolute bottom-20 left-10 w-80 h-80 bg-indigo-400/10 rounded-full blur-3xl glow-pulse-animation" style={{animationDelay: '2s'}}></div>
        
        <div className="container px-6 py-20 mx-auto relative z-10">
          {/* Enhanced Header */}
          <motion.div 
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-blue-100/80 dark:bg-blue-900/30 rounded-full mb-6">
              <div className="w-2 h-2 bg-blue-500 rounded-full animate-pulse"></div>
              <span className="text-sm font-medium text-blue-600 dark:text-blue-400">Available for new projects</span>
            </div>
            
            <h4 className="text-xl font-medium text-blue-500 dark:text-blue-400 mb-2">Services</h4>
            <div className="relative inline-block">
              <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4">
                Explore my <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600">services</span>
              </h2>
              <div className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 w-32 h-1 bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 rounded-full"></div>
            </div>
            
            <p className="mt-6 text-lg text-gray-600 dark:text-gray-300 max-w-3xl mx-auto leading-relaxed">
              Transform your ideas into reality with cutting-edge solutions. From AI-powered applications to scalable web platforms, I deliver excellence that drives results.
            </p>
            
            {/* Service Categories */}
            <div className="flex flex-wrap justify-center gap-3 mt-8">
              <span className="px-4 py-2 bg-white/60 dark:bg-gray-800/60 backdrop-blur-md rounded-full text-sm font-medium text-gray-700 dark:text-gray-300 border border-white/20 dark:border-gray-700/50">
                🚀 Web Development
              </span>
              <span className="px-4 py-2 bg-white/60 dark:bg-gray-800/60 backdrop-blur-md rounded-full text-sm font-medium text-gray-700 dark:text-gray-300 border border-white/20 dark:border-gray-700/50">
                🤖 AI & Machine Learning
              </span>
              <span className="px-4 py-2 bg-white/60 dark:bg-gray-800/60 backdrop-blur-md rounded-full text-sm font-medium text-gray-700 dark:text-gray-300 border border-white/20 dark:border-gray-700/50">
                ⚡ Automation Solutions
              </span>
            </div>
          </motion.div>

          {/* Services Grid */}
          {servicesLoading ? (
            <div className="grid grid-cols-1 gap-8 xl:gap-12 md:grid-cols-2 xl:grid-cols-3">
              <CardSkeleton type="web" />
              <CardSkeleton type="ai" />
              <CardSkeleton type="computer-vision" />
            </div>
          ) : (
            <motion.div 
              variants={staggerContainer}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, amount: 0.25 }}
              className="grid grid-cols-1 gap-8 xl:gap-12 md:grid-cols-2 xl:grid-cols-3"
            >
              {services.map((service: ServiceProps, index: number) => (
                <motion.div
                  key={index}
                  variants={fadeIn('up', 'spring', index * 0.15, 0.75)}
                >
                  <Service data={service} />
                </motion.div>
              ))}
            </motion.div>
          )}
          
          {/* CTA Section */}
          <motion.div 
            className="mt-20 text-center"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            viewport={{ once: true }}
          >
            <div className="bg-white/40 dark:bg-gray-800/40 backdrop-blur-md rounded-3xl p-8 border border-white/20 dark:border-gray-700/30 max-w-2xl mx-auto">
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
                Ready to start your project?
              </h3>
              <p className="text-gray-600 dark:text-gray-300 mb-6">
                Let&apos;s discuss how I can help bring your vision to life with innovative solutions tailored to your needs.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button 
                  onClick={() => scrollToSection('contact')}
                  className="px-8 py-3 bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 text-white rounded-xl font-medium hover:shadow-lg hover:shadow-blue-500/25 transition-all duration-300 transform hover:-translate-y-0.5"
                >
                  Get Started
                </button>
                <button 
                  onClick={() => scrollToSection('work')}
                  className="px-8 py-3 bg-white/60 dark:bg-gray-800/60 backdrop-blur-md text-gray-700 dark:text-gray-300 rounded-xl font-medium border border-white/20 dark:border-gray-700/50 hover:bg-white/80 dark:hover:bg-gray-800/80 transition-all duration-300"
                >
                  View Portfolio
                </button>
              </div>
            </div>
          </motion.div>
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
                        <CardSkeleton type="web" />
                        <CardSkeleton type="ai" />
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
                <motion.div 
                  initial="hidden"
                  whileInView="show"
                  variants={staggerContainer}
                  viewport={{ once: true, amount: 0.25 }}
                  className="mb-12"
                >
                  <motion.h2 
                    variants={fadeIn('up', 'tween', 0.1, 0.8)}
                    className="text-2xl font-semibold text-gray-800 capitalize lg:text-3xl dark:text-white"
                  >
                    Skills
                  </motion.h2>
                  <motion.p 
                    variants={fadeIn('up', 'tween', 0.2, 0.8)}
                    className="my-2 text-gray-600 dark:text-gray-300"
                  >
                    {`I have a wide range of skills that I've developed throughout my career as a software engineer.`}
                  </motion.p>
                  <motion.div
                    variants={fadeIn('up', 'tween', 0.3, 0.8)}
                    className="py-4 grid lg:grid-cols-4 grid-cols-3 gap-6 lg:max-h-screen lg:overflow-y-auto"
                  >
                    {skillsLoading ? (
                      <CardSkeleton/>
                    ) : (
                      skills.map((skill: SkillProps, index: number) => (
                        <motion.div
                          variants={fadeIn('up', 'spring', index * 0.1, 0.75)}
                          key={index}
                        >
                          <Skill data={skill}/>
                        </motion.div>
                      ))
                    )}
                  </motion.div>
                </motion.div>
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
            {`Interested to work together? Let&apos;s talk`}
          </Title>
        </div>
        <div className="grid grid-cols-1 gap-12 mt-8 lg:grid-cols-2">
          <div className="grid gap-4">
            <p className="text-gray-500 dark:text-gray-400">
              {`I&apos;m available for freelance work. If you have a project that you want to get started, think you need my help with something or just fancy saying hey, then get in touch.`}
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
