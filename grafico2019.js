window.onload = function gra() {
    var dataPoints = [];
    var chart = new CanvasJS.Chart("chartContainer1", {
        animationEnabled: true,
        theme: "light4",
        title: {
            text: "Desmovilizados en 2019"
        },
        axisY: {
            title: "Desmovilizados",
            titleFontSize: 24
        },
        axisX: {
            title: "Departamentos",
            titleFontSize: 24
        },
        
        data: [{
            type: "column",
            xValueFormatString: "Desmovlizados",
            dataPoints: dataPoints
        }]
    });

    function addData(data) {
        for (var i = 0; i < data.length; i++) {
            dataPoints.push(
                {
                    label: data[i].departamento,
                    y: parseInt(data[i].numerodesmovilizados)
                });

            console.log(data[i].departamento);
        }
        chart.render();

    }

    $.getJSON("https://www.datos.gov.co/resource/uea5-is6n.json?anhodesmovilizacion=2019", addData);

}
