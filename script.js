function minLength() {
    let x = document.getElementById('input-login').value;
    let y = document.getElementById('input-password').value;
    let q = document.getElementById('btn-send').click;
    if (x == '' && q || y == '' && q) {
        alert('Please, fill in the blank input fields!')
    }
    else if (y.length < 8 && q) {
        alert('Min-length of password input should be 8\nPlease, try again!')
    }
    else {
        alert('Data sent successfully :)')
    }
}

function reset() {
    document.getElementById('input-login').value = '';
    document.getElementById('input-password').value = '';   
}
