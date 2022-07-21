import { userInfo } from "os";
import Customer from "../api/models/CustomersModels";

export const initdb = async () => {
    console.log('Aguarde sincronização de tabelas..');
    Promise.all([
        await Customer.sync({alter:true})
    ]).then(()=>{
        console.log('Sincronização de tabelas concluída com sucesso.')
    });
}