import { increase } from "./numbers"


describe('Numbers test', () =>{

  it('Should return 100 if entered number is major than 100', () => {
      const resp = increase(300);
      expect(resp).toBe(100);
  })

  it('Should return number entered +1 if entered number is less than 100', () => {
      const resp = increase(50);
      expect(resp).toBe(51);
  })

})
