import { getRobots } from "./arrays";


xdescribe('Array tests', () => {

  it('Should return at least 3 robots', () => {
      const resp = getRobots();
      expect(resp.length).toBeGreaterThanOrEqual(3);
  });

  it('Should be exist megaman and Ultron', () => {
      const resp = getRobots();
      expect(resp).toContain('Megaman');
      expect(resp).toContain('Ultron');
  });

})
