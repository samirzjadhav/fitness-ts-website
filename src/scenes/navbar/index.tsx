import { useState } from "react"
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/solid"
import logo from "@/assets/Logo.png"
import Link from "./Link"
import type { SelectedPage } from "@/shared/types"
import useMediaQuery from "@/hooks/useMediaQuery"

type Props = {
  selectedPage: SelectedPage;
  setSelectedPage: (value: SelectedPage) => void;
}

const Navbar = ({selectedPage, setSelectedPage}: Props) => {
  const flexBetween  = "flex items-center justify-between"
  const [isMenuToggle, setIsMenuToggle] = useState<boolean>(false)
  const isAboveMediumScreen = useMediaQuery("(min-width: 1060px)") 

  return (
    <nav>
      <div className={`${flexBetween} fixed top-0 z-30 w-full py-6`}>
        <div className={`${flexBetween} mx-auto w-5/6`}>
        <div className={`${flexBetween} w-full gap-16`}>
          {/* Left Side */}
          <img src={logo} alt="Logo-image" />
        </div>
         
        {isAboveMediumScreen ? (<div className={`${flexBetween} w-full`}>
           {/* Right Side */}
            <div>
            <ul className={`${flexBetween} gap-8 text-sm`}>
              <Link page="Home" selectedPage={selectedPage} setSelectedPage={setSelectedPage}/>
              <Link page="Benefits" selectedPage={selectedPage} setSelectedPage={setSelectedPage}/>
              <Link page="Our Classes" selectedPage={selectedPage} setSelectedPage={setSelectedPage}/>
              <Link page="Contact Us" selectedPage={selectedPage} setSelectedPage={setSelectedPage}/>
            </ul>
           </div>
           <div className={`${flexBetween} gap-8`}>
            <p>Sign up</p>
            <ActionButton setSelectedPage={setSelectedPage}>Become a Member</ActionButton>
           </div>
        </div> ):(
          <button className="rounded-full bg-secondary-500 p-2" onClick={()=> setIsMenuToggle(!isMenuToggle)}> 
           <Bars3Icon className="h-6 w-6 text-white" />
          </button>
 
        )}    
        </div>
      </div>f
    </nav>
  )
}

export default Navbar