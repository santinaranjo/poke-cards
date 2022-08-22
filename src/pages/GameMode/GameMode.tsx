import React from "react";
import { Section } from "./styles";
import { Link } from "react-router-dom";

export const GameMode = () => {

    return(
        <React.Fragment>
            {
                <Section>
                    <Link to="/oneplayer-notime">Jugar solo sin tiempo</Link>
                    <span>Solo vs níveles con tiempo</span>
                    <span>Jugar contra un amigo</span>
                </Section>
            }
        </React.Fragment>
    )
}