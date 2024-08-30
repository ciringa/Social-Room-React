import { useState } from 'react';
import { CreateAPost } from '../../api/api';

export function WritePost() {
    const [inputValue, setInputValue] = useState(''); // Define o estado para armazenar o valor do input

    const handleSend = async () => {
        console.log('Valor do input:', inputValue);
        await CreateAPost({
            Content:inputValue,
            ownerId:"ebdfa000-21fe-4e4d-818b-76d67473d518",
            Slug:"Test-Slug",
            Title:"Test-Title"
        })
        window.location.reload();
    };

    return (
        <div className="w-full flex justify-center items-center">
            <div className="bg-slate-800 w-1/2 h-36 m-10 rounded-2xl flex justify-center items-center shadow-slate-900 shadow-sm">
                <input 
                    type="text" 
                    className="w-3/4 bg-slate-900 rounded-2xl h-16 outline-none text-center text-slate-300" 
                    value={inputValue} // O valor do input é controlado pelo estado
                    onChange={(e) => setInputValue(e.target.value)} // Atualiza o estado com o valor digitado
                />
                <button 
                    className="w-20 bg-slate-900 rounded-2xl h-16 m-5 text-slate-100 font-medium cursor-pointer"
                    onClick={handleSend} // Chama a função ao clicar no botão
                >
                    Send
                </button>
            </div>
        </div>
    );
}
