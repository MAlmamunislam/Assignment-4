// get data from local storage
let totalCount = document.getElementById("totalCount");
let interviewCount = document.getElementById("interviewCount");
let getEnterviewSection = document.getElementById("interview-section");
let getRejectedSection = document.getElementById("rejected-section");
let rejectedCount = document.getElementById("rejectedCount");
let totalJob = document.getElementById("totalJob");
let allCards = document.getElementById("allJobs");
// make empty array for interview and rejected jobs
let interviewArray = [];
let rejectedArray = [];
// get totalCount
totalJob.innerText = allCards.children.length;
function updateCounts() {
  totalCount.innerText = allCards.children.length;

  interviewCount.innerText = interviewArray.length;
  rejectedCount.innerText = rejectedArray.length;
}
updateCounts();

// add eventlistener to all cards
allCards.addEventListener("click", function (event) {
  if (event.target.classList.contains("apple-button")) {
    let parentNode = event.target.parentNode;
    let status = parentNode.querySelector(".Not-Applied").innerText;
    let companyName = parentNode.querySelector("h2").innerText;
    let jobTitle = parentNode.querySelector("p").innerText;
    let jobMetaInfo = parentNode.querySelectorAll("p")[1].innerText;
    let jobDescription = parentNode.querySelectorAll("p")[2].innerText;
    parentNode.querySelector(".Not-Applied").innerText = "Applied";
    parentNode.querySelector(".Not-Applied").style.color = "green";
    parentNode.querySelector(".Not-Applied").style.backgroundColor =
      "lightgreen";

    let jobData = {
      companyName,
      jobTitle,
      jobMetaInfo,
      status,
      jobDescription,
    };

    let jobExist = interviewArray.find(
      (job) => job.companyName === jobData.companyName,
    );
    if (!jobExist) {
      interviewArray.push(jobData);
    }
    

    interview();
  } else if (event.target.classList.contains("reject-button")) {
    let parentNode = event.target.parentNode;
    let status = parentNode.querySelector(".Not-Applied").innerText;
    let companyName = parentNode.querySelector("h2").innerText;
    let jobTitle = parentNode.querySelector("p").innerText;
    let jobMetaInfo = parentNode.querySelectorAll("p")[1].innerText;
    let jobDescription = parentNode.querySelectorAll("p")[2].innerText;
    parentNode.querySelector(".Not-Applied").innerText = "Rejected";
    parentNode.querySelector(".Not-Applied").style.color = "red";
    parentNode.querySelector(".Not-Applied").style.backgroundColor = "#FFCCCB";

    let jobData = {
      companyName,
      jobTitle,
      jobMetaInfo,
      status,
      jobDescription,
    };

    let jobExist = rejectedArray.find(
      (job) => job.companyName === jobData.companyName,
    );
    if (!jobExist) {
      rejectedArray.push(jobData);
    }
    

    rejectJob();
  }
});
function interview() {
  getEnterviewSection.innerHTML = "";
  for (let job of interviewArray) {
    console.log(job);
    let div = document.createElement("div");
    div.innerHTML = `
     <div
          class="bg-[#F1F2F4] p-[24px] mx-4 rounded-md  border  flex justify-between  border-green-500 border-l-4   hover:border-[#006e0f] transition-colors duration-300 mb-5"
        >
          <div class="">
            <h2 class="text-[#002C5C] text-[18px] font-bold">
              ${job.companyName}
            </h2>
            <p class="text-[#64748B] text-[16px] mt-[4px] mb-[20px]">
              ${job.jobTitle}      
            </p>
            <p class="text-[#64748B] text-[14px]">
              ${job.jobMetaInfo}
            </p>
            <button
              class="Applied btn w-[113px] h-[36px] bg-[#96F291] text-[14px] text-green-800
               mt-[20px] mb-[8px]"
            >
               Applied     
            </button>
            <p class="text-[#323B49] text-[14px] mb-[20px]">
              ${job.jobDescription}
            </p>
            <button
              class="apple-button btn btn-outline btn-success w-[97px] h-[36px]"
            >
              Apply
            </button>
            <button
              class="reject-button btn btn-outline btn-error w-[97px] h-[36px] ml-[8px]"
            >
              Reject
            </button>
          </div>
          <div>
            <div
              class="delete-btn btn border border-[#6d7075] p-2 rounded-full w-[32px] h-[32px]"
            >
              <i class="fa-solid fa-trash-can"></i>
            </div>
          </div>
        </div>
          
          `;
    getEnterviewSection.appendChild(div);
    updateCounts();
  }
}

function rejectJob() {
  getRejectedSection.innerHTML = "";
  for (let reject of rejectedArray) {
    console.log(reject);
    let div = document.createElement("div");
    div.innerHTML = `
     <div
          class="bg-[#F1F2F4] p-[24px] mx-4 rounded-md  border  flex justify-between  border-red-500 border-l-4   hover:border-red-800 transition-colors duration-300 mb-5"
        >
          <div class="">
            <h2 class="text-[#002C5C] text-[18px] font-bold">
              ${reject.companyName}
            </h2>
            <p class="text-[#64748B] text-[16px] mt-[4px] mb-[20px]">
              ${reject.jobTitle}      
            </p>
            <p class="text-[#64748B] text-[14px]">
              ${reject.jobMetaInfo}
            </p>
            <button
              class="Applied btn w-[113px] h-[36px] bg-[#FFCCCB] text-[14px] text-[#FF004A]
               mt-[20px] mb-[8px]"
            >
               Rejected     
            </button>
            <p class="text-[#323B49] text-[14px] mb-[20px]">
              ${reject.jobDescription}
            </p>
            <button
              class="apple-button btn btn-outline btn-success w-[97px] h-[36px]"
            >
              Apply
            </button>
            <button
              class="reject-button btn btn-outline btn-error w-[97px] h-[36px] ml-[8px]"
            >
              Reject
            </button>
          </div>
          <div>
            <div
              class="delete-btn btn border border-[#6d7075] p-2 rounded-full w-[32px] h-[32px]"
            >
              <i class="fa-solid fa-trash-can"></i>
            </div>
          </div>
        </div>
          
          `;
    getRejectedSection.appendChild(div);
    updateCounts();
  }
}
