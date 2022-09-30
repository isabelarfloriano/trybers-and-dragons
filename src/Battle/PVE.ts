import Battle from './Battle';
import Fighter, { SimpleFighter } from '../Fighter';
import Monster from '../Monster';

class PVE extends Battle {
  private _player: Fighter ;
  private _monster: SimpleFighter[] | Fighter[] | Monster[];

  constructor(
    player: Fighter,
    monster: SimpleFighter[] | Fighter[] | Monster[],
  ) {
    super(player);
    this._player = player;
    this._monster = monster;
  }

  public fight(): number {
    this._monster.forEach((monster) => {
      this._player.attack(monster);
      monster.attack(this._player);
    });

    return this._player.lifePoints === -1 ? -1 : 1;
  }
}

export default PVE;