export abstract class DioAccount {
  private name: string
  private readonly accountNumber: number
  balance: number = 0
  private status: boolean = true

  constructor(name: string, accountNumber: number){
    this.name = name
    this.accountNumber = accountNumber
  }

  setName = (name: string): void => {
    this.name = name
    console.log('Nome alterado com sucesso!')
  }

  getName = (): string => {
    return this.name
  }

  setBalance = (balance: number): void => {
    this.balance = balance
  }

  deposit = (depositValue:number): void => {
    if (depositValue > 0 && this.validateStatus()) {
      this.setBalance(this.balance + depositValue)

      console.log('Você depositou R$ ' + depositValue + ' a sua conta')
    } else {
      throw Error('Não foi possível realizar está operação, a conta não é valida')
    }

  }

  withdraw = (withdrawValue:number): void => {
    if (withdrawValue > 0 && withdrawValue <= this.balance){
      this.setBalance(this.balance - withdrawValue)

      console.log('Você sacou: R$ ' + withdrawValue)
    } else {
      throw Error('Não foi possível realizar está operação, você não possui saldo o suficiente para o saque')
    }
  }

  getBalance = (): void => {
    console.log(this.balance)
  }

  validateStatus = (): boolean => {
    if (this.status) {
      return this.status
    }

    throw new Error('Conta inválida')
  }
}
