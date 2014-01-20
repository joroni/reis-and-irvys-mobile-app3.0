/**
 * Implements DrupalGap's template_info() hook.
 */
function easystreet3_info() {
  try {
    var theme = {
      "name":"easystreet3",
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

/**
 * Implements hook_menu().
 */
function easystreet3_menu() {
  var items = {

    /* ... other items ... */

    food_order:{
      title:'Order',
      page_callback:'my_module_order_food_page',
      region:{
        name:'header',
        options:{
          attributes:{
            'data-icon':'add',
            'class':'ui-btn-right'
          }
        },
        pages:{
          value:['food'],
          mode:'include',
        }
      }
    },
  };
  return items;
}