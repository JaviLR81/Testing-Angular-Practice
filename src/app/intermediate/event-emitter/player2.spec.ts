
import { Player2 } from "./player2";


describe('Player2 Emit', ()=> {

  let player: Player2;

  beforeEach( () => player = new Player2() );


  it('Should emmit an event when the player taking damage', () => {

      let newHP = 0;

      // Esto es asincrono, pero nuestra prueba espera que esto
      // Se resuelva para poder continuar
      player.hpChange.subscribe( hp => {
          newHP = hp;
      });

      player.takeDamage(1000);

      expect(newHP).toBe(0);

  });

  it('Should emmit an event when taking damage and survive if is less than 100 ', () => {

    let newHP = 0;

    player.hpChange.subscribe( hp => newHP = hp);

    player.takeDamage(50);

    expect(newHP).toBe(50);

  });


})
