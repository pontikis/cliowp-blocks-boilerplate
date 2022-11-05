import { registerBlockType } from "@wordpress/blocks";
import { useBlockProps } from "@wordpress/block-editor";
import blockJson from "../../../block.json";

const __ = wp.i18n.__; // you may also use: import { __ } from "@wordpress/i18n";
const _x = wp.i18n._x; // you may also use: import { _x } from "@wordpress/i18n";

class RegisterBlock {
    /**
     * The constructor
     */
    constructor() {
        registerBlockType(blockJson, {
            title: _x("ClioWP Blocks Boilerplate", "block title in Gutenberg", "td-cliowp-blocks-boilerplate"),
            description: _x("Free WordPress Gutenberg block-type Plugin Boilerplate for Developers", "block description in Gutenberg", "td-cliowp-blocks-boilerplate"),
            edit: this.BlockInEditor,
            save: this.BlockInFrontEnd
        });
    }

    /**
     * What will apperar in Gutenberg Editor
     * @returns string
     */
    BlockInEditor(props) {

        const blockProps = useBlockProps({
            className: "msg-input-in-editor"
        });

        function updateMessage(event) {
            props.setAttributes({"message": event.target.value});
        }

        return (
            <div {...blockProps}>
                <input type="text" placeholder={__("Your message here...", "td-cliowp-blocks-boilerplate")} className="msg-input-in-editor" value={props.attributes.message} onChange={updateMessage} />
            </div>
        );
    }

    /**
     * What will apperar in site front end
     * Actually it is managed by PHP (using a render callback)
     * @returns null
     */
    BlockInFrontEnd() {
        return null;
    }


}

export default RegisterBlock;
