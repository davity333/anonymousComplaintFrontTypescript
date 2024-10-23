import LineasTabla from "../atoms/LineasTabla";
function IntroduccionLugares() {
    return ( 
        <>
        <div className="flex justify-center pt-8">
        <h1 className="text-2xl text-[#00000093]">Lugares para realizar denuncias en linea</h1>
        </div>

        <LineasTabla></LineasTabla>

        <p 
        className="px-28">Encuentra los puntos más cercanos para realizar denuncias de manera rápida y sencilla. 
            Nuestra página te brinda una lista de lugares autorizados donde puedes presentar 
            denuncias en persona, asegurando que tu voz sea escuchada de forma segura y confiable</p>

        <div className="flex justify-center mt-6">
            <p className="opacity-70 font-bold text-[2.3vh]">Selecciona el lugar para realizar tu denuncia anónima</p>
        </div>
        </>
    );
}

export default IntroduccionLugares;