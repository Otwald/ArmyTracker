import { Component, OnInit } from "@angular/core";
import { FormControl } from "@angular/forms";
import { ArmyService } from "../_services/army.service";

@Component({
  selector: "app-army",
  templateUrl: "./army.component.html",
  styleUrls: ["./army.component.scss"],
})
export class ArmyComponent implements OnInit {
  factions = { necrons: "Necrons" };
  faction;

  factionFormControll = new FormControl();
  constructor(private as: ArmyService) {}

  ngOnInit(): void {
    this.factionFormControll.valueChanges.subscribe((faction) => {
      this.faction = this.as.getFaction(faction);
    });
  }
}
