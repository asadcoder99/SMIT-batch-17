
    // >
    // Q1 — DOM Manipulation
    // >
    console.log("----- Q1: DOM Manipulation -----");

    // i. Get element of id "main-content"
    var mainContent = document.getElementById("main-content");
    console.log("Main Content Element:", mainContent);

    // ii. Display all child elements of "main-content"
    console.log("Children of main-content:", mainContent.children);

    // iii. Get all elements of class "render" and show their innerHTML
    var renders = document.getElementsByClassName("render");
    console.log("Inner HTML of class 'render':");
    for (var i = 0; i < renders.length; i++) {
      console.log(renders[i].innerHTML);
      document.write(renders[i].innerHTML + "<br>");
    }

    // iv. Fill input values (first-name, last-name, email)
    document.getElementById("first-name").value = "Alex";
    document.getElementById("last-name").value = "Bank";
    document.getElementById("email").value = "alexbank@example.com";

    // >
    // Q2 — DOM Node Properties
    // >
    console.log("----- Q2: DOM Node Properties -----");

    // i. Node type of element having id “form-content”
    var formContent = document.getElementById("form-content");
    console.log("Node type of form-content:", formContent.nodeType);

    // ii. Node type of element having id “lastName” and its child node
    var lastName = document.getElementById("lastName");
    console.log("Node type of lastName:", lastName.nodeType);
    console.log("Node type of lastName's child:", lastName.firstChild.nodeType);

    // iii. Update child node of element having id “lastName”
    lastName.firstChild.nodeValue = "Last Name: Johnson";
    console.log("Updated lastName:", lastName.innerText);

    // iv. Get first and last child of id “main-content”
    console.log("First child of main-content:", mainContent.firstChild);
    console.log("Last child of main-content:", mainContent.lastChild);

    // v. Get next and previous siblings of id “lastName”
    console.log("Next sibling of lastName:", lastName.nextSibling);
    console.log("Previous sibling of lastName:", lastName.previousSibling);

    // vi. Get parent node and node type of element having id “email”
    var email = document.getElementById("email");
    console.log("Parent node of email:", email.parentNode);
    console.log("Node type of email:", email.nodeType);
  