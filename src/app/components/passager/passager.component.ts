import { Component, Input } from '@angular/core';
import { Passager } from 'src/app/models/passager.model';
import {MatTooltipModule} from '@angular/material/tooltip';
import {MatButtonModule} from '@angular/material/button'; 

@Component({
  selector: 'app-passager',
  templateUrl: './passager.component.html',
  styleUrls: ['./passager.component.scss'],
})
export class PassagerComponent {
  @Input() passager!: Passager;
  @Input() afficherPhoto!: boolean;

  color!: string;

  correspondance(entry: string):any {
    switch(entry){
      case "STANDARD": return 1;
      case "BUSINESS": return 2;
      case "PREMIUM": return 3;
    }
  }

  ngOnInit(): void {
    this.getCorrespondanceColor();
  }
  getCorrespondanceColor(): void {
    this.passager.nbBagagesSoute > this.correspondance(this.passager.classeVol) ? this.color = "red" : this.color = "black";
  }
}
