import { Component, OnInit } from '@angular/core';
import { stock } from 'src/app/stock';
import { FetchDataService } from './fetch-data.service';
import { savedStock } from 'src/app/savedStock';



@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  constructor(private fetchService: FetchDataService) { }


  currentUser:any;
  stocks: any;
  marketCap: any;
  loading: boolean | undefined;
  saved: boolean = false;
  stckArray: stock[] = [];
  quantity :number=1
  ngOnInit(): void {
    this.callFun('Large Cap')
  }

  callFun(marketCap: any) {
    // this.stocks=null;
    this.marketCap = marketCap;
    console.log(this.marketCap);
    this.loading = true;
    var len = 0;
    this.fetchService.getQuoteByMarketCap(marketCap).subscribe(
      (response) => {
        console.log(response);
        this.stocks = response;
        this.loading = false;
        // console.log(this.stocks);
        for (var s in this.stocks) {
          len++;
        }
        console.log(len);
        for (var i = 0; i < len; i++) {
          this.stckArray[i] = new stock(this.stocks[i].StockID, this.stocks[i].Name, this.stocks[i].Twoweekhigh,this.stocks[i].Twoweeklow,this.stocks[i].Lastclosingprice);
        }
      },
      (error)=>
      {
        this.loading=false
      }
    )
 


  }
  onKey(event:any) {this.quantity = event.target.value;}


  getRecommendations(marketCap: any) {
    this.loading = true;

    this.fetchService.getRecommendations(marketCap).subscribe(
      (data :any) => {
        this.stocks = data;
        this.loading = false;
        
      },
      (err: any)=>
      {
        this.loading=false;
      }
    )
  }

  saveStock(s: stock) {
    
    const ss: savedStock =new savedStock(s.StockID,this.currentUser.username,this.quantity,parseInt(s.Currentmarketprice));
    this.fetchService.saveStock(ss).subscribe(
      (response: any) =>
      {
        if(response)    
        this.saved = true;
      }
    )

  }
  
  

  
}





