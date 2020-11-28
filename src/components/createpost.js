import React from "react";
import Axios from "axios";


class CreatePost extends React.Component {
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

        const galleryName = this.title + this.created + this.state.selectedFile.name;
        const country = {
            "id": 1
        };  // need to make read from DB - drop down

        const data = {
            title: this.title,
            description: this.description,
            country: country,
            galleryName: galleryName,
            created: Date.now(),
            updated: Date.now()
        };


        const fd = new FormData();
        fd.append('image', this.state.selectedFile, galleryName)
        console.log(data);

        const config = {
            headers: {
                Authorization: 'Bearer_' + localStorage.getItem('token')
            }
        };

        Axios.post('admin/post/' + localStorage.getItem('username'), data, config).then(
            result => {
                console.log(result)

                Axios.post('admin/photos/' + localStorage.getItem('username'), fd, config).then(
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
        return (<div className="login">
            <form onSubmit={this.handleSubmit}>

                <h3>Add Post</h3>

                <div className="form-group">

                    <input type="title" className="form-control" placeholder="title"
                           onChange={event => this.title = event.target.value}/>
                </div>

                <div className="form-group">

                    <textarea type="description" className="form-control" placeholder="description"
                           onChange={event => this.description = event.target.value}/>
                </div>


                <div className="form-group">

                    <input type="file" className="form-control" multiple=""
                           onChange={this.fileSelectedHandler}
                    />
                </div>

                <button>Create</button>

            </form>
            </div>
        );
    }
}

export default CreatePost;