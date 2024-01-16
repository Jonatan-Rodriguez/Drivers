import styled from 'styled-components';

export const ContainerCards = styled.div`
    min-height: 100vh;
    height: 100%;
    display: flex;
    justify-content: start;
    align-items: start;
    flex-direction:column;
    gap: 20px;
    background-color: #18191a;
    padding: 2% 5%;
    
    h1{
        color: white;
    }

    .cards{
        display: flex;
        justify-content: start;
        align-items: center;
        flex-direction:row;
        flex-wrap:wrap;
        gap: 20px 20px;
        width: 100%;
        height: 100%;
    }
`