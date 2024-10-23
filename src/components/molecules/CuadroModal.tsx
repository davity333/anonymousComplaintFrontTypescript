function CuadroModal({onClickExit} :any) {
    return ( 
        <>
        <div className="fixed inset-0 bg-black bg-opacity-0 backdrop-blur-sm flex justify-center items-center ">
            <div className="bg-[#b3b8c1] h-[35%] w-[60%] rounded-[20px] shadow-[0px_18px_34px_-16px_rgba(0,0,0,0.65)]
            sm:h-[35%] sm:w-[40%] border-double border-2 border-[#4b7e94]">  
            

            <div className="flex justify-center items-center flex flex-col m-7">
            <button className="m-6 text-2xl text-[#2d485e] bg-slate-400 px-7 py-1 rounded-[6px]
            hover:bg-[#8097b4]" onClick={onClickExit}>Continuar</button>
            </div>
            </div>
        </div>
        </>
    );
}

export default CuadroModal;