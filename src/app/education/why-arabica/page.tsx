// import Corners from '@/components/Corners';
import { IoCafe } from "react-icons/io5";
import { GiCoffeeBeans } from "react-icons/gi";
import { FaGem, FaGlobe } from "react-icons/fa";

import CornersLeft from '@/components/CornersLeft';
import CornersRight from '@/components/CornersRight';
import PageHeader from '@/components/PageHeader';

export const metadata = {
    title: 'Giliza Coffee | Why Arabica',
    description: 'Discover why GILIZA exclusively uses 100% Arabica beans for a superior coffee experience. Learn the key differences between Arabica and Robusta, and why we prioritize quality, flavor, and sustainability in every cup.',
    keywords: 'Why Arabica, Arabica vs Robusta, Arabica coffee benefits, premium coffee, smooth flavor, Giliza Coffee, artisan roasted coffee',
    openGraph: {
        title: 'Giliza Coffee | Why Arabica',
        description: 'Explore why GILIZA uses only 100% Arabica beans. Experience smoother, higher-quality coffee with global recognition.',
        images: [
            {
                url: '/images/giliza/giliza-coffee-monkey-tree.png',
                width: 800,
                height: 652,
                alt: 'Giliza Coffee Logo',
            },
        ],
        siteName: 'Giliza Coffee',
        type: 'article',
        url: 'https://giliza.com/why-arabica',
    },
    twitter: {
        card: 'summary',
        title: 'Giliza Coffee | Why Arabica',
        description: 'Discover the superior flavor and quality of Arabica beans with GILIZA Coffee.',
        images: '/images/giliza/giliza-coffee-monkey-tree.png',
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
        canonical: 'https://giliza.com/education/why-arabica/',
    },
    authors: [
        {
            name: 'Giliza Coffee Team',
            url: 'https://giliza.com/about-us',
        },
    ],
    publisher: 'Giliza Coffee',
};

const comparisonData = [
    { feature: 'Flavor', arabica: 'Smooth, complex', robusta: 'Strong, bitter' },
    { feature: 'Acidity', arabica: 'Bright, pleasant', robusta: 'Harsh, flat' },
    { feature: 'Caffeine', arabica: 'Lower', robusta: 'Higher' },
    { feature: 'Aroma', arabica: 'Floral/fruity', robusta: 'Earthy/grainy' },
    { feature: 'Quality', arabica: 'Premium', robusta: 'Commercial-grade' },
];

export default function Brew() {
    return <>
        <main>
            <div className="parent xl:w-[1200px] mb-[100px] md:w-[80%] w-[85%] m-auto rounded-2xl bg-[#D3BC8D] p-0">
                <div className="div1 flex flex-col justify-between items-end">
                    <CornersRight />
                </div>
                <div className='div2 py-16 pb-24 lg:pb-34'>
                    <PageHeader title="Why Arabica" subTitle="At GILIZA, we only use 100% Arabica beans" />
                    <div className="grid md:grid-cols-2 xl:grid-cols-4 gap-8 my-12">
                        {/* */}
                        <div className="bg-[#ECD39F] p-6 rounded-xl shadow-lg">
                            <h3 className="text-xl font-bold text-gray-900 mb-3 flex flex-col sm:gap-4 gap-2 justify-center text-center items-center">
                                <IoCafe className="text-2xl" />
                                <span>Superior Flavor</span>
                            </h3>
                            <ul className="list-disc list-inside space-y-2 text-gray-700">
                                <li>Lower bitterness</li>
                                <li>Brighter acidity</li>
                                <li>Complex notes (chocolate, citrus, floral, berry)</li>
                            </ul>
                        </div>
                        {/* */}
                        <div className="bg-[#ECD39F] p-6 rounded-xl shadow-lg">
                            <h3 className="text-xl font-bold text-gray-900 mb-3 flex flex-col sm:gap-4 gap-2 justify-center text-center items-center">
                                <GiCoffeeBeans className="text-2xl" />
                                <span>Higher Quality Beans</span>
                            </h3>
                            <ul className="list-disc list-inside space-y-2 text-gray-700">
                                <li>Denser, more flavorful beans</li>
                                <li>Higher natural sugars & oils</li>
                                <li>Handpicked harvesting</li>
                            </ul>
                        </div>
                        {/* */}
                        <div className="bg-[#ECD39F] p-6 rounded-xl shadow-lg">
                            <h3 className="text-xl font-bold text-gray-900 mb-3 flex flex-col sm:gap-4 gap-2 justify-center text-center items-center">
                                <FaGem className="text-2xl" />
                                <span>Less Caffeine = More Smoothness</span>
                            </h3>
                            <ul className="list-disc list-inside space-y-2 text-gray-700">
                                <li>Less bitterness</li>
                                <li>Approachable for daily drinking</li>
                                <li>Better for sensitive stomachs</li>
                            </ul>
                        </div>
                        {/* */}
                        <div className="bg-[#ECD39F] p-6 rounded-xl shadow-lg">
                            <h3 className="text-xl font-bold text-gray-900 mb-3 flex flex-col sm:gap-4 gap-2 justify-center text-center items-center">
                                <FaGlobe className="text-2xl" />
                                <span>Premium Worldwide Reputation</span>
                            </h3>
                            <p className="text-gray-700">Recognized globally as the standard for high-quality, specialty coffee.</p>
                        </div>
                    </div>
                    {/* */}
                    <h3 className="text-2xl font-bold text-gray-900 text-center mb-6">Summary Table</h3>
                    <div className="w-full max-w-3xl mx-auto p-4">
                        <div className="space-y-6">
                            {comparisonData.map((item, index) => (
                                <div key={index} className="rounded-xl shadow-lg bg-[#ECD39F] p-5">
                                    <h3 className="text-xl font-bold text-gray-700 uppercase">{item.feature}</h3>
                                    <div className="mt-4 grid grid-cols-1 sm:grid-cols-2 gap-x-4 gap-y-2 text-gray-700">
                                        <div className="flex justify-between sm:block border-b sm:border-b-0 pb-2 sm:pb-0">
                                            <p className="font-semibold text-lg">Arabica</p>
                                            <p>{item.arabica}</p>
                                        </div>
                                        <div className="flex justify-between sm:block">
                                            <p className="font-semibold text-lg">Robusta</p>
                                            <p>{item.robusta}</p>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
                <div className="div3 flex flex-col justify-between items-start">
                    <CornersLeft />
                </div>
            </div>

        </main >
    </>
}