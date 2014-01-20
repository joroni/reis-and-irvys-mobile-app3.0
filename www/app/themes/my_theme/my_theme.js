/**
 * Implements DrupalGap's template_info() hook.
 */
function my_theme_info() {
  var theme = {
    "name":"my_theme",
    "regions":{
      "top":{
        "attributes":{
          "data-role":"content",
        }
      },
      "header":{
        "attributes":{
          "data-role":"header"
        }
      },
      "navigation":{
        "attributes":{
          "data-role":"navbar"
        }
      },
      "content":{
        "attributes":{
          "data-role":"content"
        }
      },
      "footer":{
        "attributes":{
          "data-role":"footer"
        }
      }
    }
  };
  return theme;
}