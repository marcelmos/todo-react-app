import React, { Component } from 'react';
import './Navigation.css';

class Navigation extends Component {
    constructor(props){
        super(props);

        this.state = {
            isShow: false
        }
    }
    render(){
        return(
            <section>
                <nav className="navigation">
                    <h3 className="title">ToDo App <i></i></h3>
                    <button className="btn-user" onClick={() => this.setState({isShow: !this.state.isShow})}>
                        <img src="https://upload.wikimedia.org/wikipedia/commons/f/f4/User_Avatar_2.png" className="img-avatar" alt="avatar" />
                    </button>
                </nav>
                <div className={'dropdown-menu'+ (this.state.isShow ? ' opend' : '')}>
                    <ul className="option-list">
                        <li className="list-item">Settings</li>
                        <li className="list-item">Log Out</li>
                    </ul>
                </div>
            </section>
        );
    }
}

export default Navigation;