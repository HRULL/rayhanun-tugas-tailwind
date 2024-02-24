import logo from "./rhino.png"
import search from "./search-13-32.png"
import kubus from "./kubus.png"
import web from "./web.png"
import development from "./development.png"
import { useState } from "react"
import sosial from "./sosial.png"

const Home = () => {
    const[gantiGambar , setGantiGambar]= useState (web)
      
    return(
   <>
    <div className="h-screen w-[100%] bg-gradient-to-br from-[#504099] from-20% via-[#7360DF] via-30% to-[#C499F3] font-sans ">
       <div className="flex text-white ">
         <div className="text-[25px] mr-[120px] ml-[10%] font-semibold shadow-white/50 mt-[5px]">Rayhanun</div>
         <div className="text-[20px] mr-[50px] mt-[10px]">Home</div>
         <div className="text-[20px] mr-[50px] mt-[10px]">Studio</div>
         <div className="text-[20px] mr-[50px] mt-[10px]">Works</div>
         <div className="text-[20px] mr-[430px] mt-[10px]">contact</div>

         <div className="text-[20px] mr-[50px] mt-[10px] text-white flex">
         <img src={search} alt="search " className="w-5 h-5 mt-[5px] animate-pulse" /> 
         <button className="text-[17px] bg-indigo-900 shadow-md shadow-indigo-900/50 w-[120px] rounded-xl text-center py-2 ml-5 text-white">Hire Now</button>
         </div>

       </div>
       <div className="flex text-white">
            <div className="ml-[10%] mr-[60px] mt-[8%]">
                <div className="text-[50px] font-bold ">Think. Make. <br />Solve.</div>

                <div className="flex mt-4"> 
                    <div className="bg-gray-300 h-1 w-5 rounded-full m-[13px]"></div> 
                    <div className="text-indigo-900 font-bold text-[20px]">What we Do</div> 
                </div> 

                <div className="text-[19px] mt-3 text-gray-300">we enjoy creating delighful, human-centered digital <br /> experiences.</div>
                <button className="text-[17px] bg-indigo-900 shadow-md shadow-indigo-900/50 w-[120px] rounded-[10px] mt-5 text-center py-2 text-white">learn More</button>
            </div>
            <div className="ml-[18%]"><img src={logo} alt="Logo" className="h-[500px] mt-[100px] animate-bounce t-10 "/></div>
         </div>
    </div>
    <div className="flex justify-center h-screen w-[100%] bg-gradient-to-tl from-[#504099] from-20% via-[#7360DF] via-30% to-[#C499F3] font-sans">
        <div className="ml-[5%] mr-[12%] mt-[5%] ">
            <img src={kubus} alt="kubus" className="h-[75%] w-[100%] animate-pulse" />
        </div>
        <div className="text-white mt-[12%] ">
            <div className="text-[50px] font-bold "  >Think outside the square <br /> space </div>
            <div className="flex mt-4"> 
                <div className="bg-gray-300 h-1 w-5 rounded-full m-[13px]"></div> 
                <div className="text-indigo-900 font-bold text-[20px]">What we Do</div> 
            </div> 
            <div className="text-[19px] mt-3 text-gray-300">a creative group of designers and developers with a passion <br /> for the arts</div>
            <button className="text-[17px] bg-indigo-900 shadow-md shadow-indigo-900/50 w-[120px] rounded-[10px] mt-5 text-center py-2 text-white">See our works</button>
        </div>
    </div>
        <div className=" flex h-screen w-[100%] bg-gradient-to-tr from-[#504099] from-20% via-[#7360DF] via-30% to-[#C499F3] font-sans">
            <div className="my-[2%] mx-[8%]">
                <div><button onClick={() => setGantiGambar(web)} className="hover:text-indigo-700 text-[5rem] text-gray-300 font-semibold" >Web Design</button></div>
                <div><button onClick={() => setGantiGambar(development)} className="hover:text-indigo-700 text-[5rem] text-gray-300 font-semibold" >Development</button></div>
                <div><button onClick={() => setGantiGambar(logo)} className="hover:text-indigo-700 text-[5rem] text-gray-300 font-semibold" >iIIustration</button></div>
                <div><button onClick={() => setGantiGambar(kubus)} className="hover:text-indigo-700 text-[5rem] text-gray-300 font-semibold" >Product Design</button>  </div>
                <div><button onClick={() => setGantiGambar(sosial)} className="hover:text-indigo-700 text-[5rem] text-gray-300 font-semibold" >Social Media</button></div>
            </div>
            <div className="m-[5%]">
                <img className="h-[80%] " src={gantiGambar} alt="gambar random" />
            </div>
        </div>
   </>
    )
} 

export default Home