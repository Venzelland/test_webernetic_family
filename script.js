document.getElementById('openModal').addEventListener('click', function() {
    document.querySelector('.modal-overlay').style.display = 'flex';
});

document.querySelector('.modal-overlay').addEventListener('click', function(event) {
    if (event.target === document.querySelector('.modal-overlay')) {
        document.querySelector('.modal-overlay').style.display = 'none';
    }
});

document.querySelector('.close-button').addEventListener('click', function() {
    document.querySelector('.modal-overlay').style.display = 'none';
});