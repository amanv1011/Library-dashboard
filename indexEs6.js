console.log(" nhi ho rha pta nhi ku");

class book{
    constructor(name, auther, type) {
        this.name = name;
        this.type = type;
        this.auther = auther;
    }
}
class Display{
    add(book1) {
        console.log("Adding to UI");
        let tableBody = document.getElementById("tableBody");
        let uiString = `
                          <tr>
                          <td>${book1.name}</td>
                          <td>${book1.auther}</td>
                          <td>${book1.type}</td>
                        </tr> `;
        tableBody.innerHTML += uiString;
      }

    clear() {
        let libraryForm = document.getElementById("libraryForm");
        libraryForm.reset();
      }

    valid(book1) {
    if (book1.name.length < 2 || book1.auther.length < 2) {
        return false;
    } else {
        return true;
    }
    }

    show(type, displayMsg) {
        let messege = document.getElementById("messege");
        messege.innerHTML = `<div class="alert alert-${type} alert-dismissible fade show" role="alert">
                                          Messege :    <strong>${displayMsg}</strong>
                              <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
                          </div>`;
          setTimeout(function() {
              messege.innerHTML = ''
          }, 3000);
      }
}


let libraryForm = document.getElementById("libraryForm");
libraryForm.addEventListener("submit", libraryFormSubmit);

function libraryFormSubmit(e) {
  e.preventDefault();
  console.log("you have Submitter the form");
  let name = document.getElementById("bookName").value;
  let auther = document.getElementById("auther").value;
  // fiction programming science
  let fiction = document.getElementById("fiction");
  let programming = document.getElementById("programming");
  let science = document.getElementById("science");
  let type;
  if (fiction.checked) {
    type = fiction.value;
  } else if (programming.checked) {
    type = programming.value;
  } else if (science.checked) {
    type = science.value;
  }

  let book1 = new book(name, auther, type);
  console.log(book1);

  let display = new Display();
  if (display.valid(book1)) {
    display.add(book1);
    display.clear();
    display.show("success", " Your book has been successfully added");
  } else {
    display.show("danger", " Sorry you can't add this book / book is invalid..!");
  }
}