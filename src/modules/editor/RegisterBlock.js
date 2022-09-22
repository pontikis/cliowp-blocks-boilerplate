import { registerBlockType } from "@wordpress/blocks";
import { useBlockProps } from "@wordpress/block-editor";
import name from '../../../block.json';

class RegisterBlock {
    /**
     * The constructor
     */
    constructor() {
        registerBlockType(name, {
            edit: this.BlockInEditor,
            save: this.BlockInFrontEnd
        })
    }

    /**
     * What will apperar in Gutenberg Editor
     * @returns string
     */
    BlockInEditor() {

        const blockProps = useBlockProps({
            className: "paint-it-gray"
        });

        return (
            <div {...blockProps}>
                You can manage this block here.
            </div>
        )
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
