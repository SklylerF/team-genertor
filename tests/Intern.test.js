const intern = require("../lib/intern");

// provies input for our tests
const michle = new intern('michle','196','michles@email.com','brown')

describe('test to see if name brakes employee', ()=>{
    const {name, ID, email, school} = michle
    
    it('check name', () => {expect(name).toBe('michle')})
    
    it('check ID', () =>{expect(ID).toBe('196')}) 
    
    it('check Email', () => {expect(email).toBe('michles@email.com')})

    it('checks school', () => {expect(school).toBe('brown')})
    })
    
    describe('testing the methods for employee', () => {
        it('check name', () =>{
            const michleName = michle.getName();
            expect(michleName).toBe('michle')
        })
    
        it('check ID', () => {
            const michleId = michle.getId();
            expect(michleId).toBe('196')
        })
        
        it('check email', ()=>{
            const michleEmail = michle.getEmail();
            expect(michleEmail).toBe('michles@email.com')
        })

        it('check school', ()=>{
            const michleschool = michle.getSchool();
            expect(michleschool).toBe('brown')
        })
    

    })