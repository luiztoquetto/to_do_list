import styled from "styled-components";

type ContainerProps = {
    done: boolean;
}

export const Container = styled.div(({ done }: ContainerProps) => (
    `
    display: flex;
    background-color: #20212c;
    padding: 10px;
    border-radius: 10px;
    margin-bottom: 10px;
    align-items: center;
    position: relative;

    input {
        width: 25px;
        height: 25px;
        margin-right: 5px;
    }

    label {
        color: #ccc;
        text-decoration: ${done ? 'line-through' : 'initial'};
    }

    span {
        color: #ccc;
        opacity: 0.2;
        right: 1rem;
        font-weight: bold;
        font-size: 18px;
        position: absolute;
    }
    `
));