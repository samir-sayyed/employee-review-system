
const addReviewBtn = document.getElementById('add-review-btn');
const createPerformanceDiv = document.getElementById('create-performance');
const closeBtn = document.getElementById('close-btn');


addReviewBtn.addEventListener('click', function(){
    createPerformanceDiv.style.display = "block";
});

closeBtn.addEventListener('click', function(){
    createPerformanceDiv.style.display = "none";
});




