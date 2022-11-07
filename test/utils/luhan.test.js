
const {luhanCheck} =  require( "../../src/utils/luhan" );


describe('Test luhan algo', ()=>{

    it('Should return true if card number is correct',()=>{
        const cardIsValid = luhanCheck(4716385279566261);
        expect(cardIsValid).toBe(true);
    });

    it('Should return false if card number is not correct',()=>{
        const cardIsValid = luhanCheck(4716385279566262);
        expect(cardIsValid).toBe(false);
    });

    it('Should return false if card number is not correct',()=>{
        try {
            luhanCheck(null);
        } catch (error) {
            expect(error.message).toBe('Unexpected error');
        }
    });


})