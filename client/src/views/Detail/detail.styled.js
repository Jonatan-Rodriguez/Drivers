import styled from 'styled-components';

export const ContainerDetail = styled.div`
    min-height: 100vh;
    height: 100%;
    max-height: 170%;
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: #18191a;
    padding: 5%;

    .card {
        width: 75%;
        height: 60%;
        transition: all 0.2s;
        position: relative;

        .circle {
            width: 100px;
            height: 100px;
            background: radial-gradient(circle, rgba(235,194,137,1) 26%, rgba(232,12,12,1) 100%);
            border-radius: 50%;
            position: absolute;
            animation: move-up6 2s ease-in infinite alternate-reverse;
        }

        .circle:nth-child(1) {
            top: -25px;
            left: -25px;
        }

        .circle:nth-child(2) {
            bottom: -25px;
            right: -25px;
            animation-name: move-down1;
        }

        .card-inner {
            width: 100%;
            height: 100%;
            background: rgba(255,255,255,.05);
            box-shadow: 0 0 10px rgba(0,0,0,0.25);
            backdrop-filter: blur(10px);
            border-radius: 8px;

            display: flex;
            justify-content: center;
            align-items: center;
            padding: 3%;

            .containerCard{
                display: flex;
                justify-content: space-around;
                align-items: center;
                flex-direction: row;
                width: 100%;
                height: 100%;
                background-color: #313234;
                border-radius: 8px;
                flex-wrap:wrap;
                padding: 3%;
                gap: 20px 20px;

                .containerImg{
                    border-radius: 15px;
                    min-width: 200px;
                    width: 275px;
                    max-width: 350px;
                    min-height: 200px;
                    height: 275px;
                    max-height: 350px;

                    .img{
                        border-radius: 15px;
                        width: 100%;
                        height: 100%;
                        background-position: center top;
                        background-size: cover;
                    }
                }

                .containerData{
                    min-width: 200px;
                    max-width: 350px;
                    min-height: 200px;
                    height: 275px;
                    max-height: 350px;
                    display: flex;
                    justify-content: space-between;
                    align-items: center;
                    flex-direction: column;

                    .name{
                        color: #ffffff;
                        font-size: 2.5em;
                    }

                    .data{
                        display: flex;
                        align-items: center;
                        gap: 10px;
                        flex-wrap:wrap;

                        .contenedor-des {
                            min-width: 100px;
                            width: 220px; 
                            height: 70px; 
                            overflow-y: auto; 
                            color: #ffffff;
                            font-size: 1.3em;
                        }

                        img{
                            height: 1.7em;
                        }

                        p{
                            font-size: 1.7em;
                            color: #ffffff;
                        }
                    }
                }
            }
            
        }

        @keyframes move-up6 {
            to {
                transform: translateY(-10px);
            }
        }

        @keyframes move-down1 {
            to {
                transform: translateY(10px);
            }
        }
    }
`