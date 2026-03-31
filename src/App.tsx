import Navbar from '@/scenes/navbar'
import { useEffect, useState } from 'react';

enum SelectedPage {
  Home = 'home',
  Benefits = 'benefits',
  OurClasses = 'ourclassses',
  ContactUs = 'contactus'
}

const App = () => {
  const [selectedPage, setSelectedPage] = useState<SelectedPage>(SelectedPage.Home);
  const [isTopOfPage, setIsTopOfPage] = useState<boolean>(true);

  useEffect(()=>{
    const handleScroll = ()=>{
      if(window.scrollY === 0){
        setIsTopOfPage(true)
      }
    }
  })


  return (
    <div className="app bg-gray-20 ">
     <Navbar selectedPage={selectedPage} setSelectedPage={setSelectedPage}/>
    </div>
  );
};

export default App;
 