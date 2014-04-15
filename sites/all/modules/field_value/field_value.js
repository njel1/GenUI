(function($) {
    Drupal.field = {
        set: function(nid, field, value, callback) {
            $.post("/field", {
                'nid': nid,
                'field': field,
                'value': value
            }, function(data) {
                if (callback) callback(data);
            });
        },
        get: function(nid, field, callback) {
            $.get("/field", {
                'nid': nid,
                'field': field
            }, function(data) {
                if (callback) callback(data);
            });
        }
    }
})(jQuery);