const clearResume = function(){
    for (const x of document.querySelector('.modal_content').children){
        document.querySelector('.modal_content').removeChild(x)
    }
}