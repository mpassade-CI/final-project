const Person = function(){
    return {
        contact: '',
        skills: '',
        addContact(address,email,number){
            const arr = []
            if (address!==''){
                arr.push(address)
            }
            if (email!==''){
                arr.push(email)
            }
            if (number!==''){
                arr.push(number)
            }
            this.contact = arr.join(' | ')
        },
        addSkills(arr){
            const skillsArr = []
            for (const x of arr){
                if (x.value!==''){
                    skillsArr.push(x.value)
                }
            }
            this.skills = skillsArr.join(' | ')
        }
    }
}

const person = Person()