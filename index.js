const list=[];
const form = document.getElementById("form");
const container = document.querySelector(".history");
const container_box= document.querySelector(".history-box");
form.addEventListener("submit", (e) => {
  e.preventDefault();
  e.stopPropagation();
  const user_amount = document.getElementById("amount").value
  const user_title = document.getElementById("title").value
  const user_category = document.querySelector('input[name="category"]:checked').value
  // console.log(user_amount);
  // console.log(user_title);
  // console.log(user_category);

  const new_entry={title:user_title,amount:user_amount,category:user_category}
  list.push(new_entry)
//   console.log(new_entry);
  
  list.forEach(function (transaction, index){
    const div=document.createElement('div');
    container.append(div);
    div.classList.add('history-box', transaction.category );
    div.setAttribute('data-index', index);

    const titleElement = document.createElement('title');
    titleElement.classList.add('transaction-title');
    titleElement.textContent = transaction-title;

    const amountElement = document.createElement('amount');
    amountElement.classList.add('transaction-amount');
    amountElement.textContent = transaction.amount;

    div.appendChild(titleElement);
    div.appendChild(amountElement);

    container_box.appendChild(container);
  

  })
  // container_box.innerHTML;
  // div.innerHTML=container_box.innerHTML;
  // div.classList.add('history-box')
});
// function func() {
//   addbtn.addEventListener("click", () => {
//     let user_amount = amount.value;
//     console.log(user_amount);
//   });
// }

// const new_title=document.getElementById('title').value;
// const new_amount=document.getElementById('amount').value;
// const new_category=document.querySelector('input[name="category"]:checked')

// add_btn.addEventListener("submit", ()=>{
//   e.preventDefault();
//   console.log(new_title);
//   console.log(new_amount);
//   console.log(new_category);
// })
