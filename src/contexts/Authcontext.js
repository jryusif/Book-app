import React, { Component, createContext } from 'react';
export const Authcontext = createContext();

class AuthContextProvider extends Component {
    state = { 
        authenticated: false
     } 
     toggleAuth = () => {
        this.setState({authenticated: !this.state.authenticated})
     }
    render() { 
        return (
            <Authcontext.Provider value={{...this.state, toggleAuth:this.toggleAuth}}>
                {this.props.children}
            </Authcontext.Provider>
        );
    }
}
 
export default AuthContextProvider;
