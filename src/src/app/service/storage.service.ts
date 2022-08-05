/* eslint-disable no-underscore-dangle */
import { Injectable } from '@angular/core';
import { Storage } from '@ionic/storage-angular';

@Injectable({
  providedIn: 'root'
})
export class StorageService {

  private _storage: Storage | null = null;

  constructor(private storage: Storage) {
    this.init();
  }

  async init() {
    // If using, define drivers here: await this.storage.defineDriver(/*...*/);
    const storage = await this.storage.create();
    this._storage = storage;
  }

  // Create and expose methods that users of this service can
  // call, for example:
  public set(key: string, value: any) {
    this._storage?.set(key, value);
    //console.log("Storage set key:" + key + " value:" + value);
  }

  public get(key: string) {
    //console.log("Storage try get key:" + key );
    return this.storage?.get(key).then((val) => {
    	//console.log("User:" + val);
        return val; // <--- good result        
    });
  }

  public remove(key: string) {
    this._storage?.remove(key);
  }

  public getAll(){
    const lista = [];
    this._storage.forEach((value,key, index) => {
      lista.push(value);
    });
    return lista;
  }
}