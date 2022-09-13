import "./index.scss"

wp.blocks.registerBlockType("cliowp-blocks/boilerplate", {
    title: "Hello Gutenberg",
    description: "Free WordPress Gutenberg block-type Plugin Boilerplate for Developers",
    icon: "universal-access",
    category: "common",
    edit: EditComponent,
    save: function() {
        return null
    }
})

function EditComponent() {
    return (
        <div>
            The HTML preview will appear here.
        </div>
    )
}
