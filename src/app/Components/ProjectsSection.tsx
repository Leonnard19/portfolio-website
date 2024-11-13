'use client';
import { useRef, useState } from 'react';
import { ProjectCard } from './ProjectCard';
import { ProjectTag } from './ProjectTag';
import { ProjectTagType } from '@/types';
import { motion, useInView } from 'framer-motion';

const projectsData = [
  {
    id: 1,
    title: 'React Portfolio Website',
    description: 'Portfolio website built with React, Typescript and Tailwind CSS',
    image: '/images/projects/portfolio-web.jpg',
    tag: ['All', 'Web', 'Mobile'],
    gitUrl: 'https://github.com/Leonnard19/portfolio-website',
    previewUrl: '/',
  },
  {
    id: 2,
    title: 'Be The Hero',
    description: 'NGOs App development using Node.JS, React and React Native.',
    image: '/images/projects/bethehero.png',
    tag: ['All', 'Web', 'Mobile'],
    gitUrl: 'https://github.com/Leonnard19/OmniStack11Project',
    previewUrl: '/',
  },
  {
    id: 3,
    title: 'E-Coleta',
    description:
      'Ecoleta is a marketplace that helps people find waste collection points efficiently.',
    image: '/images/projects/ecoleta.png',
    tag: ['All', 'Web', 'Mobile'],
    gitUrl: 'https://github.com/Leonnard19/NextLevelWeek1.0',
    previewUrl: '/',
  },
  {
    id: 4,
    title: 'Ignews',
    description: 'Blog with subscription system.',
    image: '/images/projects/ignews.png',
    tag: ['All', 'Web'],
    gitUrl: 'https://github.com/Leonnard19/ignews',
    previewUrl: '/',
  },
  {
    id: 5,
    title: 'Dt Money',
    description: 'Financial transactions app',
    image: '/images/projects/dtmoney.png',
    tag: ['All', 'Web'],
    gitUrl: 'https://github.com/Leonnard19/dtmoney',
    previewUrl: '/',
  },
  {
    id: 6,
    title: 'Pokedesk',
    description: 'Pokemon team builder app',
    image: '/images/projects/pokedesk.png',
    tag: ['All', 'Mobile'],
    gitUrl: 'https://github.com/Leonnard19/Pokedesk',
    previewUrl: 'https://pokedesk.vercel.app/',
  },
  {
    id: 7,
    title: 'Doom Fire',
    description: 'Doom Fire Effect in JavaScript',
    image: '/images/projects/doomfire.gif',
    tag: ['All'],
    gitUrl: 'https://github.com/Leonnard19/doomfire',
    previewUrl: '/',
  },
];

export const ProjectsSection = () => {
  const [tag, setTag] = useState<ProjectTagType>('All');
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  const handleTagChange = (newTag: ProjectTagType) => {
    setTag(newTag);
  };

  const filteredProjects = projectsData.filter(project => project.tag.includes(tag));

  const cardVariants = {
    initial: { y: 50, opacity: 0 },
    animate: { y: 0, opacity: 1 },
  };

  return (
    <section id="projects">
      <h2 className="text-center text-4xl font-bold text-white mt-4 mb-8 md:mb-12">
        My Projects
      </h2>
      <div className="text-white flex flex-row justify-center items-center gap-2 py-6">
        <ProjectTag onClick={handleTagChange} tag="All" isSelected={tag === 'All'} />
        <ProjectTag onClick={handleTagChange} tag="Web" isSelected={tag === 'Web'} />
        <ProjectTag onClick={handleTagChange} tag="Mobile" isSelected={tag === 'Mobile'} />
      </div>
      <ul ref={ref} className="grid md:grid-cols-3 gap-8 md:gap-12">
        {filteredProjects.map((project, index) => (
          <motion.li
            key={index}
            variants={cardVariants}
            initial="initial"
            animate={isInView ? 'animate' : 'initial'}
            transition={{ duration: 0.3, delay: index * 0.2 }}
          >
            <ProjectCard
              key={project.id}
              title={project.title}
              description={project.description}
              imgURL={project.image}
              gitUrl={project.gitUrl}
              previewUrl={project.previewUrl}
            />
          </motion.li>
        ))}
      </ul>
    </section>
  );
};
