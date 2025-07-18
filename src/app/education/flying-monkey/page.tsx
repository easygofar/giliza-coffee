// import Corners from '@/components/Corners';
import PageHeader from '@/components/PageHeader';
import CornersLeft from '@/components/CornersLeft';
import CornersRight from '@/components/CornersRight';

export const metadata = {
    title: 'Giliza Coffee | Flying Monkey Story',
    description: 'Discover the legendary origins of GILIZA’s Flying Monkey — a symbol of aroma, freedom, and the fearless pursuit of flavor.',
    keywords: 'Flying Monkey story, Giliza Coffee symbol, coffee legend, aroma spirit, coffee mythology, Giliza logo meaning, artisan coffee inspiration',
    openGraph: {
        title: 'Giliza Coffee | Flying Monkey Story',
        description: 'Learn the story behind GILIZA’s winged monkey — a symbol of flavor, freedom, and sensory adventure from the coffee forests of East Africa.',
        images: [
            {
                url: '/images/giliza/giliza-coffee-monkey-tree.png',
                width: 800,
                height: 652,
                alt: 'Giliza Coffee Flying Monkey Symbol',
            },
        ],
        siteName: 'Giliza Coffee',
        type: 'article',
        url: 'https://giliza.com/flying-monkey/',
    },
    twitter: {
        card: 'summary',
        title: 'Giliza Coffee | Flying Monkey Story',
        description: 'Explore the legendary story of the Flying Monkey — the fearless symbol behind GILIZA Coffee.',
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
        canonical: 'https://giliza.com/education/flying-monkey/',
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
                    <PageHeader title="The Story Behind the Flying Monkey" subTitle="" />


                    <p className="text-base mx-automx-auto mb-12">
                        In the heart of GILIZA lies a curious creature. More than a logo, it&apos;s a symbol of everything we believe in: freedom, flavor, and the fearless pursuit of craft.
                    </p>


                    <div className="bg-[#ECD39F] rounded-xl shadow-lg p-8 md:p-12 max-w-5xl mx-auto">
                        <div className="space-y-6 text-gray-800 text-base leading-relaxed">
                            <p>
                                Legend has it that in the ancient coffee forests of East Africa, a rare monkey was seen leaping from tree to tree, guided not by sight, but by scent. Drawn to the ripest coffee cherries, this creature knew instinctively what was worth picking. Locals called him <strong>“The Spirit of Aroma.”</strong>
                            </p>
                            <p>
                                At GILIZA, we&apos;ve reimagined that myth into a new emblem: a monkey with wings — bold, curious, and free. He represents our journey from farm to cup, from tradition to innovation. He reminds us that great coffee doesn&apos;t follow trends — it follows the senses.
                            </p>
                            <p>
                                So when you see the flying monkey, know that you&apos;re holding more than a drink. You&apos;re holding a symbol of adventure, imagination, and taste that dares to stand apart.
                            </p>
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