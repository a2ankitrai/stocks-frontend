import { Component, OnInit } from '@angular/core';
import { StockService } from './stock.service';
import { StockVo } from './model/stockVo.model';

import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-stock',
  templateUrl: './stock.component.html',
  styleUrls: ['./stock.component.css']
})
export class StockComponent implements OnInit {

  constructor(private stockService: StockService,private router: Router,
    private route: ActivatedRoute) { }

  stockList: any;


  ngOnInit() {
    this.stockService.getAllStocks().subscribe(
      res => {
        const status = res.status;
        if (status === 200) {
          const stockResponse = res.body; 
          this.stockList = stockResponse;
        }
      }
    );
  }

  editStock(stock: StockVo){
    this.router.navigate(['/stock-edit/' + stock.stock_id], { relativeTo: this.route });
  }
 
}
