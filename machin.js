function toggleJobDetails(Id) {
  // this single part help by gemini ----start-----
  let allButtons = document.querySelectorAll(".Menu-btn");
  allButtons.forEach((element) => {
    element.classList.remove("bg-blue-600");
    element.classList.remove("text-white");
    element.style.backgroundColor = "";
    element.style.color = "";
  });
  // ---- end

  //     get and style for button
  const allButton = document.getElementById(Id);
  let buttonText = allButton.innerText;
  // console.log(buttonText);
  if (buttonText === "All") {
    allButton.style.backgroundColor = "blue";
    allButton.style.color = "white";
  } else if (buttonText === "Interview") {
    allButton.classList.remove("bg-blue-600");
    allButton.style.backgroundColor = "green";
    allButton.style.color = "white";
  } else {
    allButton.style.backgroundColor = "red";
    allButton.style.color = "white";
  }
  if (Id === "interview-button") {
    document.getElementById("interview-section").classList.remove("hidden");
    document.getElementById("allJobs").classList.add("hidden");
    document.getElementById("rejected-section").classList.add("hidden");
    totalJob.innerText = interviewArray.length;
  } else if (Id === "all-button") {
 
     document.getElementById("interview-section").classList.add("hidden");
     document.getElementById("rejected-section").classList.add("hidden");

     document.getElementById("allJobs").classList.remove("hidden");
     totalJob.innerText = allCards.children.length;
}else if (Id === "rejected-button") {
    document.getElementById("rejected-section").classList.remove("hidden");
    document.getElementById("interview-section").classList.add("hidden");
    document.getElementById("allJobs").classList.add("hidden");
    totalJob.innerText = rejectedArray.length;
  }
}
