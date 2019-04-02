import React from 'react'
const AccountDetails = ({ username, dateJoined, membershipLevel }) => (
  <div>
    <p>Username: {username}</p>
    <p>Date Joined: {dateJoined}</p>
    <p>Membership Level: {membershipLevel}</p>
  </div>
)
export default AccountDetails