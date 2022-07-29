const employee = require('../lib/employee')

// provies input for our tests
const michle = new employee('michle','196','michles@email.com')

describe('test to see if name brakes employee', ()=>{
const {name, ID, email} = michle

it('check name', () => {expect(name).toBe('michle')})

it('check ID', () =>{expect(ID).toBe('196')}) 

it('check Email', () => {expect(email).toBe('michles@email.com')})
})

describe('testing the methods for employee', () => {
    it('check name', () =>{
        const michleName = michle.getName();
        expect(michleName).toBe('michle')
    })

    it('check ID', ()=> {
        const michleId = michle.getId();
        expect(michleId).toBe('196')
    })
    
    it('check email', ()=>{
        const michleEmail = michle.getEmail();
        expect(michleEmail).toBe('michles@email.com')
    })
})