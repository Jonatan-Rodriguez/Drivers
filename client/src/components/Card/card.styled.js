import styled from 'styled-components';

export const ContainerCard = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
    width: 220px;
    min-width: 200px;
    height: 310px;
    background-color: #242526;
    border-radius: 8px;
    padding: 13px;
    gap: 10px;

    p{
        color: white;
        font-size: 1.7em;
    }

    .imgContainer{
        width: 100%;
        height: 45%;
        position: relative;
        border-radius: 15px;

        img{
            border-radius: 15px;
            height: 100%;
            width: 100%;
            background-position: center top;
            background-size: cover;
        }

        .overlay{
            position: absolute;
            border-radius: 15px;
            width: 0;
            height: 0;
            background-color: rgba(12,12,12,0.60);
            top: 0;
            left: 0;
            display: flex;
            align-items: center;
            justify-content: center;
            overflow: hidden;
            transition: .5s ease;
        }

        .overlay p {
            color: #ffff;
            font-size: 2em;
            font-weight: 300;
            opacity: 0;

        }
        .infoIco{
            height: auto;
            width: 20px;
            margin-right: 5px;
        }

    }

    .imgContainer:hover .overlay{
        height: 100%;
        width: 100%;
    }

    .imgContainer:hover .overlay p{
        opacity: 1;
    }
`