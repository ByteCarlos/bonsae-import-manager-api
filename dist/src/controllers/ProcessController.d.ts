import { Request, Response } from "express";
declare const _default: {
    createProcess(req: Request, res: Response): Promise<Response<any, Record<string, any>>>;
    getProcess(req: Request, res: Response): Promise<Response<any, Record<string, any>>>;
    getFullProcess(req: Request, res: Response): Promise<Response<any, Record<string, any>>>;
    getPartialProcess(req: Request, res: Response): Promise<Response<any, Record<string, any>>>;
    getAllProcesses(_req: Request, res: Response): Promise<Response<any, Record<string, any>>>;
    updateProcessPart(req: Request, res: Response): Promise<Response>;
    updateStatus(req: Request, res: Response): Promise<Response>;
    destroy(req: Request, res: Response): Promise<Response<any, Record<string, any>>>;
    destroyPartial(req: Request, res: Response): Promise<Response<any, Record<string, any>>>;
};
export default _default;
