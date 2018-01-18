export class Item {
  // TODO: get default currency through user settings
  static defaultCurrency = '€';

  date: Date;
  amount: number;
  currency: string; // foreign id
  content: string;
  category: string; // foreign id
  payment: string; // foreign id (account type)

  constructor(date: Date = new Date, amount: number = 0, currency: string = '', content: string = '',
              category: string = '', payment: string = '') {
    this.date = date;
    this.amount = amount;
    this.currency = currency || Item.defaultCurrency;
    this.content = content;
    this.category = category;
    this.payment = payment;
  }
}
