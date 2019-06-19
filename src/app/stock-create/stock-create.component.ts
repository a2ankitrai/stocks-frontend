import { Component, OnInit } from '@angular/core';
import { StockService } from '../stock/stock.service';
import { FormGroup, Validators, FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-stock-create',
  templateUrl: './stock-create.component.html',
  styleUrls: ['./stock-create.component.css']
})
export class StockCreateComponent implements OnInit {

  constructor(private stockService: StockService, private formBuilder: FormBuilder) { }

  stockCreationForm: FormGroup;
  message: string;
  serverValidationErrors: any = undefined;

  ngOnInit() {

    this.stockCreationForm = this.formBuilder.group({
      stock_name: ['', []],
      current_price: ['', []],
    });
  }
  onStockFormSubmit() {

    this.message = '';
    this.serverValidationErrors = undefined;

    console.log(this.stockCreationForm.value);

    this.stockService.createStock(this.stockCreationForm.value).subscribe(
      res => {
        if (res.status == 200) {
          this.message = "Stock Created Successfully";
        }
        console.log(res);
      }, error => {
        console.log(error);
        if (error.status === 400) {
          console.log('Validation errors found'); ``
          if (error.error.validationErrors) {
            this.serverValidationErrors = new Array();
            this.serverValidationErrors = error.error.validationErrors;
          } else {
            this.message = error.error.message;
          }
        }
      }
    )
  }

}
