// eslint-disable-next-line no-unused-vars
// class MyComponent extends React.Component {
//     render() {
//         return (
//             <div style={{backgroundColor: this.props.bgColor}}>
//                 <h1>{this.props.headline}</h1>
//             </div>
//         );
//     }
// }

// export default MyComponent;

/**
 *
 * @param {*} props attributes
 * @returns {string} component html
 */
export function MyComponent(props) {
    return (
        <div style={{backgroundColor: props.bgColor}}>
            <h1>{props.headline}</h1>
        </div>
    );
}
