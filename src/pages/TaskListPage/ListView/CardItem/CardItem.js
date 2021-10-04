import React from 'react'
import styled from 'styled-components'
import { FaRegCalendarAlt, FaGlobeAfrica, FaUserAlt, FaRegClock } from "react-icons/fa"
import axios from 'axios'

const Card = styled.div`
margin: 10px auto;
max-width: 500px;
    background: #fff;
    border: 1px solid transparent;
    border-radius: 4px;
    box-shadow: 0 1px rgb(187 194 220 / 60%);
    box-sizing: border-box;
    cursor: pointer;
    display: block;
    margin: 10px 7px 10px 0;
    opacity: 1;
    overflow: hidden;
    padding: 0 12px;
    position: relative;
    transition: box-shadow .1s ease-out;
  &:hover{
    transform: translateY(-8px);
    box-shadow: 0 18px 24px rgba(0, 0, 0, 0.15);
  }
`;
const CardHeader = styled.div`
    color: #292b32;
    flex-grow: 1;
    font-size: 25px;
    font-weight: 300;
    line-height: 20px;
    word-break: break-word;
    display: flex;
    margin: 10px 0 5px;
`;
const PriceTag = styled.div`
word-break: keep-all;
    color: #292b32;
    float: right;
    font-size: 24px;
    font-weight: 500;
    line-height: 24px;
    margin-left: 10px;
`;
const Price = styled.span``;
const CardContent = styled.div`
    margin: 5px 0 10px;
    min-height: 34px;
    
`;
const CardContentOnline = styled.div`
    -webkit-font-smoothing: antialiased;
    color: #545a77;
    font-size: 12px;
    font-weight: 500;
    >span{
    display: inline-block;
    margin-left: 5px;
    vertical-align: middle;
    }
    >img{
      height: 13px;
      width: 13px;
    }
`;
const CardContentDate = styled.div`
    -webkit-font-smoothing: antialiased;
    color: #545a77;
    font-size: 12px;
    font-weight: 500;
    >span{
    margin-right: 4px;
    display: inline-block;
    margin-left: 5px;
    vertical-align: middle;
    }
    >img{
      height: 13px;
      width: 13px;
    }
`;
const CardContentTime = styled.div`
    display: flex;
    -webkit-box-align: center;
    align-items: center;
    >img{
      height: 13px;
      width: 13px;
    }
`;
const ImageContainer = styled.div`
    border-radius: 50%;
    position: relative;
    float: right;
    >img{
      border: 1px solid #bbc2dc;
    border-radius: 50%;
    display: block;
    margin: 0 auto;
    max-height: 100%;
    max-width: 100%;
    width: 32px;
    aspect-ratio: auto 32 / 32;
    height: 32px;
    }
`;
const CardFooter = styled.div`
  border-top: 1px solid #e7ebfb;
    box-sizing: border-box;
    font-size: 11px;
    height: 32px;
    line-height: 32px;
    >span{
      -webkit-font-smoothing: antialiased;
      font-weight: 700;
      text-transform: uppercase;
      color: #7db343;
    }
`;
class CardItem extends React.Component {
  constructor() {
    super()
    this.state = {
      taskTitles: '',
      taskBudgets: '',
      taskDueDates: '',
      data: {},
      taskLocations: '',
    }
  }
  componentDidMount() {
    this.getTaskDetail();
  }
  getTaskDetail() {
    const dbURL = "http://localhost:8000/api/v1";
    axios.get(`${dbURL}/tasks`)
      .then((res) => {
        this.setState({
          //  data = res.data
        })
        //task = res.data.state
        // const task = res.data.pop();
        // const data = res.data;
        console.log(res.data);
        // const sliceData = data.pop();
        console.log(typeof res.data[1].dueDate)
        this.setState({
          taskTitles: res.data[1].title,
          taskBudgets: res.data[1].priceBudget,
          taskDueDates: res.data[1].dueDate,
          taskLocations: res.data[1].postCode,
        })
      })
      .catch((error) => {
        console.log(error)
      })
  }
  render() {

    //for
    //this.state.data.map()

    const { taskTitles, taskBudgets, taskDueDates, taskLocations } = this.state;
    return (
      <Card>
        <CardHeader>
          {taskTitles}
          <PriceTag>
            <Price>{taskBudgets}</Price>
          </PriceTag>
        </CardHeader>
        <CardContent>
          {taskDueDates}
          <ImageContainer>
            <FaUserAlt/>
          </ImageContainer>
          <CardContentOnline>
            <FaGlobeAfrica/>
            <span>
              {taskLocations}
            </span>
          </CardContentOnline>
          <CardContentDate>
            <FaRegCalendarAlt/>
            <span>
              Sat, 3 July
            </span>
          </CardContentDate>
          <CardContentTime>
            <FaRegClock/>
            Anytime
          </CardContentTime>
        </CardContent>
        <CardFooter>
          <span>
            open
          </span> 1 offers
        </CardFooter>
      </Card>
    )
  }
}

export default CardItem;