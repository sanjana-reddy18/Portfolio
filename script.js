function toggleMode() {
    const body = document.body;
    body.classList.toggle("light-mode");
}

// Function to show additional information on education or experience section click
function showDetails(sectionId) {
    const section = document.getElementById(sectionId);
    // Add your logic to display additional information (e.g., using modals, expanding sections, etc.)
    alert(`Clicked on ${sectionId}`);
}

// Event listener for mode toggle button
document.addEventListener('DOMContentLoaded', function () {
    const modeToggle = document.getElementById('mode-toggle');
    if (modeToggle) {
        modeToggle.addEventListener('click', toggleMode);
    }

    // Event listeners for education and experience sections
    const educationSection = document.getElementById('education');
    const experienceSection = document.getElementById('experience');

    if (educationSection) {
        educationSection.addEventListener('click', function () {
            showDetails('education');
        });
    }

    if (experienceSection) {
        experienceSection.addEventListener('click', function () {
            showDetails('experience');
        });
    }
});