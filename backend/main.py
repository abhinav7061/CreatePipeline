from fastapi import FastAPI
from pydantic import BaseModel
from typing import List
from fastapi.middleware.cors import CORSMiddleware

app = FastAPI() 

origins = [
    "http://localhost:3000",  # Allow frontend to access backend
    "https://yourfrontenddomain.com",  # Add your production frontend if necessary
]

# Add CORSMiddleware to the app
app.add_middleware(
    CORSMiddleware,
    allow_origins=origins,  # Allows CORS from the specified origins
    allow_credentials=True,
    allow_methods=["*"],  # Allows all HTTP methods (GET, POST, etc.)
    allow_headers=["*"],  # Allows all headers
)

class Node(BaseModel):
    id: str

class Edge(BaseModel):
    source: str
    target: str

class PipelineData(BaseModel):
    nodes: List[Node]
    edges: List[Edge]

@app.post("/pipelines/parse")
def parse_pipeline(pipeline: PipelineData):
    # Count nodes and edges
    num_nodes = len(pipeline.nodes)
    num_edges = len(pipeline.edges)

    # Check if the pipeline forms a Directed Acyclic Graph (DAG)
    graph = {node.id: [] for node in pipeline.nodes}
    for edge in pipeline.edges:
        graph[edge.source].append(edge.target)

    def is_dag(graph):
        visited = set()
        rec_stack = set()

        def dfs(node):
            if node in rec_stack:
                return False
            if node in visited:
                return True

            visited.add(node)
            rec_stack.add(node)
            for neighbor in graph[node]:
                if not dfs(neighbor):
                    return False
            rec_stack.remove(node)
            return True

        return all(dfs(node) for node in graph if node not in visited)

    is_dag_result = is_dag(graph)

    return {
        "num_nodes": num_nodes,
        "num_edges": num_edges,
        "is_dag": is_dag_result,
    }