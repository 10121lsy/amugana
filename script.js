document.getElementById('generate-btn').addEventListener('click', function() {
    var numbers = generateLottoNumbers();
    displayNumbers(numbers);
    showSuccessAlert();
});

function generateLottoNumbers() {
    var numbers = [];

    while (numbers.length < 6) {
        var randomNum = Math.floor(Math.random() * 45) + 1;
        if (!numbers.includes(randomNum)) {
            numbers.push(randomNum);
        }
    }

    numbers.sort(function(a, b) {
        return a - b;
    });

    return numbers;
}

function displayNumbers(numbers) {
    var ul = document.getElementById('lotto-numbers');
    ul.innerHTML = '';

    numbers.forEach(function(number) {
        var li = document.createElement('li');
        li.textContent = number;
        li.className = 'bg-green-500 text-white font-bold rounded-full w-12 h-12 flex items-center justify-center';
        ul.appendChild(li);
    });
}

function showSuccessAlert() {
    Swal.fire({
        icon: 'success',
        title: '로또 번호 추첨 완료!',
        text: '추첨된 번호를 확인하세요.',
        confirmButtonColor: '#4CAF50',
        confirmButtonText: '확인'
    });
}
