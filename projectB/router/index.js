export default [
  {
    "path": "/ProjectB",
    "name": "ProjectB",
    "component": () => import ("@/page/ProjectB"),
    "children": [
      {
        "path": "ProjectB-1",
        "name": "ProjectB-1",
        "component": () => import ("@/page/ProjectB-1")
      }
    ]
   },
   {
      "path": "/",
      "redirect": "/ProjectB"
    }
  ]
