import styled from "styled-components"

const cardWidth = "65px";
const cardHeight = "100px";

export const Card = styled.div`
    width: ${cardWidth};
    height: ${cardHeight};
    .card {
        width: 65px;
        height: 100px;
        position: relative;
        transform-style: preserve-3d;
        transition: 150ms;
        cursor: pointer;
        perspective: 1000px;
        transition: all .25s ease-in-out;
        width: ${cardWidth};
        height: ${cardHeight};
    }
    
    .card-flip {
        .front {
            transform: perspective(1000px) rotateY(-180deg);
        }
        .back {
            transform: perspective(1000px) rotateY(0deg);
        }
    }

    .front, .back {
        position: absolute;
        transition: all .25s ease-in-out;
        width: ${cardWidth};
        height: ${cardHeight};
        backface-visibility: hidden;
        cursor: pointer;
    }

    .front {
        
        background-color: blue;
    }
    .back {
        transform: rotateY(180deg);
        background-color: green;
    }
`