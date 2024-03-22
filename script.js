document.addEventListener("DOMContentLoaded", function() {
  const numberOfPeopleInput = document.getElementById("numberOfPeople");
  const numberOfPeopleText = document.getElementById("numberOfPeopleText");
  const numberOfBreadsText = document.getElementById("numberOfBreads");

  const calculateBreadsNeeded = (value) => {
    let breadsNeeded;
    if (value === 0) {
      breadsNeeded = 1; // Minimum one bread needed
    } else {
      breadsNeeded = value / 10 * 3; // Calculate based on formula
      const remainder = breadsNeeded % 1; // Get decimal part
      if (value > 10) {
        if (remainder > 0.4) {
          breadsNeeded = Math.ceil(breadsNeeded); // Round up if decimal part > 0.4
        }
        else {
          breadsNeeded = Math.floor(breadsNeeded); // Round down otherwise
        }
      } else {
        if (remainder > 0.2) {
          breadsNeeded = Math.ceil(breadsNeeded); // Round up if decimal part > 0.2
        }
        else {
          breadsNeeded = Math.floor(breadsNeeded); // Round down otherwise
        }
      }
    }
    numberOfBreadsText.textContent = `Du bør kjøpe ${breadsNeeded} brød.`;
  };

  numberOfPeopleInput.addEventListener("input", function() {
    numberOfPeopleText.textContent = this.value;
    calculateBreadsNeeded(parseInt(this.value));
  });

  // Initial calculation with default value
  calculateBreadsNeeded(parseInt(numberOfPeopleInput.value));
});
