import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Vol } from 'src/app/models/vol.model';

@Component({
  selector: 'app-vol',
  templateUrl: './vol.component.html',
  styleUrls: ['./vol.component.scss']
})
export class VolComponent {
  @Input() vol!: Vol;
  @Output() volEvent: EventEmitter<Vol> = new EventEmitter<Vol>();

  clickVol(vol: Vol): void {
    this.volEvent.emit(vol);
  }
}
