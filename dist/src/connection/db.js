import mongoose from 'mongoose';
class DB {
    constructor() {
        this.maxRetries = 5;
        this.retries = 0;
        this.mongoUrl = process.env.MONGO_URL;
        this.manualDisconnect = false;
        if (!this.mongoUrl) {
            throw new Error('DB - MONGO_URL NÃO ESTÁ DEFINIDO NO AMBIENTE');
        }
        this.initializeEventListeners();
    }
    async connect() {
        try {
            await mongoose.connect(this.mongoUrl);
            console.info('DB - CONEXÃO BEM SUCEDIDA');
            this.retries = 0;
        }
        catch (err) {
            console.error('DB - FALHA AO CONECTAR AO MONGODB NA INICIALIZAÇÃO', err);
            this.retryConnection();
        }
    }
    async disconnect() {
        try {
            this.manualDisconnect = true;
            await mongoose.disconnect();
        }
        catch (error) {
            console.error('DB - OCORREU UM ERRO AO DESCONECTAR O MONGODB', error.message);
        }
    }
    async retryConnection() {
        while (this.retries < this.maxRetries) {
            try {
                this.retries += 1;
                console.log(`DB - TENTANDO RECONECTAR AO MONGODB... TENTATIVA ${this.retries} DE ${this.maxRetries}`);
                await mongoose.connect(this.mongoUrl);
                console.info('DB - RECONEXÃO BEM-SUCEDIDA COM O MONGODB!');
                this.retries = 0;
                break;
            }
            catch (err) {
                console.error(`DB - FALHA AO RECONECTAR COM O MONGODB. TENTATIVA ${this.retries} DE ${this.maxRetries}`, err);
                if (this.retries >= this.maxRetries) {
                    console.error('DB - NÚMERO MÁXIMO DE TENTATIVAS DE RECONEXÃO ATINGIDO. CONTINUANDO A TENTAR RECONECTAR...');
                    this.retries = 0;
                }
                await new Promise((resolve) => setTimeout(resolve, 5000));
            }
        }
    }
    initializeEventListeners() {
        mongoose.connection.on('disconnected', () => {
            if (!this.manualDisconnect) {
                console.warn('DB - CONEXÃO COM O MONGODB PERDIDA. TENTANDO RECONECTAR...');
                this.retryConnection();
            }
        });
        mongoose.connection.on('reconnected', () => {
            console.info('DB - RECONEXÃO BEM-SUCEDIDA COM O MONGODB.');
        });
        mongoose.connection.on('error', (err) => {
            console.error('DB - ERRO NA CONEXÃO COM O MONGODB:', err);
        });
    }
    static new() {
        return new DB();
    }
}
export { DB };
//# sourceMappingURL=db.js.map