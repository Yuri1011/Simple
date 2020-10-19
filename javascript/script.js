$('#menu_links').on('click touchstart', menu);
$('#button_krest').on('click touchstart', buttonKrest);

function menu() {
    $('#menu_links').css('display', 'none');
    $('#menu_a').css('display', 'flex');   
}

function buttonKrest() {
    $('#menu_a').css('display', 'none');
    $('#menu_links').css('display', 'contents');
}

