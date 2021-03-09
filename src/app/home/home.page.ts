import {Component, OnInit} from '@angular/core';
import {DataService} from '../data.service';
import {Storage} from '@ionic/storage';
import {ItemInterface} from '../interfaces/item-interface';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage implements OnInit {

  public data: ItemInterface[];
  public dataCopy: ItemInterface[];
  public searchValue = '';

  constructor(public dataService: DataService,
              private storage: Storage) {
  }

  ngOnInit(): void {
    this.dataService.getItems().subscribe((r: ItemInterface[]) => {
      this.data = r;
      this.dataService.items = r;
    });
    this.storage.get('name').then( async (val) => {
      if (val) {
        this.searchValue = await val;
      }
    });
  }

  search(event) {
    this.searchValue = event.detail.value;
    this.storage.set('name', this.searchValue);
    this.dataService.getSearchItems(this.searchValue).subscribe((res) => this.dataCopy = res);
  }

  clearSearchValue() {
    this.storage.set('name', '');
  }
}
