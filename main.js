/*function formulario() {
    var depto = document.getElementById("depto").value;
    var anio = document.getElementById("anio").value;
    console.log(depto + " " + anio);
    alert(depto);
    alert(anio)
}*/

function mostrarDatos(dpto) {
    $.ajax({
        url: "https://www.datos.gov.co/resource/uea5-is6n.json?departamento="+dpto,
        type: "GET",
        data: {
            "$limit": 5000,
            "$select": "departamento, anhodesmovilizacion, numerodesmovilizados",
            "$$app_token": "Kw0T35BLBfldUstMMK9v0oBpA"
        }
    }).done(function (data) {
        console.log(data);

        var tbody = $("<tbody />"), tr;
        tbody.append("<th>Departamento</th> <th>Año desmovilizacion</th> <th>Numero desmovilizados</th> ");
        $.each(data, function (_, obj) {
            tr = $("<tr />");
            $.each(obj, function (_, text) {
                tr.append("<td>" + text + "</td>")
            });
            tr.appendTo(tbody);
        });
        tbody.appendTo("#table1"); // only DOM insertion
        return data;
    });
}

function mostrarDatosRisaralda() {
    $.ajax({
        url: "https://www.datos.gov.co/resource/uea5-is6n.json?departamento=RISARALDA",
        type: "GET",
        data: {
            "$limit": 5000,
            "$select": "departamento, anhodesmovilizacion, numerodesmovilizados",
            "$$app_token": "Kw0T35BLBfldUstMMK9v0oBpA"
        }
    }).done(function (data) {
        console.log(data);

        var tbody = $("<tbody />"), tr;
        tbody.append("<th>Departamento</th> <th>Año desmovilizacion</th> <th>Numero desmovilizados</th> ");
        $.each(data, function (_, obj) {
            tr = $("<tr />");
            $.each(obj, function (_, text) {
                tr.append("<td>" + text + "</td>")
            });
            tr.appendTo(tbody);
        });
        tbody.appendTo("#table1"); // only DOM insertion
        return data;
    });
}

function desmovilizados2019() {
    $.ajax({
        url: "https://www.datos.gov.co/resource/uea5-is6n.json?anhodesmovilizacion=2019",
        type: "GET",
        data: {
            "$limit": 5000,
            "$select": "departamento, numerodesmovilizados",
            "$$app_token": "Kw0T35BLBfldUstMMK9v0oBpA"
        }
    }).done(function (data) {
        console.log(data);

        var tbody = $("<tbody />"), tr;
        tbody.append("<th>Departamento</th> <th>Numero desmovilizados</th> ");
        $.each(data, function (_, obj) {
            tr = $("<tr />");
            $.each(obj, function (_, text) {
                tr.append("<td>" + text + "</td>")
            });
            tr.appendTo(tbody);
        });
        tbody.appendTo("#table1"); // only DOM insertion
        return data;
    });
}

function mostrarSumaDesmovilizados() {
    console.log("entro")
    $.ajax({
        url: "https://www.datos.gov.co/resource/uea5-is6n.json?$select=departamento,sum(numerodesmovilizados)&$group=departamento",
        
        type: "GET",
        data: {
            "$limit": 33,
            "$select": "departamento, sum_numerodesmovilizados",
            "$$app_token": "Kw0T35BLBfldUstMMK9v0oBpA"
        }
    
    },console.log(data)).done(function (data) {
        console.log(data);

        var tbody = $("<tbody />"), tr;
        tbody.append("<th>Departamento</th> <th>Total Desmovilzados</th> ");
        $.each(data, function (_, obj) {
            tr = $("<tr />");
            $.each(obj, function (_, text) {
                tr.append("<td>" + text + "</td>")
            });
            tr.appendTo(tbody);
        });
        tbody.appendTo("#table1"); // only DOM insertion
        return data;
    });
}