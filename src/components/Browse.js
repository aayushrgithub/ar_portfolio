import React, { useContext } from 'react'
import Header from './Header'
import Center from './Center';
import MenuContext from '../utils/MenuContext';
import Display from './Display';

const Browse = () => {
    return (
        <div>
            <Header />
            <Center />
        </div>
    )
}

export default Browse;