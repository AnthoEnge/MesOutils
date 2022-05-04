const containers = document.querySelectorAll('.container');
const TitleContainers = document.querySelectorAll('h2');

for ( TitleContainer of TitleContainers){
    TitleContainer.addEventListener('click', function(){
        this.classList.toggle('active');
        let content = this.parentElement.children[1];
        content.classList.toggle("active");
    });
}