import { EnergyType } from '../Energy';
import Archetype from './Archetype';

export default class Warrior extends Archetype {
  private _energyType: EnergyType;
  private static _archetypeInstances = 0;

  constructor(name: string) {
    super(name);
    this._energyType = 'stamina';
    Warrior._archetypeInstances += 1;
  }

  public static createdArchetypeInstances(): number {
    return Warrior._archetypeInstances;
  }

  public get energyType(): EnergyType {
    return this._energyType;
  }
}