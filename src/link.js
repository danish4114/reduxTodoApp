import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import React from 'react'
import "./App.css";
import AddTodo from './addTodo'
import Todo from './containers'

class LinkTodo extends React.Component{
    constructor(props){
        super(props);
    }
    render(){
        return(
            <Router>
                <div>
                <ul>
                <li>< Link to='/listtodo'>ListTodo</Link></li>
                <li><Link to='/addtodo'>AddTodo</Link></li>
                <li><Link to='/edittodo'>EditTodo</Link></li>
                </ul>
                <Route exact path='/listtodo' component={Todo}></Route>
                <Route path='/addtodo' component={AddTodo}></Route>
                <Route path='/edittodo' component={Todo}></Route>
                </div>
            </Router>
        )
    }
}
export default LinkTodo
