import { Player } from "./class";


describe('Classes test', () =>{

  let player = new Player();

  // beforeAll Antes de ejecutar todas 1 vez
  // beforeEach Antes de cada IT

  // afterAll Todas las pruebas finalizan
  // afterEach Después de cada IT

  beforeAll(() => {
    // console.log('beforeAll');
  });

  beforeEach(() => {
    // console.log('beforeEach');
    // player.hp = 100;
    player = new Player();
  });

  afterAll(() => {
    // console.log('afterAll');
  });

  afterEach(() => {
    // console.log('afterEach');
  });

  it('Should return 80 if entered damage is 20', () => {
      // const player = new Player();
      const resp = player.takeDamage(20);
      expect(resp).toBe(80);
  })

  it('Should return 50 if entered damage is 50', () => {
      // const player = new Player();
      const resp = player.takeDamage(50);
      expect(resp).toBe(50);
  })

  it('Should return 0 if entered damage is major or equal than 100', () => {
      // const player = new Player();
      const resp = player.takeDamage(100);
      expect(resp).toBe(0);
  })

})
