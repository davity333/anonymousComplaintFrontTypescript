import LineasTabla from "../atoms/LineasTabla";

function DenunciasTablas() {
    return (
        <>
            <LineasTabla />

            <div className="flex justify-center">
                <table className="w-full max-w-[120vh] table-fixed border-collapse">

                    <thead>
                        <tr className="bg-gray-200 text-center font-bold">
                            <th className="w-1/3 p-4">Fecha</th>
                            <th className="w-1/3 p-4">Categoría</th>
                            <th className="w-1/3 p-4">Funciones</th>
                        </tr>
                    </thead>

                    <tbody>
                        <tr className="text-center border-b">
                            <td className="p-4">2/12/2024</td>
                            <td className="p-4">Asalto</td>
                            <td className="p-4">
                                <div className="flex justify-center gap-4">
                                    <button className="px-6 py-2 bg-[#18A2BC] text-white">Ver</button>
                                    <button className="px-6 py-2 bg-[#38AB56] text-white">Aceptar</button>
                                    <button className="px-6 py-2 bg-[#DE2828] text-white">Eliminar</button>
                                </div>
                            </td>
                        </tr>

                        {/*mas informacion*/}
                    </tbody>
                </table>
            </div>

            <LineasTabla />
        </>
    );
}



export default DenunciasTablas;