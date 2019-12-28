import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ApiService } from 'src/app/services/api.service';
import { Observable } from 'rxjs';
import { Dealer, Locality } from 'src/app/models/models';
import { ModalController } from '@ionic/angular';
import { LocalityHelper } from 'src/app/helpers/LocalityHelper';

@Component({
  selector: 'app-list-items',
  templateUrl: './list-items.page.html',
  styleUrls: ['./list-items.page.scss'],
})
export class ListItemsPage {

  private dealers: Dealer[];
  private localities: Locality[];

  itemType: string = "";

  constructor(
    private activatedRoute: ActivatedRoute, 
    private apiService: ApiService, 
    private localityHelper: LocalityHelper,
    private modalCrtl: ModalController) {
    this.loadData();
  }

  async loadData() {
    this.dealers = await this.apiService.getDealers().toPromise();
    this.localities = await this.apiService.getLocalities().toPromise();
  }

  back(dealer?: Dealer) {
    this.modalCrtl.dismiss(dealer);
  }

  public getLocalityName(localityId: number){
    return this.localityHelper.getName(localityId, this.localities);
  }

}
