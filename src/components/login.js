import React from "react";
import Axios from "axios";

class Login extends React.Component {


    handleSubmit = e =>{
        e.preventDefault();

        const data = {
            nickName: this.nickname,
            password: this.password
        };

        Axios.post('authentication/login', data).then(
            result => {
                localStorage.setItem('token', result.data.token)
                localStorage.setItem('username', result.data.username)
                console.log(result)
            }
        ).catch(err => {
            console.log(err)
        })
    }

    render() {
        return (
            <div className="login">
            <form onSubmit={this.handleSubmit}>
                <h3>Login</h3>
                <div className="form-group">

                    <input type="nickname" className="form-control" placeholder="nickname"
                           onChange={event => this.nickname = event.target.value}/>
                </div>

                <div className="form-group">

                    <input type="password" className="form-control" placeholder="password"
                           onChange={event => this.password = event.target.value}/>
                </div>
                <button>Login</button>

            </form>
            </div>

        );
    }
}

export default Login;