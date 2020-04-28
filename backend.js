
const Work = function(company,position,startDate,endDate,duties){
    return {
        company,
        position,
        startDate,
        endDate,
        timeEmployed: '',
        duties,
        getTimeEmployed(){
            if (this.startDate!=='' && this.endDate!==''){
                this.timeEmployed = this.startDate + ' to ' + this.endDate
            }
        }
    }
}
const Person = function(){
    return {
        contact: '',
        skills: '',
        work: [],
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
        },
        addJob(company,position,startDate,endDate,duties){
            this.work.push(Work(company,position,startDate,endDate,duties))
        }
    }
}

const person = Person()