import { MyComponent } from "./MyComponent";

//const __ = wp.i18n.__; // you may also use: import { __ } from "@wordpress/i18n";
//const _x = wp.i18n._x; // you may also use: import { _x } from "@wordpress/i18n";

class DisplayBlock {
    /**
     * The constructor
     */
    constructor() {

        document.addEventListener("DOMContentLoaded", function() {
            const myBlockDivs = document.getElementsByClassName("cliowp-block-instance");

            for (const div of myBlockDivs) {
                const data = JSON.parse(atob(div.getAttribute("data-blockprops")));
                console.log(data); // TODO remove it
                ReactDOM.render(<MyComponent {...data} />, div);
            }
        });
    }
}

export default DisplayBlock;
