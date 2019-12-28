import { Injectable } from '@angular/core';
import { Locality } from '../models/models';
import { ApiService } from '../services/api.service';

@Injectable({
  providedIn: 'root'
})

export class LocalityHelper {

  constructor(private apiService: ApiService) {
  }

  public getName(localityId: number, localities: Locality[]) {
    
    if (localities && localityId) {
      let localityName: any = localities.filter((loc) => {
        return (localityId === loc.id);
      });

      return localityName[0].name;
    } else {
      return "";
    }

  }

}
