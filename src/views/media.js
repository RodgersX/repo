// var modal = document.querySelector('.modal');
var backdrop = document.querySelector('.backdrop');
var addbtn = document.querySelector('.add-btn');

addbtn.addEventListener('click', function(){
    modal.classList.add('open');
    backdrop.style.display = 'block';
    backdrop.classList.add('open');
});

backdrop.addEventListener('click', function(){
    mobileNav.classList.remove('open');
    closeModal();
});

function closeModal(){
    if(modal){
        modal.classList.remove('open');
    }
    backdrop.style.display = 'none';
    
    setTimeout(function() {
        backdrop.classList.add('open');;
    }, 200);
}
