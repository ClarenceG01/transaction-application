// Get the form and history container elements
const form = document.getElementById("form");
const historyContainer = document.querySelector(".history");

form.addEventListener("submit", function (event) {
  event.preventDefault(); 
  const amountInput = document.getElementById("amount");
  const titleInput = document.getElementById("title");
  const categoryInput = document.querySelector(
    'input[name="category"]:checked'
  );
  const historyBox = document.createElement("div");
  historyBox.classList.add("history-box");

  historyBox.id = titleInput.value;
  const titlePara = document.createElement("p");
  titlePara.classList.add("title");
  titlePara.textContent = titleInput.value;

  const amountPara = document.createElement("p");
  amountPara.classList.add("amount");
  const sign = () => {
    if (categoryInput.value === "Income") {
      return "+";
    } else {
      return "-";
    }
  };
  amountPara.textContent = sign() + amountInput.value;

  historyBox.appendChild(titlePara);
  historyBox.appendChild(amountPara);
  historyContainer.appendChild(historyBox);

  amountInput.value = "";
  titleInput.value = "";
  categoryInput.checked = false;

   // //border-radius
   if (categoryInput.value=== "Income") {
    historyBox.style.borderRightColor = "green";
  } else if (categoryInput.value === "Expense") {
    historyBox.style.borderRightColor = "red";
  }
  
});
