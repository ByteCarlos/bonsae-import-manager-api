import { Request, Response } from 'express';
declare const _default: {
    saveDocumentsToTransactionalDatabase(req: Request, res: Response): Promise<Response<any, Record<string, any>>>;
    saveData(req: Request, res: Response): Promise<Response<any, Record<string, any>>>;
    import(req: Request, res: Response): Promise<Response<any, Record<string, any>>>;
};
export default _default;
