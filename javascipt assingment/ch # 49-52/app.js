
    // 
    // Q1 — Signup Form Logic
    // 
    document.getElementById("signupForm").addEventListener("submit", function(e){
      e.preventDefault();
      var name = document.getElementById("name").value;
      var email = document.getElementById("email").value;
      var password = document.getElementById("password").value;

      document.getElementById("result").innerHTML = `
        <p><b>Name:</b> ${name}</p>
        <p><b>Email:</b> ${email}</p>
        <p><b>Password:</b> ${password}</p>`;
    });

    // >
    // Q2 — Read More / Read Less Logic
    // >
    document.getElementById("btn").onclick = function(){
      var moreText = document.getElementById("more");
      var btn = document.getElementById("btn");

      if(moreText.style.display === "none"){
        moreText.style.display = "inline";
        btn.innerText = "Read Less";
      } else {
        moreText.style.display = "none";
        btn.innerText = "Read More";
      }
    };

    // >
    // Q3 — Student Table Logic
    // >
    const sForm = document.getElementById("studentForm");
    const table = document.getElementById("studentTable");
    var editRow = null;

    sForm.addEventListener("submit", function(e){
      e.preventDefault();
      var name = document.getElementById("sname").value;
      var age = document.getElementById("sage").value;
      var grade = document.getElementById("sgrade").value;

      var row = table.insertRow();
      row.innerHTML = `
        <td>${name}</td>
        <td>${age}</td>
        <td>${grade}</td>
        <td>
          <button onclick="editRowFunc(this)">Edit</button>
          <button onclick="devareRowFunc(this)">Devare</button>
        </td>`;

      sForm.reset();
    });

    function devareRowFunc(btn){
      btn.parentNode.parentNode.remove();
    }

    function editRowFunc(btn){
      editRow = btn.parentNode.parentNode;
      document.getElementById("editName").value = editRow.cells[0].innerHTML;
      document.getElementById("editAge").value = editRow.cells[1].innerHTML;
      document.getElementById("editGrade").value = editRow.cells[2].innerHTML;
      document.getElementById("editForm").style.display = "block";
    }

    document.getElementById("saveBtn").onclick = function(){
      editRow.cells[0].innerHTML = document.getElementById("editName").value;
      editRow.cells[1].innerHTML = document.getElementById("editAge").value;
      editRow.cells[2].innerHTML = document.getElementById("editGrade").value;
      document.getElementById("editForm").style.display = "none";
    };
 