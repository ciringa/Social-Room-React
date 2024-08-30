import { useEffect, useState } from "react"
import { returnOwner } from "../../api/api"


export function Posts(data:any) {
    const [Onwer,setOwner] = useState(String)
    const _data = data.data
    // console.log(_data)

    async function getOwner() {
        const owner = await returnOwner(_data.ownerId)
        let ps = await owner.json()
        return ps.Name
    }

    // useEffect para carregar os dados quando o componente for montado
    useEffect(() => {
        async function fetchUser() {
            const data = await getOwner();
            console.log(data)
            setOwner(data); // Armazena os dados no estado
        }
        fetchUser();
            //console.log(posts)
    }, []); // O array vazio garante que o efeito rode apenas uma vez
    

    return(
        <div className="w-1/2 h-36 bg-slate-800 rounded-xl flex flex-row p-6 shadow-slate-900 shadow-sm">
            <div className=" w-2/3">
                <h1 className=" text-slate-200 text-2xl">{Onwer}</h1>
                <p className="text-slate-400">{_data.Content}</p>
            </div>
            <div className=" w-1/2 flex flex-col items-end justify-end">
                <div className="h-1/2 flex justify-start items-start">
                    <h1 className="text-slate-500">{_data.Title}</h1>
                </div>
                <div className=" h-1/3 flex justify-end items-end">
                    <a className=" text-slate-500">#{_data.Likes}</a>
                </div>

            </div>
        </div>
    )
}

/*
                <button className="h-10 w-10" >
                    <img src="/src/assets/like.svg" className="h-fit w-fit"/>
                </button>
*/