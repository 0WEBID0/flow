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

function togglerow1() {
    var formclient1 = document.getElementById('formclient1');
    if (formclient1.classList.contains('hidden')) {
        formclient1.classList.remove('hidden');
    }else {
        formclient1.classList.add('hidden');
    }
}

function togglecode1() {
    var formcode1 = document.getElementById('formcode1');
    var formcode2 = document.getElementById('formcode2');
    if (formcode1.classList.contains('hidden')) {
        formcode1.classList.remove('hidden');
        formcode2.classList.add('hidden');
    }else {
        formcode1.classList.add('hidden');
    }
}

function togglecode2() {
    var formcode1 = document.getElementById('formcode1');
    var formcode2 = document.getElementById('formcode2');
    if (formcode2.classList.contains('hidden')) {
        formcode2.classList.remove('hidden');
        formcode1.classList.add('hidden');
    }else {
        formcode2.classList.add('hidden');
    }
}

function togglecodewrite1() {
    var codewrite1 = document.getElementById('codewrite1');
    if (codewrite1.classList.contains('hidden')) {
        codewrite1.classList.remove('hidden');
    }else {
        codewrite1.classList.add('hidden');
    }
}