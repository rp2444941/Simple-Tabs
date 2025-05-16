const tabButtons = document.querySelectorAll('.tab-btn');
const tabContents = document.querySelectorAll('.tab-content');

tabButtons.forEach(button => {
  button.addEventListener('click', () => {
    // Remove active class from all buttons and contents
    tabButtons.forEach(btn => btn.classList.remove('active'));
    tabContents.forEach(content => content.classList.remove('active'));

    // Add active class to the clicked tab
    button.classList.add('active');
    const tabNumber = button.dataset.tab;
    document.querySelector(`.tab-content[data-content="${tabNumber}"]`).classList.add('active');
  });
});