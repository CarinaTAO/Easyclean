import React from 'react';
import styled from 'styled-components';
import { FaMapMarkerAlt, FaCalendarAlt, FaFacebookF,
  FaTwitter, FaLinkedinIn } from 'react-icons/fa';
import Avatar from '../Avatar';
import Button from '../Button';
import breakpoint from '../breakpoint';
import Modal from '../Modal';
import OfferDetails from '../OfferDetails';
import fetchTaskDetails from '../../api/fetchDetails';
import TimeAgo from '../TimeAgo';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from 'react-router-dom';

const TaskDetail = styled.div`
  overflow-x: hidden;
  overflow-y: scroll;
  position: absolute;
  transition-delay: .1s;
  transition: left .5s ease-out;
  bottom: 0;
  left: 0;
  z-index: 10; 
  width: 100%;
  height: 90vh;

`;

const TaskDetailHeader = styled.div`
  display: flex;
  margin: 10px 20px;
  @media screen and ${breakpoint.device.xs} {
    flex-direction: column;
  }
  flex-direction: row;
`;

const DetailsPanel = styled.div`
  margin-top: 20px;
  position: relative;
  flex: 70%;
`;

const StatusBar = styled.div`
  height: 20px;
  margin-bottom: 20px;
  flex: 30%;
`;

const PostDetail = styled.div`
  margin-top: 20px;
  display: flex;
  flex-direction: column;
`;
const PostItem = styled.div`
  display: flex;
  flex-direction: row;
  position: relative;
  padding: 5px;
  &::before {
    background-color: #f6f8fd;
    content: "";
    display: block;
    height: 1px;
    left: 40px;
    position: absolute;
    right: 5px;
    top: 50px;
  }
`;
const User = styled.a`
  color: #008fb4;
  cursor: pointer;
  text-decoration: none;
`;
const PostTime = styled.div`
  position: absolute;
  bottom: 15px;
  position: absolute;
  right: 5px;
`;
const Sidebar = styled.div`
  display: flex;
  flex-direction: column;
  border-radius: 4px;
  margin: 10px 25px;
  width: 202px;
`;
const PaymentPanel = styled.div`
  border-color: rgb(187, 194, 220);
  border-width: 1px;
  border-style: solid;
  border-radius: 8px;
  text-align: center;
  padding: 15px;
`;
const PaymentPrice = styled.h2`
  padding: 8px 0px;
`;

const TaskShare = styled.div`
  border-radius: 6px;
  border: 1px solid rgb(231, 235, 251);
  margin-top: 20px;
  position: relative;
  text-align: center;
  padding: 15px;
  p {
    position: absolute;
    top: -25px;
    left: 35%;
  }
`;
const ModalContainer = styled.div`
  position: relative;
`;
const CloseButton = styled.svg`
  outline: 0;
  border: 0;
  padding: 0;
  cursor: pointer;
  background: transparent;
  position: absolute;
  right: 18px;
  top: -90px;
  fill: rgb(187, 194, 220);
  width: 20px;
  height: 20px;
`;
const ShareButtons = styled.div``;

const TaskDetailBody = styled.div`
  line-height: 1.4;
`;
const Details = styled.div`
  max-height: 253px;
  overflow-y: hidden;
  transition: max-height 0.3s ease-out 0s;
  position: relative;
  overflow-wrap: break-word;
  word-break: break-word;
  margin: 10px 20px;
`;

const OfferContent = styled.div`
  position: relative;
  margin: 0 20px;
  padding-bottom: 15px;
`;

class MakeOffer extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      price: "",
      serviceFee: 10,
      task: props.task, 
      taskerId: props.taskerId,
      offerComment: ""
    };

    this.handlePriceChange = this.handlePriceChange.bind(this);
    this.handleCommentChange = this.handleCommentChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handlePriceChange(event) {
    const inputPrice = Number(event.target.value);
    //const comment = event.target.value;
    /* const nam = event.target.name;
    const val = event.target.value; */

    if (isNaN(inputPrice)) {
      console.log("price is NaN, prevent input");
      this.setState({price: this.state.price});
      return;
    }

    this.setState({
      price: event.target.value
    });
  }

  handleCommentChange(event) {
    //const comment = event.target.value;
    this.setState({
      offerComment: event.target.value 
    })
  }

  handleSubmit(event) {
    fetchTaskDetails.post('/offers', {
      task:this.state.task,
      taskerId:this.state.taskerId,
      priceOffer:this.state.price,
      offerComment:this.state.offerComment,
      assigned:false,
      priceAssigned:5
    }).then(function (response) {
      console.log(response);
    }).catch(function (error) {
      console.log(error);
    });
  }

  render() {
    return(
    <form onSubmit={this.handleSubmit}>
      <p><b>Your offer</b></p>
      <p><span>$ </span><input maxLength="4" type="text" value={this.state.price} name="price" onChange={this.handlePriceChange}/></p>
      <p>Service fee: -${this.state.serviceFee.toFixed(2)}</p>
      <p><b>You will receive: ${
        ((this.state.price - this.state.serviceFee > 0) ? this.state.price - this.state.serviceFee : 0).toFixed(2)
      }</b></p>
      <p><b>Enter your offer details</b></p>
      <input type="text" value={this.state.offerComment} name="offerComment" onChange={this.handleCommentChange} />
      <p><Button size="md" variant="green" type='Submit' children="Submit" /></p>
    </form>);
  }
}

class TaskDetails extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      taskInfo: undefined,
      showModal: undefined, //false
    }

    this.showModal = this.showModal.bind(this);
    this.closeModal = this.closeModal.bind(this);
  }
  
  showModal(e) {
    console.log('showModal: ' + e);
    this.setState({
      showModal: e,
    });
  }

  closeModal() {
    this.showModal(undefined);
  }


  // change the state of modal
  handleShowModalChange = (newShowModal) => {
      this.setState({
        showModal: newShowModal
      })
    }

  // 传入res data作为新的taskInfo的state
  handleTaskChange = (newTaskInfo) => {
    this.setState({
      taskInfo: newTaskInfo,
    });
  }
  //componentDidUpdate

  // 在TaskDetails组件mount时开始加载getTaskDetails函数
  componentDidUpdate(prevProps) {
  const getTaskDetails = () => {
  const { taskId } = this.props;
  return fetchTaskDetails.get(`/tasks/${taskId}`).then((res) => res.data);
};
//redux 
  if (prevProps.taskId !== this.props.taskId) {
    getTaskDetails().then(this.handleTaskChange);

  }
    

  }

  render() {
    const { taskInfo, showModal } = this.state;
    const { taskId } = this.props;
    console.log(taskInfo);

    if(!taskInfo) {
      return 'Loading details';
    }
  return (
    <TaskDetail>
      <div className="TaskDetailScroller">
        <TaskDetailHeader>
          <DetailsPanel>
            <StatusBar>
              <Button size="xs" variant="offerStatusTrue" children="OPEN"></Button>
              <Button size="xs" variant="offerStatusFalse" children="ASSIGNED"></Button>
              <Button size="xs" variant="offerStatusFalse" children="COMPLETED"></Button>
            </StatusBar>
            <h2>{taskInfo.title}</h2>
            <PostDetail>
              <PostItem>
                <Avatar userAvatar={taskInfo.clientId.username}/>
                <div>
                  <div>POSTED BY</div>
                  <User>{taskInfo.clientId.username}</User>
                </div>
                <PostTime>{TimeAgo(taskInfo.createdAt)}</PostTime>
              </PostItem>
              <PostItem>
                <FaMapMarkerAlt className="icon" />
                <div>
                  <div>LOCATION</div>
                  <div>Remote</div>
                </div>
              </PostItem>
              <PostItem>
                <FaCalendarAlt className="icon" />
                <div>
                  <div>DUE DATE</div>
                  <div>{taskInfo.dueDate}</div>
                  <div>Anytime</div>
                </div> 
              </PostItem>
            </PostDetail>
          </DetailsPanel>

          <Sidebar>
            <PaymentPanel>
              <div>TASK BUDGET</div>
              <PaymentPrice>${taskInfo.priceBudget}</PaymentPrice>
              <Button onClick={() => this.handleShowModalChange(true)} variant="green" children="Make an Offer" />
              {showModal === true && (
                <Modal 
              title="Make an Offer"
              content={
                <ModalContainer>
                  <MakeOffer task={taskInfo._id} taskerId={taskInfo.clientId} />
                  <CloseButton className="btn-close" onClick={()=>this.handleShowModalChange(undefined)}>
                    <path d="M13.17 12l6.41-6.42a.82.82 0 00-1.16-1.16L12 10.83 5.58 4.42a.82.82 0 00-1.16 
                        1.16L10.83 12l-6.41 6.42a.8.8 0 000 1.16.8.8 0 001.16 0L12 13.17l6.42 6.41a.8.8 0 001.16 
                        0 .8.8 0 000-1.16z"></path>
                  </CloseButton>
                </ModalContainer>
              } />
              )}
            </PaymentPanel>
            <TaskShare>
              <p>SHARE</p>
              <ShareButtons>
                <FaFacebookF className="icon-share" />
                <FaTwitter className="icon-share" />
                <FaLinkedinIn className="icon-share" />
              </ShareButtons>
            </TaskShare>
          </Sidebar>
        </TaskDetailHeader>

        <TaskDetailBody>
          <Details>
            <p>DETAILS</p>
            <div>{taskInfo.detail}</div>
          </Details>
        </TaskDetailBody>

        <div className="task-detail-offer">
            <OfferContent>
              <p>OFFERS</p>
              <OfferDetails offers={taskInfo.offers} />             
            </OfferContent>
        </div>
      </div>
    </TaskDetail>
  )
  }
}

export default TaskDetails;
