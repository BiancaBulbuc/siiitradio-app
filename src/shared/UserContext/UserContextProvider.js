import React from 'react';

const UserContext = React.createContext({
    user: {},
    onUserUpdated: () => {}
});

export default UserContext;
