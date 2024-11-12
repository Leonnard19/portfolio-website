// import Image from 'next/image';
import * as React from 'react';

interface EmailTemplateProps {
  email: string;
  subject: string;
  message: string;
}

const title = 'Hello, Leonard.';
const subtitle = 'Someone Contacted You! =)';

/* TODO: Add styles here (React Email) */
export const EmailTemplate: React.FC<Readonly<EmailTemplateProps>> = ({
  email,
  message,
  subject,
}) => (
  <section className="my-4 text-center bg-white">
    <section className="inline-block w-full max-w-[250px] text-left align-top">
      <span className="flex flex-col m-0 text-[22px] font-bold leading-[24px] text-indigo-600">
        {title}
      </span>
      <span className="flex mt-2 mb-6 font-semibold leading-[28px] text-indigo-900">
        {subtitle}
      </span>
      <div className="flex text-xs mb-2">
        <p className="text-slate-900 font-semibold mr-1">From:</p>
        <p className="text-slate-700">{email}</p>
      </div>
      <p className="text-sm text-gray-700 font-semibold underline">{subject}</p>
      <p className="mt-2 text-4 leading-[24px] text-gray-500">{message}</p>
    </section>
    <section className="mx-12 my-2 inline-block w-full max-w-[220px] align-top">
      {/* <Image
        alt="img"
        className="rounded-2 object-cover"
        height={220}
        src="/images/email/cat_coffee.gif"
        width={220}
      /> */}
    </section>
  </section>
);
