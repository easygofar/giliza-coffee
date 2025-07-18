import { Charm } from 'next/font/google';
import { MdOutlineEmail } from "react-icons/md";
import { IoLocationOutline, IoCafeOutline } from "react-icons/io5";

import CornersLeft from '@/components/CornersLeft';
import CornersRight from '@/components/CornersRight';

// Metadata specific to the Contact page
export const metadata = {
    title: 'Contact Us | Giliza Coffee',
    description: 'Get in touch with GILIZA Coffee. Find our business information, location, and contacts for wholesale or vending inquiries in Dubai.',
    keywords: 'Contact Giliza Coffee, coffee wholesale Dubai, coffee vending, Dubai coffee supplier',
    openGraph: {
        title: 'Contact Us | Giliza Coffee',
        description: 'Get in touch with GILIZA Coffee for premium artisan coffee inquiries.',
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
        url: 'https://giliza.com/contact',
    },
    twitter: {
        card: 'summary',
        title: 'Contact Us | Giliza Coffee',
        description: 'Get in touch with GILIZA Coffee for premium artisan coffee inquiries.',
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
        canonical: 'https://giliza.com/contact/',
    },
    publisher: 'Giliza Coffee',
};

// Initialize the Charm font
const charm = Charm({
    weight: ['400', '700'],
    subsets: ['latin'],
    display: 'swap',
});

export default function ContactPage() {
    return (
        <main>
            <div className="parent xl:w-[1200px] mb-[100px] md:w-[80%] w-[85%] m-auto rounded-2xl bg-[#D3BC8D] p-0">
                <div className="div1 flex flex-col justify-between items-end">
                    <CornersRight />
                </div>
                <div className='div2 py-16 pb-24 lg:pb-34'>
                    <header>
                        <h1 className={`lg:text-6xl text-center sm:text-5xl text-4xl flex items-center justify-center lg:leading-20 leading-14 text-amber-950 z-20 ${charm.className}`}>
                            Get in Touch
                        </h1>
                    </header>
                    <div className='w-full flex xl:flex-row items-center justify-center flex-col-reverse mt-10'>

                        {/* Article section updated with react-icons */}
                        <article className='lg:p-13 mt-6 pb-20 w-full'>
                            <div className='text-base space-y-6'>
                                <p className="flex sm:flex-row flex-col  sm:items-baseline justify-start">
                                    <span className='flex'>
                                        <MdOutlineEmail className="w-5 h-5 mr-3 flex-shrink-0" />
                                        <strong>Email:</strong></span><span>&nbsp;<a href="mailto:info@giliza.com" className="hover:underline">info@giliza.com</a></span>
                                </p>
                                <p className="flex sm:flex-row flex-col  sm:items-baseline justify-start">
                                    <span className='flex'>
                                        <IoLocationOutline className="w-5 h-5 mr-3 flex-shrink-0" />
                                        <strong>Location:</strong>
                                    </span><span>&nbsp;Dubai, United Arab Emirates</span>
                                </p>
                                <p className="flex sm:flex-row flex-col  sm:items-baseline justify-start">
                                    <span className='flex'>
                                        <IoCafeOutline className="w-5 h-5 mr-3 flex-shrink-0" />
                                        <strong>Wholesale:</strong></span><span>&nbsp;<a href="mailto:sales@giliza.com" className="hover:underline">sales@giliza.com</a></span>
                                </p>
                            </div>
                            <p className='mt-8 text-base'>
                                We look forward to hearing from you. Whether you have a question about our blends or an inquiry for your business, our team is ready to help.
                            </p>
                        </article>
                        {/* Image section, same as the home page */}
                        <section className='pt-8 xl:p-0 flex items-center justify-center'>
                            <img src="/images/giliza/giliza-coffee-monkey-tree.png" alt="Giliza Coffee Logo" className='xl:w-full w-3/4' />
                        </section>
                    </div>

                </div>
                <div className="div3 flex flex-col justify-between items-start">
                    <CornersLeft />
                </div>
            </div>
        </main >

    )
}