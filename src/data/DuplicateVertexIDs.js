const DuplicateVertexIDs = {
    "vertices": [{
        "id": "n1",
        "label": "Node 1",
        "type": "node"
    },
    {
        "id": "n1",
        "label": "Node 2",
        "type": "node"
    }
    ],
    "edges": [{
        "id": "e1",
        "label": "edge n1-n2",
        "type": "link",
        "source_id": "n1",
        "target_id": "n2"
    }
    ]
}

export default DuplicateVertexIDs;
