import { useState } from "react"

export const Header = () => {
  const [openMenu, setOpenMenu] = useState(false)
  
  const handleOpenMenu = (e) => {
    setOpenMenu(prevState => !prevState)
  }
  
  
  return (
      <header className="wrapper relative overflow-hidden">
        <nav className="flex items-center justify-between h-20 p-1 md:mt-8">
            <div className="w-1/3 md:w-1/6 md:min-w-1/6">
                <img className="w-full" src="../images/logo.svg" alt="manage logo"/>
            </div>
            
            <ul className="hidden md:flex sm:gap-x-4 mg:gap-x-8 xl:gap-x-12">
                <li>
                    <a className="text-dark-blue font-medium hover:cursor-pointer hover:opacity-60">Pricing</a>
                </li>
                <li>
                    <a className="text-dark-blue font-medium hover:cursor-pointer hover:opacity-60">Product</a>
                </li>
                <li>
                    <a className="text-dark-blue font-medium hover:cursor-pointer hover:opacity-60">About Us</a>
                </li>
                <li>
                    <a className="text-dark-blue font-medium hover:cursor-pointer hover:opacity-60">Careers</a>
                </li>
                <li>
                    <a className="text-dark-blue font-medium hover:cursor-pointer hover:opacity-60">Community</a>
                </li>
            </ul>
            
            <div className="z-40">
                {
                    !openMenu
                     ? (
                        <button onClick={handleOpenMenu} className="md:hidden">
                            <img src="../images/icon-hamburger.svg" alt="button hamburger"/>
                        </button>
                     ) : (
                        <button onClick={handleOpenMenu} className="md:hidden">
                            <img src="../images/icon-close.svg" alt="button hamburger"/>
                        </button>
                     )
                }

               <a className="hidden lg:block bg-bright-red hover:bg-bright-red/90 hover:shadow-bright-red/50 hover:text-very-light-gray text-very-light-gray lg:py-3 text-center font-bold md:w-[150px] px-4 rounded-full shadow-lg" href="#">
                    Get Started
                </a>
            </div>
            
            {
                openMenu && (
                <ul className="md:hidden fixed inset-0 z-20 h-screen w-full bg-gradient-to-b from-white/80 to-black/50">
                    <div className="shadow absolute inset-x-0 top-24 bg-gray-50 mx-6 px-6 py-6 flex flex-col items-center z-auto gap-y-6 rounded">
                        <li>
                            <a className="text-dark-blue font-bold">Pricing</a>
                        </li>
                        <li>
                            <a className="text-dark-blue font-bold">Product</a>
                        </li>
                        <li>
                            <a className="text-dark-blue font-bold">About Us</a>
                        </li>
                        <li>
                            <a className="text-dark-blue font-bold">Careers</a>
                        </li>
                        <li>
                            <a className="text-dark-blue font-bold">Community</a>
                        </li>
                    </div>
                </ul>
                )
            }

        </nav>
        
        <section className="flex flex-col items-center justify-center md:flex-row md:mt-24 md:gap-x-12">
            <img className="w-full max-w-lg" src="../images/illustration-intro.svg" alt="intro" />
            <article className="grid gap-y-4 md:gap-y-8 mt-4 md:items-end md:justify-end items-center w-full mx-auto md:ml-0 md:order-first md:w-full max-w-lg">
                <h1 className="text-4xl md:text-5xl md:text-start text-center font-bold text-dark-blue">
                    Bring everyone together to build better products.
                </h1>
                <p className="text-center text-black opacity-45 md:ml-0 md:text-start max-w-[356px]">
                    Manage makes it simple for software teams to plan day-to-day 
                    tasks while keeping the larger team goals in view.
                </p>
                <div className="flex flex-col items-center justify-center mt-4 md:mt-0 md:items-start md:justify-start">
                    <a className="w-3/6 md:max-w-[150px] font-bold bg-bright-red hover:bg-bright-red/90 hover:shadow-bright-red/50 hover:text-very-light-gray text-center text-very-light-gray py-3 px-2 rounded-full shadow-lg" href="#">
                        Get Started
                    </a>
                </div>
            </article>
        </section>
    </header>
  )
}