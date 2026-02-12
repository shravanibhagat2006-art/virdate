function showSection(sectionId) {
  let sections = document.querySelectorAll('.section');
  sections.forEach(section => {
    section.classList.remove('active');
  });

  document.getElementById(sectionId).classList.add('active');
}

function finalMessage(choice) {
  document.getElementById('selectedOption').innerText =
    "Tonight we are doing: " + choice + " 💕 Get ready at 9PM!";
  
  showSection('final');
}
