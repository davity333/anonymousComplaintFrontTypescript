
function HeaderWithOut() {
    return (
        <header className="h-auto w-full bg-[#ffffff] flex justify-between items-center drop-shadow-md text-[2.4vh]">
            <a href="./  "><img src="logo.png" alt="" className="h-[10vh] cursor-pointer" >     </img></a>
            <p className="opacity-55 cursor-pointer hover:text-[#4a59ff]"><a href="./Denuncias"></a>Denuncias recividas</p>
            <p className="opacity-55 cursor-pointer hover:text-[#4a59ff]"><a href="./Empresa"></a>Agregar empresa</p>

            <div className="flex gap-9 mr-5 items-center">
                <p className="opacity-55 hover:text-[#4a59ff]"><a href={"./"}>Inciar sesión</a></p>
                <p className="bg-[#C9D8F1] opacity-55 px-8 py-2 rounded-md hover:text-[#4a59ff]"><a href={'./Register'}>Registrarse</a></p>
            </div>
        </header>
    )
}

export default HeaderWithOut;