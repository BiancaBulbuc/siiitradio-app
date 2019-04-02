import React from 'react';
import  AccountDetails   from './AccountDetails';
import  AccountUpdate  from './AccountUpdate';


export const AccountProfile = ({ account: { username, dateJoined, membershipLevel } }) => (
  <React.Fragment>
    <AccountDetails>username={username} dateJoined={dateJoined} membershipLevel={membershipLevel}</AccountDetails>  
    <AccountUpdate>username={username} membershipLevel={membershipLevel}</AccountUpdate>
  </React.Fragment>
) 