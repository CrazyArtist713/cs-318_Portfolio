function toggleNav() {
     let elements = document.getElementsByClassName('toggle-nav');
     for(let i = 0; i < elements.length; i++){
     elements[i].classList.toggle('show');
     }
}
document.addEventListener("DOMContentLoaded", function() {
    // Photography
    document.querySelector('.photography>.block').addEventListener('click', function(){
        document.querySelector('.photography>.images').classList.toggle('show');
        document.querySelector('.photography span').classList.toggle('rotate');
    });

    // Traditional
    document.querySelector('.traditional>.block').addEventListener('click', function(){
        document.querySelector('.traditional>.images').classList.toggle('show');
        document.querySelector('.traditional span').classList.toggle('rotate');
    });

    // Digital
    document.querySelector('.digital>.block').addEventListener('click', function(){
        document.querySelector('.digital>.images').classList.toggle('show');
        document.querySelector('.digital span').classList.toggle('rotate');
    });
});