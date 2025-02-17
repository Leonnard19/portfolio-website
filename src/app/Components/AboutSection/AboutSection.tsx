'use client';
import Image from 'next/image';
import { useState, useTransition } from 'react';
import { TabButton } from './TabButton';
import { useTranslations } from 'next-intl';

export const AboutSection = () => {
  const [tab, setTab] = useState('skills');
  const t = useTranslations();
  const [isPending, startTransition] = useTransition();

  const handleTabChange = (id: string) => {
    startTransition(() => {
      setTab(id);
    });
  };

  const SKILLS = [
    'React.js',
    'Node.js',
    'TypeScript',
    'Express',
    'HTML',
    'CSS',
    'Tailwind',
    'Git',
    'Jest/Cypress',
    'Redux/Zustand',
  ];

  const TAB_DATA = [
    {
      title: t('About.skills'),
      id: 'skills',
      content: (
        <div className="grid grid-cols-2">
          <ul className="list-disc pl-2">
            {SKILLS.slice(0, 5).map((skill, index) => (
              <li key={index}>{skill}</li>
            ))}
          </ul>
          <ul className="list-disc pl-2">
            {SKILLS.slice(5).map((skill, index) => (
              <li key={index}>{skill}</li>
            ))}
          </ul>
        </div>
      ),
    },
    {
      title: t('About.education.title'),
      id: 'education',
      content: (
        <ul className="list-disc pl-2">
          <li>{t('About.education.degree')}</li>
          <li>{t('About.education.university')}</li>
        </ul>
      ),
    },
    {
      title: t('About.experience.title'),
      id: 'experience',
      content: (
        <ul className="list-disc pl-2">
          {/* add description later */}
          <li>{t('About.experience.jobs.0.title')}</li>
          {/*  UI Development for robots automation software. */}
          <li>{t('About.experience.jobs.1.title')}</li>
          {/*  Creation and maintenance of automations in a CRM software. */}
        </ul>
      ),
    },
    {
      title: t('About.certifications.title'),
      id: 'certifications',
      content: (
        <ul className="list-disc pl-2">
          <li>{t('About.certifications.items.0.title')}</li>
          {/* add description later */}
          <li>{t('About.certifications.items.1.title')}</li>
          {/* add description later */}
        </ul>
      ),
    },
  ];

  return (
    <section id="about" className="text-white">
      <div className="md:grid md:grid-cols-2 gap-8 items-center py-8 px-4 xl:gap-16 sm:py-16 xl:px-16">
        <Image
          src="/images/about.png"
          alt="about image"
          width={500}
          height={500}
          className="rounded-lg"
        />
        <div className="mt-4 md:mt-0 text-left flex flex-col h-full">
          <h2 className="text-4xl font-bold text-white mb-4">{t('About.title')}</h2>
          <p className="text-base lg:text-lg">{t('About.description')}</p>
          <div className="flex flex-row max-[840px]:flex-wrap max-[840px]:gap-y-2 justify-start mt-8 space-x-3">
            {TAB_DATA.map((tabData, index) => (
              <TabButton
                key={index}
                selectTab={() => handleTabChange(tabData.id)}
                active={tab === tabData.id}
                children={tabData.title}
              />
            ))}
          </div>
          <div className="mt-6">
            {TAB_DATA.find(t => t.id === tab)?.content ?? 'No content found'}
          </div>
        </div>
      </div>
    </section>
  );
};
