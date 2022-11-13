/**
 * Functional React Component to display the block on the front end
 *
 * @param {*} props - Block attributes
 * @returns {string} - The component html
 */
export function MyComponent(props) {
    return (
        <div
            className="cliowp-block-container-in-front-end"
            style={{backgroundColor: props.bgColor, borderColor: props.borderColor, textAlign: props.headlineAlignment}}>
            <h2>{props.headline}</h2>
        </div>
    );
}
