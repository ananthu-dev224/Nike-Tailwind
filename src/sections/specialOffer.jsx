
import Button from "../components/Button"
import { arrowRight } from "../assets/icons"
import { offer } from "../assets/images"

const SpecialOffer = () => {
  return (
    <section className="flex justify-wrap items-center max-xl:flex-col-reverse gap-10 max-container">

      <div className="flex-1">
          <img src={offer} width={773} height={687} className="object-contain w-full"/>
      </div>

      <div className="flex flex-1 flex-col">
        <h2 className='font-palanquin text-4xl  capitalize  font-bold lg:max-w-lg '>
       <span className="text-coral-red">Special </span>
          Offer
          <br />
        </h2>
        <p className='mt-4 lg:max-w-lg info-text'>
        Welcome to our Special Offer section, where unbeatable deals await you. Dive into a treasure trove of discounted shoes, where style meets savings. From sleek sneakers to elegant heels, find your perfect pair at a fraction of the price. Hurry,
         these exclusive offers won't last long! Shop now and step up your shoe game without breaking the bank.
        </p>
        
        <p className='mt-6 lg:max-w-lg info-text'>Experience the thrill of finding your dream shoes at prices you'll love, only in our Special Offer section</p>

      <div className="mt-11 flex flex-wrap gap-4">
        <Button label='Shop Now' iconURL={arrowRight} />
        <Button label='Learn more' backgroundColor='bg-white' borderColor='border-slate-grey' textColor='text-slate-gray'/>
        </div>   
        </div>
    </section>
  )
}

export default SpecialOffer
