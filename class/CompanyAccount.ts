import { DioAccount } from "./DioAccount"

export class CompanyAccount extends DioAccount {

  constructor(name: string, accountNumber: number){
    super(name, accountNumber)
  }

  getLoan = (loanValue: number): void => {
    if(loanValue > 0 && this.validateStatus()){
      this.setBalance(this.balance + loanValue)

      console.log('Voce pegou um empréstimo no valor de: R$ ' + loanValue)
    }
  }
}
