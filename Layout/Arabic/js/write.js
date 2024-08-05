var basebtn = document.getElementById('basebtn');
var save = document.getElementById('save');

var section1 = document.getElementById('section1');
var section2 = document.getElementById('section2');

var divs = []; // تعريف مصفوفة divs

for (var i = 1; i <= 14; i++) {
    divs.push(document.getElementById('Div' + i));
}

function toggleDivsection0() {
    if (section1.style.display !== 'none') {
        section2.style.display = 'block';
        section1.style.display = 'none';
    }else{
        section1.style.display = 'block';
        section2.style.display = 'none';
    }
}


function toggleDivs0() {
    if (Div1.style.display !== 'none') {
        basebtn.style.display = 'none';
        save.style.display = 'flex';
        Div1.style.display = 'none';
        Div2.style.display = 'block';
        Div3.style.display = 'none';
        Div4.style.display = 'none';
        Div5.style.display = 'none';
        Div6.style.display = 'none';
        Div7.style.display = 'none';
        Div8.style.display = 'none';
        Div9.style.display = 'none';
        Div10.style.display = 'none';
        Div11.style.display = 'none';
        Div12.style.display = 'none';
        Div13.style.display = 'none';
        Div14.style.display = 'none';

    } else {
        basebtn.style.display = 'table';
        save.style.display = 'none';
        Div1.style.display = 'block';
        Div2.style.display = 'none';
        Div3.style.display = 'none';
        Div4.style.display = 'none';
        Div5.style.display = 'none';
        Div6.style.display = 'none';
        Div7.style.display = 'none';
        Div8.style.display = 'none';
        Div9.style.display = 'none';
        Div10.style.display = 'none';
        Div11.style.display = 'none';
        Div12.style.display = 'none';
        Div13.style.display = 'none';
        Div14.style.display = 'none';
    }
}

function toggleDivs1() {
    if (Div1.style.display !== 'none') {
        basebtn.style.display = 'none';
        save.style.display = 'flex';
        Div1.style.display = 'none';
        Div3.style.display = 'block';
    }
}

function toggleDivs2() {
    if (Div1.style.display !== 'none') {
        basebtn.style.display = 'none';
        save.style.display = 'flex';
        Div1.style.display = 'none';
        Div4.style.display = 'block';
    }
}

function toggleDivs3() {
    if (Div1.style.display !== 'none') {
        basebtn.style.display = 'none';
        save.style.display = 'flex';
        Div1.style.display = 'none';
        Div5.style.display = 'block';
    }
}

function toggleDivs4() {
    if (Div1.style.display !== 'none') {
        basebtn.style.display = 'none';
        save.style.display = 'flex';
        Div1.style.display = 'none';
        Div6.style.display = 'block';
    }
}

function toggleDivs5() {
    if (Div1.style.display !== 'none') {
        basebtn.style.display = 'none';
        save.style.display = 'flex';
        Div1.style.display = 'none';
        Div7.style.display = 'block';
    }
}

function toggleDivs6() {
    if (Div1.style.display !== 'none') {
        basebtn.style.display = 'none';
        save.style.display = 'flex';
        Div1.style.display = 'none';
        Div8.style.display = 'block';
    }
}

function toggleDivs7() {
    if (Div1.style.display !== 'none') {
        basebtn.style.display = 'none';
        save.style.display = 'flex';
        Div1.style.display = 'none';
        Div9.style.display = 'block';
    }
}

function toggleDivs8() {
    if (Div1.style.display !== 'none') {
        basebtn.style.display = 'none';
        save.style.display = 'flex';
        Div1.style.display = 'none';
        Div10.style.display = 'block';
    }
}

function toggleDivs9() {
    if (Div1.style.display !== 'none') {
        basebtn.style.display = 'none';
        save.style.display = 'flex';
        Div1.style.display = 'none';
        Div11.style.display = 'block';
    }
}

function toggleDivs10() {
    if (Div1.style.display !== 'none') {
        basebtn.style.display = 'none';
        save.style.display = 'flex';
        Div1.style.display = 'none';
        Div12.style.display = 'block';
    }
}

function toggleDivs11() {
    if (Div1.style.display !== 'none') {
        basebtn.style.display = 'none';
        save.style.display = 'flex';
        Div1.style.display = 'none';
        Div13.style.display = 'block';
    }
}

function toggleDivs12() {
    if (Div1.style.display !== 'none') {
        basebtn.style.display = 'none';
        save.style.display = 'flex';
        Div1.style.display = 'none';
        Div14.style.display = 'block';
    }
}


function changeImage(imageNumber) {
    switch (imageNumber) {
        case 1:
            document.getElementById('img1').src = '../../images/2024-07-221108010.png';
            document.getElementById('img2').src = '../../images/2024-07-221112391.png';
            document.getElementById('img3').src = '../../images/2024-07-221110422.png';
            break;
        case 2:
            document.getElementById('img1').src = '../../images/2024-07-22110809.png';
            document.getElementById('img2').src = '../../images/2024-07-221112392.png';
            document.getElementById('img3').src = '../../images/2024-07-221110422.png';
            break;
        case 3:
            document.getElementById('img1').src = '../../images/2024-07-22110809.png';
            document.getElementById('img2').src = '../../images/2024-07-221112391.png';
            document.getElementById('img3').src = '../../images/2024-07-221110421.png';
            break;
        case 4:
            document.getElementById('img4').src = '../../images/2024-07-22112714.png';
            document.getElementById('img5').src = '../../images/2024-07-22112701.png';
            document.getElementById('img6').src = '../../images/2024-07-22112648.png';
            break;
        case 5:
            document.getElementById('img4').src = '../../images/2024-07-22112713.png';
            document.getElementById('img5').src = '../../images/2024-07-22112702.png';
            document.getElementById('img6').src = '../../images/2024-07-22112648.png';
            break;
        case 6:
            document.getElementById('img4').src = '../../images/2024-07-22112713.png';
            document.getElementById('img5').src = '../../images/2024-07-22112701.png';
            document.getElementById('img6').src = '../../images/2024-07-22112649.png';
            break;
        case 7:
                document.getElementById('img7').src = '../../images/2024-07-22113426.png';
                document.getElementById('img8').src = '../../images/2024-07-22113413.png';
                document.getElementById('img9').src = '../../images/2024-07-22113358.png';
            break;
        case 8:
                document.getElementById('img7').src = '../../images/2024-07-22113425.png';
                document.getElementById('img8').src = '../../images/2024-07-22113414.png';
                document.getElementById('img9').src = '../../images/2024-07-22113358.png';
            break;
        case 9:
                document.getElementById('img7').src = '../../images/2024-07-22113425.png';
                document.getElementById('img8').src = '../../images/2024-07-22113413.png';
                document.getElementById('img9').src = '../../images/2024-07-22113359.png';
            break;
        case 16:
                document.getElementById('img16').src = '../../images/2024-08-03091502.png';
                document.getElementById('img17').src = '../../images/2024-08-03091452.png';
                document.getElementById('img18').src = '../../images/2024-08-03091439.png';
            break;
        case 17:
                document.getElementById('img16').src = '../../images/2024-08-03091501.png';
                document.getElementById('img17').src = '../../images/2024-08-03091453.png';
                document.getElementById('img18').src = '../../images/2024-08-03091439.png';
            break;
        case 18:
                document.getElementById('img16').src = '../../images/2024-08-03091501.png';
                document.getElementById('img17').src = '../../images/2024-08-03091452.png';
                document.getElementById('img18').src = '../../images/2024-08-03091440.png';
            break;
        case 19:
                document.getElementById('img19').src = '../../images/2024-08-03091859.png';
                document.getElementById('img20').src = '../../images/2024-08-03091850.png';
                document.getElementById('img21').src = '../../images/2024-08-03091840.png';
            break;
        case 20:
                document.getElementById('img19').src = '../../images/2024-08-03091858.png';
                document.getElementById('img20').src = '../../images/2024-08-03091851.png';
                document.getElementById('img21').src = '../../images/2024-08-03091840.png';
            break;
        case 21:
                document.getElementById('img19').src = '../../images/2024-08-03091858.png';
                document.getElementById('img20').src = '../../images/2024-08-03091850.png';
                document.getElementById('img21').src = '../../images/2024-08-03091841.png';
            break;
        case 22:
                document.getElementById('img22').src = '../../images/2024-08-03092012.png';
                document.getElementById('img23').src = '../../images/2024-08-03091933.png';
            break;
        case 23:
                document.getElementById('img22').src = '../../images/2024-08-03092011.png';
                document.getElementById('img23').src = '../../images/2024-08-03091934.png';
            break;
        }
    }
