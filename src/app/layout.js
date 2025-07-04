import { Montserrat } from 'next/font/google';
import ClientLayout from './ClientLayout';
import './globals.css';

// Load Montserrat font
const montserrat = Montserrat({
  subsets: ['latin'],
  display: 'swap',
  weight: ['100', '200', '300', '400', '500', '600', '700', '800', '900'],
  variable: '--font-sans',
});

// Metadata for SEO
export const metadata = {
  title: 'Omer Baig | MERN Stack Developer',
  description: 'Portfolio of Omer Baig, a skilled MERN Stack Developer specializing in modern web applications.',
  keywords: ['MERN', 'Web Developer', 'Omer Baig', 'Next.js', 'React'],
  openGraph: {
    title: 'Omer Baig | MERN Stack Developer',
    description: 'Explore the portfolio of Omer Baig, a MERN Stack Developer with expertise in building scalable web applications.',
    url: 'https://omerbaig.dev',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Omer Baig | MERN Stack Developer',
    description: 'Portfolio of Omer Baig, a MERN Stack Developer.',
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={montserrat.variable}>
      <head>
        <link rel="icon" href="/favicon.ico" />
      </head>
      <body>
        <ClientLayout>{children}</ClientLayout>

        {/* 🔒 Hidden Netlify Form for build-time detection */}
        <form name="contact" netlify netlify-honeypot="bot-field" hidden>
          <input type="text" name="name" />
          <input type="tel" name="phone" />
          <input type="email" name="email" />
          <textarea name="subject" />
        </form>
      </body>
    </html>
  );
}
