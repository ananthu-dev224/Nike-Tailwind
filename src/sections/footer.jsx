

import { footerLogo } from "../assets/images"
import { socialMedia } from "../constants"
import { footerLinks } from "../constants"
import { copyrightSign } from "../assets/icons"



const Footer = () => {
  return (
    <footer className="max-container">
      <div className="flex justify-between items-start gap-20 flex-wrap max-lg:flex-col">
           <div className="flex flex-col items-start">
                 <a href="/">
                  <img src={footerLogo} alt="logo" width={150} height={46} />
                 </a>
                 <p className="mt-6 text-base font-montserrat leading-7 text-white-400 sm:max-w-sm">Get shoes ready for the new term at your nearest Nike store. 
                  Find your perfect size from store. Get Rewards.</p>
                  <div className="flex items-center gap-5 mt-8">
                         {socialMedia.map((media) => (
                             <div className="flex justify-center items-center w-12 h-12 bg-white rounded-full">
                              <img src={media.src} alt={media.alt} className="cursor-pointer" />
                             </div>
                         ))}
                  </div>
           </div>

             <div className="flex flex-1 justify-between lg:gap-10 gap-20 flex-wrap">
                    {footerLinks.map((link) => (
                         <div key={link}>
                               <h4 className="text-white font-montserrat text-2xl leading-normal font-medium mb-6">
                                    {link.title}
                               </h4>
                               <ul>
                                   {link.links.map((item) => (
                                      <li  key={item.name} className="text-white-400 mt-3 font-montserrat leading-normal text-base hover:text-slate-gray cursor-pointer">
                                        <a href={item.link}>{item.name}</a>
                                      </li>
                                   ))}
                               </ul>
                         </div>
                    ))}
             </div>
           
      </div>

      <div className="flex justify-between text-white-400 mt-24 max-sm:flex-col max-sm:items-center">
             <div className="flex flex-1 justify-start items-center gap-2 font-montserrat cursor-pointer">
                    <img src={copyrightSign} alt="CopyRight" width={20} height={20} className="rounded-full m-0" />
                    <p>Copyright . All rights reserved.</p>
             </div>
             <p className="font-montserrat cursor-pointer">Terms & Conditions.</p>
      </div>
    </footer>
  )
}

export default Footer
