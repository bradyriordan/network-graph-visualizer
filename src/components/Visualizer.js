import { Graph } from "react-d3-graph"
import transformData from '../lib/TransformData'
import useWindowDimensions from '../lib/useWindowDimensions'

const Visualizer = ({ data }) => {

    const { height, width } = useWindowDimensions();

    // Graph configuration - you can generate a config automatically here: https://danielcaldas.github.io/react-d3-graph/sandbox/index.html 
    const myConfig = {
        nodeHighlightBehavior: true,
        width: width - 75,
        height: height - 100,
        d3: {
            gravity: -400,
        },
        node: {
            color: "lightgreen",
            size: 400,
            highlightStrokeColor: "orange",
            fontSize: 15,
            highlightFontSize: "SAME",
            strokeWidth: 5,
            renderLabel: true,
            labelProperty: "label",
        },
        link: {
            highlightColor: "lightblue",
            strokeWidth: 5,
        },
    };

    // Converts data to react-d3-graph supported object shape
    const transformedData = transformData(data)

    if (transformedData) {
        try {
            return (
                <Graph
                    id="graph-id" // id is mandatory
                    data={transformedData}
                    config={myConfig}
                />
            )
        } catch (e) {
            console.log(e)
        }

    }
    return (
        <p>No data to show</p>
    )

}

export default Visualizer;

