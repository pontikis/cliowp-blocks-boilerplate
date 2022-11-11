/**
 * Functional React Component to display the block on the front end
 *
 * @param {*} props - Block attributes
 * @returns {string} - The component html
 */
export function MyComponent(props) {
    return (
        <div style={{backgroundColor: props.bgColor}}>
            <h1>{props.headline}</h1>
        </div>
    );
}
