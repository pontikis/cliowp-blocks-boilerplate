import { registerBlockType } from "@wordpress/blocks";
import { useBlockProps } from "@wordpress/block-editor";
import blockJson from "../../../block.json";
import { TextControl, TextareaControl, Flex, FlexItem } from "@wordpress/components";

const __ = wp.i18n.__; // you may also use: import { __ } from "@wordpress/i18n";
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
            edit: this.BlockInEditor,
            save: this.BlockInFrontEnd,
        });
    }

    /**
     * @param {*} props - The block attributes
     * @return {string} What will apperar in Gutenberg Editor
     */
    BlockInEditor(props) {
        // eslint-disable-next-line react-hooks/rules-of-hooks
        const blockProps = useBlockProps({
            className: "cliowp-block-container",
        });

        const labelHeadline = __("Headline:", "td-cliowp-blocks-boilerplate"),
            labelMaintext = __("Main text:", "td-cliowp-blocks-boilerplate");

        /**
         * @param {?string} value - The value passed to headline
         */
        function updateHeadline(value) {
            props.setAttributes({ headline: value });
        }

        return (
            <div {...blockProps}>
                <TextControl
                    label={labelHeadline}
                    value={props.attributes.headline}
                    style={{fontSize: "25px"}}
                    onChange={updateHeadline}
                />
                <Flex>
                    <FlexItem>Image</FlexItem>
                    <FlexItem>
                        <TextareaControl
                            label={labelMaintext}
                            value={props.attributes.maintext}
                        />
                    </FlexItem>
                </Flex>
            </div>
        );
    }

    /**
     * @returns {null} - This is handled by PHP render callback
     */
    BlockInFrontEnd() {
        return null;
    }
}

export default RegisterBlock;
