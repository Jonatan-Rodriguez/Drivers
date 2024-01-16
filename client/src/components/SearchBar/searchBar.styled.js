import styled from 'styled-components';

export const ContainerSearchBar = styled.div`
    .search {
    display: flex;
    align-items: center;
    justify-content: space-between;
    text-align: center;
    margin-top:20px;
  }

  .search__input {
    font-family: inherit;
    font-size: 1.5em;
    background-color: #f4f2f2;
    border: none;
    color: #646464;
    padding: 1rem;
    border-radius: 30px;
    width: 300px;
    height: 35px;
    transition: all ease-in-out .5s;
    margin-right: -2.5em;
  }

  .search__input:hover, .search__input:focus {
    box-shadow: 0 0 2em rgba(255,255,255,0.25);
  }

  .search__input:focus {
    outline: none;
    background-color: #f0eeee;
  }

  .search__input::-webkit-input-placeholder {
    font-weight: 100;
    color: #ccc;
  }

  .search__input:focus + .search__button {
    background-color: #f0eeee;
  }

  .search__button {
    border: none;
    background-color: #f4f2f2;
    margin-top: .1em;
  }

  .search__button:hover {
    cursor: pointer;
  }

  .search__icon {
    height: 1.8em;
    width: 1.8em;
    fill: #b4b4b4;
  }
`