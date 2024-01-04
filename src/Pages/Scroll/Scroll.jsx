import { useState } from 'react';
import './Scroll.css';
import { useEffect } from 'react';
import { FaArrowUp } from "react-icons/fa";


const Scroll = () => {


    const [isvisible, setIsVisible]=useState(false)


const GoToTop =()=>{
    window.scroll({top:0, left:0, behavior:'smooth'})
}


const makeToScroll=()=>{
    const showHidden = 250;

    const useScroll=document.body.scrollTop || document.documentElement.scrollTop;

    if(useScroll > showHidden){
        setIsVisible(true)
    }else{
        setIsVisible(false)
    }

}


useEffect(()=>{
window.addEventListener('scroll', makeToScroll)
},[])
  return (
    <>
    {  isvisible &&

        <div className='top-btn' onClick={GoToTop}>
 <FaArrowUp  className='top-btn-icon'/>
    </div>
    }
    </>
  )
}

export default Scroll;