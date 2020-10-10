import React from 'react';
import MenuList from '../menu-list';

const MainPage = (props) => {
    return (
        <MenuList history={props.history}/>
    )
}

export default MainPage;
