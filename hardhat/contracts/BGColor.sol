// SPDX-License-Identifier: GPL-3.0

pragma solidity ^0.8.9;

/**
 * @title Storage
 * @dev Store & retrieve value in a variable
 */
contract BGColor {

    string public color;
    event colorHasChanged(string newColor);

    constructor(string memory _color){
        color = _color;
    }

    /**
     * @dev Store color string in variable
     * @param _color value to store
     */
    function setColor(string memory _color) public {
        color = _color;
        emit colorHasChanged(_color);
    }
}