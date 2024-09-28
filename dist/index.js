"use strict";
const list = document.querySelector('#list');
const form = document.getElementById('new-task-form');
const input1 = document.querySelector('#new-name');
const input2 = document.querySelector('#new-email');
const input3 = document.querySelector('#new-public-address');
const users = loadTasks();
users.forEach(addListItem);
form === null || form === void 0 ? void 0 : form.addEventListener('submit', e => {
    e.preventDefault();
    if ((input1 === null || input1 === void 0 ? void 0 : input1.value) == '' || (input1 === null || input1 === void 0 ? void 0 : input1.value) == null || (input2 === null || input2 === void 0 ? void 0 : input2.value) == '' || (input2 === null || input2 === void 0 ? void 0 : input2.value) == null || (input3 === null || input3 === void 0 ? void 0 : input3.value) == '' || (input3 === null || input3 === void 0 ? void 0 : input3.value) == null)
        return;
    const newUser = {
        name: input1.value,
        publicAddress: input2.value,
        email: input3.value
    };
    users.push(newUser);
    saveTasks();
    addListItem(newUser);
    input1.value = '';
    input2.value = '';
    input3.value = '';
});
function addListItem(user) {
    const item = document.createElement('li');
    const label = document.createElement('label');
    saveTasks();
    label.append(user.name, ' ', user.email, ' ', user.publicAddress);
    item.append(label);
    list === null || list === void 0 ? void 0 : list.append(item);
}
function saveTasks() {
    localStorage.setItem('USERS', JSON.stringify(users));
}
function loadTasks() {
    const userJSON = localStorage.getItem('USERS');
    if (userJSON == null)
        return [];
    return JSON.parse(userJSON);
}
//# sourceMappingURL=index.js.map