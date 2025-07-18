import { Charm } from 'next/font/google'; // Import the Charm font
import CornersLeft from '@/components/CornersLeft';
import CornersRight from '@/components/CornersRight';
import React from 'react';


export const metadata = {
  title: 'Giliza Coffee',
  description: 'Welcome to GILIZA Coffee, where tradition meets innovation in every cup. Discover our premium Arabica coffee sourced from Africa and artisan roasted in Dubai.',
  keywords: 'Giliza Coffee, Arabica coffee, artisan roasted, Dubai coffee, premium coffee',
  openGraph: {
    title: 'Giliza Coffee',
    description: 'Welcome to GILIZA Coffee, where tradition meets innovation in every cup. Discover our premium Arabica coffee sourced from Africa and artisan roasted in Dubai.',
    images: [
      {
        url: '/images/giliza/giliza-logo.png',
        width: 800,
        height: 652,
        alt: 'Giliza Coffee Logo',
      },
    ],
    siteName: 'Giliza Coffee',
    type: 'website',
  },
  twitter: {
    card: 'summary',
    title: 'Giliza Coffee',
    description: 'Welcome to GILIZA Coffee, where tradition meets innovation in every cup. Discover our premium Arabica coffee sourced from Africa and artisan roasted in Dubai.',
    images: '/images/giliza/giliza-logo.png',
  },
  robots: {
    index: true,
    follow: true,
  },
  icons: {
    icon: '/favicon.ico',
    apple: '/apple-touch-icon.png',
    shortcut: '/favicon-32x32.png',
  },
  alternates: {
    canonical: 'https://giliza.com/',
  },
  // verification: {
  //   google: 'google-site-verification-code',
  //   yandex: 'yandex-verification-code',
  //   bing: 'bing-site-verification-code',
  // },
  authors: [
    {
      name: 'Giliza Coffee Team',
      url: 'https://giliza.com/about-us/',
    },
  ],
  publisher: 'Giliza Coffee',
};

const charm = Charm({
  weight: ['400', '700'],
  subsets: ['latin'],
  display: 'swap', // 'swap' tells the browser to use a fallback font immediately
});

export default function Home() {
  return (
    <main>
      <div className="parent xl:w-[1200px] mb-[100px] md:w-[80%] w-[85%] m-auto rounded-2xl bg-[#D3BC8D] p-0">
        <div className="div1 flex flex-col justify-between">
          <CornersRight />
        </div>
        <div className='div2 py-16 pb-18 flex xl:flex-row flex-col-reverse'>

          <div className='xl:w-1/2 w-full flex items-center justify-center flex-col mt-10'>
            <header>
              <h1 className={`lg:text-5xl sm:text-4xl text-3xl  flex items-center justify-start lg:leading-20 leading-14 text-[#000] z-20 ${charm.className}`}>Crafted Excellence <br /> from Farm to Cup</h1>
            </header>
            <article className='lg:p-13 p-2 mt-6 pb-20'>

              <p className='m-1 text-base'>Welcome to <strong>GILIZA Coffee</strong>, where tradition meets innovation in every cup. We bring you the finest 100%
                Arabica coffee, sourced from the rich soils of Africa and artisan roasted in Dubai. Whether you crave bold
                flavors or smooth classics, <strong>GILIZA</strong> is your destination for coffee without compromise.</p>
              <p className='m-1 text-base'>Explore our collection of signature blends and unique flavored coffees crafted to elevate your daily ritual.</p>
            </article>
          </div>

          {/* Image section */}
          <section className='xl:w-1/2 py-8 xl:p-0 flex items-center justify-center'>
            <img src="/images/giliza/giliza-logo.png" className='xl:w-[85%] md:w-[40%] w-[60%]' />
          </section>
        </div>
        <div className="div3 flex flex-col justify-between items-start">
          <CornersLeft />
        </div>
      </div>
    </main >
  )
}
