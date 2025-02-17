'use client';
import GithubIcon from '/public/icons/github-icon.svg';
import LinkedinIcon from '/public/icons/linkedin-icon.svg';
import Link from 'next/link';
import Image from 'next/image';
import { useState } from 'react';
import { useTranslations } from 'next-intl';

export const EmailSection = () => {
  const [emailSubmitted, setEmailSubmitted] = useState(false);

  const t = useTranslations('Contact');

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const data = {
      email: e.currentTarget.email.value,
      subject: e.currentTarget.subject.value,
      message: e.currentTarget.message.value,
    };

    const JSONData = JSON.stringify(data);
    const endpoint = '/api/send';

    const options = {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSONData,
    };

    const response = await fetch(endpoint, options);

    if (response.status === 200) {
      setEmailSubmitted(true);
      console.log('Message sent');
    }
  };

  return (
    <section id="contact" className="grid md:grid-cols-2 my-12 md:my-12 py-24 gap-4 relative">
      {/* purple globe */}
      <div className="bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-primary-900 to-transparent rounded-full h-80 w-80 z-0 blur-lg absolute top-[66%] -left-4 transform -translate-x-1/2 -translate-1/2" />
      <div className="mb-4">
        <h5 className="text-xl font-bold text-white my-2">{t('title')}</h5>
        <p className="text-[#ADB7BE] mb-4 max-w-md">{t('description')}</p>
        <div className="socials flex flex-row gap-2">
          <Link href="https://github.com/leonnard19" target="_blank">
            <Image src={GithubIcon} alt="Github Icon" />
          </Link>
          <Link href="https://www.linkedin.com/in/leonardo-santos19/" target="_blank">
            <Image src={LinkedinIcon} alt="Linkedin Icon" />
          </Link>
        </div>
      </div>
      <div>
        {emailSubmitted ? (
          <p className="text-green-500 text-sm mt-2">Email sent successfully!</p>
        ) : (
          <form className="flex flex-col gap-4 space-y-2" onSubmit={handleSubmit}>
            <div>
              <label htmlFor="email" className="text-white block text-sm mb-2 font-medium">
                {t('email')}
              </label>
              <input
                name="email"
                type="email"
                id="email"
                className="bg-[#18191E] border border-[#33353F] placeholder-[#9CA2A9] text-gray-100 text-sm rounded-lg block w-full p-2.5 focus:border-primary-500 outline-none"
                placeholder={t('placeholder.email')}
                required
                autoComplete="email"
              />
            </div>
            <div>
              <label htmlFor="subject" className="text-white block text-sm mb-2 font-medium">
                {t('subject')}
              </label>
              <input
                name="subject"
                type="text"
                id="subject"
                required
                className="bg-[#18191E] border border-[#33353F] placeholder-[#9CA2A9] text-gray-100 text-sm rounded-lg block w-full p-2.5 focus:border-primary-500 outline-none"
                placeholder={t('placeholder.subject')}
              />
            </div>
            <div>
              <label htmlFor="message" className="text-white block text-sm mb-2 font-medium">
                {t('message')}
              </label>
              <textarea
                name="message"
                id="message"
                className="bg-[#18191E] border border-[#33353F] placeholder-[#9CA2A9] text-gray-100 text-sm rounded-lg block w-full p-2.5 focus:border-primary-500 outline-none"
                placeholder={t('placeholder.message')}
              />
            </div>
            <button
              type="submit"
              className="bg-gradient-to-br from-secondary-500 via-primary-500 to-tertiary-500 hover:bg-primary-600 text-white font-medium py-2.5 px-5 rounded-lg w-full"
            >
              {t('send')}
            </button>
          </form>
        )}
      </div>
    </section>
  );
};
