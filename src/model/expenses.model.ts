import UserModel from "./user.model";

class ExpensesModel{
    expense_id:string
    name : string
    amount : string
    date : string
    icon : string
    type : string
    user : UserModel

    constructor(expense_id: string, name: string, amount: string, date: string, icon: string, type: string,user:UserModel) {
        this.expense_id = expense_id;
        this.name = name;
        this.amount = amount;
        this.date = date;
        this.icon = icon;
        this.type = type;
        this.user = user;
    }
}
export default ExpensesModel;