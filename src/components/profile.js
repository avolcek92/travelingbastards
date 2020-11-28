import React from "react";
import Axios from "axios";
import {Link} from "react-router-dom";

class Profile extends React.Component {


    state = {
        posts: []
    };

    componentDidMount() {
        const config = {
            headers: {
                Authorization: 'Bearer_' + localStorage.getItem('token')
            }
        };


        Axios.get('admin/user/' + localStorage.getItem('username'), config).then(
            res => {
                this.setState({
                    user: res.data
                });
                console.log(res)
            }, err => {
                console.log(err)
            }
        )

        Axios.get('/admin/post/' + localStorage.getItem('username'), config).then(
            res => {
                const posts = res.data;
                this.setState({posts});

            }
        )
    }

    render() {
        if (this.state.user) {
            return (
                <div className="list">
                    <h1>Hi {this.state.user.firstName} {this.state.user.lastName}</h1>
                    <ul>
                        {this.state.posts.map(post => <li>{post.title} {post.description}</li>)}
                    </ul>
                        <Link to={"/createpost"}>Create a post</Link>

                </div>
            )
        }
        return (
            <div>a</div>

        )
    }
}


export default Profile;