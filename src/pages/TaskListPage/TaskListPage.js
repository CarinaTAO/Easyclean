import React from "react";
import styled from 'styled-components';
import MapView from "./MapView/MapView";
import ListView from "./ListView";
import TaskDetails from '../../components/TaskDetails'
//import CardItem from "./ListView/CardItem";
import TaskCard from '../../components/TaskCard';

import Header from "../../components/General/Header";
import fetchTasks from '../../api/fetchDetails';
//import { generateTasks } from "fast-glob";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from 'react-router-dom';


const AppContainer = styled.div`
    background-color: #f6f8fd;
    color: #545a77;
    font-family: museo_sans,Helvetica Neue,Helvetica,Arial,Lucida Grande,sans-serif;
    font-size: 14px;
    font-weight: 300;
    line-height: 1.4;
    margin: 0;
    padding: 0;
`;
const Content = styled.div`
    margin: 0;
    width: 100%;
    box-sizing: content-box;
    margin: 0 auto;
    position: relative;
    display: flex;
    flex-direction: row-reverse;
    height: calc(100vh - 108px);
    top: 50px;
    transition: left .5s ease-in-out;
`;
const LeftListView = styled.div`
    border-right: 0;
`;
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

const RightMapView = styled.div`
    height: 100%;
    width: 100%;
    flex: 1;
    position: relative;
    transition: left .5s ease-in;
`;


const getTasks = () => {
  return fetchTasks.get(`/tasks`).then((res) => res.data);
};
class TaskListPage extends React.Component {
  constructor(props){
    super(props);
    this.state = { 
      taskList: undefined,
      clicked: false,
    }
  }
  handleDisplay(obj){
    this.setState({
      clicked: !false
    })
  }
  handleLoadTasks = (newTaskList) => {
    this.setState({
      taskList: newTaskList,
    })
  }

  componentDidMount() {
    getTasks().then(this.handleLoadTasks);
  }

  render() {
    const { taskList } = this.state;
    console.log(taskList);
    if(!taskList) {
      return 'Loading...';
    }
    return (     
      <Router> 
      <AppContainer>
        <Content>
          <RightMapView>
            <Switch>
              <Route exact path="/BrowseTask">
                <MapView />
              </Route>
              {/*  <Route exact path={`/BrowseTask/${taskItem._id}`}>
                <TaskDetails taskId={taskItem._id}/>
              </Route>   */}
            </Switch>
          </RightMapView>
          <LeftListView>
            <CardContainer>
              <CardList>
                <NewListButton>
                  <span>6 NEW TASKS</span>
                </NewListButton>
                {
                  taskList.map(taskItem => (
                    <Link to={`/BrowseTask/${taskItem._id}`}>
                      <TaskCard taskInfo={taskItem} />
                    </Link>
                  ))
                }
              
              </CardList>
            </CardContainer>
          </LeftListView>

          
          
        </Content>
      </AppContainer>
      </Router>
    )
  }
}

export default TaskListPage;