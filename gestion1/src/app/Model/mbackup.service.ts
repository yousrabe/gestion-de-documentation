import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MbackupService {
  private _nomFichier:String;
  private _date:String;
  private _modificateur:String;

  get NomFichier():String{
    return this._nomFichier;
  }
  get Dates():String{
    return this._date;
  }
  get Modificateur():String{
    return this._modificateur;
  }
  set NomFichier(value:String){
    this._nomFichier=value;
  }
  set Datee(value:String){
    this._date=value;
  }
  set Modificateur(value:String){
    this._modificateur=value;
  }
}

