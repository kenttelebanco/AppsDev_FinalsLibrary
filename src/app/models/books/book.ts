
enum Book_Status{
    BRW = "BORROWED",
    AVL = "AVAILABLE",
    DUE = "DUE",
    RMV = "REMOVED",
}

export interface Book {
    id: string;
    name: string;
    status: Book_Status;
    published: string;
    author: string;
}