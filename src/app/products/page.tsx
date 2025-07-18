// app/about/page.js or pages/about.js
import Prodcuts from '@/components/Products'; // Adjust path if needed

export const metadata = {
    title: 'Giliza Coffee | Products',
    description: 'Explore GILIZA Coffee\'s premium Arabica products, each crafted for a unique flavor experience.'
};


export default function Produts() {
    return (
        <Prodcuts />
    );
}