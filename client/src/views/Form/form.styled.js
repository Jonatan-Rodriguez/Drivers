import styled from 'styled-components';

export const ContainerForm = styled.div`
    background-color: #18191a;
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100%;
    width: 100%;
    padding: 30px;

    .error{
      background-color: #c1121f50;
      border-radius: 35px;
      margin: 5px 0;
      p{
        font-size: 1em;
        color: #ffffff;
        padding-left: 15px;
      }
    }
    
    .selectContainer{
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        margin-top: 20px;
        row-gap: 10px;

        .selectBox{
            border: none;
            outline: none;
            width: 100%;
            padding: 13px 18px;
            font-size: 1em;
            border-radius: 10px;
            background: #3c3c3c;
            animation: bounce 1s;
            -webkit-appearance: none;
            cursor: pointer;

            option{
                background: #3c3c3c;
                color: #fff;
            }
        }

        .selectName{
            width: 100%;
            height: auto;
            display: flex;
            flex-direction: row;
            justify-content: flex-start;
            flex-wrap: wrap;
            border-radius: 5px;
            
            span{
                padding: 3px 9px;
                margin: 3px 5px;
                color: #fff;
                font-size: 1em;
                background-color: #535EFC;
                border-radius: 7px;
            }
        }
    }

    .login {
        width: 70%;
        height: 100%;
        background: #2c2c2c;
        padding: 47px;
        padding-bottom: 57px;
        color: #fff;
        border-radius: 17px;
        padding-bottom: 50px;
        font-size: 1.7em;
        font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
    }

    .login input[type="text"],
    .login input[type="password"] {
        opacity: 1;
        display: block;
        border: none;
        outline: none;
        width: 100%;
        padding: 13px 18px;
        margin: 20px 0 0 0;
        font-size: 0.8em;
        border-radius: 100px;
        background: #3c3c3c;
        color: #fff;
    }

    .login input:focus {
        animation: bounce 1s;
        -webkit-appearance: none;
    }

    .login input[type=submit],
    .login input[type=button],
    .h1 {
        border: 0;
        outline: 0;
        width: 100%;
        padding: 13px;
        margin: 40px 0 0 0;
        border-radius: 500px;
        font-weight: 600;
        animation: bounce2 1.6s;
    }

    .h1 {
        padding: 0;
        position: relative;
        top: -35px;
        display: block;
        margin-bottom: -0px;
        font-size: 1.3em;
    }

    .btn {
        background: linear-gradient(144deg, #af40ff, #5b42f3 50%, #00ddeb);
        color: #fff;
        padding: 16px !important;
    }

    .btn-none{
        background-color: #ffffff40;
    }

    .btn:hover {
        background: linear-gradient(144deg, #1e1e1e , 20%,#1e1e1e 50%,#1e1e1e );
        color: rgb(255, 255, 255);
        padding: 16px !important;
        cursor: pointer;
        transition: all 0.4s ease;
    }

    .login input[type=text] {
        animation: bounce 1s;
        -webkit-appearance: none;
    }

    .login input[type=password] {
        animation: bounce1 1.3s;
    }

    .ui {
        font-weight: bolder;
        background: -webkit-linear-gradient(#B563FF, #535EFC, #0EC8EE);
        -webkit-background-clip: text;
        -webkit-text-fill-color: transparent;
        border-bottom: 4px solid transparent;
        border-image: linear-gradient(0.25turn, #535EFC, #0EC8EE, #0EC8EE);
        border-image-slice: 1;
        display: inline;
    }

    @media only screen and (max-width: 600px) {
        .login {
            width: 70%;
            padding: 3em;
        }
    }

    @keyframes bounce {
        0% {
            transform: translateY(-250px);
            opacity: 0;
        }
    }

    @keyframes bounce1 {
        0% {
            opacity: 0;
        }

        40% {
            transform: translateY(-100px);
            opacity: 0;
        }
    }

    @keyframes bounce2 {
        0% {
            opacity: 0;
        }

        70% {
            transform: translateY(-20px);
            opacity: 0;
        }
    }
`