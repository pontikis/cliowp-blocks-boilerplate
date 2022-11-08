import React from "react";
import ReactDOM from "react-dom";
import MyComponent from "./MyComponent";

//const __ = wp.i18n.__; // you may also use: import { __ } from "@wordpress/i18n";
//const _x = wp.i18n._x; // you may also use: import { _x } from "@wordpress/i18n";

class DisplayBlock {
    /**
     * The constructor
     */
    constructor() {

        document.addEventListener("DOMContentLoaded", function(event) {
            const myBlockDivs = document.getElementsByClassName("cliowp-block-instance");

            for (const div of myBlockDivs) {
                const data = JSON.parse(div.getAttribute("data-blockprops"));
                console.log(data);
                ReactDOM.render(<MyComponent {...data} />, div);
            }
        });
    }

}

export default DisplayBlock;
