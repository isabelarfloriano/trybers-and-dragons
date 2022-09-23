import { EnergyType } from '../Energy';
import Archetype from './Archetype';

export default class Necromancer extends Archetype {
  private _energyType: EnergyType;
  private static _archetypeInstances = 0;

  constructor(name: string) {
    super(name);
    this._energyType = 'mana';
    Necromancer._archetypeInstances += 1;
  }

  public static createdArchetypeInstances(): number {
    return Necromancer._archetypeInstances;
  }

  public get energyType(): EnergyType {
    return this._energyType;
  }
}