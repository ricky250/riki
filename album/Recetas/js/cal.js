$(document).ready(function () {
    $("#botonLimpiar").click(function () {
        $.ajax({
            type: 'post',
            url: 'VentasServlet',
            data: { accion: "Limpiar_Venta" },
            success: function () {
                $("#detalleVenta").load("ventas/detalle.jsp");
            }
        });
    });
    $("#botonVender").click(function () {
        $.ajax({
            type: 'post',
            url: 'VentasServlet',
            data: { accion: "Realizar_Venta" },
            success: function () {
                $("#detalleVenta").load("ventas/detalle.jsp");
            }
        });
    });
});


function calcula() {
    var per = 0;
    $(".inPersonas").each(function () {
        alert("hola");
        if (isNaN(parseInt($(this).val()))) {
            per = 0;
        } else {
            per = parseInt($(this).val());
        }


    });
    console.log(per);
    document.getElementById('idSpan').innerHTML = per;
}