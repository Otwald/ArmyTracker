import { Injectable } from "@angular/core";

@Injectable({
  providedIn: "root",
})
export class ArmyService {
  factions = {
    necrons: {
      name: "Necron",
      HQ: {
        Hochlord: {
          Macht: 6,
          cost: 95,
          quantity: 1,
          equipment: {
            base: {
              meele: ["Hyperphasengleve"],
              range: ["Tachyonenpfeil"],
              misc: [],
            },
            option: {
              meele: [
                "Hyperphasenschwert",
                "Stab des Lichts",
                "Entropieklinge",
                "Kriegssense",
              ],
              range: ["Stab des Lichts"],
              misc: ["Regeneratorsphäre"],
            },
          },
        },
      },
    },
  };

  constructor() {}

  getFaction(faction: string) {
    return this.factions[faction];
  }
}
