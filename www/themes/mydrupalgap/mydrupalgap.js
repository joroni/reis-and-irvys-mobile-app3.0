/**
 * Implements DrupalGap's template_info() hook.
 */
function mydrupalgap_info() {
  try {
    var theme = {
      "name":"mydrupalgap",
      "regions":{
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
        "sub_navigation":{
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
  catch (error) { drupalgap_error(error); }
}

