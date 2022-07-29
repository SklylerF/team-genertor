const engineer = require("../lib/Engineer");


const michle = new engineer('michle','196','michles@email.com','mrGitHUb')

describe('test to see if name brakes employee', ()=>{
    const {name, ID, email, GitHub} = michle
    
    it('check name', () => {expect(name).toBe('michle')})
    
    it('check ID', () =>{expect(ID).toBe('196')}) 
    
    it('check Email', () => {expect(email).toBe('michles@email.com')})

    it('checks office number', () => {expect(GitHub).toBe('mrGitHUb')})
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

        it('check GitHub', ()=>{
            const michleGitHub = michle.getGitHub();
            expect(michleGitHub).toBe('mrGitHUb')
        })
    

    })