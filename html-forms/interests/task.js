const getInputChecked = document.getElementsByTagName('input');
for (let checked of getInputChecked) {
    checked.addEventListener('click', function (element) {
        let counterChecked = 0;
        if (this.closest('ul.interests_active') == null) {
            for (let input of this.closest('li.interest').getElementsByTagName('input')) {
                if (element.target.checked == false) {
                    input.checked = false;
                } else {
                    input.checked = true;
                }
            }
        } else {
            for (let input of this.closest('ul.interests').getElementsByTagName('input')) {
                if (input.checked == true) {
                    counterChecked++;
                }
            }
            if (counterChecked == this.closest('ul.interests').children.length) {
                this.closest('ul.interests').closest('li.interest').querySelector('input').checked = true;
            } else {
                this.closest('ul.interests').closest('li.interest').querySelector('input').checked = false;
            }
        }
    })
}