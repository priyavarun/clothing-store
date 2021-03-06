import React from 'react';
import './menuitem-styles.scss';

const MenuItem = ({title, imageUrl}) => (
    <div style={{
        backgroundImage: `url(${imageUrl})`
        }} className="menu-item">
                <div className="content">
                    <h1 className="title">{title}</h1>
                    <span>Shop Now</span>
                </div>
            </div>
);

export default MenuItem;