import HacerDenuncia from "../molecules/CategoriasDenuncia";
import IntroduccionLugares from "../molecules/IntroduccionLugares";
import {  useState } from "react";
function LugaresOrg() {

    const [cuadro, setCuadrado] = useState(false);
    const mostrarInformacion = () => {
        setCuadrado(!cuadro);  // Alternar entre mostrar y ocultar
    };

    const denunciar = () => {
        window.location.href = "Denuntation"
    }

    return (
        <>
            <IntroduccionLugares></IntroduccionLugares>

            <div className="inline-block bg-white p-4 shadow-[0px_1px_6px_0px_rgba(0,0,0,0.26)] mt-7 ml-7 w-[60vh]">
                <h1 className="text-slate-700 font-bold">Fiscalía Federal del Estado del Gobierno de Chiapas</h1>
                <h2 className="text-slate-500">Tuxtla Gutiérrez | Chiapas</h2>


                {!cuadro && (
                    <button onClick={mostrarInformacion} className="px-6 py-2 bg-slate-500 text-white w-full mt-7">
                        Selecciona el lugar
                    </button>
                )}

                {cuadro && (
                    <div className="mt-4">
                        <p><strong>Código Postal:</strong> 29000</p>
                        <p><strong>Nombre del Dueño:</strong> Juan Pérez</p>
                        <p><strong>Horario de Servicio:</strong> 8:00 AM - 6:00 PM</p>
                        <p><strong>Ubicación:</strong> Calle Central, No. 123, Tuxtla Gutiérrez, Chiapas</p>
                        <div className="flex justify-center">
                            <p className="font-thin">Elige la categoria para realizar la denunciar</p>
                        </div>
                        <HacerDenuncia></HacerDenuncia>
                        <button onClick={denunciar} className="px-6 py-2 bg-[#712222ca] text-white w-full mt-2">
                            Realizar denuncia
                        </button>
                    </div>
                )}



                {cuadro && (
                    <button onClick={mostrarInformacion} className="px-6 py-2 bg-slate-500 text-white w-full mt-2">
                        Ocultar información
                    </button>
                )}
            </div>
        </>
    );
}
export default LugaresOrg;