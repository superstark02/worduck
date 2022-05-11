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
            ]
        },
        {
            id: '2.2',
            title: 'Node 2.2',
        }]
    }
]

class Task2 extends Component {

    state = {
        hovered_index_parent: null,
        hovered_index_child: null
    }

    setHoveredIndeces = (parent_index, child_index) => {
        this.setState({hovered_index_parent:parent_index});
        if(child_index){
            this.setState({hovered_index_child:child_index});
        }
    }

    reset = () => {
        this.setState({hovered_index_parent:null});
        this.setState({hovered_index_child:null});
    }

    render() {
        return (
            <div className='container' >
                <ul>
                    {
                        data.map((item, index) => {
                            return (
                                <li key={index} >
                                    {
                                        this.state.hovered_index_parent === index ? (
                                            <span className="hovered" >{item.title}</span>
                                        ): (
                                            <span>{item.title}</span>
                                        )
                                    }
                                    
                                    <ul>
                                        {item.children.map((child_item, child_index) => {
                                            return (
                                                <li key={child_index} onMouseEnter={()=>{this.setHoveredIndeces(index,null)}} onMouseLeave={this.reset} >
                                                    <span>{child_item.title}</span>
                                                    <ul>
                                                        {
                                                            child_item.children &&
                                                            child_item.children.map((sub_child, sub_child_index) => {
                                                                return (
                                                                    <li key={sub_child_index}  >
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
            </div>
        );
    }
}

export default Task2;