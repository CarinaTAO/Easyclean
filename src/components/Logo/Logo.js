import React from 'react';
import styled from 'styled-components';


const General = styled.div`
    -webkit-box-pack: center;
    justify-content: center;
    padding-left: 16px;
    padding-right: 16px;
    margin: 20px;
    font-family: museo-black, "Helvetica Neue", Helvetica, Arial, "Lucida Grande", sans-serif;
    font-weight: 900;
    font-size: 23px;
    color: rgb(43,161,192);
    cursor: pointer;
`;

const White = styled(General)`
    color: white;
`;


class Logo extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            type: this.props.type,
            onClick: this.props.onClick,
        }
    }

    render() {
        switch (this.state.type) {
            case 'White':
                return (<White onClick={this.props.onClick}>EasyTask</White>);
                
            default:
                return (<General onClick={this.props.onClick}>EasyTask</General>);
        }
    }
}

export default Logo;