import React from 'react';

export default class Auth extends React.Component {
    constructor(){
        this.authenticated = false;
    }

    login(cb) {
        this.authenticated = false;
        cb();
    }

    logout(cb) {
        this.authenticated = false;
        cb();
    }

    isAuthenticated() {
        return this.authenticated;
    }
}

