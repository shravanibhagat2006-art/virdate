function showSection(sectionId) {
  let sections = document.querySelectorAll('.section');
  sections.forEach(section => {
    section.classList.remove('active');
  });

  document.getElementById(sectionId).classList.add('active');
}

function finalMessage(choice) {
  document.getElementById('selectedOption').innerText =
    "Tonight we’re doing: " + choice + " 💙 Get ready at 9PM!";
  
  showSection('final');
}
document.addEventListener("DOMContentLoaded", function() {

  function showSection(sectionId) {
    document.querySelectorAll(".section").forEach(section => {
      section.classList.remove("active");
    });
    document.getElementById(sectionId).classList.add("active");
  }

  // Start button
  document.getElementById("startBtn").addEventListener("click", function() {
    showSection("home");
  });

  // Navigation buttons
  document.querySelectorAll("[data-target]").forEach(button => {
    button.addEventListener("click", function() {
      const target = this.getAttribute("data-target");
      showSection(target);
    });
  });

  // Final selection
  document.querySelectorAll(".final").forEach(card => {
    card.addEventListener("click", function() {
      const choice = this.getAttribute("data-choice");
      document.getElementById("selectedOption").innerText =
        "Tonight we’re doing: " + choice + " 💙 Get ready at 9PM!";
      showSection("final");
    });
  });

});
