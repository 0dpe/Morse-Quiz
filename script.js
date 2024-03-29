const restartButton = document.querySelector("#btn-restart");

const list = document.querySelector('#morse-list');
const shuffledItems = Array.from(list.children).sort(() => Math.random() - 0.5);

let firstInput = false;

shuffledItems.forEach((item, index) => {
    const currentItem = item.querySelector('input');
    const nextItem = shuffledItems[index + 1]?.querySelector('input');

    currentItem.addEventListener('input', () => {
        if (!firstInput) {
            startStopwatch();
            firstInput = true;
        }
        if (currentItem.value.toUpperCase() === currentItem.dataset.answer) {
            currentItem.readOnly = true;
            currentItem.value += ` ${currentItem.placeholder}`;
            if (nextItem) {
                nextItem.focus();
            } else {
                stopStopwatch();
            }
        } else {
            currentItem.value = '';
        }
    });

    list.appendChild(item);
});

document.addEventListener('keydown', (event) => {
    if (event.key === 'Enter') {
        alert("The button was clicked!");
    }
});

restartButton.addEventListener("click", function () {
    alert("The button was clicked!");
});





const startStopwatch = () => {
    stopwatch.classList.add('running');
    startTime = Date.now();
    timer = setInterval(updateStopwatch, 10);
}

const stopStopwatch = () => {
    stopwatch.classList.remove('running');
    clearInterval(timer);
}

const updateStopwatch = () => {
    const currentTime = Date.now();
    const elapsedTime = currentTime - startTime;

    const minutes = Math.floor(elapsedTime / 60000);
    const seconds = Math.floor((elapsedTime % 60000) / 1000);
    const milliseconds = Math.floor((elapsedTime % 1000) / 10);

    const formattedTime = `${String(minutes).padStart(2, '0')}:${String(seconds).padStart(2, '0')}.${String(milliseconds).padStart(2, '0')}`;

    document.querySelector('#stopwatch').textContent = formattedTime;
}
