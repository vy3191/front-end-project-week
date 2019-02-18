import React, { Component } from 'react';
import SideNotes from './styles/SideNotes';
import Button from './styles/Button';
import Login from './Auth/Login';
import Register from './Auth/Register';
import {Link, Route} from 'react-router-dom';

class LambdaNotes extends Component {
    render() {
        return (
            <>
            <SideNotes>
            <h1>Lambda Notes</h1>
            <Link to='/'>
               <Button>View Your Notes</Button>
            </Link>
            <Link to='/notes'>
              <Button>Create New Notes</Button>
            </Link>
            <div>
             <nav>
                <Link className='reg' to='/Login'>Log in</Link>
                <Link className='reg' to='/Register'>Register</Link>
              </nav> 
              <a className='reg'>Sign out</a>
            </div>
            </SideNotes>
           
            <main>
                <Route path='/Login' component={Login} exact></Route>
                <Route path='/Register' component={Register}></Route>
            </main>
            </>
        );
    }
}

export default LambdaNotes;
