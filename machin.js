


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
  document.getElementById("no-job-section").classList.add('hidden')

  
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


  
     if (Id == "interview-button") {
        allCards.classList.add('hidden');
        getEnterviewSection.classList.remove('hidden')
       interview();
       totalJob.innerText=interviewArray.length;
        if( interviewArray.length <= 0){
          document.getElementById("no-job-section").classList.remove('hidden');
         }
       console.log('inetview click')
    } else if (Id == "all-button") {
        allCards.classList.remove('hidden');
        getEnterviewSection.classList.add('hidden');
        totalJob.innerText=allCards.children.length;
           if (allCards.children.length >= 1) {
            document.getElementById("no-job-section").classList.add('hidden');

        }
        console.log('all button click')
    } else if (Id =="rejected-button") {
        allCards.classList.add('hidden');
        getEnterviewSection.classList.remove('hidden');
        totalJob.innerText=rejectedArray.length;
        
         rejectJob();
         if(rejectedArray.length <= 0){
          document.getElementById("no-job-section").classList.remove('hidden');
         }
         console.log('reject')
    }
}
