import { Component, EventEmitter, Input, Output, ViewEncapsulation } from '@angular/core';
import { MAT_DATE_RANGE_SELECTION_STRATEGY } from '@angular/material/datepicker';
import { FiveDayRangeSelectionStrategy } from 'src/app/date-adapter';
import { IAeroport } from 'src/app/models/aeroport.model';
import { AEROPORTS } from './../../constants/aeroport.constant';
import { FormControl } from '@angular/forms';
import { IFiltres } from 'src/app/models/filtres.model';

@Component({
  selector: 'app-filtres',
  templateUrl: './filtres.component.html',
  styleUrls: ['./filtres.component.scss'],
  providers: [
    {
      provide: MAT_DATE_RANGE_SELECTION_STRATEGY,
      useClass: FiveDayRangeSelectionStrategy,
    },
  ],
  encapsulation: ViewEncapsulation.None
})
export class FiltresComponent {

  /**
   * La liste des aéroports disponibles est une constante,
   * on n'utilise que les principaux aéroports français pour l'instant
   */
  
  aeroports: IAeroport[] = AEROPORTS;
  formControleDate1 : FormControl = new FormControl();
  formControleDate2: FormControl = new FormControl();
  formControlAeroportDepart: FormControl = new FormControl();
  myFilter: IFiltres = { aeroport: this.formControlAeroportDepart.value, debut: this.formControleDate1.value, fin: this.formControleDate2.value };

  checkDate(): boolean
  {
    if(this.formControleDate1.value === null && this.formControleDate2.value === null)
    {
      return true;
    }
    else{
      return false;
    }
  }

  @Output() filtresEvent = new EventEmitter<IFiltres>();

  clickButton(debut: any, fin: any, aeroport: any): void {
     this.myFilter= { aeroport: aeroport.value, debut: debut.value, fin: fin.value };
    this.filtresEvent.emit(
      this.myFilter
    );
  }

}
