import logo from "../../../public/logo.png"

const menu = () =>{
    window.location.href = "/house"
}

const puntos = () =>{
    window.location.href = "lugares"
}

function HeaderAdmin(){
    return (
        <>
            <header className="h-auto w-full bg-[#ffffff] flex justify-between items-center drop-shadow-md text-[2.4vh]">
            <img onClick={menu} src="logo.png" alt="" className="h-[10vh] cursor-pointer"/>
                <p className="opacity-55 cursor-pointer hover:text-[#4a59ff]" onClick={puntos}>Denuncias recibidas</p>
                <p className="opacity-55 cursor-pointer hover:text-[#4a59ff]" onClick={puntos}>Registrar empresa</p>

                <div className="flex gap-9 mr-5 items-center">
                    <p className="opacity-55 hover:text-[#4a59ff]"><a href={"./"}>Cerrar sesión</a></p>
                </div>
            </header>
        </>
    );
}
export default HeaderAdmin;