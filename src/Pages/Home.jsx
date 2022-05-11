import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Home extends Component {
    render() {
        return (
            <div style={{
                width: "100%",
                height: "100vh",
                display: "flex",
                justifyContent: "center",
                alignItems: 'center',
                gap: "10px"
            }} >
                <div>
                    <Link to="/task1" >Task 1</Link>
                </div>
                <div>
                    <Link to="/task2" >Task 2</Link>
                </div>
            </div>
        );
    }
}

export default Home;