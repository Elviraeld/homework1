let count = 0;
        let counter = document.querySelector('#counter');

        function updateCounter() {
            counter.textContent = count;
        }

        function increase() {
            count++;
            updateCounter();
        }

        function decrease() {
            count--;
            updateCounter();
        }

        function increaseBy5() {
            count += 5;
            updateCounter();
        }

        function decreaseBy5() {
            count -= 5;
            updateCounter();
        }

        let btn = document.querySelector('.changeColor')
        function getRandomColor() {
            let r1 = Math.floor(Math.random() * 255);
            let r2 = Math.floor(Math.random() * 255);
            let r3 = Math.floor(Math.random() * 255);
            return `rgb(${r1},${r2},${r3})`
        }
        function changeColor() {
            counter.style.color = getRandomColor();
        }


        function sizeIncrease() {
            const currentSize = parseInt(window.getComputedStyle(counter).fontSize);
            counter.style.fontSize = (currentSize + 1) + 'px';
        }

        function sizeDecrease() {
            const currentSize = parseInt(window.getComputedStyle(counter).fontSize);
            counter.style.fontSize = (currentSize - 1) + 'px';
        }