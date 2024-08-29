function showModal(jobTitle) {
    document.getElementById('modal').style.display = 'flex';
    document.getElementById('modal-job-title').textContent = `Apply for ${jobTitle}`;
}

function closeModal() {
    document.getElementById('modal').style.display = 'none';
}
