import { Component, OnInit } from '@angular/core';
import { ApiserviceService } from 'src/app/apiservice.service'

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss']
})
export class ProductComponent implements OnInit {
  public productList: any;
  public filterCategory: any
  searchKey: string = "";
  constructor(private api:ApiserviceService) { }
  collection = <any>[];
  ngOnInit(): void {

    this.api.getListOfmovie().subscribe((i) => {
      console.warn(i)
      this.collection = i;
      console.log(this.collection)
    })

    
  }

}
