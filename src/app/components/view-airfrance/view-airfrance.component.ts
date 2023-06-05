import { Component } from '@angular/core';
import { IFiltres } from 'src/app/models/filtres.model';
import { Vol } from 'src/app/models/vol.model';
import { VolService } from '../../services/vol.service';
import { PassagerService } from '../../services/passager.service';
import { IPassagerDto, Passager } from 'src/app/models/passager.model';
import { ActivatedRoute } from '@angular/router';
import { Subscriber, Subscription } from 'rxjs';

@Component({
  selector: 'app-view-airfrance',
  templateUrl: './view-airfrance.component.html',
  styleUrls: ['./view-airfrance.component.scss']
})
export class ViewAirFranceComponent {

  vols: Vol[] = [];
  passagers: Passager[] = [];
  myFilter!: IFiltres;
  clickedVol!: Vol;
  type!: any;
  constructor(
    private _volService: VolService, 
    private _passagerService: PassagerService,
    private _activatedRoute: ActivatedRoute) { }
  /**
   * Réaction à la mise à jour des filtres
   * On souhaite récupérer les vols qui correspondent aux filtres passés en paramètre
   * en utilisant le service défini dans le constructeur
   * @param filtres récupérés depuis le composant enfant
   */
  passagerSubscription: Subscription = new Subscription();
  volSubscription : Subscription = new Subscription();
  listener : Subscription = new Subscription();

  myListener!: any;
  myPassagerListener!: any;
  myVolListener!: any;

  checked = false;

  switchCheked(): void {
    this.checked = !this.checked;
  }

  onFiltresEvent(filtres: IFiltres): void {
    this.myFilter = filtres;  
    if(this.type === "decollages"){
      this.myVolListener = this._volService.getVolsDepart(this.myFilter.aeroport.icao,this.myFilter.debut.getTime(),this.myFilter.fin.getTime())
    } else {
      this.myVolListener = this._volService.getVolsArrivee(this.myFilter.aeroport.icao,this.myFilter.debut.getTime(),this.myFilter.fin.getTime())
    }
    this.volSubscription = this.myVolListener.subscribe(
      (vols: any)=>{
        this.vols = vols;
        console.log(this.vols);
      }
    )
  }

  onClickVol(vol: Vol): void {
    this.clickedVol = vol;
    this.myPassagerListener = this._passagerService.getPassagers(vol  .matricule)
    this.passagerSubscription = this.myPassagerListener.subscribe((response: any)=>{
      this.passagers = [];
      response.results.map((passager: IPassagerDto)=>{
        this.passagers.push(new Passager(passager));
      });
      console.log(this.passagers);
    });
  }

  ngOnInit(): void {
    console.log("init");
    this.myListener = this._activatedRoute.data
    this.listener = this.myListener.subscribe((data$: any)=>{
      this.type = data$["type"];
    }); 
  }
  
  ngOnChange(): void {
    console.log("change")
    console.log(this.type)
  }

  ngOnDestroy(): void {
    console.log("destroy")
    this.passagerSubscription.unsubscribe();
    this.listener.unsubscribe();
    this.volSubscription.unsubscribe();
  }

}
