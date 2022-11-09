var alumnos = [

    {

        nombre: 'Juan Gomez',

        nota: 7

    }, {

        nombre: 'Pedro Rodriguez',

        nota: 4

    }, {

        nombre: 'Roxana García',

        nota: 8

    }, {

        nombre: 'Luciano Lopez',

        nota: 5

    }, {

        nombre: 'Fernanda Gimenez',

        nota: 6

    }, {

        nombre: 'Florencia Martinez',

        nota: 10

    }, {

        nombre: 'Raul Sanchez',

        nota: 7

    }, {

        nombre: 'Sandra Figueroa',

        nota: 8

    }

];

var approved = [];
var disapproved = [];

for (i = 0; i < alumnos.length; i++) {
    if (alumnos[i].nota >= 7) {
        approved.push(alumnos[i])
    }
}

for (i = 0; i < alumnos.length; i++) {
    if (alumnos[i].nota < 7) {
        disapproved.push(alumnos[i])
    }
}

for (i = 0; i < approved.length; i++) {
    var myobj = approved[i];
    for (var property in myobj) {
        console.log(property + ": " + myobj[property])        
        document.getElementById("approved").innerHTML += property + ": " + myobj[property] + "</br>";
    }
}

for (i = 0; i < disapproved.length; i++) {
    var myobj2 = disapproved[i];
    for (var property2 in myobj2) {
        console.log(property2 + ": " + myobj2[property2])        
        document.getElementById("disapproved").innerHTML += property2 + ": " + myobj2[property2] + "</br>";
    }
}