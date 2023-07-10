import { Transaction } from "../models/transaction.model";

export class TransactionStore {
    private _transactions: Transaction[];

    constructor() {
        this._transactions = [];
    }

    addTransaction(transaction:Transaction) {
        this.transactions.push(transaction);
    }

    getTransactionById(id:string): Transaction | null {
        return this._transactions.find(x => x.id === id) || null;
    }

    removeTransactionById(id:string) {
        this._transactions = this._transactions.filter(x => x.id !== id);
    }

    removeTransactionsByIds(ids:string[]) {
        this._transactions = this._transactions.filter(x => !ids.includes(x.id));
    }

    get transactions(): Transaction[] {
        return this._transactions;
    }
}