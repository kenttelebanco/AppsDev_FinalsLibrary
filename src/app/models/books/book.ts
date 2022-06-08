
enum Book_Status{
    BRW = "BORROWED",
    AVL = "AVAILABLE",
    DUE = "DUE",
    RMV = "REMOVED",
}

export interface Book {
    id: string;
    name: string;
    status: string;
    published: string;
    author: string;
}