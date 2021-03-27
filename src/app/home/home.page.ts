import {Component, OnDestroy, OnInit} from '@angular/core';
import {DataService} from '../data.service';
import {Storage} from '@ionic/storage';
import {ItemInterface} from '../interfaces/item-interface';
import {takeUntil} from 'rxjs/operators';
import {ReplaySubject} from 'rxjs';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage implements OnInit, OnDestroy {

  public data: ItemInterface[];
  public dataCopy: ItemInterface[];
  public searchValue = '';
  private destroy: ReplaySubject<any> = new ReplaySubject<any>(1);

  constructor(public dataService: DataService,
              private storage: Storage) {
  }

  ngOnInit(): void {
    this.dataService.getItems()
        .pipe(takeUntil(this.destroy))
        .subscribe((r: ItemInterface[]) => {
      this.data = r;
      this.dataService.items = r;
    });
    this.storage.get('name').then( (val) => {
      if (val) {
        this.searchValue = val;
      }
    });
  }

  search(event) {
    this.searchValue = event.detail.value;
    this.storage.set('name', this.searchValue);
    this.dataService.getSearchItems(this.searchValue)
        .pipe(takeUntil(this.destroy))
        .subscribe((res) => this.dataCopy = res);
  }

  clearSearchValue() {
    this.storage.set('name', '');
  }

  ngOnDestroy() {
    this.destroy.next(null);
    this.destroy.complete();
  }
}
