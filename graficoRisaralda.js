window.onload = function graficoRisaralda() {
    var dataPoints = [];
    var chart = new CanvasJS.Chart("chartContainer1", {
        animationEnabled: true,
        theme: "light4",
        title: {
            text: "Desmovilizados en Risaralda"
        },
        axisY: {
            title: "Desmovilizados",
            titleFontSize: 20
        },
        axisX: {
            title: "Año",
            titleFontSize: 20
        },
        data: [{
            type: "line",
            yValueFormatString: "Desmovilizados",
            dataPoints: dataPoints
        }]
    });

    function addData(data) {
        for (var i = 0; i < data.length; i++) {
            dataPoints.push(
                {
                    x: new Date(data[i].anhodesmovilizacion),
                    y: parseInt(data[i].numerodesmovilizados)
                });
            console.log(data[i].numerodesmovilizados);
        }
        chart.render();

    }

    $.getJSON("https://www.datos.gov.co/resource/uea5-is6n.json?departamento=RISARALDA", addData);

}
