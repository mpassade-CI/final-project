const buildResume = function(){
    if (document.querySelector('.person-name').value!==''){
        const header = document.createElement('h1')
        header.className = 'modalHeader'
        header.innerText = document.querySelector('.person-name').value
        document.querySelector('.modal_content').appendChild(header)
    }
}