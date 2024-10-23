import logo from "../../../public/logo.png"

const menu = () =>{
    window.location.href = "/house"
}

const puntos = () =>{
    window.location.href = "lugares"
}

function Header() {
    return (
        <>
            <header className="h-auto w-full bg-[#ffffff] flex justify-between items-center drop-shadow-md text-[2.4vh]">
            <img onClick={menu} src="logo.png" alt="" className="h-[10vh] cursor-pointer"/>
                <p className="opacity-55 cursor-pointer hover:text-[#4a59ff]" onClick={puntos}>Puntos de denuncia</p>

                <div className="flex gap-9 mr-5 items-center">
                    <p className="opacity-55 hover:text-[#4a59ff]"><a href={"./"}>Inciar sesión</a></p>
                    <p className="bg-[#C9D8F1] opacity-55 px-8 py-2 rounded-md hover:text-[#4a59ff]"><a href={'./Register'}>Registrarse</a></p>
                </div>
            </header>
        </>
    );
}
export default Header;