import React from 'react';
import styled, { css } from 'styled-components';

/* const General = styled.span`
    border-radius: 10px;
    padding: 2px 12px;
`; */
const Button = styled.button`
    outline: 0;
    border: 0;
    padding: 0;
    background: transparent;
    cursor: pointer;
    background-color: rgb(224, 68, 109);
    color: white;
    border-radius: 160px;
    border-width: 2px;
    border-style: solid;
    font-family: museo-bold, "Helvetica Neue", Helvetica, Arial, "Lucida Grande", sans-serif;
    font-weight: bold;
    letter-spacing: 0.25px;

    //为组件的props里添加一个css对象,sm、md是键名,值为css样式.同时调用该对象中的某个键名对应的值.
    ${(props) =>
    ({
        xs: css`
        font-size: 12px;
        padding: 2px 12px;
        `,
        sm: css`
        font-size: 14px;
        padding: 6px 16px;
        `,
        md: css`
        font-size: 18px;
        padding: 10px 24px;
        `,
        lg: css`
        font-size: 16px;
        padding: 8px 16px;
        width: 100%;
        `,

    }[props.size || "md"]
    )}

    ${(props) =>
    ({
        primary: css`
        background-color: rgb(224, 68, 109);
        color: white;
        `,
        green: css`
        background-color: rgb(125, 179,67);
        color: white;
        `,
        blue: css`
        background-color: rgb(24, 119, 242);
        `,
        white: css`
        background-color: white;
        color: black;
        border-color: rgb(231, 235, 251);
        `,
        black: css`
        background-color: black;
        color:white;
        `,
        offerStatusTrue: css`
        background-color: rgb(229, 240, 217);
        color: rgb(125, 179,67);
        margin-right: 20px;
        `,
        offerStatusFalse: css`
        background-color: transparent;
        color: rgb(187, 194, 220);
        margin-right: 20px;
        `,
        grey: css`
        background-color: rgb(190, 202, 207);
        color: white;
        `,

        transparent: css`
        background-color: transparent;
        color: black;
        border-color: rgb(231, 235, 251);
            &:hover {
                color: rgb(43,161,192);
                background-color: white;
                transition: all 0.25s ease 0s;
            }
        `,

        tab: css`
        background-color: transparent;
        color: black;
        padding: 16px 0px;
        margin: 0px 16px;
        border-top: 2px solid transparent ;
        border-bottom: 2px solid transparent ;
        border-left: transparent;
        border-right: transparent;
        border-radius: 0px;
            &:hover {
                padding: 16px 0px;
                border-top-color: black;
            }
        `,

    }[props.variant || "primary"])
    }
`;

export default Button;
