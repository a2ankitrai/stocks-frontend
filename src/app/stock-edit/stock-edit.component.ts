import { Component, OnInit } from '@angular/core';
import { StockService } from '../stock/stock.service';
import { ActivatedRoute, Router } from '@angular/router';
import { StockVo } from '../stock/model/stockVo.model';

@Component({
  selector: 'app-stock-edit',
  templateUrl: './stock-edit.component.html',
  styleUrls: ['./stock-edit.component.css']
})
export class StockEditComponent implements OnInit {

  constructor(private stockService: StockService, private route: ActivatedRoute,
    private router: Router ) {
      this.stockVo = new StockVo();
     }

  stockId: string; 
  stockPrice: string; 
  stockVo: StockVo;
  message: string;
  serverValidationErrors: any = undefined;

  ngOnInit() {

    this.stockId = this.route.snapshot.paramMap.get('id');
    this.stockService.getStockByID(this.stockId).subscribe(
      res =>{
        if(res.status == 200){
          this.stockVo = res.body;
          this.stockPrice = this.stockVo.current_price.split(' ')[1];
        }
      }
    );
  }

  updateStock(){

      this.message = undefined;
      this.serverValidationErrors = undefined;
      console.log(this.stockId);
      this.stockService.updateStockById(this.stockId, this.stockPrice).subscribe(
        res => {
          if(res.status == 200){
            this.message = 'Stock updated successfully';
          }
        }, error => {
          console.log(error); 
          if (error.status === 400 && error.error.validationErrors) {
            console.log('Validation errors found');``
            this.serverValidationErrors = new Array();
            this.serverValidationErrors = error.error.validationErrors;
          }
        }
      );

  }



}
