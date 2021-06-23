define({ "api": [
  {
    "type": "post",
    "url": "/create_article",
    "title": "Create a new article",
    "name": "createArticle",
    "group": "Article",
    "parameter": {
      "fields": {
        "Body": [
          {
            "group": "Body",
            "type": "Object",
            "optional": false,
            "field": "article",
            "description": "<p>Article object.</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "optional": false,
            "field": "response",
            "description": "<p>Article created.</p>"
          }
        ]
      }
    },
    "error": {
      "fields": {
        "502": [
          {
            "group": "502",
            "optional": false,
            "field": "Error",
            "description": "<p>Error to request database.</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "app/Controllers/Http/ArticlesController.ts",
    "groupTitle": "Article"
  },
  {
    "type": "delete",
    "url": "/delete_article",
    "title": "Delete an article",
    "name": "deleteArticle",
    "group": "Article",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "article_id",
            "description": "<p>Id of article.</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "optional": false,
            "field": "response",
            "description": "<p>Articles deleted.</p>"
          }
        ]
      }
    },
    "error": {
      "fields": {
        "502": [
          {
            "group": "502",
            "optional": false,
            "field": "Error",
            "description": "<p>to request database.</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "app/Controllers/Http/ArticlesController.ts",
    "groupTitle": "Article"
  },
  {
    "type": "put",
    "url": "/edit_article",
    "title": "Edit an article",
    "name": "editArticle",
    "group": "Article",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "article_id",
            "description": "<p>Id of article.</p>"
          }
        ],
        "Body": [
          {
            "group": "Body",
            "type": "Object",
            "optional": false,
            "field": "article",
            "description": "<p>Article object.</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "optional": false,
            "field": "response",
            "description": "<p>Articles edited.</p>"
          }
        ]
      }
    },
    "error": {
      "fields": {
        "502": [
          {
            "group": "502",
            "optional": false,
            "field": "Error",
            "description": "<p>to request database.</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "app/Controllers/Http/ArticlesController.ts",
    "groupTitle": "Article"
  },
  {
    "type": "get",
    "url": "/get_all_article",
    "title": "Request all articles",
    "name": "getAllArticle",
    "group": "Article",
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Object[]",
            "optional": false,
            "field": "list_article",
            "description": "<p>List of articles.</p>"
          }
        ]
      }
    },
    "error": {
      "fields": {
        "502": [
          {
            "group": "502",
            "optional": false,
            "field": "Error",
            "description": "<p>Error to request database.</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "app/Controllers/Http/ArticlesController.ts",
    "groupTitle": "Article"
  },
  {
    "type": "get",
    "url": "/get_articles_by_restorer",
    "title": "Request some articles by restorer",
    "name": "getArticlesByRestorer",
    "group": "Article",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "restorer_id",
            "description": "<p>Id of restorer.</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Object[]",
            "optional": false,
            "field": "list_article",
            "description": "<p>List of articles.</p>"
          }
        ]
      }
    },
    "error": {
      "fields": {
        "502": [
          {
            "group": "502",
            "optional": false,
            "field": "Error",
            "description": "<p>Error to request database.</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "app/Controllers/Http/ArticlesController.ts",
    "groupTitle": "Article"
  },
  {
    "type": "get",
    "url": "/get_articles_by_type",
    "title": "Request some articles by type",
    "name": "getArticlesByType",
    "group": "Article",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "article_type",
            "description": "<p>Type of articles.</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Object[]",
            "optional": false,
            "field": "list_article",
            "description": "<p>List of articles.</p>"
          }
        ]
      }
    },
    "error": {
      "fields": {
        "502": [
          {
            "group": "502",
            "optional": false,
            "field": "Error",
            "description": "<p>Error to request database.</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "app/Controllers/Http/ArticlesController.ts",
    "groupTitle": "Article"
  },
  {
    "type": "get",
    "url": "/get_one_article",
    "title": "Request article information",
    "name": "getOneArticle",
    "group": "Article",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "article_id",
            "description": "<p>Id of article.</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Object",
            "optional": false,
            "field": "article",
            "description": "<p>Article object.</p>"
          }
        ]
      }
    },
    "error": {
      "fields": {
        "502": [
          {
            "group": "502",
            "optional": false,
            "field": "Error",
            "description": "<p>Error to request database.</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "app/Controllers/Http/ArticlesController.ts",
    "groupTitle": "Article"
  },
  {
    "type": "post",
    "url": "/create_menu",
    "title": "Create a new menu",
    "name": "createMenu",
    "group": "Menu",
    "parameter": {
      "fields": {
        "Body": [
          {
            "group": "Body",
            "type": "Object",
            "optional": false,
            "field": "menu",
            "description": "<p>menu object.</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "optional": false,
            "field": "response",
            "description": "<p>Menu created.</p>"
          }
        ]
      }
    },
    "error": {
      "fields": {
        "502": [
          {
            "group": "502",
            "optional": false,
            "field": "Error",
            "description": "<p>Error to request database.</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "app/Controllers/Http/MenusController.ts",
    "groupTitle": "Menu"
  },
  {
    "type": "delete",
    "url": "/delete_menu",
    "title": "Delete a menu",
    "name": "deleteMenu",
    "group": "Menu",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "menu_id",
            "description": "<p>Id of menu.</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "optional": false,
            "field": "response",
            "description": "<p>Menu deleted.</p>"
          }
        ]
      }
    },
    "error": {
      "fields": {
        "502": [
          {
            "group": "502",
            "optional": false,
            "field": "Error",
            "description": "<p>Error to request database.</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "app/Controllers/Http/MenusController.ts",
    "groupTitle": "Menu"
  },
  {
    "type": "put",
    "url": "/edit_menu",
    "title": "Edit a menu",
    "name": "editMenu",
    "group": "Menu",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "menu_id",
            "description": "<p>Id of menu.</p>"
          }
        ],
        "Body": [
          {
            "group": "Body",
            "type": "Object",
            "optional": false,
            "field": "menu",
            "description": "<p>menu object.</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "optional": false,
            "field": "response",
            "description": "<p>Menu edited.</p>"
          }
        ]
      }
    },
    "error": {
      "fields": {
        "502": [
          {
            "group": "502",
            "optional": false,
            "field": "Error",
            "description": "<p>Error to request database.</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "app/Controllers/Http/MenusController.ts",
    "groupTitle": "Menu"
  },
  {
    "type": "get",
    "url": "/get_all_menus",
    "title": "Request information about all menus",
    "name": "getAllMenu",
    "group": "Menu",
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Object[]",
            "optional": false,
            "field": "list_menu",
            "description": "<p>List of menus found.</p>"
          }
        ]
      }
    },
    "error": {
      "fields": {
        "502": [
          {
            "group": "502",
            "optional": false,
            "field": "Error",
            "description": "<p>Error to request database.</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "app/Controllers/Http/MenusController.ts",
    "groupTitle": "Menu"
  },
  {
    "type": "get",
    "url": "/get_menu_by_restorer",
    "title": "Request information about a menu by restorer",
    "name": "getMenusByRestorer",
    "group": "Menu",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "restorer_id",
            "description": "<p>Id of a restorer.</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Object[]",
            "optional": false,
            "field": "list_menu",
            "description": "<p>list of menus found.</p>"
          }
        ]
      }
    },
    "error": {
      "fields": {
        "502": [
          {
            "group": "502",
            "optional": false,
            "field": "Error",
            "description": "<p>Error to request database.</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "app/Controllers/Http/MenusController.ts",
    "groupTitle": "Menu"
  },
  {
    "type": "get",
    "url": "/get_one_menu",
    "title": "Request information about a menu",
    "name": "getOneMenu",
    "group": "Menu",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "menu_id",
            "description": "<p>Id of a menu.</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Object",
            "optional": false,
            "field": "menu",
            "description": "<p>Menu object.</p>"
          }
        ]
      }
    },
    "error": {
      "fields": {
        "502": [
          {
            "group": "502",
            "optional": false,
            "field": "Error",
            "description": "<p>Error to request database.</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "app/Controllers/Http/MenusController.ts",
    "groupTitle": "Menu"
  }
] });
