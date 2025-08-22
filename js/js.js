const btn = document.querySelector('.btn');

btn.onclick = fn;

function fn() {
    let a = confirm('Do you want to send this messega?')
    if (a) {
        alert("Button send messege")
    } else {
        alert("sorry")
    }

}