import customers from "./CustomersRoute";
import employees from "./EmployeesRoute";
import { Router } from "express";
import authRouter from './AuthRoute';
import { ensureIsAuthenticated } from "../middlewares/AuthMiddleware";

const routes = Router();

routes.use("/auth", authRouter);

// routes.use(ensureIsAuthenticated);

routes.use('/customers', customers);
routes.use('/employees', employees);

export default routes;