const buildResume = function(){
    if (document.querySelector('.person-name').value!==''){
        const header = document.createElement('h1')
        header.className = 'modal-header'
        header.innerText = document.querySelector('.person-name').value
        document.querySelector('.modal_content').appendChild(header)
    }

    person.addContact(document.querySelector('.person-address').value,
    document.querySelector('.person-email').value,
    document.querySelector('.person-number').value)
    if (person.contact!==''){
        const contact = document.createElement('p')
        contact.className = 'modal-contact'
        contact.innerText = person.contact
        document.querySelector('.modal_content').appendChild(contact)
    }
    
    if (document.querySelector('.person-title').value!==''){
        const title = document.createElement('p')
        title.className = 'modal-job-title'
        title.innerText = document.querySelector('.person-title').value
        document.querySelector('.modal_content').appendChild(title)
    }

    if (document.querySelector('.person-intro').value!==''){
        const intro = document.createElement('p')
        intro.className = 'modal-intro'
        intro.innerText = document.querySelector('.person-intro').value
        document.querySelector('.modal_content').appendChild(intro)
    }

    person.addSkills(document.querySelectorAll('.person-skills'))
    if (person.skills!==''){
        const coreComp = document.createElement('p')
        coreComp.className = 'modal-sub-heading'
        coreComp.innerText = 'Core Competencies'
        document.querySelector('.modal_content').appendChild(coreComp)
        const skills = document.createElement('p')
        skills.className = 'modal-skills'
        skills.innerText = person.skills
        document.querySelector('.modal_content').appendChild(skills)
    }


}