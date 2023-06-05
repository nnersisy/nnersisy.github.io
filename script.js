function showExperience2() {
    var element1 = document.getElementById("experience1");
    var element2 = document.getElementById("experience2");
    var element3 = document.getElementById("experience3");

    if(element2.style.display === 'none'){
        element2.style.display = 'block';
        element1.style.display = 'none';
        element3.style.display = 'none';
    }
}

function showExperience3() {
    var element1 = document.getElementById("experience1");
    var element2 = document.getElementById("experience2");
    var element3 = document.getElementById("experience3");
    
    if(element3.style.display === 'none'){
        element3.style.display = 'block';
        element1.style.display = 'none';
        element2.style.display = 'none';
    }
}

function showExperience1() {
    var element1 = document.getElementById("experience1");
    var element2 = document.getElementById("experience2");
    var element3 = document.getElementById("experience3");

    if(element1.style.display === 'none'){
        element1.style.display = 'block';
        element2.style.display = 'none';
        element3.style.display = 'none';
    }
}