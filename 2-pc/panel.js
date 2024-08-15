// Az összes dropdown gomb
var dropdownButtons = document.querySelectorAll('.dropdown-btn');

// Minden gombra kattintás esemény figyelő
dropdownButtons.forEach(function(button) {
    button.addEventListener('click', function() {
        // Bezárja az összes nyitott legördülő tartalmat
        var dropdownContents = document.querySelectorAll('.dropdown-content');
        dropdownContents.forEach(function(content) {
            content.classList.remove('show');
        });

        // Megkeresi a következő elemet, ami a legördülő tartalom
        var content = this.nextElementSibling;
        content.classList.toggle('show');
    });
});

// Bezárja a legördülő menüt, ha a felhasználó a menün kívül kattint
window.onclick = function(event) {
    if (!event.target.matches('.dropdown-btn')) {
        var dropdownContents = document.querySelectorAll('.dropdown-content');
        dropdownContents.forEach(function(content) {
            content.classList.remove('show');
        });
    }
}