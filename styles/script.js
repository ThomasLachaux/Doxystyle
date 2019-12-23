$(function () {
    $('.footer small').html('Généré par Doxygen 1.8.14</br>Stylisé par Thomas de Lachaux');

    $('table.directory').wrap('<div class="table-border"></div>');

    //$('div.header, #nav-path ul').wrapInner('<div class="max-width"></div>');
    $('.fragment .line:first-child').each(function (index) {
        if ($(this).text() == "mermaid") {
            var parent = $(this).parent();
            parent.removeClass('fragment');
            parent.children().first().remove();
            parent.children().contents().unwrap();
            var text = parent.text();

            parent.addClass('mermaid');
            //parent.html('<div class="mermaid">graph TD; A(Start)-->B(Do some stuff); B(Take some rest)-->C(do more);click B "http://www.github.com" "This is a link"</div>');
        }
    });
});