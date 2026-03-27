import './globals.css';

export const metadata = {
  title: "VEDD'S UI HUB",
  description: 'A curated collection of interfaces and web designs. Explore form, craft, typography, and color in a seamless digital book format.',
  keywords: ['UI', 'design', 'interfaces', 'web design', 'portfolio', 'collection'],
  authors: [{ name: 'Vedd' }],
  openGraph: {
    title: "VEDD'S UI HUB",
    description: 'A curated collection of interfaces and web designs.',
    type: 'website',
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link
          href="https://fonts.googleapis.com/css2?family=Pinyon+Script&family=Cormorant+Garamond:ital,wght@0,300;0,400;0,600;1,300;1,400&family=Cinzel:wght@400;600;900&display=swap"
          rel="stylesheet"
        />
      </head>
      <body>
        {children}
        <noscript>
          <style>{`
            #cover { display: none !important; }
            #cwrap { pointer-events: all; }
            .phint { display: none; }
          `}</style>
          <div style={{
            position: 'fixed', top: 0, left: 0, right: 0,
            background: '#7a3535', color: '#fff',
            textAlign: 'center', padding: '10px',
            zIndex: 9999, fontFamily: 'sans-serif', fontSize: '14px',
          }}>
            Please enable JavaScript to fully experience this digital interface book.
          </div>
        </noscript>
      </body>
    </html>
  );
}
