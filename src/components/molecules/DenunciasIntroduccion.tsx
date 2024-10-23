import denuncia from "../../../public/denuncia.png"
function DenunciasIntroduccion() {
    return ( 
        <>
        <div className="flex gap-4 mt-8">
        <h1 className="ml-28 text-[3vh] opacity-65">Denuncias realizadas</h1>
        <img src="denuncia.png" alt="" className="h-14"/>
        </div>

        <div className="flex justify-center my-4">
            <div className="w-full max-w-[177vh] h-[0.1vh] bg-black"></div>
        </div>
        <p className="px-28 opacity-75">En esta interfaz, los policías podrán visualizar 
            en una tabla todas las denuncias recibidas en tiempo 
            real. Cada denuncia mostrará detalles esenciales y 
            ofrecerá tres acciones: "Ver" para revisar los detalles 
            completos, "Aceptar" para iniciar la investigación o 
            tomar medidas, y "Eliminar" para descartar denuncias 
            irrelevantes o duplicadas, asegurando un flujo 
            eficiente de gestión.</p>
        </>
    );
}

export default DenunciasIntroduccion;