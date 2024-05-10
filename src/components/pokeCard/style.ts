import styled from "styled-components";

export const Wrapper = styled.div`
  height: 500px;
  width: 50%;
  background: linear-gradient(to right, rgba(78, 78, 78), rgba(41, 41, 41));
  margin: auto;
  border-radius: 20px;
  display: flex;
  align-items: center;
  justify-content: center;
  & > .pokemon-div {
    height: 95%;
    width: 95%;
    border-radius: 10px;
    border-top-left-radius: 50%;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    // border-bottom-right-radius: 290px;
    // background: linear-gradient(to right, rgba(153, 51, 153, 0.9), rgba(186, 211, 100, 0.9));
    & > .div-src {
        width: 100%;
        height: 330px;
        display: flex;
        align-items: center;
        justify-content: center;
        & > .image-src {
            width: 100%;
            height: 280px;
        }
    }
    & > .pokemon-header {
        height: 10%;
        background: linear-gradient(to right, rgba(78, 78, 78, 0.9), rgba(41, 41, 41, 0.9));
        display: flex;
        align-items: center;
        justify-content: space-between;
        gap: 15px;
        & > .pokemon-types {
            display: flex;
            flex: 10%;
            flex-direction: column;
            & > .pokemon-type {
                padding: 5px 5px;
                flex: 40%;
                border-radius: 60% 30% 60% 30%;
                border: 1px solid #fff;
                box-shadow: -3px 3px 3px 3px rgba(0, 0, 0, 0.2);
                font-size: 13px;
                letter-spacing: 0cap,5;
                // background: linear-gradient(to right, rgba(153, 51, 153, 0.9), rgba(186, 211, 100, 0.9));
                color: #000;
                font-weight: bold;
                font-style: italic;
                text-transform: uppercase;
                text-shadow: 
                    -1px -1px 0 #fff, /* Sombra superior esquerda (branco) */
                    1px -1px 0 #fff, /* Sombra superior direita (branco) */
                    -1px 1px 0 #fff, /* Sombra inferior esquerda (branco) */
                    1px 1px 0 #fff; /* Sombra inferior direita (branco) */
            }
        }
        & > .pokemon-before-name {
            flex: 50%;
            & > .pokemon-name {
                display: flex;
                align-items: center;
                justify-content: center;
                font-size: 22px;
                border: 1px solid #fff;
                box-shadow: -3px 3px 3px 3px rgba(0, 0, 0, 0.2);
                border-top-left-radius: 90px;
                // border-bottom-left-radius: 20px;
                border-top-right-radius: 20px;
                border-bottom-right-radius:20px;
                padding: 5px 5px;
                // background: linear-gradient(to right, rgba(153, 51, 153, 0.9), rgba(186, 211, 100, 0.9));
                font-weight: bold;
                    text-transform: capitalize;
                    text-shadow: 
                        -1px -1px 0 #fff, /* Sombra superior esquerda (branco) */
                        1px -1px 0 #fff, /* Sombra superior direita (branco) */
                        -1px 1px 0 #fff, /* Sombra inferior esquerda (branco) */
                        1px 1px 0 #fff; /* Sombra inferior direita (branco) */
            }
        }
        & > .pokemon-base-experience {
            display: flex;
            align-items: center;
            justify-content: center;
            border-top-right-radius: 20px;
            flex: 10%;
            gap: 3px;
            & > p {
                font-weight: bold;
                color: #fff;
                font-size: 20px;
                margin: 0;
            }
            & > span {
                display: flex;
                gap: 3px;
                font-size: 30px;
                font-weight: bold;
                color: #fff;
            }
            & > svg {
                height: 20px;
            }
            & > .div-icon {
                width: 30px;
                height: 30px;
                display: flex;
                border: 1px solid #fff;
                box-shadow: -3px 3px 3px 3px rgba(0, 0, 0, 0.2);
                justify-content: center;
                align-items: center;
                // background: linear-gradient(to right, rgba(153, 51, 153, 0.9), rgba(186, 211, 100, 0.9));
                border-radius: 50px;
            }
        }
    }
    & > .pokemon-simbol {
        width: 100%;
        display: flex;
        justify-content: start;
        align-items: center;
        padding-top: 10px;
        & > .pokemon-simbol-span {
            width: 40px;
            height: 40px;
            display: flex;
            justify-content: center;
            align-items: center;
            font-weight: bolder;
            border-radius: 50%;
            font-size: 30px;
            border: 1px solid #fff;
            box-shadow: -3px 3px 3px 3px rgba(0, 0, 0, 0.2);
        }
    }
    & > .pokemon-footer {
        height: 100px;
        display: flex;
        flex-direction: column;
        justify-content: space-evenly;
        & > .pokemon-footer-top {
            align-items: center;
            display: flex;
            justify-content: center;
            gap: 15px;
            & > .held-item-div {
                padding: 5px 5px;
                width: 22%;
                text-align: center;
                border: 1px solid #000;
                border-radius: 30% 20% 60% 30%;
                box-shadow: -3px 3px 3px 3px rgba(0, 0, 0, 0.2);
                font-size: 13px;
                letter-spacing: 0cap,5;
                color: #000;
                font-weight: bold;
                font-style: italic;
                text-transform: uppercase;
                text-shadow: 
                    -1px -1px 0 #fff, /* Sombra superior esquerda (branco) */
                    1px -1px 0 #fff, /* Sombra superior direita (branco) */
                    -1px 1px 0 #fff, /* Sombra inferior esquerda (branco) */
                    1px 1px 0 #fff; /* Sombra inferior direita (branco) */
            }
            & > .ability-div {
                padding: 5px 5px;
                width: 48%;
                border-radius: 20px;
                text-align: center;
                border: 1px solid #000;
                font-size: 13px;
                border-radius: 60% 20% 60% 20%;
                box-shadow: -3px 3px 3px 3px rgba(0, 0, 0, 0.2);
                letter-spacing: 0cap,5;
                color: #000;
                font-weight: bold;
                font-style: italic;
                text-transform: uppercase;
                text-shadow: 
                    -1px -1px 0 #fff, /* Sombra superior esquerda (branco) */
                    1px -1px 0 #fff, /* Sombra superior direita (branco) */
                    -1px 1px 0 #fff, /* Sombra inferior esquerda (branco) */
                    1px 1px 0 #fff; /* Sombra inferior direita (branco) */
            }
            & > .move-div {
                padding: 5px 5px;
                width: 22%;
                border-radius: 60% 30% 30% 20%;
                box-shadow: -3px 3px 3px 3px rgba(0, 0, 0, 0.2);
                text-align: center;
                border: 1px solid #000;
                font-size: 13px;
                letter-spacing: 0cap,5;
                color: #000;
                font-weight: bold;
                font-style: italic;
                text-transform: uppercase;
                text-shadow: 
                    -1px -1px 0 #fff, /* Sombra superior esquerda (branco) */
                    1px -1px 0 #fff, /* Sombra superior direita (branco) */
                    -1px 1px 0 #fff, /* Sombra inferior esquerda (branco) */
                    1px 1px 0 #fff; /* Sombra inferior direita (branco) */
            }
        }
        & > .pokemon-footer-bottom {
            align-items: center;
            display: flex;
            justify-content: space-around;
            gap: 15px;
            & > .rarity-div {
                padding: 5px 5px;
                width: 22%;
                border-radius: 60% 60% 30% 30%;
                box-shadow: -3px 3px 3px 3px rgba(0, 0, 0, 0.2);
                text-align: center;
                border: 1px solid #000;
                font-size: 13px;
                letter-spacing: 0cap,5;
                color: #000;
                font-weight: bold;
                font-style: italic;
                text-transform: uppercase;
                text-shadow: 
                    -1px -1px 0 #fff, /* Sombra superior esquerda (branco) */
                    1px -1px 0 #fff, /* Sombra superior direita (branco) */
                    -1px 1px 0 #fff, /* Sombra inferior esquerda (branco) */
                    1px 1px 0 #fff; /* Sombra inferior direita (branco) */
            }
            & > .generation-div {
                padding: 5px 5px;
                width: 40%;
                border-radius: 30% 60% 30% 60%;
                box-shadow: -3px 3px 3px 3px rgba(0, 0, 0, 0.2);
                text-align: center;
                border: 1px solid #000;
                font-size: 13px;
                letter-spacing: 0cap,5;
                color: #000;
                font-weight: bold;
                font-style: italic;
                text-transform: uppercase;
                text-shadow: 
                    -1px -1px 0 #fff, /* Sombra superior esquerda (branco) */
                    1px -1px 0 #fff, /* Sombra superior direita (branco) */
                    -1px 1px 0 #fff, /* Sombra inferior esquerda (branco) */
                    1px 1px 0 #fff; /* Sombra inferior direita (branco) */
            }
            & > .species-div {
                padding: 5px 5px;
                width: 6%;
                border-radius: 50%;
                text-align: center;
                box-shadow: -3px 3px 3px 3px rgba(0, 0, 0, 0.2);
                border: 1px solid #000;
                font-size: 13px;
                letter-spacing: 0cap,5;
                color: #000;
                font-weight: bold;
                font-style: italic;
                text-transform: uppercase;
                text-shadow: 
                    -1px -1px 0 #fff, /* Sombra superior esquerda (branco) */
                    1px -1px 0 #fff, /* Sombra superior direita (branco) */
                    -1px 1px 0 #fff, /* Sombra inferior esquerda (branco) */
                    1px 1px 0 #fff; /* Sombra inferior direita (branco) */
            }
        }
    }
  }
`;
