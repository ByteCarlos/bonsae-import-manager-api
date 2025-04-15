import { Request, Response, NextFunction } from "express";
declare const asyncHandler: (fn: Function) => (req: Request, res: Response, next: NextFunction) => Promise<any>;
export default asyncHandler;
