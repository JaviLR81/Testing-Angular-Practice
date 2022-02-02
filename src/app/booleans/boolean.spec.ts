import { loggedUser } from "./boolean";


describe('Boolean tests', () => {
  it('Should return true', () => {
      const resp = loggedUser();
      // expect(resp).toBeTruthy();
      expect(resp).not.toBeFalsy();
  });
})
