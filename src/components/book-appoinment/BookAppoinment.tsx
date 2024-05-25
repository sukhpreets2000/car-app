

const BookAppoinment = () => {
  return (
    <>
        <section className="bg-darkblue py-[100px]">
            <div className="container mx-auto">
                <h1 className="text-white text-center text-[2.6rem]">BOOK AN <span className="text-yellow">APPOINMENT</span></h1>
                <form className="w-[50%] mx-auto">
                    <div className="my-3">
                        <input type="text" placeholder="Enter Name" className="w-full p-2 :focus outline-none rounded"/>
                    </div>
                    <div className="my-3">
                        <input type="number" placeholder="Enter Mobile Number" className="w-full p-2 :focus outline-none rounded"/>
                    </div>
                    <div className="my-3">
                        <input type="number" placeholder="Enter Car Model" className="w-full p-2 :focus outline-none rounded"/>
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
                        {/* <input type="text" placeholder="Enter Name" className="w-full p-2 :focus outline-none rounded"/> */}
                    </div>
                </form>
            </div>
        </section>
    </>
  )
}

export default BookAppoinment