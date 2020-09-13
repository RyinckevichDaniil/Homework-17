function generateList(array) {
    const $ul = document.createElement('ul');
    
    for (let i = 0; i < array.length; i++) {

        let $li = document.createElement('li');
        $li.textContent = array[i];

        if (Array.isArray(array[i])) {
            $li.textContent = '';
            $li.append(generateList(array[i]));
        };

        $ul.append($li);
    }
    document.body.append($ul);
    return $ul;
};

function table() {
    const $table = document.createElement('table');

    for(let i = 0; i < 10; i++) {
        let $tr = document.createElement('tr');
        $table.append($tr);
        for (let j = 1; j <= 10; j++) {
            let $td = document.createElement('td');
            $td.textContent = i * 10 + j;
            $tr.append($td);
        };
    };
    document.body.append($table);
};

generateList([1, [1, 2, 3], 2, [1, 2, 3], 3,[1, 2, 3]]);
table();