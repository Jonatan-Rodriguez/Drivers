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
        display: flex;
        align-items: center;
        justify-content: center;
        flex-direction: row;
        border-radius: 30px;
        background: rgb(141,255,198);
        background: linear-gradient(90deg, rgba(141,255,198,1) 0%, rgba(40,166,236,1) 100%);
        padding:5px 10px;

        a:link, a:visited, a:active {
            text-decoration:none;
        }
        
        .navIco{
            cursor: pointer;
            display: flex;
            align-items: center;
            justify-content: center;
            flex-direction: row;

            .ico{
                width: 40px;
                height: 40px;
                margin-right: 5px;
            }

            p{
                font-size: 2em;
                color: white;
                font-weight: bold;
            }
        }
    }
`