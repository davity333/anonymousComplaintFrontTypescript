import DenunciasIntroduccion from "../molecules/DenunciasIntroduccion";
import DenunciasTablas from "../molecules/DenunciasTabla";
import Header from "../molecules/header";

function DenunciasOrg() {
    return ( 
        <>
        <Header></Header>
        <DenunciasIntroduccion></DenunciasIntroduccion>
        <div className="pt-5">
        <DenunciasTablas></DenunciasTablas>
        </div>
        </>
    );
}

export default DenunciasOrg;