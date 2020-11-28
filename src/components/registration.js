import React from "react";
import Axios from "axios";
import { v4 as uuidv4 } from 'uuid';



class Registration extends React.Component {
    state = {
        selectedFile: null
    }


    fileSelectedHandler = e => {
        this.setState({
                selectedFile: e.target.files[0]
            }
        )
    }

    handleSubmit = e => {
        e.preventDefault();

        const fileName= this.nickname + "_"+ uuidv4() + "_"+ this.state.selectedFile.name;

        const data = {
            firstName: this.firstname,
            lastName: this.lastname,
            nickName: this.nickname,
            email: this.email,
            photoName:fileName,
            password: this.password,
            userDescription: this.userDescription,
            created: Date.now(),
            updated: Date.now()
        };


        const fd = new FormData();
        fd.append('image', this.state.selectedFile, fileName)





        Axios.post('authentication/registration', data).then(
            result => {
                console.log(result)

                Axios.post('authentication/registration/photos/' + this.nickname, fd).then(
                    result => {
                        console.log(result)
                    }).catch(err => {
                    console.log(err)
                })
            }
        ).catch(err => {
            console.log(err)
        })

    }


    render() {
        return (
            <div className="login">
            <form onSubmit={this.handleSubmit}>

                <h3>Registration</h3>

                <div className="form-group">

                    <input type="firstname" className="form-control" placeholder="firstname"
                           onChange={event => this.firstname = event.target.value}/>
                </div>

                <div className="form-group">

                    <input type="lastname" className="form-control" placeholder="lastname"
                           onChange={event => this.lastname = event.target.value}/>
                </div>

                <div className="form-group">

                    <input type="nickname" className="form-control" placeholder="nickname"
                           onChange={event => this.nickname = event.target.value}/>
                </div>

                <div className="form-group">

                    <input type="email" className="form-control" placeholder="email"
                           onChange={event => this.email = event.target.value}/>
                </div>

                <div className="form-group">

                    <input type="password" className="form-control" placeholder="password"
                           onChange={event => this.password = event.target.value}/>
                </div>

                <div className="form-group">

                    <input type="userDescription" className="form-control" placeholder="describe here"
                           onChange={event => this.userDescription = event.target.value}/>
                </div>

                <div className="form-group">

                    <input type="file" className="form-control" multiple=""
                           onChange={this.fileSelectedHandler}
                    />
                </div>

                <button>Sign Up</button>

            </form>
            </div>
        );
    }
}

export default Registration;