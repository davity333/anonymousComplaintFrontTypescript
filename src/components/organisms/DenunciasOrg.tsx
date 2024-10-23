import { useEffect, useState } from "react";
import DenunciasIntroduccion from "../molecules/DenunciasIntroduccion";
import DenunciasTablas from "../molecules/DenunciasTabla";
import Header from "../molecules/header";
import HeaderWithOut from "../molecules/HeaderWithOut";

function DenunciasOrg() {
    const [haeaderBoolean, setHeaderBoolean] = useState(false);

    useEffect(() => {
        let data = localStorage.getItem("User");
        if (data === "institucion") {
            setHeaderBoolean(true);
        }
    }, [])
    return (
        <>
            {
                haeaderBoolean ? <Header /> : <HeaderWithOut/>
            }
            <DenunciasIntroduccion></DenunciasIntroduccion>
            <div className="pt-5">
                <DenunciasTablas></DenunciasTablas>
            </div>
        </>
    );
}

export default DenunciasOrg;