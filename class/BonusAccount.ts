import {DioAccount} from "./DioAccount";


export class BonusAccount extends DioAccount{

    deposit = (depositValue:number): void => {
        if (depositValue > 0 && this.validateStatus()) {
            this.setBalance(this.balance + depositValue + 10)

            console.log('Você depositou R$ ' + depositValue + ' a sua conta')
        } else {
            throw Error('Não foi possível realizar está operação, a conta não é valida')
        }

    }

}