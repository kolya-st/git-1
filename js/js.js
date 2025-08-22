const btn = document.querySelector('.btn');
let title = document.querySelector('.title')

btn.onclick = fn;

function fn() {
    let a = confirm('Do you want to send this messega?')
    if (a) {
        alert("Button send messege")
        title.innerHTML = 'New title GIT'
    } else {
        alert("sorry")
    }

}