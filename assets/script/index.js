const text = document.getElementById('text');
const btn = document.querySelector('.btn');
const list = document.querySelector('.list');

function addTask() {
    const newTask = document.createElement('LI');
    const userText = text.value;
    newTask.textContent = userText;
    list.append(newTask);
    text.value = '';
}
addTask()

function checkTask () {

        list.addEventListener('click', function(evt) {
            if (evt.target.tagName === 'LI') {
                evt.target.classList.toggle('list-decor'); 
            }
        });
} checkTask()

