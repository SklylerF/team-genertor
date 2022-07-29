const manager = require("../lib/manager");


const michle = new manager('michle','196','michles@email.com','215')

describe('test to see if name brakes employee', ()=>{
    const {name, ID, email, officeNumber} = michle
    
    it('check name', () => {expect(name).toBe('michle')})
    
    it('check ID', () =>{expect(ID).toBe('196')}) 
    
    it('check Email', () => {expect(email).toBe('michles@email.com')})

    it('checks office number', () => {expect(officeNumber).toBe('215')})
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

    

    })