import { Graph } from "react-d3-graph"
import transformData from '../lib/transformData'

// the graph configuration, just override the ones you need
const myConfig = {
    nodeHighlightBehavior: true,
    width: 1000,
    height: 700,
    node: {
        color: "lightgreen",
        size: 500,
        highlightStrokeColor: "orange",
        directed: true,
        fontSize: 15,
        strokeWidth: 5,
        renderLabel: false
    },
    link: {
        highlightColor: "lightblue",
        strokeWidth: 5,
    },
};

const VisualizerThree = ({ data }) => {

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

export default VisualizerThree;

