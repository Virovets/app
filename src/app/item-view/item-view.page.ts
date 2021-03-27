import {Component, OnDestroy, OnInit} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {ItemInterface} from '../interfaces/item-interface';
import {DataService} from '../data.service';
import {Subscription} from 'rxjs';

@Component({
  selector: 'app-item-view',
  templateUrl: './item-view.page.html',
  styleUrls: ['./item-view.page.scss'],
})
export class ItemViewPage implements OnInit, OnDestroy {

  public item: ItemInterface;
  public price = '';
  public qty = null;
  private dataSubscription: Subscription;

  constructor(private route: ActivatedRoute,
              public dataService: DataService) {
  }

  ngOnInit() {
    const itemSku = +this.route.snapshot.params.sku;
    this.dataSubscription = this.dataService.getItems().subscribe((res: ItemInterface[]) => {
      this.item = res.find(item => item.sku === itemSku);
    });
  }

  chooseVariant(variant, type: string, caseInput: boolean) {
    const value = caseInput ? variant.value : variant;
    switch (type) {
      case 'price' :
        this.price = value;
        this.qty = Math.round(Number(value) / this.item.price);
        break;
      case 'qty' :
        this.qty = value;
        this.price = String(Math.round(this.item.price * value));
        break;
    }
  }

  ngOnDestroy(): void {
    this.dataSubscription.unsubscribe();
  }

}
