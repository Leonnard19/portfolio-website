'use client';
import Image from 'next/image';
import { useState, useTransition } from 'react';
import { TabButton } from './TabButton';

export const AboutSection = () => {
  const [tab, setTab] = useState('skills');
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
      title: 'Skills',
      id: 'skills',
      content: (
        <div className="grid grid-cols-3">
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
      title: 'Education',
      id: 'education',
      content: (
        <ul className="list-disc pl-2">
          <li> Systems Analysis and Development | 2019–2020</li>
          <li> São Paulo College of Informatics and Administration (FIAP)</li>
        </ul>
      ),
    },
    {
      title: 'Experience',
      id: 'experience',
      content: (
        <ul className="list-disc pl-2">
          {/* add description later */}
          <li> {'React Developer - IBTI | December 2021- October 2024'}</li>
          {/*  UI Development for robots automation software. */}
          <li>{' IT Assistant - Flow Reembolsos | 2021 (7 months)'}</li>
          {/*  Creation and maintenance of automations in a CRM software. */}
        </ul>
      ),
    },
    {
      title: 'Certifications',
      id: 'certifications',
      content: (
        <ul className="list-disc pl-2">
          <li>Node.Js – Rocketseat Ignite Bootcamp</li>
          <li>React.Js – Rocketseat Ignite Bootcamp</li>
        </ul>
      ),
    },
  ];

  return (
    <section id="about" className="text-white">
      <div className="md:grid md:grid-cols-2 gap-8 items-center py-8 px-4 xl:gap-16 sm:py-16 xl:px-16">
        <Image
          src="/images/about-image.png"
          alt="about image"
          width={500}
          height={500}
          className="rounded-lg"
        />
        <div className="mt-4 md:mt-0 text-left flex flex-col h-full">
          <h2 className="text-4xl font-bold text-white mb-4">About Me</h2>
          <p className="text-base lg:text-lg">
            I am a full-stack web developer dedicated to building engaging and responsive web
            applications. My expertise includes TypeScript, React.js, Redux, Node.js, Express,
            HTML, CSS, Tailwind and Git. As a fast learner, I continuously seek to enhance my
            knowledge and skills. I thrive in collaborative environments and am eager to
            partner with others to develop outstanding applications.
          </p>
          <div className="flex flex-row justify-start mt-8">
            <TabButton
              selectTab={() => handleTabChange('skills')}
              active={tab === 'skills'}
              children="Skills"
            />
            <TabButton
              selectTab={() => handleTabChange('education')}
              active={tab === 'education'}
              children="Education"
            />
            <TabButton
              selectTab={() => handleTabChange('experience')}
              active={tab === 'experience'}
              children="Experience"
            />
            <TabButton
              selectTab={() => handleTabChange('certifications')}
              active={tab === 'certifications'}
              children="Certifications"
            />
          </div>
          <div className="mt-6">
            {TAB_DATA.find(t => t.id === tab)?.content ?? 'No content found'}
          </div>
        </div>
      </div>
    </section>
  );
};
