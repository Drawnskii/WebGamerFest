import React from 'react';
import Sidebar from './Sidebar';
import Baner from './Baner';

function VentanaPrincipal () {
    return (
        <div className='bg-light-purple'>
            
            <Baner/>
            <Sidebar/>
        </div>
    );
};

export default VentanaPrincipal;