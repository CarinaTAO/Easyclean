import React from "react";
import styled from "styled-components";
import TextField from "@material-ui/core/TextField";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogTitle from "@material-ui/core/DialogTitle";
import IconButton from "@material-ui/core/IconButton";
import CloseIcon from "@material-ui/icons/Close";
import Button from "../Button";
import api from "../../api/fetchDetails";

const ErrorMessage = styled.p`
  color: red;
`;

const FormTitleContainer = styled.div`
  display: flex;
  justify-content: space-between;
`;

const initialErrorState = {
  passwordError: "",
};

export default class ProfileEdit extends React.Component {
  constructor(props) {
    super(props);

    this.onChangeValues = this.onChangeValues.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleClickOpen = this.handleClickOpen.bind(this);
    this.handleClose = this.handleClose.bind(this);
    this.validate = this.validate.bind(this);
    this.handleUpdate = props.handleUpdate;
    this.sendUserInfo = this.sendUserInfo.bind(this);
    this.getUserInfo = this.getUserInfo.bind(this);

    this.state = {
      username: "",
      email: "",
      mobile: "",
      password: "",
      postcode: "",
      description: "",
      confirmedPassword: "",
      passwordError: "",
    };
  }

  // Form Values
  onChangeValues(e) {
    const { name } = e.target;
    this.setState({ [name]: e.target.value });
  }

  handleClickOpen = () => this.setState({ open: true });

  handleClose = () => {
    this.setState({ open: false });
  };

  // React Life Cycle
  componentDidMount() {
    this.handleUpdate();
    this.getUserInfo();
  }

  getUserInfo = () => {
    api
      .get("/users/60dfe84827885d36ca9c8255")
        .then((response) => {
          const {username, email, password, confirmedPassword, mobile, description, postcode} = response.data;
          this.setState({
            username,
            email,
            password,
            confirmedPassword:password,
            mobile,
            description,
            postcode,
          });
        })
        .catch((error) => {
          console.log(error);
          console.log(this.state);
        });
  };

  sendUserInfo = () => {
    api
      .put("/users/60dfe84827885d36ca9c8255", 
        this.state,
      )
      .then((response) => {
        console.log(response.data);
        console.log(this.state);
      })
      .catch((error) => {
        console.log(error);
        console.log(this.state);
      });
  };

  validate = () => {
    let passwordError = "";
    if (this.state.password !== this.state.confirmedPassword) {
      passwordError = "Passwords do not match.";
      this.setState({ passwordError });
      return false;
    } else if (this.state.password === this.state.confirmedPassword) {
      return true;
    }
  };

  async handleSubmit(event) {
    event.preventDefault();
    const isValid = this.validate();
    if (isValid) {
      this.setState(initialErrorState);
      await this.sendUserInfo();
      this.handleClose();
      await this.handleUpdate();
    }
  }

  render() {
    return (
      <>
        <Button
          onClick={this.handleClickOpen}
          size="sm"
          children="Edit Profile"
          variant="grey"
        />
        <Dialog
          open={this.state.open}
          onClose={this.handleClose}
          aria-label="form-dialog-title"
        >
          <form onSubmit={this.handleSubmit}>
            <FormTitleContainer>
              <DialogTitle id="form-dialog-title">Edit Profile</DialogTitle>
              <IconButton aria-label="close" onClick={this.handleClose}>
                <CloseIcon />
              </IconButton>
            </FormTitleContainer>
            <DialogContent>
              <TextField
                autoFocus
                margin="dense"
                id="username"
                name="username"
                label="Name"
                type="username"
                value={this.state.username}
                fullWidth
                onChange={this.onChangeValues}
              />
              <TextField
                autoFocus
                margin="dense"
                id="password"
                name="password"
                label="Password"
                type="password"
                value={this.state.password}
                fullWidth
                onChange={this.onChangeValues}
              />
              <TextField
                autoFocus
                margin="dense"
                id="confirmedPassword"
                name="confirmedPassword"
                label="Confirmed Password"
                type="password"
                value={this.state.confirmedPassword}
                fullWidth
                onChange={this.onChangeValues}
              />
              <ErrorMessage>{this.state.passwordError}</ErrorMessage>
              <TextField
                autoFocus
                margin="dense"
                id="email"
                name="email"
                label="Email Address"
                type="email"
                value={this.state.email}
                fullWidth
                onChange={this.onChangeValues}
                disabled
              />
              <TextField
                autoFocus
                margin="dense"
                id="postcode"
                name="postcode"
                label="Postcode"
                type="postcode"
                value={this.state.postcode}
                fullWidth
                onChange={this.onChangeValues}
              />
              <TextField
                autoFocus
                margin="dense"
                id="mobile"
                name="mobile"
                label="Mobile"
                type="mobile"
                value={this.state.mobile}
                fullWidth
                onChange={this.onChangeValues}
              />
              <TextField
                autoFocus
                margin="dense"
                id="description"
                name="description"
                label="Description"
                type="description"
                value={this.state.description}
                onChange={this.onChangeValues}
                fullWidth
              />
            </DialogContent>
            <DialogActions>
              <Button
                size="md"
                variant="grey"
                children="Cancel"
                onClick={this.handleClose}
              />
              <Button
                onClick={this.handleSubmit}
                size="md"
                variant="green"
                children="Submit"
              />
            </DialogActions>
          </form>
        </Dialog>
      </>
    );
  }
}
