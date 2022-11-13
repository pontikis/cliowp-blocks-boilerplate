import { registerBlockType } from "@wordpress/blocks";
import blockJson from "../../../block.json";
import { EditBlock } from "./EditBlock";

const _x = wp.i18n._x; // you may also use: import { _x } from "@wordpress/i18n";

class RegisterBlock {
    /**
     * The constructor
     */
    constructor() {
        registerBlockType(blockJson, {
            title: _x("ClioWP Blocks Boilerplate",
                "block title in Gutenberg",
                "td-cliowp-blocks-boilerplate"
            ),
            description: _x(
                "Free WordPress Gutenberg block-type Plugin Boilerplate for Developers",
                "block description in Gutenberg",
                "td-cliowp-blocks-boilerplate"
            ),
            edit: EditBlock,
            save: this.BlockInFrontEnd,
        });
    }

    /**
     * @returns {null} - This is handled by PHP render callback
     */
    BlockInFrontEnd() {
        return null;
    }
}

export default RegisterBlock;
