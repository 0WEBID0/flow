// scripts.js
function toggleSection(sectionNumber) {
    for (let i = 1; i <= 6; i++) {
        let section = document.getElementById(`section${i}`);
        if (i === sectionNumber) {
            section.classList.remove('hidden');
        } else {
            section.classList.add('hidden');
        }
    }
}

function details(detailsNumber) {
    var form1 = document.getElementById('form1');
    var form2 = document.getElementById('form2');
    var form3 = document.getElementById('form3');
    var form4 = document.getElementById('form4');
    for (let i = 1; i <= 4; i++) {
        let details = document.getElementById(`details${i}`);
        if (i === detailsNumber) {
            details.classList.remove('hidden');
        } else {
            details.classList.add('hidden');
            form1.classList.add('hidden');
            form2.classList.add('hidden');
            form3.classList.add('hidden');
            form4.classList.add('hidden');
        }
    }
}

function form1() {
    var form1 = document.getElementById('form1');
    if (form1.classList.contains('hidden')) {
        form1.classList.remove('hidden');
    }else {
        form1.classList.add('hidden');
    }
}

function form2() {
    var form2 = document.getElementById('form2');
    if (form2.classList.contains('hidden')) {
        form2.classList.remove('hidden');
    }else {
        form2.classList.add('hidden');
    }
}

function form3() {
    var form3 = document.getElementById('form3');
    if (form3.classList.contains('hidden')) {
        form3.classList.remove('hidden');
    }else {
        form3.classList.add('hidden');
    }
}

function form4() {
    var form4 = document.getElementById('form4');
    if (form4.classList.contains('hidden')) {
        form4.classList.remove('hidden');
    }else {
        form4.classList.add('hidden');
    }
}