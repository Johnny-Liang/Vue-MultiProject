export default [
  {
    "path": "/ProjectA",
    "name": "ProjectA",
    "component": (resolve) => require(['@/page/PageView.vue'], resolve),
    "props": {
      "pageName": 'ProjectA'
    },
    "children": [
      {
        "path": "ProjectA-1",
        "name": "ProjectA-1",
        "component": (resolve) => require(['@/page/PageView.vue'], resolve),
        "props": {
          "pageName": 'ProjectA0ProjectA01'
        },
      }
    ]
  },
  {
    "path": "/ProjectB",
    "name": "ProjectB",
    "component": (resolve) => require(['@/page/PageView.vue'], resolve),
    "props": {
      "pageName": 'ProjectB'
    },
    "children": [
      {
        "path": "ProjectB-1",
        "name": "ProjectB-1",
        "component": (resolve) => require(['@/page/PageView.vue'], resolve),
        "props": {
          "pageName": 'ProjectB0ProjectB01'
        },
      }
    ]
  },
  {
    "path": "/ProjectC",
    "name": "ProjectC",
    "component": (resolve) => require(['@/page/PageView.vue'], resolve),
    "props": {
      "pageName": 'ProjectC'
    },
    "children": [
      {
        "path": "ProjectC-1",
        "name": "ProjectC-1",
        "component": (resolve) => require(['@/page/PageView.vue'], resolve),
        "props": {
          "pageName": 'ProjectC0ProjectC01'
        },
      }
    ]
  }
]
