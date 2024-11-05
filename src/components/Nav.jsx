import { navLinks } from '../constants'
import logo from '../assets/devs-white.png';

const Nav = () => {
  return (
    <header className='padding-x absolute z-10 w-full bg-black'>
      <nav className='flex justify-between max-container items-center'>
        <a href="/">
         <img src={logo} alt="Logo" width={130} height={30} />
        </a>
        <ul className='flex flex-1 justify-center items-center gap-16 max-lg:hidden'>
          {navLinks.map((item) => (
            <li key={item.label}>
              <a href={item.href} className='font-montserrat leading-normal text-lg text-slate-gray hover:text-white'>
                {item.label}
              </a>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  )
}

export default Nav