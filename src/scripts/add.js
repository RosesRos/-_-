let edit = document.getElementById('addElement');
edit.addEventListener('click', elemtAdd);

let criterion = document.querySelector('.criterion_items');

let divs = [];

function elemtAdd() {
    var newDiv = criterion;
    if (newDiv) {
        newDiv++;
    }

    divs = newDiv;
}