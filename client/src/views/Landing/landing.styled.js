import styled from 'styled-components';

export const ContainerLanding = styled.div`
    margin: 0;
    font-size: 1rem;
    line-height: 1.5;
    color: #333;
    overflow-x: hidden;

    .header {
        height: 100vh;
        display: flex;
        align-items: center;
        color: #fff;
    }
  
  .content {
    max-width: 40rem;
    padding-left: 1rem;
    padding-right: 1rem;
    margin: auto;
    text-align: center;
  }
  
  .header-video {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100vh;
    overflow: hidden;
  }
  
  .header-video video {
    min-width: 100%;
    min-height: 100%;
  }
  
  .header-overlay {
    height: 100vh;
    width: 100vw;
    position: absolute;
    top: 0;
    left: 0;
    background: black;
    z-index: 1;
    opacity: .70;
  }
  
  .header-content {
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    align-items: center;
    height: 100%;
    z-index: 2;
  }
  
  .header-content h1 {
    font-size: 50px;
    margin-bottom: 0;
    font-family: 'Lobster', cursive;
  }
  
  .header-content p {
    font-size: 1.5rem;
    display: block;
    padding-bottom: 2rem;
  }
  
  .btn {
    background: #c44569;
    color: #fff;
    font-size: 1.2rem;
    padding: 1rem 2rem;
    text-decoration: none;
  }
  
  @media (max-width: 960px) {
    .content {
      padding: 0 3rem 0 3rem;
    }
  }

    button {
        text-decoration: none;
        position: relative;
        border: none;
        font-size: 17px;
        font-family: inherit;
        cursor: pointer;
        color: #fff;
        width: 9em;
        height: 3em;
        line-height: 2em;
        text-align: center;
        background: linear-gradient(90deg, #03a9f4, #f441a5, #ffeb3b, #03a9f4);
        background-size: 300%;
        border-radius: 30px;
        z-index: 1;
    }

button:hover {
  animation: ani 8s linear infinite;
  border: none;
}

@keyframes ani {
  0% {
    background-position: 0%;
  }

  100% {
    background-position: 400%;
  }
}

button:before {
  content: "";
  position: absolute;
  top: -5px;
  left: -5px;
  right: -5px;
  bottom: -5px;
  z-index: -1;
  background: linear-gradient(90deg, #03a9f4, #f441a5, #ffeb3b, #03a9f4);
  background-size: 400%;
  border-radius: 35px;
  transition: 1s;
}

button:hover::before {
  filter: blur(20px);
}

button:active {
  background: linear-gradient(32deg, #03a9f4, #f441a5, #ffeb3b, #03a9f4);
}

`