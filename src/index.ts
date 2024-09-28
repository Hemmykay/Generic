type User = {
    name: string,
    publicAddress: string,
    email: string
}

const list = document.querySelector<HTMLUListElement>('#list')
const form = <HTMLFormElement | null> document.getElementById('new-task-form')
const input1 = document.querySelector<HTMLInputElement>('#new-name')
const input2 = document.querySelector<HTMLInputElement>('#new-email')
const input3 = document.querySelector<HTMLInputElement>('#new-public-address')
const users: User[] = loadTasks()
users.forEach(addListItem)
form?.addEventListener('submit', e => {
    e.preventDefault()

    if (input1?.value == '' || input1?.value == null || input2?.value == '' || input2?.value == null || input3?.value == '' || input3?.value == null) return

    const newUser: User = {
        name: input1.value,
        publicAddress: input2.value,
        email: input3.value
    }

    users.push(newUser)
    saveTasks()

    addListItem(newUser);
    input1.value = ''
    input2.value = ''
    input3.value = ''
})

function addListItem(user: User) {
    const item = document.createElement('li')
    const label = document.createElement('label')
    saveTasks()
    label.append(user.name, ' ', user.email, ' ', user.publicAddress)
    item.append(label)
    list?.append(item)
}

function saveTasks() {
    localStorage.setItem('USERS', JSON.stringify(users))
}
function loadTasks(): User[] {
    const userJSON = localStorage.getItem('USERS')
    if (userJSON == null) return []
    return JSON.parse(userJSON)
}