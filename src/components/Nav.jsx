import { headerLogo } from '../assets/images'
import { hamburger } from '../assets/icons'
import { navLinks } from '../constants/index'



const Nav = () => {
    return (
        <header className='padding-x py-8 absolute z-10 w-full'>
            <nav className='flex justify-between items-center max-container'>
                <img src={headerLogo} alt="Logo" width={130} height={100} />
                <ul className='flex flex-1 items-center justify-center gap-16 max-lg:hidden'>
                    {navLinks.map((item) => (
                        <li key={item.label}><a href={item.href} className='font-monsterrant leading-normal text-lg text-slate-gray'>{item.label}</a></li>
                    ))}
                </ul>
                <div className='hidden max-lg:block'>
                    <img src={hamburger} alt="Hamburger" height={25} width={25} className='' />
                </div>
            </nav>
        </header>
    )
}

export default Nav