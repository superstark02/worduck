import React, { Component } from 'react';
import "../Style/Task1.css";
import FileDownloadOutlinedIcon from '@mui/icons-material/FileDownloadOutlined';
import ShuffleIcon from '@mui/icons-material/Shuffle';
import axios from 'axios';
import ChevronRightRoundedIcon from '@mui/icons-material/ChevronRightRounded';
import ChevronLeftRoundedIcon from '@mui/icons-material/ChevronLeftRounded';

const clientKey = "cXCTeJRqRIHleM1NHl7oMv1nAkBtoiX4Oj_P3hjn92E";
const data = ["flowers", "games", "office", "computer"];

class Task1 extends Component {

    state = {
        search_term: "flower",
        images: null,
        move: 0
    }

    handleChange = (e) => {
        this.setState({ search_term: e.target.value })
    }

    handleSubmit = () => {
        const url = "https://api.unsplash.com/search/photos?page=1&query=" + this.state.search_term + "&client_id=" + clientKey
        axios.get(url).then(res => {
            console.log(res.data.results);
            this.setState({ images: res.data.results }) //url.small
        })
    }

    reset = () => {
        this.setState({ move: "" });
    }

    slide_left = () => {
        var position = this.state.move;
        position = position - 400;
        if (position > -2400) {
            this.setState({ move: position })
        }
    }

    slide_right = () => {
        var position = this.state.move;
        position = position + 400;
        if (position <= 0) {
            this.setState({ move: position })
        }
    }

    shuffle = () => {
        var random_term = data[Math.floor(Math.random()*data.length)]
        this.setState({search_term: random_term});
        this.handleSubmit();
    }

    componentDidMount() {
        const url = "https://api.unsplash.com/search/photos?page=1&query=" + this.state.search_term + "&client_id=" + clientKey
        axios.get(url).then(res => {
            console.log(res.data.results);
            this.setState({ images: res.data.results }) //url.small
        })
    }

    render() {
        return (
            <div>
                <div className='app-bar' >
                    <div className='heading' >
                        Gallery
                    </div>
                    <div className='shuffle' onClick={this.shuffle} >
                        Shuffle <ShuffleIcon />
                    </div>
                </div>

                <div style={{ display: "flex", justifyContent: "center", alignItems: "center", gap: "10px" }} >
                    <input className='search' onChange={this.handleChange} value={this.state.search_term} placeholder='Search For Images' />
                    <button className='btn' onClick={this.handleSubmit} >Search</button>
                </div>
                <div className='info' style={{textAlign:"center"}} >
                    (Try searching some keyword)
                </div>

                <div className='carousel' >
                    {
                        this.state.images &&
                        this.state.images.map(item => {
                            return (
                                <div key={item.id}
                                    className={'card '}
                                    style={{
                                        backgroundImage: "url(" + item.urls.small + ")",
                                        transform: "translateX(" + this.state.move + "px)"
                                    }}
                                >
                                    <a href={item.user.links.html} >
                                        <div className='card-bottom'>
                                            <div className='details' >
                                                <div className='avatar' style={{ backgroundImage: "url(" + item.user.profile_image.small + ")" }} >

                                                </div>
                                                <div>
                                                    <div className='name' >
                                                        {item.user.first_name} {item.user.last_name}
                                                    </div>
                                                    <div className='likes' >
                                                        {item.likes} Likes
                                                    </div>
                                                </div>
                                            </div>
                                            <div style={{ cursor: "pointer" }} >
                                                <a href={item.links.download} >
                                                    <FileDownloadOutlinedIcon />
                                                </a>
                                            </div>
                                        </div>
                                    </a>
                                </div>
                            )
                        })
                    }
                </div>

                <div className='btn-container' >
                    <button onClick={this.slide_right} className="btn" style={{ padding: "5px" }} >
                        <ChevronLeftRoundedIcon />
                    </button>
                    <button onClick={this.slide_left} className="btn" style={{ padding: "5px" }}  >
                        <ChevronRightRoundedIcon />
                    </button>
                </div>

                <div>
                    <ol>
                        <p className='info' >Images are called from Unsplash API</p>
                        <p className='info' >Shuffle button randomly calls set of images</p>
                        <p className='info' >Enter a keyword in input box and click search for getting the relevant images</p>
                        <p className='info' >Click buttons to slide the images</p>
                        <p className='info' >Website is responsive</p>
                    </ol>
                </div>

            </div>
        );
    }
}

export default Task1;