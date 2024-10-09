import { useState } from "react"

export function SideBar(){
    const [Hovered,SetHover] = useState(false)
    return(
        <div onMouseEnter={()=>{const ps = ()=>{SetHover(true)};setTimeout(ps,100)}} onMouseLeave={()=>{SetHover(false)}} className="w-10  h-screen hover:w-80 duration-500 flex-col p-5 hover:bg-slate-950">
            {Hovered?(
                <div className=" flex flex-col justify-center items-center gap-y-4">
                    <div className="flex justify-center items-center bg-green-700 text-white h-20 w-20 rounded-full transition-colors font-bold text-xl">C</div>
                    <p className=" text-center">
                        <h1 className=" text-white font-bold text-xl">UserName</h1>
                        <h2 className="text-slate-300">Lorem ipsum, dolor sit amet consectetur adipisicing elit.</h2>
                    </p>
  
                    <div className="flex flex-row justify-center align-center gap-4">
                        <button className="text-white bg-blue-600/20 p-4 rounded-xl hover:bg-blue-600">Profile</button>
                        <button className="text-white bg-blue-900/20 p-4 rounded-xl hover:bg-blue-900">Followers</button>
                    </div>
                </div>
            ):(<></>)}

        </div>
    )
}