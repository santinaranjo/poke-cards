import React from "react";
import { Navigate } from "react-router-dom";
import { useRecoilValue } from "recoil";
import { imagesContext } from "../context/imagesContext";

export const GameMode = () => {
    const imageURLs = useRecoilValue(imagesContext)

    return(
        <React.Fragment>
            {
                imageURLs.length === 0
                    ?   <Navigate to="/" />
                    :   <React.Fragment>
                            <span>Jugar solo sin tiempo</span>
                            <span>Solo vs níveles con tiempo</span>
                            <span>Jugar contra un amigo</span>
                            {
                                imageURLs.map(value => <img src={value} key={`img-${value}`} />)
                            }
                        </React.Fragment>
            }
        </React.Fragment>
    )
}