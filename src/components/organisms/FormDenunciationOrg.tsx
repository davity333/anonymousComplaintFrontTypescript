import { useEffect, useState } from "react";
import FormDenunciation from "../molecules/FormDenunciation";

function FormDenunciationOrg() {
    const [categoria, setCategoria] = useState<string>('');

    useEffect(() => {
        const categoriaLocal = localStorage.getItem('categoria');
        if (categoriaLocal) {
            setCategoria(categoriaLocal);
        }
    }, []);

    return ( 
        <>
    <div className="flex justify-center items-center gap-5">
            <div className="">
                <img src="anonimo.png" alt="" className="h-14"/>
            </div>

        <div>
            <div>
                <div className="flex justify-center text-3xl font-semibold mt-12">
                <p>Realiza tu denuncia</p>
            </div>

            <div className="flex justify-center">
                <h2 className="text-2xl font-light">{categoria}</h2>
            </div>   


            </div> 
        </div>
    </div>
                <div className="flex justify-center pt-8">
                    <FormDenunciation></FormDenunciation>
                </div>

        </>
    );
}

export default FormDenunciationOrg;