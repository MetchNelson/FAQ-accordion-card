/* This is the function for the buttton
that shows and hides the answers to the question and chnages the quetsion color. 
I had to make one for each button because everytime 
I put them all in a class the code would brake. Can
anyone help? */

function show() {
    const answer = document.getElementById('answer1');
    if (answer.style.display === 'block') {
        answer.style.display = 'none';
    } else {
        answer.style.display = 'block';
    }
    const question = document.getElementById('q1')
    if (question.style.color === 'black') {
        question.style.color = 'grey';
    } else {
        question.style.color = 'black';
    }
}

function show2() {
    const answer = document.getElementById('secondQ');
    if (answer.style.display === 'block') {
        answer.style.display = 'none';
    } else {
        answer.style.display = 'block';
    }
    const question = document.getElementById('q2')
    if (question.style.color === 'black') {
        question.style.color = 'grey';
    } else {
        question.style.color = 'black';
    }
}

function show3() {
    const answer = document.getElementById('thirdQ');
    if (answer.style.display === 'block') {
        answer.style.display = 'none';
    } else {
        answer.style.display = 'block';
    }
    const question = document.getElementById('q3')
    if (question.style.color === 'black') {
        question.style.color = 'grey';
    } else {
        question.style.color = 'black';
    }
}

function show4() {
    const answer = document.getElementById('fourthQ');
    if (answer.style.display === 'block') {
        answer.style.display = 'none';
    } else {
        answer.style.display = 'block';
    }
    const question = document.getElementById('q4')
    if (question.style.color === 'black') {
        question.style.color = 'grey';
    } else {
        question.style.color = 'black';
    }
}

function show5() {
    const answer = document.getElementById('fifthQ');
    if (answer.style.display === 'block') {
        answer.style.display = 'none';
    } else {
        answer.style.display = 'block';
    }
    const question = document.getElementById('q5')
    if (question.style.color === 'black') {
        question.style.color = 'grey';
    } else {
        question.style.color = 'black';
    }
}
