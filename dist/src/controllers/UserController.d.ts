import { Request, Response } from 'express';
declare const _default: {
    store(req: Request, res: Response): Promise<Response<any, Record<string, any>>>;
    index(_req: Request, res: Response): Promise<Response<any, Record<string, any>>>;
    show(req: Request, res: Response): Promise<Response<any, Record<string, any>>>;
    update(req: Request, res: Response): Promise<Response<any, Record<string, any>>>;
    destroy(req: Request, res: Response): Promise<Response<any, Record<string, any>>>;
};
export default _default;
