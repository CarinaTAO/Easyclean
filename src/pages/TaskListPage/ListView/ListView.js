import React from 'react';
import styled from 'styled-components';
import TaskCard from '../../../components/TaskCard';
// import TaskCard from './TaskCard';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from 'react-router-dom';


const CardContainer = styled.div`
  border-right: 0;
`;
const CardList = styled.div`
  height: calc(100vh - 106px);
  overflow-y: scroll;
`;
const NewListButton = styled.div`
    display: block;
    margin: 0 auto;
    cursor: pointer;
    pointer-events: all;
    background: #008fb4;
    border-radius: 4px;
    box-shadow: 4px 6px 8px rgb(187 194 220 / 60%);
    color: #fff;
    font-size: 11px;
    font-weight: 700;
    height: 34px;
    line-height: 34px;   
    text-align: center;
    text-transform: uppercase;
    width: 222px;
`;

class ListView extends React.Component {

  constructor(props) {
    super(props);
    this.state = { showTaskDetails: false }
    this.handleClickDisplay = this.handleClickDisplay.bind(this)
  }
  render() {
    const {showTaskDetails} = this.state;
    const { taskList } = this.props;
    return (

      <CardContainer>
        <CardList>
          <NewListButton>
            <span>6 NEW TASKS</span>
          </NewListButton>
          <Router>
          {
            taskList.map(taskItem => (
              <Link to={`/${taskItem._id}`}>
                <TaskCard taskInfo={taskItem} />
              </Link>
            ))
          }
         </Router>
        </CardList>
      </CardContainer>
    )
  }
  handleClickDisplay(showTaskDetails) {
    this.setState({ showTaskDetails: !showTaskDetails })
    console.log("clicked card")
  }
}

export default ListView;
