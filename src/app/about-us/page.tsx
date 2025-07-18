// app/about/page.js or pages/about.js
import AboutUs from '@/components/About'; // Adjust path if needed

export const metadata = {
    title: 'Giliza Coffee | About Us',
    description:
        'Learn about GILIZA Coffee — where African heritage meets Dubai craftsmanship. Discover our story, sourcing, and passion for exceptional flavor.',
    keywords: [
        'Giliza Coffee',
        'about Giliza',
        'coffee heritage',
        'specialty coffee Dubai',
        'African coffee beans',
        'craft coffee',
        'artisan roasting',
    ],
    openGraph: {
        title: 'Giliza Coffee | About Us',
        description:
            'At GILIZA, we honor tradition and embrace innovation — from African farms to our Dubai roastery. Discover the story behind every cup.',
        url: 'https://giliza.com/about-us',
        type: 'website',
        siteName: 'Giliza Coffee',
        images: [
            {
                url: '/images/giliza/giliza-logo.png',
                width: 800,
                height: 652,
                alt: 'Giliza Coffee Logo',
            },
        ],
    },
    twitter: {
        card: 'summary_large_image',
        title: 'Giliza Coffee | About Us',
        description:
            'Where heritage meets innovation — explore the journey of GILIZA Coffee from African highlands to Dubai roastery.',
        images: '/images/giliza/giliza-logo.png',

    },
    alternates: {
        canonical: 'https://giliza.com/about-us/',
    },
    robots: {
        index: true,
        follow: true,
    },
    metadataBase: new URL('https://giliza.com/'),
    authors: [{ name: 'Giliza Coffee Team', url: 'https://giliza.com/about-us/' }],
    publisher: 'Giliza Coffee',
};

export default function AboutPage() {
    return (
        <AboutUs />
    );
}