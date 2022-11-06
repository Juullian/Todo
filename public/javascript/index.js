const whitebutton = document.getElementById('lightmodebutton');

whitebutton.addEventListener('click', () => {
    const themee = window.localStorage.getItem('theme');
    const newtext = document.body.classList.toggle('light');
    if (themee === 'dark') {
        document.getElementById('lightmodebutton').textContent = 'Whitemode';
        window.localStorage.setItem('theme', 'white');
    } else if (themee === 'white') {
        document.getElementById('lightmodebutton').textContent = 'Darkmode';
        window.localStorage.setItem('theme', 'dark');
    }
});

document.addEventListener('DOMContentLoaded', function () {
    const themee = window.localStorage.getItem('theme');
    if (themee === 'dark') {
        document.getElementById('lightmodebutton').textContent = 'Darkmode';
    } else if (themee === 'white') {
        document.getElementById('lightmodebutton').textContent = 'Whitemode';
        const newtext = document.body.classList.toggle('light');
    } else if (!themee) {
        window.localStorage.setItem('theme', 'dark');
    }
});

/*
const ui = {
    confirm: async message => createConfirm(message),
    edit: async () => createEdit(),
    err: async message => createError(message),
};

const createConfirm = message => {
    return new Promise((complete, failed) => {
        $('#confirmMessage').text(message);
        $('#confirmYes').off('click');
        $('#confirmEdit').off('click');
        $('#confirmNo').off('click');
        $('#confirmYes').on('click', () => {
            $('.confirm').hide();
            complete('yes');
        });
        $('#confirmEdit').on('click', () => {
            $('.confirm').hide();
            complete('edit');
        });
        $('#confirmNo').on('click', () => {
            $('.confirm').hide();
            complete('no');
        });
        $('.confirm').show();
    });
};

const createEdit = () => {
    return new Promise((complete, failed) => {
        $('#editMessage');
        $('#editYes').off('click');
        $('#editNo').off('click');
        $('#editYes').on('click', () => {
            $('.edit').hide();
            complete('yes');
        });
        $('#editNo').on('click', () => {
            $('.edit').hide();
            complete('no');
        });
        $('.edit').show();
    });
};

const createError = message => {
    $('#valueErrorMessage').text(message);
    $('#buttonOk').on('click', () => {
        $('.noValueError').hide();
        complete('no');
    });
    $('.noValueError').show();
};

const resetInput = docid => {
    const todoinput = document.getElementById(docid);
    todoinput.value = '';
};

let todocount = 0;

const createAToDo = value => {
    todocount++;
    var tag = document.createElement('li');
    tag.setAttribute('id', `todo${todocount}`);
    var list = document.createTextNode(value);
    tag.appendChild(list);
    var element = document.getElementById('todoList');
    element.appendChild(tag);

    var tag_button_edit = document.createElement('input');
    tag_button_edit.setAttribute('type', 'button');
    tag_button_edit.setAttribute('value', 'edit');
    tag_button_edit.setAttribute('id', `todo${todocount}`);
    tag_button_edit.setAttribute('class', 'edit-button');
    tag_button_edit.setAttribute('onclick', `editForm(${todocount})`);
    var element_button_edit = document.getElementById(`todo${todocount}`);
    element_button_edit.appendChild(tag_button_edit);

    var tag_button_del = document.createElement('input');
    tag_button_del.setAttribute('type', 'button');
    tag_button_del.setAttribute('value', 'delete');
    tag_button_del.setAttribute('id', `todo${todocount}`);
    tag_button_del.setAttribute('class', 'del-button');
    tag_button_del.setAttribute('onclick', `deleteForm(${todocount})`);
    var element_button_del = document.getElementById(`todo${todocount}`);
    element_button_del.appendChild(tag_button_del);
};

const saveForm = async () => {
    const value = document.getElementById('todoinput').value;

    if (!value || !value.replace(/\s/g, '')) {
        console.log('no value');
        const err = await ui.err('Please enter a valid todo!');
    } else if (value) {
        const confirm = await ui.confirm(
            `Are u sure that you want to save: ${value}`
        );
        if (confirm === 'yes') {
            createAToDo(value);
            resetInput('todoinput');
        } else if (confirm === 'edit') {
            // do nothing
        } else if (confirm === 'no') {
            resetInput('todoinput');
        }
    }
};

const deleteForm = async count => {
    const delelement = document.getElementById(`todo${count}`);
    delelement.remove();
};

const editForm = async count => {
    const editbuttonid = document.getElementById('editMessage');
    document.getElementsByClassName;
    const uiedit = await ui.edit();
};

const delAll = async () => {
    //Todo delete all Database entries
    window.location.reload();
};*/
