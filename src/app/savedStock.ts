export class savedStock
{
     stock_Id? :string;
     username?:string;
     quantity?:number;
	 current_price?:number;

    constructor(stock_Id:string,username:string,quantity:number,current_price?:number)
    {
        
		this.stock_Id = stock_Id;
		this.username = username;
		this.quantity = quantity;
		this.current_price = current_price;
    }
}