import styled from "styled-components";

type ContainerProps = {
    done: boolean;
}

export const Container = styled.div(({ done }: ContainerProps) => (
    `
    display: flex;
    background-color: #20212c;
    padding: 10px;
    border-radius: 15px;
    margin-bottom: 10px;
    align-items: center;
    position: relative;
    user-select: none;

    input {
        width: 20px;
        height: 20px;
        margin-right: 5px;
        cursor: pointer;
        min-width: 20px;
        min-height: 20px;
    }

    label {
        color: #ccc;
        opacity: ${done ? '0.3' : '1'};
        white-space: nowrap;
        overflow: hidden;
        text-overflow: ellipsis;
        max-width: 90%;
    }

    span {
        color: #ccc;
        opacity: 0.2;
        right: 1rem;
        font-weight: bold;
        font-size: 18px;
        position: absolute;
    }

    @media (max-width: 768px) {
        label {
            max-width: 85%;
        }
    }

    @media (max-width: 520px) {
        label {
            max-width: 80%;
        }
    }

    @media (max-width: 375px) {
        label {
            max-width: 75%;
        }
    }

    `
));