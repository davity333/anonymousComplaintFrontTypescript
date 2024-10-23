import Header from "../molecules/header";
import Introduction from "../molecules/Introduction";
import HacerDenuncia from "../molecules/CategoriasDenuncia";
function Introductions() {

    const denunciar = () =>{
        window.location.href = "/Denuntation"
    }

    return (
        <>
        <Header></Header>
        <Introduction></Introduction>

        <div className="relative w-full h-[37vh]">
    <div className="absolute inset-0 bg-[url('fondo.png')] bg-no-repeat bg-cover -z-30"></div>
    <div className="relative flex flex-col items-center">
        <div className="mt-36">
            <HacerDenuncia />
            <div className="flex justify-center mt-3 text-2xl text-white font-medium hover:text-[#d87777]">
                <button onClick={denunciar} className="bg-[#833d3d] px-8 py-2 rounded-xl">Realizar denuncia</button>
            </div>
        </div>
    </div>
</div>
        </>
    );
}

export default Introductions;