import React, { Component } from 'react';

export default class NavSetings extends Component {

    render() {
        return (
            <>
            <div className='navbar-setings'>
            <div className='container-nav-setings'>
                <div className='list-setings'>
                   <div><a href='/'>Editează profilul</a></div> 
                   <div><a href='/'>Cont</a></div>
                   <div><a href='/'>Istoric comenzi</a></div>
                   <div><a href='/'>Ratele</a></div>
                   <div><a href='/'>Plată</a></div>
                   <div><a href='/'>Transport</a></div>
                </div>
            </div>
            </div>

            
            </>
        );
    }
};