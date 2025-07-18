import PageHeader from './PageHeader';
import CornersLeft from '@/components/CornersLeft';
import CornersRight from '@/components/CornersRight';

export default function AboutUs() {
    return (
        <main>
            <div className="parent xl:w-[1200px] mb-[100px] md:w-[80%] w-[85%] m-auto rounded-2xl bg-[#D3BC8D] p-0">
                <div className="div1 flex flex-col justify-between items-end">
                    <CornersRight />
                </div>
                <div className='div2 py-16 pb-24 lg:pb-34'>
                    {/* Image Section */}
                    <div className='w-full flex items-center justify-center md:py-10 pb-6'>
                        <img
                            src="/images/giliza/giliza-coffee-plant.jpg" // Example image, update this path if needed
                            alt="GILIZA Coffee Heritage"
                            className='w-full  max-h-[400px] h-auto object-cover rounded-lg'
                        />
                    </div>

                    {/* Text Content Section */}
                    {/* <div className='w-full flex items-start justify-center flex-col sm:px-16 pt-2 px-6 pb-16'> */}

                    <PageHeader title='GILIZA Coffee' subTitle='Where Heritage Meets Innovation' />
                    <div className='mt-4 sm:mt-6'>
                        <p className='mb-4 text-base'>
                            At <strong>GILIZA</strong>, we believe coffee is more than a drink — it’s a ritual, a story, a sensory experience. Our beans are
                            sourced from <strong>Africa’s finest highland farms</strong> and roasted in small batches in <strong>Dubai</strong> to preserve their rich
                            character. Whether infused with creamy vanilla, aged in whiskey barrels, or crafted for bold simplicity, every <strong>GILIZA</strong> blend is a tribute to timeless quality and creative flavor.
                        </p>
                    </div>
                    {/* </div> */}
                </div>
                <div className="div3 flex flex-col justify-between items-start">
                    <CornersLeft />
                </div>
            </div>
        </main >
    )
}