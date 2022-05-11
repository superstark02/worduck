import React, { Component } from 'react';
import "../Style/Task2.css"

const data = [
    {
        id: '1',
        title: 'Node 1',
        children: [{
            id: '1.1',
            title: 'Node 1.1'
        },
        {
            id: '1.2',
            title: 'Node 1.2',
        }]
    },
    {
        id: '2',
        title: 'Node 2',
        children: [{
            id: '2.1',
            title: 'Node 2.1',
            children: [{
                id: '2.1.1',
                title: 'Node 2.1.1'
            },
            {
                id: '2.1.2',
                title: 'Node 2.1.2'
            },
            {
                id: '2.1.3',
                title: 'Node 2.1.3'
            },
            {
                id: '2.1.4',
                title: 'Node 2.1.4'
            },
            {
                id: '2.1.5',
                title: 'Node 2.1.5'
            },
            {
                id: '2.1.6',
                title: 'Node 2.1.6'
            },
            {
                id: '2.1.7',
                title: 'Node 2.1.7'
            },
            {
                id: '2.1.8',
                title: 'Node 2.1.8'
            },
            ]
        },
        {
            id: '2.2',
            title: 'Node 2.2',
        },
        {
            id: '2.3',
            title: 'Node 2.3',
        },
        {
            id: '2.4',
            title: 'Node 2.4',
        },
        {
            id: '2.5',
            title: 'Node 2.5',
        },
        {
            id: '2.6',
            title: 'Node 2.6',
        }
    ]
    },
    {
        id: '3',
        title: 'Node 3',
        children: [{
            id: '3.1',
            title: 'Node 3.1',
        },
        {
            id: '3.2',
            title: 'Node 3.2',
        },
        {
            id: '3.3',
            title: 'Node 3.3',
        },
        {
            id: '3.4',
            title: 'Node 3.4',
        },
        {
            id: '3.5',
            title: 'Node 3.5',
        },
        {
            id: '3.6',
            title: 'Node 3.6',
        }
    ]
    },
]

class Task2 extends Component {

    state = {
        hovered_index_parent: null,
        hovered_index_child: null,
        collapse: ["content", "content", "content"]
    }

    setHoveredIndeces = (parent_index, child_index) => {
        this.setState({ hovered_index_parent: parent_index });
        this.setState({ hovered_index_child: child_index });
    }

    setActive = (index, sub_index) => {
        var temp = this.state.collapse;
        if(temp[index] == "active"){
            temp[index] = "content";
            this.setState({collapse:temp});
        }
        else if(temp[index] == "content"){
            temp[index] = "active";
            this.setState({collapse:temp});
        }
    }

    reset = () => {
        this.setState({ hovered_index_parent: null });
        this.setState({ hovered_index_child: null });
    }

    render() {
        return (
            <div className='container' >
                <ul>
                    {
                        data.map((item, index) => {
                            return (
                                <li key={index} onClick={()=>{this.setActive(index,null)}} >
                                    {
                                        this.state.hovered_index_parent === index ? (
                                            <span className="hovered" >{item.title}</span>
                                        ) : (
                                            <span>{item.title}</span>
                                        )
                                    }

                                    <ul className={this.state.collapse[index]+" trans"} >
                                        {item.children.map((child_item, child_index) => {
                                            return (
                                                <li key={child_index} onMouseEnter={() => { this.setHoveredIndeces(index, null) }} onMouseLeave={this.reset} >
                                                    {
                                                        this.state.hovered_index_child === child_index && this.state.hovered_index_parent === index ? (
                                                            <span className="hovered" >{child_item.title}</span>
                                                        ) : (
                                                            <span>{child_item.title}</span>
                                                        )
                                                    }
                                                    <ul>
                                                        {
                                                            child_item.children &&
                                                            child_item.children.map((sub_child, sub_child_index) => {
                                                                return (
                                                                    <li key={sub_child_index} onMouseEnter={() => { this.setHoveredIndeces(index, child_index) }} onMouseLeave={this.reset}  >
                                                                        <span>{sub_child.title}</span>
                                                                    </li>
                                                                )
                                                            })
                                                        }
                                                    </ul>
                                                </li>
                                            )
                                        })}
                                    </ul>
                                </li>
                            )
                        })
                    }
                </ul>

                <div>
                    <p className='info' >  
                        Has indented nested nodes
                    </p>
                    <p className='info' >  
                        Highlights all parents of a child when it's hovered over
                    </p>
                </div>
            </div>
        );
    }
}

export default Task2;