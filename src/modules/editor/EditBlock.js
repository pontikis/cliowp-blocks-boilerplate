import { useBlockProps, InspectorControls, BlockControls, AlignmentToolbar } from "@wordpress/block-editor";
import { TextControl, PanelBody, PanelRow, ColorPicker } from "@wordpress/components";

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

    const labelHeadline = __("Headline:", "td-cliowp-blocks-boilerplate");

    /**
     * @param {?string} value - The value passed to headline
     */
    function updateHeadline(value) {
        props.setAttributes({ headline: value });
    }

    return (
        <div {...blockProps} style={{ backgroundColor: props.attributes.bgColor, borderColor: props.attributes.borderColor }}>

            {/* The Settings Sidebar of Gutenberg */}
            <InspectorControls>
                <PanelBody title={__("Background Color:", "td-cliowp-blocks-boilerplate")} initialOpen={false}>
                    {/* ColorPicker - background color */}
                    <PanelRow>
                        <ColorPicker
                            color={props.attributes.bgColor}
                            onChangeComplete={x => props.setAttributes({ bgColor: x.hex })} />
                    </PanelRow>
                </PanelBody>
                <PanelBody title={__("Border Color:", "td-cliowp-blocks-boilerplate")} initialOpen={false}>
                    {/* ColorPicker - border color */}
                    <PanelRow>
                        <ColorPicker color={props.attributes.borderColor} onChangeComplete={x => props.setAttributes({ borderColor: x.hex })} />
                    </PanelRow>
                </PanelBody>
            </InspectorControls>

            {/* The Block Popup Toolbar */}
            <BlockControls>
                <AlignmentToolbar value={props.attributes.headlineAlignment} onChange={newAlign => props.setAttributes({ headlineAlignment: newAlign })} />
            </BlockControls>

            {/* Main block in Editor */}
            <TextControl
                label={labelHeadline}
                value={props.attributes.headline}
                style={{fontSize: "25px"}}
                onChange={updateHeadline}
            />
        </div>
    );
}

