
//logic for make visible create performance form on click of buttn
const addReviewBtn = document.getElementById('add-review-btn');
const createPerformanceDiv = document.getElementById('create-performance');
const closeBtn = document.getElementById('close-btn');


addReviewBtn.addEventListener('click', function(){
    createPerformanceDiv.style.display = "block";
});

closeBtn.addEventListener('click', function(){
    createPerformanceDiv.style.display = "none";
});


//logic for make visible assign review form

const assignOpen = document.getElementById('assign-review');
const assignClose = document.getElementById('assign-close');

const assignForm  = document.getElementById('assign-form');

assignOpen.addEventListener('click', function(){
    // alert('hi')
    assignForm.style.visibility = "visible";
});

assignClose.addEventListener('click', function(){
    assignForm.style.visibility = "hidden";
});




