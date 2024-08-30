import { useState, useEffect } from "react";
import { loadApi } from "../../api/api";
import { Posts } from "../cards/posts";

export function PostsArea(){
    const [posts, setPosts] = useState<any[]>([]); // Estado para armazenar os posts

    async function here(){
        const postList = await loadApi();
        const response = await postList.json();
        return response;
    }

    // useEffect para carregar os dados quando o componente for montado
    useEffect(() => {
        async function fetchPosts() {
            const data = await here();
            setPosts(data); // Armazena os dados no estado
        }
        fetchPosts();
        //console.log(posts)
    }, []); // O array vazio garante que o efeito rode apenas uma vez

    return (
        <>
            <div id="PostArea" className="flex justify-center items-center w-full flex-col gap-y-8 m-10">
                {posts.map((post) => (
                    <Posts data={post} /> // Supondo que você tenha um componente <Posts> para renderizar cada post
                ))}
            </div>
        </>
    );
}
