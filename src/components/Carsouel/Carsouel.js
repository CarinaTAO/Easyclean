import React, { PureComponent } from "react";
import { Focus } from "./style";
import PropTypes from "prop-types";

class Carousel extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      width: this.props.width, //图片宽度
      height: this.props.height, //图片高度
      index: 1, //当前展示的图片的下标
      left: this.props.width, //当前位移
      flag: true, //节流阀，当flag为false时，表明图片正在进行移动，不能进行其他操作
    };
  }

  static propTypes = {
    width: PropTypes.number.isRequired,
    height: PropTypes.number.isRequired,
  };

  //自动轮播
  componentDidMount() {
    setInterval(() => {
      if (this.state.flag) {
        this.setState({
          index: this.state.index + 1,
        });
        this.transform(this.state.width * this.state.index);
      }
    }, 4000);
  }

  componentWillUpdate(nextProps, nextState) {
    console.log(this.state.index);
    if (nextState.index > this.props.children.length + 1) {
      this.setState({
        index: 2, //下次直接渲染真实的第二张图片
        left: 720,
      });
    }
  }

  render() {
    return (
      <Focus
        width={this.state.width}
        height={this.state.height}
        num={this.props.children.length}
      >
        <ul className="img" style={{ left: `-${this.state.left}px` }}>
          {this.props.children[this.props.children.length - 1]}
          {this.props.children}
          {this.props.children[0]}
        </ul>
        <ul className="pointer">
          {this.props.children.map((item, index) => {
            return (
              <li
                onClick={(e) => this.move(index + 1)}
                className={
                  index === this.state.index - 1 ||
                  index === this.state.index - 5
                    ? "current"
                    : ""
                }
              ></li>
            );
          })}
        </ul>
      </Focus>
    );
  }

  move(index) {
    if (this.state.flag) {
      this.setState({
        index: index,
      });
      this.transform(index * this.state.width);
    }
  }

  transform(target) {
    this.setState({
      flag: false,
    });

    let timer = setInterval(() => {
      if (this.state.left === target) {
        clearInterval(timer);
        this.setState({
          flag: true,
        });
      }
      let step = (target - this.state.left) / 10;
      step = step > 0 ? Math.ceil(step) : Math.floor(step);
      this.setState({
        left: this.state.left + step,
      });
    }, 20);
  }
}

export default Carousel;
