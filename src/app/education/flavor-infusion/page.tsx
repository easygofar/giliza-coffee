// import Corners from '@/components/Corners';
// import { FaSeedling, FaSync, FaBed, FaTools } from 'react-icons/fa';
// import { GiSaltShaker } from 'react-icons/gi';

import PageHeader from '@/components/PageHeader';
import CornersLeft from '@/components/CornersLeft';
import CornersRight from '@/components/CornersRight';


export const metadata = {
    title: 'Giliza Coffee | Flavor Infusion',
    description: 'Discover how GILIZA Coffee masterfully infuses flavor into our premium Arabica beans. From bean selection to hand-packaging, every step is crafted for a unique, aromatic experience.',
    keywords: 'Giliza Coffee, flavor infusion, Arabica coffee, flavored coffee beans, artisan roasting, vanilla coffee, hazelnut coffee, Dubai roasted coffee',
    openGraph: {
        title: 'Giliza Coffee | Flavor Infusion',
        description: 'Learn how GILIZA Coffee infuses bold, clean flavors into our Arabica beans using a five-step artisan process in Dubai.',
        images: [
            {
                url: '/images/giliza/giliza-coffee-monkey-tree.png',
                width: 800,
                height: 652,
                alt: 'Infused Coffee Beans by Giliza',
            },
        ],
        siteName: 'Giliza Coffee',
        type: 'article',
        url: 'https://giliza.com/flavor-infusion',
    },
    twitter: {
        card: 'summary',
        title: 'Giliza Coffee | Flavor Infusion',
        description: 'See how GILIZA infuses flavor into every bean using premium ingredients and small-batch precision.',
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
        canonical: 'https://giliza.com/education/flavor-infusion/',
    },
    authors: [
        {
            name: 'Giliza Coffee Team',
            url: 'https://giliza.com/about-us/',
        },
    ],
    publisher: 'Giliza Coffee',
};


export default function FlavorInfusion() {
    return <>
        <main>
            <div className="parent xl:w-[1200px] mb-[100px] md:w-[80%] w-[85%] m-auto rounded-2xl bg-[#D3BC8D] p-0">
                <div className="div1 flex flex-col justify-between items-end">
                    <CornersRight />
                </div>
                <div className='div2 py-16 pb-24 lg:pb-34'>
                    <PageHeader title="How We Infuse Flavor into Our Coffee Beans" subTitle="At GILIZA, flavor is part of the process — not an afterthought" />


                    <p className="mx-auto mb-12">
                        Our flavored coffees are created using premium Arabica beans and food-grade powdered flavor blends, added at just the right moment to ensure the result is balanced, aromatic, and true to character.
                    </p>

                    <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-8">

                        <div className="bg-[#ECD39F] rounded-xl shadow-lg overflow-hidden transform hover:scale-105 transition-transform duration-300 ease-in-out">
                            <div className="p-6 h-full flex flex-col">
                                {/* <div className="text-2xl text-center mb-2"><FaSeedling /></div> */}
                                <h2 className="text-2xl font-bold text-gray-900 mb-4"> Step 1: Select Beans</h2>
                                <p className="text-base text-gray-700">
                                    We begin with 100% Arabica beans — known for their smooth body and natural sweetness. Each origin is selected for how well it pairs with our infused profiles, whether creamy vanilla or spiced hazelnut.
                                </p>
                            </div>
                        </div>

                        <div className="bg-[#ECD39F] rounded-xl shadow-lg overflow-hidden transform hover:scale-105 transition-transform duration-300 ease-in-out">
                            <div className="p-6 h-full flex flex-col">
                                {/* <div className="text-2xl text-center mb-2"><GiSaltShaker /></div> */}
                                <h2 className="text-2xl font-bold text-gray-900 mb-4"> Step 2: Add Flavor</h2>
                                <p className="text-base text-gray-700">
                                    High-quality powdered flavoring is added to freshly roasted beans while they’re still warm. Unlike syrups, this method is cleaner, more stable, and preserves both the flavor and texture of the coffee.
                                </p>
                            </div>
                        </div>

                        <div className="bg-[#ECD39F] rounded-xl shadow-lg overflow-hidden transform hover:scale-105 transition-transform duration-300 ease-in-out">
                            <div className="p-6 h-full flex flex-col">
                                {/* <div className="text-2xl text-center mb-2"><FaSync /></div> */}
                                <h2 className="text-2xl font-bold text-gray-900 mb-4"> Step 3: Slow Blend</h2>
                                <p className="text-base text-gray-700">
                                    The beans and powder are gently tumbled in small-batch mixers. This slow rotation ensures each bean is evenly coated for a uniform flavor experience in every scoop.
                                </p>
                            </div>
                        </div>

                        <div className="bg-[#ECD39F] rounded-xl shadow-lg overflow-hidden transform hover:scale-105 transition-transform duration-300 ease-in-out">
                            <div className="p-6 h-full flex flex-col">
                                {/* <div className="text-2xl text-center mb-2"><FaBed /></div> */}
                                <h2 className="text-2xl font-bold text-gray-900 mb-4"> Step 4: Rest for Lock-In</h2>
                                <p className="text-base text-gray-700">
                                    After blending, the beans are allowed to rest. This crucial step gives the flavor time to absorb and settle, ensuring a smooth, well-balanced taste from the first brew to the last.
                                </p>
                            </div>
                        </div>

                        <div className="bg-[#ECD39F] rounded-xl shadow-lg overflow-hidden transform hover:scale-105 transition-transform duration-300 ease-in-out md:col-span-2 lg:col-span-1">
                            <div className="p-6 h-full flex flex-col">
                                {/* <div className="text-2xl text-center mb-2"><FaTools /></div> */}
                                <h2 className="text-2xl font-bold text-gray-900 mb-4"> Step 5: Hand-Packaged</h2>
                                <p className="text-base text-gray-700">
                                    Each batch is carefully portioned, sealed, and labeled by hand. We never mass-produce — everything is roasted, blended, and packed fresh to order in Dubai.
                                </p>
                            </div>
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