let button= document.querySelector(".menu-icon");
let dropForm= document.querySelector(".drop-form");



button.addEventListener("click", function() {
    if (dropForm.classList.contains("hidden")) {
        dropForm.classList.remove("hidden");
         button.classList.add("active");
      }
     else{
		dropForm.classList.add("hidden");
		 button.classList.remove("active");
     }
   
   
  });



