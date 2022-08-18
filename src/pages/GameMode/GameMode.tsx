import React from "react";
import { Navigate } from "react-router-dom";
import { useRecoilValue } from "recoil";
import { imagesContext } from "../../context/imagesContext";
import { Section } from "./styles";
import { Link } from "react-router-dom";

export const GameMode = () => {
    const imageURLs = useRecoilValue(imagesContext)

    return(
        <React.Fragment>
            {
                imageURLs.length === 0
                    ?   <Navigate to="/" />
                    :   <Section>
                            <Link to="/gamegrid">Jugar solo sin tiempo</Link>
                            <span>Solo vs níveles con tiempo</span>
                            <span>Jugar contra un amigo</span>
                            {/* {
                                imageURLs.map(value => <img src={value} key={`img-${value}`} />)
                            } */}
                        </Section>
            }
        </React.Fragment>
    )
}