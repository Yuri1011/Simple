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