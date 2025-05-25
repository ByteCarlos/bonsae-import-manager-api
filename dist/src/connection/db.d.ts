declare class DB {
    private maxRetries;
    private retries;
    private mongoUrl;
    private manualDisconnect;
    constructor();
    connect(): Promise<void>;
    disconnect(): Promise<void>;
    retryConnection(): Promise<void>;
    initializeEventListeners(): void;
    static new(): DB;
}
export { DB };
