import { MyComponent } from "./MyComponent";

class DisplayBlock {
    /**
     * The constructor
     */
    constructor() {

        document.addEventListener("DOMContentLoaded", function() {
            const myBlockDivs = document.getElementsByClassName("cliowp-block-instance");

            for (const div of myBlockDivs) {
                const data = JSON.parse(atob(div.getAttribute("data-blockprops")));
                ReactDOM.render(<MyComponent {...data} />, div);
            }
        });
    }
}

export default DisplayBlock;
