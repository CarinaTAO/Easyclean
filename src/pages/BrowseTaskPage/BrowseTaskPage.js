import React from 'react';
import styled from 'styled-components';
import TaskCard from '../../components/TaskCard';
import TaskDetails from '../../components/TaskDetails';
import TaskListPage from '../TaskListPage';
import MapView from '../TaskListPage/MapView';
import ListView from "../TaskListPage/ListView";
import fetchTasks from '../../api/fetchDetails';
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

const RightView = styled.div`
    height: 100%;
    width: 100%;
    flex: 1;
    position: relative;
    transition: left .5s ease-in;
`;

const TaskDetailContainer = styled.div`
 overflow-y: scroll;
  position: absolute;
  transition-delay: .1s;
  transition: left .5s ease-out;
  bottom: 0;
  left: 0;
  z-index: 10;
  width: 100%;
  height: 90vh;
  background-color: white;
`;


const getTasks = () => {
  return fetchTasks.get(`/tasks`).then((res) => res.data);
};
class BrowseTaskPage extends React.Component {
   constructor(props){
    super(props);
    this.state = { 
      taskList: undefined,
      taskId: undefined // 接收card的id的初始状态值
      //clicked: false,
    }
  }
 /*  handleDisplay(obj){
    this.setState({
      clicked: !false
    })
  } */
  handleLoadTasks = (newTaskList) => {
    this.setState({
      taskList: newTaskList,
    })
  }

  // 接收card传递给page的props
  getTaskId = (taskId) => {
    console.log(taskId);
    this.setState({
      taskId: taskId
    })
  }

  componentDidMount() {
    getTasks().then(this.handleLoadTasks);
  }

  render() {
    const { taskList, taskId } = this.state;
    console.log(taskList);
    if(!taskList) {
      return 'Loading...';
    }
    return (     
      <Router> 
        <AppContainer>
          <Content>
            <RightView>
              <Switch>
                <Route exact path="/BrowseTask">
                  <MapView />
                </Route>
              </Switch>
              <TaskDetailContainer className="task-details">
                <TaskDetails taskId={taskId} />
              </TaskDetailContainer>
            </RightView>
            <LeftListView>
              <CardContainer>
                <CardList>
                  <NewListButton>
                    <span>6 NEW TASKS</span>
                  </NewListButton>
                  {
                    taskList.map(taskItem => (                     
                        <TaskCard taskInfo={taskItem} getTaskId={this.getTaskId} />
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

export default BrowseTaskPage;