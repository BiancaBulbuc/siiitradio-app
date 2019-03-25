import React from 'react';
import { NavbarHomepage } from '../../shared/navbar/NavbarHomepage';
import { BrowserRouter, Route } from 'react-router-dom';

export class Homepage extends React.Component {




  render() {
    return(
      <BrowserRouter>
        <div>
          <NavbarHomepage></NavbarHomepage>
 
        </div>
      </BrowserRouter>
    );
  }
}