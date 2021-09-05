import objgraph

x, y, z = 1, 2, 3
name = 'John'
obj = dict(
    name=name,
    items=[x, y, z]
)

objgraph.show_refs(obj, filename="graph.png")