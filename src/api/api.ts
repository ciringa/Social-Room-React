
const basePath = "http://127.0.0.1:2333"

interface createPostt{
    Content:string,
    Slug:string,
    ownerId:string
    Title:string | null
}
export async function loadApi(){
    return fetch(`${basePath}/posts/all/${1}`)
}

export async function returnOwner(ownerId:string){
    return fetch(`${basePath}/users/${ownerId}`)
}

export async function CreateAPost({Content,Slug,Title,ownerId}:createPostt) {
    await fetch(`${basePath}/posts/create`,{
        method: 'POST', // Especifica que é uma requisição do tipo POST
        headers: {
            'Content-Type': 'application/json' // Define o tipo de conteúdo como JSON
        },
        body: JSON.stringify({
            Content,Slug,Title,ownerId
        })
    }).then(response=>{
        if(response!=null){
            return response
        }
    }).catch(error =>{
        console.log(error)
    })
}