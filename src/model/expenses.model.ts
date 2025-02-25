class ExpensesModel{
    private _expense_id:string
    private _name : string
    private _amount : string
    private _date : string
    private _icon : string
    private _type : string

    get expense_id(): string {
        return this._expense_id;
    }

    set expense_id(value: string) {
        this._expense_id = value;
    }

    get name(): string {
        return this._name;
    }

    set name(value: string) {
        this._name = value;
    }

    get amount(): string {
        return this._amount;
    }

    set amount(value: string) {
        this._amount = value;
    }

    get date(): string {
        return this._date;
    }

    set date(value: string) {
        this._date = value;
    }

    get icon(): string {
        return this._icon;
    }

    set icon(value: string) {
        this._icon = value;
    }

    get type(): string {
        return this._type;
    }

    set type(value: string) {
        this._type = value;
    }

    constructor(expense_id: string, name: string, amount: string, date: string, icon: string, type: string) {
        this._expense_id = expense_id;
        this._name = name;
        this._amount = amount;
        this._date = date;
        this._icon = icon;
        this._type = type;
    }
}
export default ExpensesModel;