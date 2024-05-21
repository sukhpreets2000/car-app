import { TypeAnimation } from 'react-type-animation';

const HomePage = () => {
  return (
    <section>
      <div className="w-full h-[90vh] bg-black">
        <div className="flex items-center flex-col justify-center w-full h-full">
          <div className="flex items-center image">
            <div className="position-absolute bg-overlay w-full h-full flex items-center justify-center">
              <h1 className="text-white text-[2em] type-style">RELIABLE hai </h1>
              <TypeAnimation
                sequence={[
                  ' PROVIDE BEST OFFERS',
                  1000,
                  ' BEST QUALTY REPAIR',
                  1000,
                  ' EFFICIENT TECHNIC',
                  1000,
                  ' REPAIR OF YOUR CAR',
                  1000,
                  ' DURING THE DAY',
                  1000
                ]}
                wrapper="span"
                speed={50}
                repeat={Infinity}
              />
            </div>
          </div>
          <div>
            <button className="border-solid border-2 border-yellow text-yellow hover:bg-yellow hover:text-black duration-500 px-5 py-2 rounded mt-4">About Us</button>
          </div>
        </div>
        {/* <img src={img1} alt="homeBannerimg" className="w-full h-screen"/> */}
      </div>
    </section>
  )
}

export default HomePage