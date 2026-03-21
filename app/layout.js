import './globals.css';

export const metadata = {
  title: 'Best Dental Clinic in Hulimavu Bangalore | 32 Pearls Dental Clinic',
  description: 'Looking for the best dentist in Hulimavu, Bangalore? 32 Pearls Dental Clinic offers dental implants, root canal, teeth cleaning, orthodontics & more. Experienced doctors. Open 7 days, 8AM–10PM.',
  keywords: 'best dental clinic in Hulimavu, best dentist in Hulimavu Bangalore, dental implants Hulimavu, root canal treatment Hulimavu, dentist near me Hulimavu, orthodontist Bangalore',
  authors: [{ name: '32 Pearls Dental Clinic' }],
  openGraph: {
    title: 'Best Dental Clinic in Hulimavu Bangalore | 32 Pearls Dental Clinic',
    description: 'Expert dental care with 4 specialists. Dental implants, orthodontics, oral surgery & more. Open 7 days a week.',
    url: 'https://32pearlsdental.in',
    siteName: '32 Pearls Dental Clinic',
    locale: 'en_IN',
    type: 'website',
  },
};

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'Dentist',
  name: '32 Pearls Dental Clinic',
  description: 'Multi-speciality dental clinic in Hulimavu, Bangalore offering dental implants, root canal, teeth cleaning, orthodontic treatment and more.',
  url: 'https://32pearlsdental.in',
  telephone: '+91-9133983607',
  address: {
    '@type': 'PostalAddress',
    streetAddress: 'Number 19/3, D, SLN Building, Basement, Avani Shringeri Nagar, DLF Road, Near Krishna Kuteera Hotel, Puttenahalli, JP Nagar 7th Phase',
    addressLocality: 'J. P. Nagar Bengaluru',
    addressRegion: 'Karnataka',
    postalCode: '560078',
    addressCountry: 'IN',
  },
  geo: {
    '@type': 'GeoCoordinates',
    latitude: '12.8764',
    longitude: '77.6101',
  },
  openingHoursSpecification: {
    '@type': 'OpeningHoursSpecification',
    dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'],
    opens: '08:00',
    closes: '22:00',
  },
  aggregateRating: {
    '@type': 'AggregateRating',
    ratingValue: '4.9',
    reviewCount: '250',
  },
  medicalSpecialty: ['Dentistry', 'Endodontics', 'Oral Surgery', 'Orthodontics'],
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800;900&family=Playfair+Display:ital,wght@0,400;0,500;0,600;0,700;0,800;0,900;1,400;1,600&display=swap" rel="stylesheet" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body>{children}</body>
    </html>
  );
}
