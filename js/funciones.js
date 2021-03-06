$(document).ready(function () {

            $("#agregaFam").click(function () {
                if( ($("#panelFam .form-group").length+1) > 12) {
                    alert("Solo se pueden usar hasta 12 familias");
                    return false;
                }
                var id = ($('#panelFam .form-group').length + 1).toString();
                var texto = " <!--Elemento de 1 secuencia-->"+
                  "<div class=\"form-group\">"+
                   "<div class=\"col-xs-12\">"+
                          "<label>Drosophila Melanogaster"+id+"</label>"+
                          "<input type=\"text\" class=\"form-control\" id=\"lblSeq"+id+"\" name=\"lblSeq"+id+"\" placeholder=\"Secuencia\">"+
                          "<div style=\"position:relative;\">"+
                            "<a class='btn btn-primary' href='javascript:;'>Desde archivo"+
                              "<input type=\"file\" style='position:absolute;z-index:2;top:0;left:0;filter: alpha(opacity=0);-ms-filter:\"progid:DXImageTransform.Microsoft.Alpha(Opacity=0)\";opacity:0;background-color:transparent;color:transparent;' name=\"file_source"+id+"\" id=\"file_source"+id+"\" size=\"300\""+ 
                              "onchange=\""+
                                "$('#upload-file-info"+id+"').html($(this).val());"+
                                "var file = document.getElementById('file_source"+id+"');"+
                                   "if (!file) {   alert('No se encontró el archivo de entrada');   }"+
                                    "else if (!file.files) {alert('El navegador no soporta la lectura de archivos. Por favor ingrese manualmente'); }"+
                                    "else if (!file.files[0]) {alert('No ha escogido ningun archivo aun'); } "+             
                                    "else{"+
                                    "input = file.files[0];"+
                                  "var reader = new FileReader();"+
                                  "reader.readAsText(input,'UTF-8');"+
                                  "reader.onload = (function (evt){ $('#lblSeq"+id+"').val(evt.target.result); });"+
                                  "reader.onerror = (function (evt){$('#lblSeq"+id+"').val('Error al leer el archivo'); });"+
                                    "}"+
                              "\">"+
                            "</a>"+
                            "&nbsp;"+
                            "<span class='label label-info' id=\"upload-file-info"+id+"\"></span>"+
                          "</div>"+                    
                    "</div>"+
                  "</div> <!--Final de elemento de secuencia--> ";
                              
                $('#panelFam').append(texto);
            });

        });
(function($) {
    $.fn.checkFileType = function(options) {
        var defaults = {
            allowedExtensions: [],
            success: function() {},
            error: function() {}
        };
        options = $.extend(defaults, options);

        return this.each(function() {

            $(this).on('change', function() {
                var value = $(this).val(),
                    file = value.toLowerCase(),
                    extension = file.substring(file.lastIndexOf('.') + 1);

                if ($.inArray(extension, options.allowedExtensions) == -1) {
                    options.error();
                    $(this).focus();
                } else {
                    options.success();

                }

            });

        });
    };

})(jQuery);

$(function() {
    $('#file_source1').checkFileType({
        allowedExtensions: ['txt'],
        success: function() {
            alert('Exitoso');
        },
        error: function() {
            alert('Error');
        }
    });

});
