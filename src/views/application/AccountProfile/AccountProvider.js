import React from 'react'


const AccountContext = React.createContext()
// Create an exportable consumer that can be injected into components

export const AccountConsumer = AccountContext.Consumer
// Create the provider using a traditional React.Component class


export class AccountProvider extends React.Component {
  state = {
    username: 'Crunchy Crunch',
    dateJoined: '9/1/18',
    membershipLevel: 'Silver'
  }
  render () {
    return (
      // value prop is where we define what values 
      // that are accessible to consumer components
       <AccountContext.Provider value={this.state}>
        {this.props.children}
      </AccountContext.Provider>
    )
  }
} 