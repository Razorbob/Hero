import { BlockStore } from "./storage/block.store";
import { TransactionStore } from "./storage/transaction.store";

export class HeroNetworkNode{
    private BlockStore: BlockStore;
    private TransactionStore: TransactionStore;

    constructor(params?: any){
        console.log("HeroNetworkNode created");
        this.BlockStore = new BlockStore();
        this.TransactionStore = new TransactionStore();

        this.listenForMessages();
    }

    private async listenForMessages(){
        console.log("Listening for messages");
    }

    
}