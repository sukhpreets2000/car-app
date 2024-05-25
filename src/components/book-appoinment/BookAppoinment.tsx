

const BookAppoinment = () => {
    return (
        <>
            <section className="bg-darkblue py-[100px]">
                <div className="container mx-auto p-3">
                    <div className="relative">
                        <h1 className="text-white text-center text-[2.6rem]">BOOK AN <span className="text-yellow">APPOINMENT
                            <span className="animate-ping absolute h-[15px] w-[15px] rounded-full bg-yellow px-2"></span>
                        </span></h1>
                    </div>
                    <form className="md:max-w-[60%] mx-auto">
                        <div className="my-3">
                            <input type="text" placeholder="Enter Name" className="w-full p-2 :focus outline-none rounded" />
                        </div>
                        <div className="my-3">
                            <input type="number" placeholder="Enter Mobile Number" className="w-full p-2 :focus outline-none rounded" max={10} />
                        </div>
                        <div className="my-3">
                            <input type="number" placeholder="Enter Car Model" className="w-full p-2 :focus outline-none rounded" max={4} />
                        </div>
                        <div className="my-3">
                            <select className="w-full p-2 :focus outline-none rounded">
                                <option disabled>Select Brand</option>
                                <option>Maruti Suzuki</option>
                                <option>Toyota</option>
                                <option>Mahindra</option>
                                <option>Kia</option>
                                <option>Honda</option>
                                <option>Ford</option>
                                <option>Skoda</option>
                                <option>Tata</option>
                                <option>Volkswagon</option>
                            </select>
                        </div>
                        <button className="w-full p-2 rounded border border-yellow text-yellow hover:bg-yellow hover:text-black duration-500">Submit</button>
                    </form>
                </div>
            </section>
        </>
    )
}

export default BookAppoinment