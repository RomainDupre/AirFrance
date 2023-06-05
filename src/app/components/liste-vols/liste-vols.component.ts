import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Vol } from 'src/app/models/vol.model';

@Component({
  selector: 'app-liste-vols',
  templateUrl: './liste-vols.component.html',
  styleUrls: ['./liste-vols.component.scss']
})
export class ListeVolsComponent {
  @Input() vols!: Vol[];
  @Output() volEvent: EventEmitter<Vol> = new EventEmitter<Vol>();

  clickVol(vol: Vol): void {
    this.volEvent.emit(vol);
  }
}
