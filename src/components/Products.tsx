import { products } from '@/data'
import Link from 'next/link';

import PageHeader from './PageHeader';
import CornersLeft from '@/components/CornersLeft';
import CornersRight from '@/components/CornersRight';

import { Charm } from 'next/font/google'; // Import the Charm font
import { formatProductName } from '@/utils';

// Configure the Charm font
const charm = Charm({
    weight: ['400', '700'],
    subsets: ['latin'],
    display: 'swap',
});

export const metadata = {
    title: 'Our Coffee Collection | Giliza Coffee',
    description: 'Explore Giliza Coffee’s premium range of Arabica beans, from delicate White Coffee to rich Barrel Aged blends. Crafted in Dubai from the finest African origins.',
    keywords: 'Giliza Coffee products, Arabica coffee collection, Dubai roasted coffee, White Coffee, Barrel Aged coffee, flavored coffee, premium coffee beans',
    openGraph: {
        title: 'Our Coffee Collection | Giliza Coffee',
        description: 'Explore Giliza Coffee’s premium range of Arabica beans, from delicate White Coffee to rich Barrel Aged blends. Crafted in Dubai from the finest African origins.',
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
        title: 'Our Coffee Collection | Giliza Coffee',
        description: 'Explore Giliza Coffee’s premium Arabica offerings, artisan roasted in Dubai with flavors from White Coffee to Hazelnut infusions.',
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
        canonical: 'https://giliza.com/products/',
    },
    authors: [
        {
            name: 'Giliza Coffee Team',
            url: 'https://giliza.com/about-us/',
        },
    ],
    publisher: 'Giliza Coffee',
};


export default function Products() {
    return (
        <main>
            <div className="parent xl:w-[1200px] mb-[100px] md:w-[80%] w-[85%] m-auto rounded-2xl bg-[#D3BC8D] p-0">
                <div className="div1 flex flex-col justify-between items-end">
                    <CornersRight />
                </div>
                <div className='div2 py-16 pb-24 lg:pb-34'>
                    <PageHeader title='Explore Our Exquisite Collection' subTitle='' />
                    <div className=''>
                        <p className='mb-4 text-base'>
                            Discover the world of <strong>GILIZA Coffee</strong>, where every bean tells a story of exceptional quality and masterful craftsmanship. From the sun-drenched farms of Africa to our meticulous roastery in Dubai, we bring you a curated selection of 100% Arabica coffees. Whether you crave the delicate notes of our <strong>White Coffee</strong>, the rich complexity of our <strong>Barrel Aged</strong> blends, or the comforting embrace of our <strong>Vanilla</strong> and <strong>Hazelnut</strong> infusions, find your perfect cup and elevate your daily ritual. Indulge in the pure taste of passion, crafted from farm to cup.</p>
                    </div>


                    <div className='w-full flex items-start justify-center flex-wrap md:gap-16 md:p-16 p-8 gap-4'>
                        {products.map(coffee => (
                            <section key={coffee.id}>
                                <Link key={coffee.id} href={`/products/${formatProductName(coffee.name)}`} className='flex flex-col items-center justify-center gap-4'>
                                    <img src={`/images/giliza-coffee/${coffee.image}`} width='200px' alt={coffee.name} />
                                    <h2 className={`md:text-2xl text-xl flex items-center justify-start leading-tight text-[#000] z-20 text-center ${charm.className} mb-4`}>
                                        {coffee.name}
                                    </h2>
                                </Link>
                            </section>
                        ))}
                    </div>
                </div>
                <div className="div3 flex flex-col justify-between items-start">
                    <CornersLeft />
                </div>
            </div>
        </main >
    );
}