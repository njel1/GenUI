// ajax return
var my_module_example = function(data) {
    alert(data.msg);
}

    function mmm(nid, field, value) {
        $.ajax({
            type: "POST",
            url: '/setField',
            dataType: 'json',
            data: {
                nid: nid,
                field: field,
                value: value
            },
            success: function(data, textStatus, jqXHR) {
                alert();
            },
            error: function(jqXHR, textStatus, errorThrown) {
                alert(textStatus, errorThrown)
            }
        }).done(function(msg) {
            alert("Data Saved: " + msg);
        });
    };