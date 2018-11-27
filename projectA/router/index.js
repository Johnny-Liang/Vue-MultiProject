export default [
  {
    "path": "/ProjectA",
    "name": "ProjectA",
    "component": () => import ("@/page/ProjectA"),
    "children": [
      {
        "path": "ProjectA-1",
        "name": "ProjectA-1",
        "component": () => import ("@/page/ProjectA-1")
      }
    ]
  }
]
