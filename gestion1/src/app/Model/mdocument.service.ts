
export class MdocumentService {



  private _nomF:File;
  private _dateM:Date;
  private _modifi:String;


  get nomF(): File {
    return this._nomF;
  }

  set nomF(value: File) {
    this._nomF = value;
  }

  get dateM(): Date {
    return this._dateM;
  }

  set dateM(value: Date) {
    this._dateM = value;
  }

  get modifi(): String {
    return this._modifi;
  }

  set modifi(value: String) {
    this._modifi = value;
  }
}
