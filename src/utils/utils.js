import React, { Fragment } from 'react';

export const getCssToolTipVariant = (variant) => {
    const variantList = {
        topLeft: 'top left',
        topCenter: 'top center',
        topRight: 'top right',
        centerLeft: 'center left',
        centerRight: 'center right',
        bottomLeft: 'bottom right',
        bottomCenter: 'bottom center',
        bottomRight: 'bottom left',
    };
    const cssVariant = variantList[variant];

    return cssVariant ? cssVariant : '';
}

export const getLoremIpsum = () => 'Lorem ipsum dolor sit amet, consectetur adipisicing elit ut labore et dolore magna aliqua. Ut enim ad minim veniam';
export const getIconsAndTexts = () => <Fragment>
    <span className='icon_text is-active'>
        <i className='icon'>
            <img src='../images/triangle.png' />
        </i> Start</span>
    <span className='icon_text'>
        <i className='icon'>
            <img src='../images/square.png' />
        </i> Stop</span>
    <span className='icon_text'>
        <i className='icon'>
            <img src='../images/arrows.png' />
        </i> Reboot</span>
    <span className='icon_text'>
        <i className='icon'>
            <img src='../images/cross.png' />
        </i> Delete</span>
</Fragment>;
