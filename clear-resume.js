const clearResume = function(){
    let child = document.querySelector('.modal_content').lastElementChild
    while (child){
        document.querySelector('.modal_content').removeChild(child)
        child = document.querySelector('.modal_content').lastElementChild
    }
}