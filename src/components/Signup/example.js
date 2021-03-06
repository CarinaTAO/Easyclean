import React from 'react';
import styled from 'styled-components';
import Button from '../../../../components/Button';
import Input from '../../../../components/Input';
import FormItem from '../../components/Modal/FormItem';
import Modal  from '../../../../components/Modal';

const Form = styled.form`
`;

const Title = styled.div`
  font-size: 18px;
  text-align: center;
  margin-bottom: 32px;
`;

const SignUpButton = styled(Button)`
  width: 100%;
`;

const Error = styled.div`
  font-size: 12px;
  font-weight: bold;
  margin-top: 4px;
  color: rgb(231, 82, 69);
  letter-spacing: 0.25px;
`;

const validate = (key, data) => {
  const value = data[key];

  switch (key) {
    case 'email': {
      if (!value) {
        return 'Please input your email';
      }

      const EMAIL_REGEXP = /^(([^<>()[\].,;:\s@"]+(\.[^<>()[\].,;:\s@"]+)*)|(".+"))@(([^<>()[\].,;:\s@"]+\.)+[^<>()[\].,;:\s@"]{2,})$/;
      if (!EMAIL_REGEXP.test(value)) {
        return 'Please input a valid email';
      }

      return '';
    }

    case 'password': {
      if (!value) {
        return 'Please input your password';
      }

      return '';
    }

    case 'confirmPassword': {
      if (!value) {
        return 'Please input your confirm password';
      }

      if (value !== data.password) {
        return 'Confirm password does not match to password';
      }

      return '';
    }

    default:
      return '';
  }
};

class SignUpModal extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      data: {
        email: '',
        password: '',
        confirmPassword: '',
      },
      error: {},
    };

    this.handleDataChange = this.handleDataChange.bind(this);
    this.handleErrorChange = this.handleErrorChange.bind(this);
  }

  handleErrorChange(key, error) {
    this.setState((prevState) => ({
      error: {
        ...prevState.error,
        [key]: error,
      },
    }));
  }

  handleDataChange(event) {
    const { name, value } = event.target;

    this.setState((prevState) => ({
      data: {
        ...prevState.data,
        [name]: value,
      },
    }), () => {
      const { data } = this.state;

      const error = validate(name, data);
      this.handleErrorChange(name, error);
    });
  }

  render() {
    const { onClose } = this.props;
    const { data, error } = this.state;

    return (
        <Form
          onSubmit={(event) => {
            event.preventDefault();
            console.log('state', this.state);
          }}
        >
          <FormItem label="Email" htmlFor="sign-up-modal-email">
            <Input
              name="email"
              value={data.email}
              onChange={this.handleDataChange}
              error={error.email}
              id="sign-up-modal-email"
            />
            <Error>{error.email}</Error>
          </FormItem>
          
          <FormItem label="Password" htmlFor="sign-up-modal-password">
            <Input
              name="password"
              value={data.password}
              onChange={this.handleDataChange}
              type="password"
              error={error.password}
              id="sign-up-modal-password"
            />
            <Error>{error.password}</Error>
          </FormItem>
          <FormItem label="Confirm password" htmlFor="sign-up-modal-confirm-password">
            <Input
              name="confirmPassword"
              value={data.confirmPassword}
              onChange={this.handleDataChange}
              type="password"
              error={error.confirmPassword}
              id="sign-up-modal-confirm-password"
            />
            <Error>{error.confirmPassword}</Error>
          </FormItem>
          <SignUpButton size="md" variant="success">
            Join Airtasker
          </SignUpButton>
        </Form>
      </Modal>
    );
  }
}

export default SignUpModal;