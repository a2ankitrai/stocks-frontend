import { Injectable } from '@angular/core';
import * as AppConstant from 'src/app/common/app-constant';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { StockVo } from './model/stockVo.model';

@Injectable({
  providedIn: 'root'
})
export class StockService {

  constructor(private http: HttpClient) { }

  getAllStocks() {
    const headers = this.setCommonHeaders();
    return this.http.get(AppConstant.APIEndpoint, { headers: headers, 'observe': 'response' });
  }

  getStockByID(stockId: string) {
    const headers = this.setCommonHeaders();
    return this.http.get<StockVo>(AppConstant.APIEndpoint + stockId, { headers: headers, 'observe': 'response' });
  }

  createStock(stockobject: any) {
    const headers = this.setCommonHeaders();
    return this.http.post(AppConstant.APIEndpoint, stockobject, { headers: headers, 'observe': 'response' });
  }

  updateStockById(stockId: string, updated_price: string) {
    const headers = this.setCommonHeaders(); 
    const requestParam = '?updated_price=' + updated_price;
    return this.http.put(AppConstant.APIEndpoint + stockId + requestParam, null, { headers: headers, 'observe': 'response' });
  }

  setCommonHeaders() {
    let headers = new HttpHeaders();
    headers = headers.set('Content-Type', 'application/json');
    return headers;
  }
}
