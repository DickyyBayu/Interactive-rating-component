const ratingState = document.querySelector('.rating-state');
const ThankYouState = document.querySelector('.thank-you-state');
const ratingButton = document.querySelectorAll('.buttons button');
const submitButton = document.querySelector('#submit-button');
const ratingText = document.querySelector('#rating-text');

ratingButton.forEach((button) => {
    button.addEventListener('click', () => {
        ratingText.innerHTML = button.innerHTML;
    });
});

submitButton.addEventListener('click', () => {
    if (ratingText.innerHTML === '') {
        alert('Please select a rating');
        return;
    }
    ratingState.style.display = 'none';
    ThankYouState.style.display = 'flex';
});

