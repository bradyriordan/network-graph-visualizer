import Alarm from '../images/alarm.svg'
import Device from '../images/device.svg'

const transformData = (data) => {
    let nodes = [];
    let links = []; 
    var sourceData;
    if (typeof data === 'string') {
        sourceData = JSON.parse(data)
    } else {
        sourceData = data
    }
    if (sourceData != null && Object.entries(sourceData).length > 0) {
        if(sourceData.vertices){
            sourceData.vertices.forEach(item => {
                if (item.type === 'alarm') {
                    nodes.push({ id: item.id, svg: Alarm, label: item.label })
                } else if (item.type === 'node') {
                    nodes.push({ id: item.id, svg: Device, label: item.label })
                }
            })
        }
        if(sourceData.edges){
            sourceData.edges.forEach(item => {
                links.push({ id: item.id, label: item.label, type: "Link", source: item.source_id, target: item.target_id })
            })
        }      
    }
    return { nodes, links }
}

export default transformData;