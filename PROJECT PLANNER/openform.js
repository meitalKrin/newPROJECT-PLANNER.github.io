function openForm() {
  const form = document.getElementById("fillform");
  const background = document.getElementById("black1");
  form.style.display = "block";
  background.style.display = "block";
  setTimeout(() => {
    form.style.opacity = "1.0";
  }, 1);
}

function closeForm() {
  //form

  var Projectname = document.getElementById("projectName").value;
  var projectPriority = document.getElementById("projectPriority").value;
  var projectDescription = document.getElementById("projectDescription").value;
  var projectStartDate = document.getElementById("projectStartDate").value;
  var projectEndDate = document.getElementById("projectEndDate").value;

  const form = document.getElementById("fillform");
  const background = document.getElementById("black1");
  form.style.display = "none";
  background.style.display = "none";
  setTimeout(() => {
    form.style.opacity = "0";
  }, 1);

  function renderProductList() {
    const projectUL = document.getElementById("projectlist");

    console.log("hi");

    const data = [
      Projectname,
      projectPriority,
      projectDescription,
      projectStartDate,
      projectEndDate,
    ];
    // item creation function
    var li = document.createElement("li");
    li.setAttribute("class", "item");
    li.setAttribute("id", "item2");
    li.setAttribute("draggable", "true");
    projectUL.appendChild(li);

    var deleteButton = document.createElement("BUTTON");
    deleteButton.setAttribute("id", "dlt-delete");
    li.appendChild(deleteButton);

    var compButton = document.createElement("BUTTON");
    compButton.setAttribute("id", "moveBTN");
    li.appendChild(compButton);

    var text_compButton = document.createTextNode("complete");
    compButton.appendChild(text_compButton);

    //li delete button
    deleteButton.addEventListener("click", () => {
      deleteButton.parentElement.remove();
    });

    compButton.addEventListener("click", () => {
      document.getElementById("finished2").appendChild(li);
      compButton.remove();
    });

    //Projectname
    var P_Projectname = document.createElement("p");
    P_Projectname.setAttribute("class", "class_Projectname1");
    li.appendChild(P_Projectname);
    var text_Projectname = document.createTextNode(
      "Projectname:" + Projectname
    );
    P_Projectname.appendChild(text_Projectname);

    //projectPriority
    var P_projectPriority = document.createElement("p");
    P_projectPriority.setAttribute("class", "class_Projectname");
    li.appendChild(P_projectPriority);
    var text_projectPriority = document.createTextNode(
      "projectPriority:" + projectPriority
    );
    P_projectPriority.appendChild(text_projectPriority);

    //projectDescription
    var P_projectDescription = document.createElement("p");
    P_projectDescription.setAttribute("class", "class_Projectname");
    li.appendChild(P_projectDescription);
    var text_projectDescription = document.createTextNode(
      "projectDescription:" + projectDescription
    );
    P_projectDescription.appendChild(text_projectDescription);

    //projectStartDate
    var P_projectStartDate = document.createElement("p");
    P_projectStartDate.setAttribute("class", "class_Projectname");
    li.appendChild(P_projectStartDate);
    var text_projectStartDate = document.createTextNode(
      "projectStartDate:" + projectStartDate
    );
    P_projectStartDate.appendChild(text_projectStartDate);

    //projectEndDate
    var P_projectEndDate = document.createElement("p");
    P_projectEndDate.setAttribute("class", "class_Projectname");
    li.appendChild(P_projectEndDate);
    var text_projectEndDate = document.createTextNode(
      "projectEndDate:" + projectEndDate
    );
    P_projectEndDate.appendChild(text_projectEndDate);
  }

  renderProductList();
}
