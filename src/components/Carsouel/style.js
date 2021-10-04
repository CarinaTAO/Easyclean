import styled from "styled-components";
export const Focus = styled.div`
  position: relative;
  width: ${(props) => props.width}px;
  height: ${(props) => props.height}px;
  overflow: hidden;
  margin: 100px auto;

  li {
    list-style: none;
  }
  * {
    margin: 0;
    padding: 0;
  }

  .img {
    width: ${(props) => (props.num + 2) * 100}%;
    position: absolute;
    z-index: -1;
  }

  .img li {
    float: left;
    width: ${(props) => props.width}px;
    height: ${(props) => props.height}px;
  }

  .pointer {
    position: absolute;
    bottom: 12px;
    left: 320px;
  }

  .pointer li {
    cursor: pointer;
    display: inline-block;
    margin-right: 5px;
    width: 18px;
    height: 18px;
    background-color: white;
    opacity: 0.3;
    border-radius: 50%;
  }

  .current {
    opacity: 1 !important;
  }
`;
