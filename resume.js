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

    for (const x of document.querySelectorAll('.company')){
        if (x.value!==''){
            const career = document.createElement('p')
            career.className = 'modal-sub-heading'
            career.innerText = 'Career'
            document.querySelector('.modal_content').appendChild(career)
            break
        }
    }
    for (const x of document.querySelectorAll('.job-fields')){
        if (x.querySelector('.company').value!==''){
            person.addJob(x.querySelector('.company').value,
            x.querySelector('.position').value,
            x.querySelector('.work-start').value,
            x.querySelector('.work-end').value,
            x.querySelector('.work-desc').value)
        }
    }
    for (const x of person.work){
        const jobInfoHeader = document.createElement('div')
        jobInfoHeader.className = 'modal-sub-sub-heading'
        document.querySelector('.modal_content').appendChild(jobInfoHeader)

        const company = document.createElement('p')
        company.className = 'job-heading'
        company.innerText = x.company
        jobInfoHeader.appendChild(company)

        x.getTimeEmployed()
        if (x.position!=='' && x.timeEmployed!==''){
            const positionTime = document.createElement('p')
            positionTime.className = 'position-length'
            const position = document.createElement('span')
            position.className = 'position-heading'
            position.innerText = x.position + ', '
            const employment = document.createElement('span')
            employment.innerText = x.timeEmployed
            jobInfoHeader.appendChild(positionTime)
            positionTime.appendChild(position)
            positionTime.appendChild(employment)
        }
        else if (x.position!=='' || x.timeEmployed!==''){
            const positionTime = document.createElement('p')
            positionTime.className = 'position-length'
            const position = document.createElement('span')
            position.className = 'position-heading-alt'
            position.innerText = x.position
            const employment = document.createElement('span')
            employment.innerText = x.timeEmployed
            jobInfoHeader.appendChild(positionTime)
            positionTime.appendChild(position)
            positionTime.appendChild(employment)
        }

        if (x.duties!==''){
            const dutiesTitle = document.createElement('p')
            dutiesTitle.className = 'duties-title'
            dutiesTitle.innerText = 'Key Assignments & Accomplishments:'
            document.querySelector('.modal_content').appendChild(dutiesTitle)
            const duties = document.createElement('p')
            duties.innerText = x.duties
            document.querySelector('.modal_content').appendChild(duties)
        }
    }
}