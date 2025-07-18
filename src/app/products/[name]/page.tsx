import { Charm } from 'next/font/google'; // Import the Charm font
import { products } from '@/data'
import { formatProductName } from '@/utils'

interface ProductsPageProps {
    params: Promise<{ name: string }>; // params is now a Promise
}

interface Product {
    name: string
}

// interface ProductsPageProps {
//     params: { name: string };
// }

export async function generateMetadata({ params }: ProductsPageProps) {
    const { name } = await params
    const productSlug = decodeURIComponent(name);
    const product = products.find((p) => formatProductName(p.name) === productSlug);

    if (!product) {
        return {
            title: 'Giliza Coffee | Product Not Found',
            description: 'Sorry, this GILIZA Coffee product could not be found.',
            robots: {
                index: false,
                follow: false,
            },
        };
    }

    // const imageUrl = `https://giliza.com/images/giliza-coffee/${formatProductName(product.name)}.jpg`;
    const productUrl = `https://giliza.com/products/${formatProductName(product.name)}`;

    return {
        title: `Giliza Coffee | ${product.name}`,
        description: product.tagline || `Discover the unique flavor of ${product.name} from GILIZA Coffee.`,
        keywords: [
            `${product.name} coffee`,
            `Giliza ${product.name}`,
            'specialty coffee',
            'single origin coffee',
            'premium coffee beans',
            'artisan coffee',
        ],
        // openGraph: {
        //     title: `Giliza Coffee | ${product.name}`,
        //     description: product.description,
        //     url: productUrl,
        //     type: 'product',
        //     siteName: 'Giliza Coffee',
        //     images: [
        //         {
        //             url: imageUrl,
        //             width: 800,
        //             height: 600,
        //             alt: `${product.name} - GILIZA Coffee`,
        //         },
        //     ],
        // },
        // twitter: {
        //     card: 'summary_large_image',
        //     title: `Giliza Coffee | ${product.name}`,
        //     description: product.tagline,
        //     images: [imageUrl],
        // },
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
            canonical: productUrl,
        },
        metadataBase: new URL('https://giliza.com/'),
        authors: [
            {
                name: 'Giliza Coffee Team',
                url: 'https://giliza.com/about-us/',
            },
        ],
        publisher: 'Giliza Coffee',
    };
}
// Configure the Charm font
const charm = Charm({
    weight: ['400', '700'],
    subsets: ['latin'],
    display: 'swap',
});


export async function generateStaticParams() {

    return products.map((product: Product) => ({
        name: formatProductName(product.name),
    }));
}

export default async function ProductPage({ params }: ProductsPageProps) {
    const { name } = await params
    const product = products.find((p) => formatProductName(p.name) === name);
    const image = product ? `/images/giliza-coffee/${formatProductName(name)}.jpg` : '';
    console.log('product', image);

    if (!product) return <div>Product not found</div>;

    return (
        <main
            className="mb-[100px]"
        >
            <div className="m-auto xl:w-[1200px] w-[85%] pb-[100px] bg-[#D3BC8D] rounded-2xl overflow-hidden lg:pb-0 flex flex-col xl:flex-row">
                <div className={`xl:w-1/2 w-full border-amber-950 lg:rounded-l-2xl background ${formatProductName(product.name)}`}
                >
                    <img src='/images/background/filler.png' className='xl:h-[750px] sm:h-[500px] h-[400px] w-full' />
                </div>

                <div className='xl:w-1/2 w-full flex flex-col gap-3 lg:p-16 p-4'>
                    <h1 className={`md:text-5xl text-4xl  text-amber-950 ${charm.className}`}>{product.name}</h1>
                    <h2 className={`md:text-3xl text-xl text-amber-800 ${charm.className}`}>{product.tagline}</h2>
                    <p className={`text-base pt-6 text-gray-800`}>{product.description}</p>
                    <ul className='list-disc pl-8 '>
                        {product.highlights.map((highlight, index) => (
                            <li key={index} className={`text-base`}>{highlight}</li>
                        ))}
                    </ul>
                </div>
            </div>

        </main>
    );
}






// import { Charm } from 'next/font/google'; // Import the Charm font
// import { products } from '@/data'
// import { formatProductName } from '@/utils'

// // Configure the Charm font
// const charm = Charm({
//     weight: ['400', '700'],
//     subsets: ['latin'],
//     display: 'swap',
// });

// export default function ProductPage({ params }: { params: { name: string } }) {
//     const product = products.find((p) => p.name === decodeURICompname));
//     const image = product ? `/images/giliza-coffee/${formatProducoduct.name)}.png` : '';
//     const bgColor = product ? product.bgColor : "#000"
//     console.log('product', image);

//     if (!product) return <div>Product not found</div>;

//     return (
//         <main
//             className="relative min-h-screen min-w-screen"
//         >
//             <div className="absolute flex  flex-col left-1/2 -translate-x-1/2 xl:w-[1200px] xl:h-[70%] md:w-[80%] w-[85%] m-auto">
//                 <div className="relative w-full h-full bg-[#D3BC8D] rounded-2xl p-16">
//                     <div className='grid grid-cols-2 w-full h-full'>
//                         <div className="w-1/2 relative flex items-center justify-center">
//                             <div className='w-full relative flex items-center justify-center'>
//                                 <div className={`absolute top-1/2 left-1/2 -translate-x-[33%] -translate-y-1/2 p-20 w-[550px] h-[700px] rounded-full bg-[${bgColor}]  shadow-white`}></div>
//                                 <div className="absolute top-1/2 left-1/2 -translate-x-[34%] -translate-y-1/2 p-20 w-[500px] h-[650px] rounded-full bg-[#000] opacity-10 shadow-white"></div>
//                                 <div className="absolute top-1/2 left-1/2 -translate-x-[35%] -translate-y-1/2 p-20 w-[450px] h-[600px] rounded-full bg-[#000] opacity-10 shadow-white"></div>
//                                 {/* <div className="absolute top-1/2 left-1/2 -translate-x-1/3 -translate-y-1/2 p-20 w-[550px] h-[700px] rounded-full bg-[#000] opacity-5"></div> */}
//                                 <div className="absolute top-1/2 left-1/2 -translate-x-[25%] -translate-y-1/2 w-[350px] -rotate-6 rounded-full"><img src={image} alt={product.name} className='w-[500px]' /></div>
//                             </div>
//                         </div>
//                         <div className='flex flex-col gap-3'>
//                             <h1 className={`text-5xl font-bold ${charm.className}`}>{product.name}</h1>
//                             <h2 className={`text-3xl font-bold ${charm.className}`}>{product.tagline}</h2>
//                             <p className={`text-lg pt-6`}>{product.description}</p>
//                             <ul className='list-disc pl-8'>
//                                 {product.highlights.map((highlight, index) => (
//                                     <li key={index} className={`text-lg`}>{highlight}</li>
//                                 ))}
//                             </ul>
//                         </div>
//                     </div>
//                 </div>
//                 <div>

//                 </div>

//             </div>
//         </main>
//     );
// }
