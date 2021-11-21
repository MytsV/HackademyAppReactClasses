import React from 'react';
import { authenticator } from '../tools/Authentication';
import styles from './../css/darkinputs.module.css';

interface SignInProps {
}

interface SignInState {
  email: string;
  password: string;
}

class SignIn extends React.Component<SignInProps, SignInState> {
  constructor(props: any) {
    super(props);
    this.state = { email: '', password: '' };
  }

  onClickSubmit = () => {
    authenticator.authenticate(this.state.email, this.state.password);
  }

  handleChangeEmail = (event: React.ChangeEvent) => {
    const input: any = event.target;
    this.setState({
      email: input.value,
      password: this.state.password
    });
  }

  handleChangePassword = (event: React.ChangeEvent) => {
    const input: any = event.target;
    this.setState({
      email: this.state.email,
      password: input.value
    });
  }

  render() {
    return <form onSubmit={this.onClickSubmit}>
      <input className={styles.field + ' block m-5'} id="email" type="email" placeholder="Email" name="email" onChange={this.handleChangeEmail} />
      <input className={styles.field + ' block m-5'} id="password" type="password" placeholder="Пароль" name="password" onChange={this.handleChangePassword} />
      <input type="submit" value="Відправити" className="button block mx-5 my-10" />
    </form>
  }
}
export default SignIn;