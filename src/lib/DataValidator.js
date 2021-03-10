class Error {
    constructor(err) {
        this.error = err
    }
}

const isValidJSON = data => {
    var json = null;
    try {
        JSON.parse(data)
    } catch (e) {
        json = new Error("Invalid JSON")
    }
    return json
}

const isValidVertices = data => {
    const vertices = data.vertices ? data.vertices : []
    // Check if vertices has atleast one node
    if (vertices.length < 1) {
        return new Error(`JSON should have atleast one vertex`)
    }
    // Create an array of vertex ids for duplicate check
    const verticesArr = vertices.map(vertex => vertex.id)
    // Check if there are duplicate vertex IDs
    if (verticesArr.filter((item, index) => verticesArr.indexOf(item) !== index).length > 0) {
        return new Error(`Your vertices object has duplicate ids`)
    }
    for (let i = 0; i < vertices.length; i++) {
        // Check for the ID property
        if (!vertices[i].hasOwnProperty("id")) {
            return new Error(`The vertex in position ${i + 1} doesn't have an id property`)
        }
        // Check for the label property
        if (!vertices[i].hasOwnProperty("label")) {
            return new Error(`The vertex in position ${i + 1} doesn't have a label property`)
        }
        // Check for the label property
        if (!vertices[i].hasOwnProperty("type")) {
            return new Error(`The vertex in position ${i + 1} doesn't have a type property`)
        }
        // Check if type is either alarm or node
        if (vertices[i].type !== 'alarm' && vertices[i].type !== 'node') {
            return new Error(`The vertex in position ${i + 1} needs a node or alarm type`)
        }
    }
    return null
}

const isValidEdges = data => {
    const vertices = data.vertices ? data.vertices : []
    const edges = data.edges ? data.edges : []
    // Create array of vertices for matching
    const verticesArr = vertices.map(vertex => vertex.id)
    // Check if edges has atleast one edge
    if (edges.length < 1) {
        return new Error(`JSON should have atleast one edge`)
    }
    for (let i = 0; i < edges.length; i++) {
        // Check for the source_id property
        if (!edges[i].hasOwnProperty("source_id")) {
            return new Error(`The edge in position ${i + 1} doesn't have a source_id`)
        }
        // Check for the target_id property
        if (!edges[i].hasOwnProperty("target_id")) {
            return new Error(`The edge in position ${i + 1} doesn't have a target_id`)
        }
        // Check source source_id and vertex id match
        if (!verticesArr.includes(edges[i].source_id)) {
            return new Error(`The source_id in edge in position ${i + 1} doesn't have an associated vertex`)
        }
        // Check source target_id and vertex id match
        if (!verticesArr.includes(edges[i].target_id)) {
            return new Error(`The target_id in edge in position ${i + 1} doesn't have an associated vertex`)
        }
    }
    return null
}

const DataValidator = data => {
    var json = isValidJSON(data)

    if (json === null) {
        var edges = isValidEdges(JSON.parse(data))
        var vertices = isValidVertices(JSON.parse(data))
    } else {
        edges = null
        vertices = null
    }

    return { json, edges, vertices }
}

export default DataValidator;