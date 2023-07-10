export interface Transaction {
    id: string;
    timestamp: number;

    // children: string[] | null;
    // parent: string | null;

    source: string;
    destination: string;
    data: string;

}