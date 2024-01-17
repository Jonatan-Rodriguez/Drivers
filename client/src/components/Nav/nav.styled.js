import styled from 'styled-components';

export const ContainerNav = styled.div`
    height: auto;
    width: 100%;
    background-color:#242526;
    padding: 10px 5%;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    

    .navBtn{
        button {
            padding: 1.3em 3em;
            font-size: 12px;
            text-transform: uppercase;
            letter-spacing: 2.5px;
            font-weight: 500;
            color: #000;
            background-color: #fff;
            border: none;
            border-radius: 45px;
            box-shadow: 0px 8px 15px rgba(0, 0, 0, 0.1);
            transition: all 0.3s ease 0s;
            cursor: pointer;
            outline: none;
        }

        button:hover {
            background-color: #d90429;
            box-shadow: 0px 15px 20px #d9042950;
            color: #fff;
            transform: translateY(-7px);
        }

        button:active {
            transform: translateY(-1px);
        }
    }
`