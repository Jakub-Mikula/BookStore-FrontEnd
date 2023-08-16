import {Component, OnInit} from '@angular/core';
import {Purchase} from "../../models/purchase.model";
import {PurchaseService} from "../../services/purchase.service";
import {PurchaseItem} from "../../models/purchase-item.model";

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit{
  purchaseItem : Array<PurchaseItem> = [];
  constructor(private purchaseService : PurchaseService) {
  }
  ngOnInit(): void {
    this.purchaseService.getAllPurchaseItems().subscribe(data => {
      this.purchaseItem = data;
    });
  }
}
