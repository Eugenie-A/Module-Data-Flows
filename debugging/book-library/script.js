const myLibrary = [];

// DOM node variables
const titleInput = document.getElementById("title");
const authorInput = document.getElementById("author");
const pagesInput = document.getElementById("pages");
const checkInput = document.getElementById("check");
const tableBody = document.getElementById("table-body");
const deleteMsg = document.getElementById("delete-msg");
const submitBtn = document.getElementById("submit-btn");

window.addEventListener("load", function () {
  submitBtn.addEventListener("click", submit);
  // Populate default books, then draw the table
  populateStorage();
  render();
});

function populateStorage() {
  if (myLibrary.length === 0) {
    // Page counts stored as numbers, not strings
    myLibrary.push(new Book("Robinson Crusoe", "Daniel Defoe", 252, true));
    myLibrary.push(
      new Book("The Old Man and the Sea", "Ernest Hemingway", 127, true)
    );
  }
}

function Book(title, author, pages, check) {
  this.title = title;
  this.author = author;
  this.pages = pages;
  this.check = check;
}

//check the right input from forms and if its ok -> add the new book (object in array)
//via Book function and start render function
function submit() {
  const titleVal = titleInput.value.trim();
  const authorVal = authorInput.value.trim();
  const pagesRaw = pagesInput.value;

  // Reject blank or whitespace-only title/author
  if (titleVal === "" || authorVal === "" || pagesRaw === "") {
    alert("Please fill all fields!");
    return;
  }

  // Normalise page count to a number
  const pagesNum = parseInt(pagesRaw, 10);
  if (isNaN(pagesNum) || pagesNum < 1) {
    alert("Please enter a valid page count.");
    return;
  }

  myLibrary.push(new Book(titleVal, authorVal, pagesNum, checkInput.checked));
  render();
}

function render() {
  // Clear all rows in one operation instead of one by one
  tableBody.innerHTML = "";

  for (let i = 0; i < myLibrary.length; i++) {
    const row = tableBody.insertRow();
    const titleCell = row.insertCell(0);
    const authorCell = row.insertCell(1);
    const pagesCell = row.insertCell(2);
    const wasReadCell = row.insertCell(3);
    const deleteCell = row.insertCell(4);

    titleCell.textContent = myLibrary[i].title;
    authorCell.textContent = myLibrary[i].author;
    pagesCell.textContent = myLibrary[i].pages;

    //add and wait for action for read/unread button
    const changeBtn = document.createElement("button");
    changeBtn.className = "btn btn-success";
    changeBtn.textContent = myLibrary[i].check ? "Yes" : "No";
    wasReadCell.appendChild(changeBtn);

    changeBtn.addEventListener("click", function () {
      myLibrary[i].check = !myLibrary[i].check;
      render();
    });

    //add delete button to every row and render again
    const delBtn = document.createElement("button");
    delBtn.className = "btn btn-warning";
    delBtn.textContent = "Delete";
    deleteCell.appendChild(delBtn);

    delBtn.addEventListener("click", function () {
      const deletedTitle = myLibrary[i].title;
      myLibrary.splice(i, 1);
      render();
      deleteMsg.textContent = `You've deleted: "${deletedTitle}"`;
      deleteMsg.style.display = "block";
      setTimeout(() => {
        deleteMsg.style.display = "none";
      }, 3000);
    });
  }
}
