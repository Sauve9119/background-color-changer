const randomcolor = function () {
      const hex = '0123456789ABCDEF';
      let color = '#';
      for (let i = 0; i < 6; i++) {
        color += hex[Math.floor(Math.random() * 16)];
      }
      return color;
    };

    let intervalId;

    const startButton = document.querySelector('#start');
    const stopButton = document.querySelector('#stop');

    const startChangingColor = function () {
      if (!intervalId) {
        intervalId = setInterval(changeBgColor, 1000);
        startButton.disabled = true;
      }

      function changeBgColor() {
        document.body.style.backgroundColor = randomcolor();
      }
    };

    const stopChangingColor = function () {
      clearInterval(intervalId);
      intervalId = null;
      startButton.disabled = false;
    };

    startButton.addEventListener('click', startChangingColor);
    stopButton.addEventListener('click', stopChangingColor);

