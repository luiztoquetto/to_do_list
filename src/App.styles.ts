import styled from "styled-components";

export const ListArea = styled.div`
    display: flex;
    flex-direction: column;
    overflow-y: auto;
    overflow-x: hidden;
    max-height: 70vh;
    padding-right: 1rem;

    ::-webkit-scrollbar {
        width: 6px;
    }

    ::-webkit-scrollbar-track {
        background: transparent;
    }

    ::-webkit-scrollbar-thumb {
        background-color: #20212c;
        border-radius: 50px;
        border: 3px solid transparent;
    }
`;

export const Container = styled.div`
    background-color: #17181f;
    color: #797a81;
    min-height: 100vh;
`;

export const Area = styled.div`
    margin: auto;
    max-width: 980px;
    padding: 10px;
`;

export const Header = styled.h1`
    margin: 0;
    padding: 0 0 15px 0;
    color: #fff;
    text-align: center;
    border-bottom: 1px solid #444;
    overflow: hidden;
    text-overflow: ellipsis;
`;