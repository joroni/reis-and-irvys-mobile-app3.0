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

/**
 * Implements hook_block_info().
 */
function my_module_block_info() {
  var blocks = {
    my_custom_block:{
      delta:'my_custom_block',
      module:'my_module',
    },
  };
  return blocks;
}

/**
 * Implements hook_block_view().
 */
function my_module_block_view(delta) {
  var content = '';
  if (delta == 'my_custom_block') {
    // Show today's date for the block's content.
    var d = new Date();
    content = '<center>' + d.toDateString() + '</center>';
  }
  return content;
}