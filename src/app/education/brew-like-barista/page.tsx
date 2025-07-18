// import Corners from '@/components/Corners';
import CornersLeft from '@/components/CornersLeft';
import CornersRight from '@/components/CornersRight';
import PageHeader from '@/components/PageHeader';

export const metadata = {
    title: 'Giliza Coffee | Brew Like a Barista',
    description: 'Master the art of home brewing with GILIZA Coffee’s step-by-step guide. Learn French Press, Pour-Over, Iced Coffee, and Milk Frothing techniques to craft barista-quality coffee in your kitchen.',
    keywords: 'Brew like a barista, coffee brewing guide, French press instructions, pour-over tips, iced coffee at home, milk frothing guide, home barista, Giliza Coffee',
    openGraph: {
        title: 'Giliza Coffee | Brew Like a Barista',
        description: 'Step into the world of home barista skills with GILIZA. Learn to brew coffee like a pro using simple methods and quality beans.',
        images: [
            {
                url: '/images/giliza/giliza-coffee-monkey-tree.png',
                width: 800,
                height: 652,
                alt: 'Brew Like a Barista with Giliza Coffee',
            },
        ],
        siteName: 'Giliza Coffee',
        type: 'article',
        url: 'https://giliza.com/brew-like-a-barista',
    },
    twitter: {
        card: 'summary',
        title: 'Giliza Coffee | Brew Like a Barista',
        description: 'Brew like a pro at home. Discover GILIZA’s simple guide to French Press, Pour-Over, Iced Coffee, and Milk Frothing.',
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
        canonical: 'https://giliza.com/education/brew-like-a-barista/',
    },
    authors: [
        {
            name: 'Giliza Coffee Team',
            url: 'https://giliza.com/about-us/',
        },
    ],
    publisher: 'Giliza Coffee',
};

export default function Brew() {
    return <>
        <main>
            <div className="parent xl:w-[1200px] mb-[100px] md:w-[80%] w-[85%] m-auto rounded-2xl bg-[#D3BC8D] p-0">
                <div className="div1 flex flex-col justify-between items-end">
                    <CornersRight />
                </div>
                <div className='div2 py-16 pb-24 lg:pb-34'>
                    <PageHeader title="Your Coffee Brewing Guide" subTitle="Simple steps for the perfect cup" />

                    <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-8">

                        {/* <!-- Card 1: French Press --> */}
                        <div className="bg-[#ECD39F] rounded-xl shadow-lg overflow-hidden transform hover:scale-105 transition-transform duration-300 ease-in-out">
                            <div className="p-6">
                                <h2 className={`text-2xl font-bold text-gray-900 mb-4`}>French Press</h2>
                                <ol className="list-decimal list-inside space-y-3 text-gray-700">
                                    <li className='text-base'>Add coarsely ground coffee (1:15 ratio).</li>
                                    <li className='text-base'>Pour hot water (95°C / 203°F).</li>
                                    <li className='text-base'>Steep for 4 minutes.</li>
                                    <li className='text-base'>Press slowly and serve.</li>
                                </ol>
                            </div>
                        </div>

                        {/* <!-- Card 2: Pour-Over --> */}
                        <div className="bg-[#ECD39F] rounded-xl shadow-lg overflow-hidden transform hover:scale-105 transition-transform duration-300 ease-in-out">
                            <div className="p-6">
                                <h2 className={`text-2xl font-bold text-gray-900 mb-4`}>Pour-Over</h2>
                                <ol className="list-decimal list-inside space-y-3 text-gray-700">
                                    <li>Use medium-ground coffee.</li>
                                    <li>Rinse filter and add grounds.</li>
                                    <li>Pour in slow circles to bloom.</li>
                                    <li>Continue pouring until desired volume.</li>
                                </ol>
                            </div>
                        </div>

                        {/* <!-- Card 3: Iced Coffee --> */}
                        <div className="bg-[#ECD39F] rounded-xl shadow-lg overflow-hidden transform hover:scale-105 transition-transform duration-300 ease-in-out">
                            <div className="p-6">
                                <h2 className={`text-2xl font-bold text-gray-900 mb-4`}>Iced Coffee</h2>
                                <ol className="list-decimal list-inside space-y-3 text-gray-700">
                                    <li>Brew double-strength coffee.</li>
                                    <li>Pour fresh brew directly over ice.</li>
                                    <li>Add milk or sweetener if desired.</li>
                                </ol>
                            </div>
                        </div>

                        {/* <!-- Card 4: Milk Frothing --> */}
                        <div className="bg-[#ECD39F] rounded-xl shadow-lg overflow-hidden transform hover:scale-105 transition-transform duration-300 ease-in-out">
                            <div className="p-6">
                                <h2 className={`text-2xl font-bold text-gray-900 mb-4`}>Milk Frothing</h2>
                                <ol className="list-decimal list-inside space-y-3 text-gray-700">
                                    <li>Use well-chilled milk for best results.</li>
                                    <li>Steam or froth until velvety and smooth.</li>
                                    <li>Pour gently over espresso for lattes.</li>
                                </ol>
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