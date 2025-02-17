'use client';
import { useRef, useState } from 'react';
import { ProjectCard } from './ProjectCard/ProjectCard';
import { ProjectTag } from './ProjectTag/ProjectTag';
import { ProjectTagType } from '@/types';
import { motion, useInView } from 'framer-motion';
import { useTranslations } from 'next-intl';

export const ProjectsSection = () => {
  const [selectedTag, setSelectedTag] = useState<ProjectTagType>('All');
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  const t = useTranslations('Projects');

  const TAGS = ['All', 'Web', 'Mobile'] as ProjectTagType[];

  const projectsData = [
    {
      id: 1,
      title: t('reactPortfolio.title'),
      description: t('reactPortfolio.description'),
      image: '/images/projects/portfolio-web.jpg',
      tag: ['All', 'Web', 'Mobile'],
      gitUrl: 'https://github.com/Leonnard19/portfolio-website',
      previewUrl: '/',
    },
    {
      id: 2,
      title: t('beTheHero.title'),
      description: t('beTheHero.description'),
      image: '/images/projects/bethehero.png',
      tag: ['All', 'Web', 'Mobile'],
      gitUrl: 'https://github.com/Leonnard19/OmniStack11Project',
      previewUrl: '/',
    },
    {
      id: 3,
      title: t('ecoleta.title'),
      description: t('ecoleta.description'),
      image: '/images/projects/ecoleta.png',
      tag: ['All', 'Web', 'Mobile'],
      gitUrl: 'https://github.com/Leonnard19/NextLevelWeek1.0',
      previewUrl: '/',
    },
    {
      id: 4,
      title: t('ignews.title'),
      description: t('ignews.description'),
      image: '/images/projects/ignews.png',
      tag: ['All', 'Web'],
      gitUrl: 'https://github.com/Leonnard19/ignews',
      previewUrl: '/',
    },
    {
      id: 5,
      title: t('dtMoney.title'),
      description: t('dtMoney.description'),
      image: '/images/projects/dtmoney.png',
      tag: ['All', 'Web'],
      gitUrl: 'https://github.com/Leonnard19/dtmoney',
      previewUrl: '/',
    },
    {
      id: 6,
      title: t('pokedesk.title'),
      description: t('pokedesk.description'),
      image: '/images/projects/pokedesk.png',
      tag: ['All', 'Mobile'],
      gitUrl: 'https://github.com/Leonnard19/Pokedesk',
      previewUrl: 'https://pokedesk.vercel.app/',
    },
    {
      id: 7,
      title: t('doomFire.title'),
      description: t('doomFire.description'),
      image: '/images/projects/doomfire.gif',
      tag: ['All'],
      gitUrl: 'https://github.com/Leonnard19/doomfire',
      previewUrl: '/',
    },
  ];

  const handleTagChange = (newTag: ProjectTagType) => {
    setSelectedTag(newTag);
  };

  const filteredProjects = projectsData.filter(project => project.tag.includes(selectedTag));

  const cardVariants = {
    initial: { y: 50, opacity: 0 },
    animate: { y: 0, opacity: 1 },
  };

  return (
    <section id="projects">
      <h2 className="text-center text-4xl font-bold text-white mt-4 mb-8 md:mb-12">
        {t('title')}
      </h2>
      <div className="text-white flex flex-row justify-center items-center gap-2 py-6">
        {TAGS.map((tag, index) => (
          <ProjectTag
            key={index}
            label={t(`categories.${tag.toLowerCase()}`)}
            onClick={handleTagChange}
            tag={tag}
            isSelected={tag === selectedTag}
          />
        ))}
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
