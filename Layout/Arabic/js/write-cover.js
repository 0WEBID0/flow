var save = document.getElementById('save');
var cover1 = document.getElementById('cover1');
var cover2 = document.getElementById('cover2');
var cover3 = document.getElementById('cover3');
var cover4 = document.getElementById('cover4');
var cover5 = document.getElementById('cover5');
var section1 = document.getElementById('section1');
var section2 = document.getElementById('section2');



function toggleDivscover0() {
    if (cover1.style.display !== 'none') {
        save.style.display = 'flex';
        cover1.style.display = 'none';
        cover2.style.display = 'block';
        cover3.style.display = 'none';
        cover4.style.display = 'none';
        cover5.style.display = 'none';
    }
}

function toggleDivscover1() {
    if (cover1.style.display !== 'block') {
        save.style.display = 'none';
        cover1.style.display = 'block';
        cover2.style.display = 'none';
        cover3.style.display = 'block';
        cover4.style.display = 'block';
        cover5.style.display = 'block';
    }
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




function changeImage(imageNumber) {
    if (imageNumber === 1) {
        document.getElementById('img1').src = '../../images/2024-07-221108010.png';
        document.getElementById('img2').src = '../../images/2024-07-221112391.png';
        document.getElementById('img3').src = '../../images/2024-07-221110422.png';

    } else if (imageNumber === 2) {
        document.getElementById('img1').src = '../../images/2024-07-22110809.png';
        document.getElementById('img2').src = '../../images/2024-07-221112392.png';
        document.getElementById('img3').src = '../../images/2024-07-221110422.png';
    } else if (imageNumber === 3) {
        document.getElementById('img1').src = '../../images/2024-07-22110809.png';
        document.getElementById('img2').src = '../../images/2024-07-221112391.png';
        document.getElementById('img3').src = '../../images/2024-07-221110421.png';
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
