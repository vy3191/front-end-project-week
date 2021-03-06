import React, { Component } from 'react';
import SideNotes from './styles/SideNotes';
import Button from './styles/Button';
import Login from './Auth/Login';
import Register from './Auth/Register';
import Logout from './Auth/Logout';
import {Link, Route} from 'react-router-dom';

class LambdaNotes extends Component {

    logout = (event) => {
      event.preventDefault();
      console.log(`local storage removed`);
      localStorage.removeItem('jwt');
      
      this.props.reset();
      
    }
    resetState = () => {
      this.props.fetch();
    }
    render() {
        
        return (
            <>
            <SideNotes>
            <h1>Lambda Notes</h1>
            <Link to='/'>
               <Button onClick={this.resetState}>View Your Notes</Button>
            </Link>
            {localStorage.getItem('jwt') ?
                                        <Link to='/notes'>
                                          <Button>Create New Notes</Button>
                                        </Link>
                                        :
                                        <Link to='/Login'>
                                          <Button>Create New Notes</Button>
                                        </Link>
            }

            <div>
             <nav>
                <Link className='reg' to='/Login'>Log in</Link>
                <Link className='reg' to='/Register'>Register</Link>
                <div  onClick={this.logout}>
                  <Link className='reg' to='/Logout'>Sign out</Link>
                </div>
              </nav> 
             
            </div>
            </SideNotes>
           
            <main>
                <Route path='/Login' render= { (props) => <Login {...props} />} exact></Route>
                <Route path='/Register' component={Register}></Route>
                <Route path='/Logout' component={Logout}></Route>
            </main>
            </>
        );
    }
}

export default LambdaNotes;
