// $('#menu_links').on('click touchstart', menu);
// $('#button_krest').on('click touchstart', buttonKrest);


// function menu() {
//     $('#menu_links').css('display', 'none');
//     $('#menu_a').css('display', 'flex');   
// }

// function buttonKrest() {
//     $('#menu_a').css('display', 'none');
//     $('#menu_links').css('display', 'contents');
// }



button_krest.style.display = 'none';

document.getElementById('menu_links').onclick = function menu (){
    menu_links.style.display = 'none';
    menu_a.style.display = 'flex';
    button_krest.style.display = 'flex';
}
document.getElementById('button_krest').onclick = function kross (){
    menu_a.style.display = 'none';
    menu_links.style.display = 'contents';
    button_krest.style.display = 'none';
} 

document.getElementById('home').onclick = function () {
    document.querySelector('#home');
    home.classList.add('active');
    cont.classList.remove('active');
    abot.classList.remove('active');
    serv.classList.remove('active');
    port.classList.remove('active');
    test.classList.remove('active');
}
document.getElementById('abot').onclick = function () {
    document.querySelector('#abot');
    abot.classList.add('active');
    home.classList.remove('active');
    cont.classList.remove('active');
    serv.classList.remove('active');
    port.classList.remove('active');
    test.classList.remove('active');
}
document.getElementById('serv').onclick = function () {
    document.querySelector('#serv');
    serv.classList.add('active');
    home.classList.remove('active');
    abot.classList.remove('active');
    cont.classList.remove('active');
    port.classList.remove('active');
    test.classList.remove('active');
}
document.getElementById('port').onclick = function () {
    document.querySelector('#port');
    port.classList.add('active');
    home.classList.remove('active');
    abot.classList.remove('active');
    serv.classList.remove('active');
    cont.classList.remove('active');
    test.classList.remove('active');
}
document.getElementById('test').onclick = function () {
    document.querySelector('#test');
    test.classList.add('active');
    home.classList.remove('active');
    abot.classList.remove('active');
    serv.classList.remove('active');
    port.classList.remove('active');
    cont.classList.remove('active');
}
document.getElementById('cont').onclick = function () {
    document.querySelector('#cont');
    cont.classList.add('active');
    home.classList.remove('active');
    abot.classList.remove('active');
    serv.classList.remove('active');
    port.classList.remove('active');
    test.classList.remove('active');
}