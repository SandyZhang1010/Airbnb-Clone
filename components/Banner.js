import Image from "next/image"
import MyImage from '../MyImage/banner pic.png'

function Banner () {

  return (
    <div className="relative h-[450px] sm:h-[500px] lg:h-[550px] xl:h-[650px] 2xl:h-[750px]">
      <Image src={MyImage}
        layout="fill"
        objectFit="cover"
      />
      <div className="absolute top-1/2 w-full text-center">
        <p className="text-lg md:text-xl text-white">Not sure where to go? Perfect.</p>
        <button className="text-purple-500 bg-white px-10 py-4 shadow-md rounded-full font-bold my-3 hover:shadow-xl hover:scale-90 transition duration-150">I'm flexible</button>

      </div>
    </div >
  )
}
export default Banner