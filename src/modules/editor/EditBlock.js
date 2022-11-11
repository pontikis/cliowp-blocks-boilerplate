import { useBlockProps, InspectorControls } from "@wordpress/block-editor";
import { TextControl, TextareaControl, Flex, FlexItem, PanelBody, PanelRow, ColorPicker } from "@wordpress/components";

const __ = wp.i18n.__; // you may also use: import { __ } from "@wordpress/i18n";

/**
 * Functional React Component to edit the block on the Gutenberg Editor
 *
 * @param {*} props - Block attributes
 * @returns {string} - The component html
 */
export function EditBlock(props) {
    const blockProps = useBlockProps({
        className: "cliowp-block-container"
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
        <div {...blockProps} style={{ backgroundColor: props.attributes.bgColor }}>

            {/* Right-hand Admin area options - ColorPicker */}
            <InspectorControls>
                <PanelBody title="Background Color" initialOpen={true}>
                    <PanelRow>
                        <ColorPicker color={props.attributes.bgColor} onChangeComplete={x => props.setAttributes({ bgColor: x.hex })} />
                    </PanelRow>
                </PanelBody>
            </InspectorControls>

            {/* Main block in Editor */}
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

