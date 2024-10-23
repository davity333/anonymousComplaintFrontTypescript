import React, { useEffect, useState } from "react";
import { Gauge } from "@mui/x-charts";

function Estadisticas() {
    const [numero, setNumero] = useState(0);


    return (
        <>
            <div className="flex justify-center p-8 text-[3vh]">
                <p>Estadisticas de denuncias mas comunes</p>
            </div>
            <div className="w-full flex items-center justify-center">
                <Gauge
                    width={200}
                    height={200}
                    value={123}
                >
                </Gauge>
                <Gauge
                    width={200}
                    height={200}
                    value={75}
                ></Gauge>
                <Gauge
                    width={200}
                    height={200}
                    value={75}
                ></Gauge>
            </div>
        </>
    );
}

export default Estadisticas;