'use client';
import {useEffect, useState} from "react";
import {toast} from "react-toastify";
import {CalendarIcon, TagIcon, UserIcon} from "lucide-react";
import {GitHubLogoIcon, LinkedInLogoIcon} from "@radix-ui/react-icons";
import Loading from "@/app/projects/[slug]/loading";
import NotFound from "next/dist/client/components/not-found-error";
import Link from "next/link";
import Title from "@/components/Title";
import {ProjectProps} from "@/lib/types";
import Image from 'next/image';

export default function Project({ params }: { params: { slug: string } }) {

  const [loading, setLoading] = useState(true);
  const [project, setProject] = useState<ProjectProps | null>(null);

  useEffect(() => {
    const fetchProject = async () => {
      await fetch(`/api/projects/${params.slug}`)
        .then((res) => res.json())
        .then((data: ProjectProps) => setProject(data))
        .catch((error) => toast.error(error.message))
        .finally(() => setLoading(false));
    }
    fetchProject()
      .then(() => console.log("Project data fetched successfully!"))
  }, [params.slug]);

  if (loading) {
    return Loading();
  }

  if (!project) {
    return NotFound();
  }

  return (
    <div className="bg-white dark:bg-gray-900">
      <header className="container px-6 py-12 mx-auto">
        <div className="items-center lg:flex">
          <div className="w-full lg:w-1/2">
            <div className="lg:max-w-lg">
              <h1 className="text-3xl font-semibold text-gray-800 dark:text-white lg:text-4xl">
                {project.title}
              </h1>
              <p className="mt-3 text-gray-600 dark:text-gray-400">
                {project.excerpt}
              </p>
              <div className="mt-6 flex flex-wrap gap-4">
                <div
                  className="inline-flex items-center rounded-md bg-gray-900 px-4 py-2 text-sm font-medium text-gray-50 shadow transition-colors hover:bg-gray-900/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-gray-950 disabled:pointer-events-none disabled:opacity-50 dark:bg-gray-50 dark:text-gray-900 dark:hover:bg-gray-50/90 dark:focus-visible:ring-gray-300">
                  <CalendarIcon className="mr-2 h-4 w-4"/>
                  <span>
                    {new Date(project.timeline.end).getFullYear()}
                  </span>
                </div>
                <div
                  className="inline-flex items-center rounded-md bg-gray-900 px-4 py-2 text-sm font-medium text-gray-50 shadow transition-colors hover:bg-gray-900/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-gray-950 disabled:pointer-events-none disabled:opacity-50 dark:bg-gray-50 dark:text-gray-900 dark:hover:bg-gray-50/90 dark:focus-visible:ring-gray-300">
                  <TagIcon className="mr-2 h-4 w-4"/>
                  <span>{project.category}</span>
                </div>
              </div>
            </div>
          </div>
          <div className="flex flex-col items-center justify-center w-full p-2 mt-6 lg:mt-0 lg:w-1/2">
            <Image
              src={project.image}
              alt={project.title}
              width={1200}
              height={630}
              className="w-full h-auto rounded-lg shadow-lg"
            />
            <div className="flex w-full gap-x-2 mt-4">
              {project.demo &&
                <Link href={project.demo} target="_blank"
                      className="bg-green-800 flex items-center text-gray-100 justify-center gap-x-3 text-sm sm:text-base dark:border-gray-700 rounded-lg duration-300 transition-colors border px-6 py-2.5">
                  <svg className="w-6 h-6 fill-current text-green-200"
                       xmlns="http://www.w3.org/2000/svg"
                       viewBox="0 0 384 512">
                    <path
                      d="M73 39c-14.8-9.1-33.4-9.4-48.5-.9S0 62.6 0 80L0 432c0 17.4 9.4 33.4 24.5 41.9s33.7 8.1 48.5-.9L361 297c14.3-8.7 23-24.2 23-41s-8.7-32.2-23-41L73 39z"/>
                  </svg>
                  <span>Live Demo</span>
                </Link>
              }
              {project.release &&
                <Link href={project.release} target="_blank"
                      className="bg-cyan-900 flex gap-x-3 text-sm sm:text-base items-center justify-center text-white rounded-lg duration-300 transition-colors border border-transparent px-6 py-2.5">
                  <svg className="w-6 h-6 fill-current text-green-500"
                    xmlns="http://www.w3.org/2000/svg"
                       viewBox="0 0 448 512">
                    <path
                      d="M0 80L0 229.5c0 17 6.7 33.3 18.7 45.3l176 176c25 25 65.5 25 90.5 0L418.7 317.3c25-25 25-65.5 0-90.5l-176-176c-12-12-28.3-18.7-45.3-18.7L48 32C21.5 32 0 53.5 0 80zm112 32a32 32 0 1 1 0 64 32 32 0 1 1 0-64z"/>
                  </svg>
                  <span>Latest release</span>
                </Link>
              }
              {project.github &&
                <Link href={project.github} target="_blank"
                      className="bg-black rounded-lg text-sm sm:text-base flex items-center gap-x-3 justify-center text-white hover:bg-black/80 duration-300 transition-colors border border-transparent px-6 py-2.5">
                  <svg className="w-6 h-6 fill-current text-white"
                       xmlns="http://www.w3.org/2000/svg"
                       viewBox="0 0 496 512">
                    <path
                      d="M165.9 397.4c0 2-2.3 3.6-5.2 3.6-3.3 .3-5.6-1.3-5.6-3.6 0-2 2.3-3.6 5.2-3.6 3-.3 5.6 1.3 5.6 3.6zm-31.1-4.5c-.7 2 1.3 4.3 4.3 4.9 2.6 1 5.6 0 6.2-2s-1.3-4.3-4.3-5.2c-2.6-.7-5.5 .3-6.2 2.3zm44.2-1.7c-2.9 .7-4.9 2.6-4.6 4.9 .3 2 2.9 3.3 5.9 2.6 2.9-.7 4.9-2.6 4.6-4.6-.3-1.9-3-3.2-5.9-2.9zM244.8 8C106.1 8 0 113.3 0 252c0 110.9 69.8 205.8 169.5 239.2 12.8 2.3 17.3-5.6 17.3-12.1 0-6.2-.3-40.4-.3-61.4 0 0-70 15-84.7-29.8 0 0-11.4-29.1-27.8-36.6 0 0-22.9-15.7 1.6-15.4 0 0 24.9 2 38.6 25.8 21.9 38.6 58.6 27.5 72.9 20.9 2.3-16 8.8-27.1 16-33.7-55.9-6.2-112.3-14.3-112.3-110.5 0-27.5 7.6-41.3 23.6-58.9-2.6-6.5-11.1-33.3 2.6-67.9 20.9-6.5 69 27 69 27 20-5.6 41.5-8.5 62.8-8.5s42.8 2.9 62.8 8.5c0 0 48.1-33.6 69-27 13.7 34.7 5.2 61.4 2.6 67.9 16 17.7 25.8 31.5 25.8 58.9 0 96.5-58.9 104.2-114.8 110.5 9.2 7.9 17 22.9 17 46.4 0 33.7-.3 75.4-.3 83.6 0 6.5 4.6 14.4 17.3 12.1C428.2 457.8 496 362.9 496 252 496 113.3 383.5 8 244.8 8zM97.2 352.9c-1.3 1-1 3.3 .7 5.2 1.6 1.6 3.9 2.3 5.2 1 1.3-1 1-3.3-.7-5.2-1.6-1.6-3.9-2.3-5.2-1zm-10.8-8.1c-.7 1.3 .3 2.9 2.3 3.9 1.6 1 3.6 .7 4.3-.7 .7-1.3-.3-2.9-2.3-3.9-2-.6-3.6-.3-4.3 .7zm32.4 35.6c-1.6 1.3-1 4.3 1.3 6.2 2.3 2.3 5.2 2.6 6.5 1 1.3-1.3 .7-4.3-1.3-6.2-2.2-2.3-5.2-2.6-6.5-1zm-11.4-14.7c-1.6 1-1.6 3.6 0 5.9 1.6 2.3 4.3 3.3 5.6 2.3 1.6-1.3 1.6-3.9 0-6.2-1.4-2.3-4-3.3-5.6-2z"/>
                  </svg>
                  <span>Code on GitHub</span>
                </Link>
              }
            </div>
          </div>
        </div>
      </header>
      <section className="container px-6 py-4 mx-auto">
        <div className="xl:mt-12 lg:grid lg:grid-cols-2 lg:gap-12">
          <div className="lg:col-span-1 lg:sticky lg:top-24 lg:self-start">
            <Title>Project Overview</Title>
            <p className="mt-4 text-gray-500 xl:mt-6 dark:text-gray-300">
              {project.overview}
            </p>
          </div>
          <div className="lg:col-span-1 mt-4 lg:mt-0">
            <Title>Project Détails</Title>
            <div className="mt-4 flex-col gap-4">
              <div>
                <h3 className="text-sm text-blue-500 capitalize">Technologies</h3>
                <span
                  className="block mt-1 font-medium text-base text-gray-700 hover:text-gray-500 dark:text-gray-300">
                  {project.technologies.join(', ')}
                </span>
              </div>
              <hr className="my-1 border-gray-200 dark:border-gray-700"/>
              <div>
                <h3 className="text-sm text-blue-500 capitalize">Timeline</h3>
                <span
                  className="block mt-1 font-medium text-base text-gray-700 hover:text-gray-500 dark:text-gray-300">
                  {project.timeline.start} - {project.timeline.end}
                </span>
              </div>
              <hr className="my-1 border-gray-200 dark:border-gray-700"/>
              <div>
                <h3 className="text-sm text-blue-500 capitalize">Team</h3>
                <span
                  className="block mt-1 font-medium text-base text-gray-700 hover:text-gray-500 dark:text-gray-300">
                  <ul className="text-base space-y-2">
                  {project.team.map((member) => (
                    <li key={member.name} className={'flex flex-col'}>
                  <span className={'flex space-x-4'}>
                    <UserIcon/> {member.name}
                    <span className={'flex space-x-2'}>
                      {member.linkedin && <a href={member.linkedin} target={'_blank'}><LinkedInLogoIcon/></a>}
                      {member.github && <a href={member.github} target={'_blank'}><GitHubLogoIcon/></a>}
                    </span>
                  </span>
                      {member.role &&
                        <span className={'text-sm text-gray-500 dark:text-gray-400 ml-2'}>{member.role}</span>}
                    </li>
                  ))
                  }
                </ul>
                </span>
              </div>
              <hr className="my-1 border-gray-200 dark:border-gray-700"/>
              <div>
                <h3 className="text-sm text-blue-500 capitalize">Features</h3>
                <span
                  className="block mt-1 font-medium text-base text-gray-700 hover:text-gray-500 dark:text-gray-300">
                  <ul className="text-base space-y-2">
                  {project.features.map((feature) => (
                    <li key={feature}>- {feature}</li>
                  ))}
                </ul>
                </span>
              </div>
            </div>
          </div>

        </div>
      </section>
    </div>
  );
}
