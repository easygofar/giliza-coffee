import Link from 'next/link';
import { Charm } from 'next/font/google';

// Initialize the Charm font, just like on your homepage
const charm = Charm({
    weight: ['400', '700'],
    subsets: ['latin'],
    display: 'swap',
});

export default function NotFound() {
    return (
        <main className=" bg-[#5d080e] p-4">
            <div className="m-auto w-full max-w-2xl text-center bg-[#D3BC8D] rounded-2xl shadow-lg p-8 md:p-12 mb-[100px]">

                {/* Image Section */}
                <div className="flex justify-center mb-6">
                    <img
                        // Use the path to your uploaded image
                        src="/images/giliza/giliza-coffee-monkey-tree.png"
                        alt="Giliza Coffee Monkey and Tree"
                        width={250}
                        height={250}
                        className="w-48 h-auto md:w-64"
                    />
                </div>

                {/* Header with the brand's elegant font */}
                <header>
                    <h1 className={`text-4xl md:text-6xl font-bold text-black mb-4 ${charm.className}`}>
                        404 - Page Lost
                    </h1>
                </header>

                {/* Friendly error message */}
                <article>
                    <p className="text-base text-amber-950 mb-8">
                        Oops! It seems the page you&apos;re looking for has flown away.
                        <br />
                        Perhaps our winged monkey got a bit too adventurous.
                    </p>
                </article>

                {/* Call-to-action button to return home */}
                <Link
                    href="/"
                    className="inline-block px-8 py-3 text-lg font-semibold text-white bg-black rounded-lg hover:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-black transition-colors duration-300"
                >
                    Return to Freshly Brewed Coffee ☕
                </Link>
            </div>
        </main>
    );
}