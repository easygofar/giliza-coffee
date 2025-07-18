import { Charm } from 'next/font/google'; // Import the Charm font

// Configure the Charm font
const charm = Charm({
    weight: ['400', '700'],
    subsets: ['latin'],
    display: 'swap',
});


export default function PageHeader(props: { title: string, subTitle: string }) {
    const { title, subTitle } = props
    return (
        <>
            <header className='sm:p-10 pb-10 w-full flex flex-col text-center items-center justify-center'>
                <h1 className={`text-3xl sm:text-5xl text-amber-950 ${charm.className}`}>{title}</h1>
                {subTitle &&
                    <p className={`mt-6 text-center sm:text-2xl text-xl text-amber-800 ${charm.className}`}>{subTitle}</p>

                }
            </header>
        </>
    )
}