
import type { Metadata } from 'next';
import { SmoothScrollProvider } from "@/components/ui/smooth-scroll-provider";
import { Playfair_Display, Plus_Jakarta_Sans } from 'next/font/google';
import './globals.css';
import { LenisSmoothScroll } from '@/components/ui/lenis-smooth-scroll';
import { WhatsAppFloat } from '@/components/ui/whatsapp-float';

const playfair = Playfair_Display({
  subsets: ['latin'],
  variable: '--font-heading',
});

const jakarta = Plus_Jakarta_Sans({
  subsets: ['latin'],
  variable: '--font-body',
});

export const metadata: Metadata = {
  title: 'Kalaimagal Matriculation School | Pattabiram, Chennai',
  description: 'Kalaimagal Matriculation School in Rajiv Gandhi Nagar, Pattabiram offers disciplined State Board education from KG1 through Class 12, with a strong focus on sports and student wellbeing.',
  keywords: ['Kalaimagal Matriculation School', 'matriculation school Pattabiram', 'State Board school Chennai'],
  alternates: {
    canonical: 'https://kalaimagalmatric.edu.in',
  },
};

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': ['EducationalOrganization', 'LocalBusiness', 'School'],
  name: 'Kalaimagal Matriculation School',
  url: 'https://kalaimagalmatric.edu.in',
  telephone: '+917010624186',
  email: 'kalaimagalmatric.pattabiram@gmail.com',
  address: {
    '@type': 'PostalAddress',
    streetAddress: 'Balammal Street, Rajiv Gandhi Nagar, Pattabiram',
    addressLocality: 'Chennai',
    addressRegion: 'Tamil Nadu',
    postalCode: '600072',
    addressCountry: 'IN',
  },
  geo: {
    '@type': 'GeoCoordinates',
    latitude: 13.12384,
    longitude: 80.08109,
  },
  hasMap: 'https://maps.google.com/?q=13.12384,80.08109',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${playfair.variable} ${jakarta.variable}`}>
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="font-body bg-[#F8FAFC] text-[#475569] antialiased min-h-screen">
        <SmoothScrollProvider>
        <LenisSmoothScroll>
          {children}
          <WhatsAppFloat />
        </LenisSmoothScroll>
              </SmoothScrollProvider>
</body>
    </html>
  );
}