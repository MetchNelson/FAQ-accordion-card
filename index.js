function show() {
    answer = document.getElementById('answer1')
    answer.style.display = 'none';
    if (answer.style.display === 'block') {
        answer.style.display = 'none';
    } else {
        answer.style.display = 'block';
    }
}