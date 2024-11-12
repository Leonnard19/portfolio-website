import { EmailTemplate } from '@/app/Components/Email-template';
import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY);

const fromEmail = process.env.FROM_EMAIL || '';
const toEmail = process.env.TO_EMAIL || '';

export async function POST(req: Request) {
  const { email, subject, message } = await req.json();

  try {
    const { data, error } = await resend.emails.send({
      from: fromEmail,
      to: toEmail,
      subject: 'Someone contacted you',
      react: EmailTemplate({ email, subject, message }),
    });

    if (error) {
      return Response.json({ error }, { status: 500 });
    }

    return Response.json(data);
  } catch (error) {
    return Response.json({ error }, { status: 500 });
  }
}
