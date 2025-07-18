// import Corners from '@/components/Corners';
import PageHeader from '@/components/PageHeader';
import CornersLeft from '@/components/CornersLeft';
import CornersRight from '@/components/CornersRight';

export const metadata = {
    title: 'Giliza Coffee | Coffee Guide',
    description: 'Explore the GILIZA Coffee Guide and learn everything from the bean’s journey and roasting styles to brewing methods, tasting notes, and pairing tips for the perfect cup.',
    keywords: 'Giliza Coffee guide, coffee brewing methods, coffee glossary, Arabica coffee, coffee pairing, roasting levels, single-origin coffee, how to brew coffee',
    openGraph: {
        title: 'Giliza Coffee | Coffee Guide',
        description: 'Dive into the GILIZA Coffee Guide: discover our bean journey, roasting techniques, brewing tips, and expert pairing advice for coffee lovers.',
        images: [
            {
                url: '/images/giliza/giliza-logo.png',
                width: 800,
                height: 652,
                alt: 'Giliza Coffee Logo',
            },
        ],
        siteName: 'Giliza Coffee',
        type: 'article',
        url: 'https://giliza.com/coffee-guide',
    },
    twitter: {
        card: 'summary',
        title: 'Giliza Coffee | Coffee Guide',
        description: 'Learn how to brew better coffee with GILIZA’s expert guide on beans, flavors, roast levels, and pairings.',
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
        canonical: 'https://giliza.com/education/coffee-guide/',
    },
    authors: [
        {
            name: 'Giliza Coffee Team',
            url: 'https://giliza.com/about-us/',
        },
    ],
    publisher: 'Giliza Coffee',
};


export default function CoffeeGuide() {
    return <>
        <main>
            <div className="parent xl:w-[1200px] mb-[100px] md:w-[80%] w-[85%] m-auto rounded-2xl bg-[#D3BC8D] p-0">
                <div className="div1 flex flex-col justify-between items-end">
                    <CornersRight />
                </div>
                <div className='div2 py-16 pb-24 lg:pb-34'>
                    <PageHeader title='The GILIZA Coffee Guide' subTitle='Learn, Brew, and Enjoy the Perfect Cup' />

                    {/* <!-- Main Grid Layout --> */}
                    <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 md:gap-12">

                        {/* <!-- Left Column / Main Content --> */}
                        <div className="lg:col-span-2 space-y-10">

                            {/* <!-- Section: The Coffee Bean Journey --> */}
                            <section>
                                <h2 className="text-2xl md:text-3xl text-[#000] mb-4">The Coffee Bean Journey</h2>
                                <p className="text-base mb-4">{`Coffee doesn't start in a café—it begins in the soil. Here's how it travels to your GILIZA cup:`}</p>
                                <ol className="relative list-decimal list-inside space-y-2 text-base bg-black/5 p-4 rounded-lg">
                                    <li><strong>Cultivation:</strong> Arabica coffee grows best at high altitudes with rich soil and shade.</li>
                                    <li><strong>Harvesting:</strong> Beans are handpicked when cherries are red and ripe.</li>
                                    <li><strong>Processing:</strong>{` Our sources use washed and natural processing to highlight each bean's unique profile.`}</li>
                                    <li><strong>Drying & Milling:</strong> Beans are dried, hulled, and sorted for quality.</li>
                                    <li><strong>Export & Roasting:</strong> We roast in Dubai in small batches to preserve freshness and character.</li>
                                    <li><strong>Grinding & Brewing:</strong> Finally, you unlock the full flavor experience at home.</li>
                                </ol>
                            </section>

                            {/* <!-- Section: Single-Origin vs. Blends --> */}
                            <section>
                                <h2 className="text-2xl md:text-3xl text-[#000] mb-4">Single-Origin vs. Blends</h2>
                                <p className="text-base"><strong>Single-origin</strong> coffee comes from one farm or region, delivering clear, traceable flavor profiles. <strong>Blends</strong> combine beans from multiple sources for consistency. At GILIZA, we focus on single-origin to highlight Africa’s rich diversity—from Uganda’s bold body to Ethiopia’s floral notes.</p>
                            </section>

                            {/* <!-- Section: How Roasting Affects Flavor --> */}
                            <section>
                                <h2 className="text-2xl md:text-3xl text-[#000] mb-4">How Roasting Affects Flavor</h2>
                                <p className="text-base mb-4">Roasting transforms green beans into something rich and aromatic. We roast to a medium or medium-dark level to let both the bean’s origin and our flavor infusions shine.</p>
                                <div className="flex  flex-col gap-4">
                                    <div className="text-base bg-black/5 p-3 rounded-md flex-grow text-center"><strong>Light Roast:</strong> Tangy, fruity, tea-like</div>
                                    <div className="text-base bg-black/10 p-3 rounded-md flex-grow text-center"><strong>Medium Roast:</strong> Balanced, smooth (Ideal for GILIZA)</div>
                                    <div className="text-base bg-black/20 text-black p-3 rounded-md flex-grow text-center"><strong>Dark Roast:</strong> Smoky, heavy-bodied</div>
                                </div>
                            </section>

                            {/* <!-- Section: Glossary --> */}
                            <section>
                                <h2 className="text-2xl md:text-3xl text-[#000] mb-4">Glossary of Coffee Terms</h2>
                                <ul className="space-y-2 text-base md:text-lg">
                                    <li className='text-base'><strong>Bloom:</strong> The initial release of gas when hot water hits coffee grounds.</li>
                                    <li className='text-base'><strong>Crema:</strong> The golden foam on a well-pulled shot of espresso.</li>
                                    <li className='text-base'><strong>Body:</strong> The weight or thickness of the coffee in your mouth.</li>
                                    <li className='text-base'><strong>Acidity:</strong> The brightness or liveliness of a coffee, not sourness.</li>
                                </ul>
                            </section>

                        </div>

                        {/* <!-- Right Column / Sidebar --> */}
                        <aside className="space-y-10">

                            {/* <!-- Image Placeholder --> */}
                            <div className="lg:flex justify-center hidden">
                                <img src="/images/giliza/giliza-logo.png" alt="GILIZA Coffee" className="rounded-lg w-2/3 lg:w-full" />
                            </div>

                            {/* <!-- Section: Best Ways to Brew --> */}
                            <section className="bg-black/5 p-6 rounded-lg">
                                <h3 className="text-2xl md:text-3xl text-[#000] mb-4">Best Ways to Brew</h3>
                                <ul className="space-y-3">
                                    <li><strong>Vanilla:</strong> French Press (enhances creaminess)</li>
                                    <li><strong>Barrel Aged:</strong> Pour Over (preserves complexity)</li>
                                    <li><strong>Hazelnut:</strong> Drip Machine (balanced extraction)</li>
                                    <li><strong>Pumpkin Spice:</strong> Cold Brew (smooth spiced profile)</li>
                                    <li><strong>Specialty Roast:</strong> Espresso (bold intensity)</li>
                                </ul>
                            </section>

                            {/* <!-- Section: Coffee Pairing Guide --> */}
                            <section className="bg-black/5 p-6 rounded-lg">
                                <h3 className="text-2xl md:text-3xl text-[#000] mb-4">Coffee Pairing Guide</h3>
                                <ul className="space-y-3">
                                    <li><strong>Vanilla:</strong> Butter cookies, almond biscotti</li>
                                    <li><strong>Hazelnut:</strong> Chocolate croissant, banana bread</li>
                                    <li><strong>Caramel:</strong> Sea salt cookie, milk chocolate</li>
                                    <li><strong>Barrel Aged:</strong> Dark chocolate, smoked nuts</li>
                                </ul>
                            </section>

                        </aside>

                    </div>
                </div>
                <div className="div3 flex flex-col justify-between items-start">
                    <CornersLeft />
                </div>
            </div>

        </main >

    </>
}
