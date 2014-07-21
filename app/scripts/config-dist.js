define([], function () {
    "use strict";

    return {
        "global": {
            "name": "Backend",
            "baseApiUrl": "http://192.168.56.10:8080/"
        },
        "entities": {
            "book" : {
                "label": "Book",
                "dashboard": 5,
                "fields": {
                    "id": {
                        "type": "integer",
                        "label": "ID",
                        "edition" : "read-only",
                        "identifier" : true,
                        "list": true,
                        "dashboard": true,
                        "validation": {}
                    },
                    "title": {
                        "type": "text",
                        "label": "Title",
                        "edition" : "editable",
                        "list": true,
                        "dashboard": true,
                        "validation": {
                            "required": true,
                            "max-length" : 150
                        }
                    },
                    "summary": {
                        "type": "text",
                        "label": "Summary",
                        "edition" : "editable",
                        "dashboard" : false,
                        "validation": {
                            "required": true,
                            "max-length" : 500
                        }
                    }
                }
            }
        }
    };
});
