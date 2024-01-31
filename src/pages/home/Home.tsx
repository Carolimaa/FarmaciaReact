import homeLogo from '../../assets/home.avif'

function Home() {
    return (
        <>
        <div className="bg-white flex justify-center">
        <div className='container grid grid-cols-2 text-black'>
            <div className="flex flex-col gap-4 items-center justify-center py-4">
            <h2 className='text-5xl font-bold'>DrogaGen</h2>
            <p className='text-xl'>A Drogaria que cuida de você!</p>

            <div className="flex justify-around gap-4">
            
                <button className='rounded bg-[#282424]  text-white py-2 px-4'>Ver produtos</button>
            </div>
            </div>

            <div className="flex justify-center ">
            <img src={homeLogo} alt="" className='w-2/3' />
    
            </div>
        </div>
        </div>
    
    </>
    );
}

export default Home;