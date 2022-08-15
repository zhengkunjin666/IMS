import BasicLayout from "@/components/BasicLayout.vue";

export default [
  {
    path: "/",
    name: "Root",
    component: BasicLayout,
    redirect: { name: "ArticleIndex" },
    children: [
      {
        path: "/admin/user",
        name: "TheUser",
        component: () =>
          import(/* webpackChunkName: "theuser" */ "@/views/TheUser.vue"),
        meta: {
          nav: {
            icon: "el-icon-user-solid",
            title: "用户管理",
          },
        },
      },
      {
        path: "/admin/classify",
        name: "TheClassify",
        component: () =>
          import(
            /* webpackChunkName: "theclassify" */ "@/views/TheClassify.vue"
          ),
        meta: {
          nav: {
            icon: "el-icon-notebook-2",
            title: "分类管理",
          },
        },
      },
      {
        path: "/admin/article",
        name: "ArticleRoot",
        component: { render: (h) => h("router-view") },
        meta: {
          nav: {
            icon: "el-icon-tickets",
            title: "文章管理",
          },
        },
        children: [
          {
            path: "/admin/article",
            name: "ArticleIndex",
            component: () =>
              import(
                /* webpackChunkName: "article" */ "@/views/ArticleIndex.vue"
              ),
            meta: {
              nav: {
                icon: "el-icon-document-copy",
                title: "文章列表",
              },
              toEdit: true,
            },
          },
          {
            path: "/admin/article/create",
            name: "ArticleCreate",
            component: () =>
              import(
                /* webpackChunkName: "article" */ "@/views/ArticleCreate.vue"
              ),
            meta: {
              nav: {
                icon: "el-icon-document-add",
                title: "新建文章",
              },
            },
          },
          {
            path: "/admin/article/:id/edit",
            name: "ArticleEdit",
            component: () =>
              import(
                /* webpackChunkName: "article" */ "@/views/ArticleEdit.vue"
              ),
          },
        ],
      },
    ],
  },
];
