const task3Element = document.getElementById('task-3');

function alertHello() {
    alert('Hello, from assignment 2!');
}

function alertName(name) {
    alert(name);
}

function concatenateStrings(first, second, third) {
    result = first + ' ' + second + ' ' + third;
    return result;

}

alertHello();
alertName('Fazil Amirli')
result = concatenateStrings('The course', 'is', 'awesome');
alert(result);

task3Element.addEventListener('click', alertHello);