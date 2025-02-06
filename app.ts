import { CompanyAccount } from './class/CompanyAccount'
import { PeopleAccount } from './class/PeopleAccount'
import {BonusAccount} from "./class/BonusAccount";



console.log('------------------------------------ conta Teste Normal -----------------------------------------')

const contaTeste: PeopleAccount = new PeopleAccount(11123,'Leandro Ribeiro', 10)
console.log('--------------------------- status inicial ---------------------------')
console.log(contaTeste)

console.log('--------------------------- Deposito ---------------------------')
contaTeste.deposit(35)
console.log(contaTeste)

console.log('--------------------------- Saque ---------------------------')
contaTeste.withdraw(15)
console.log(contaTeste)

console.log('------------------------------------ conta Teste company -----------------------------------------')
const companyTest: CompanyAccount = new CompanyAccount('Leandro Ribeiro', 10)
console.log('--------------------------- status inicial ---------------------------')
console.log(companyTest)

console.log('--------------------------- empréstimo ---------------------------')
companyTest.getLoan(1000)
console.log(companyTest)

console.log('------------------------------------ conta Teste bonusAccount -----------------------------------------')
const bonusTest: BonusAccount = new BonusAccount('Leandro Ribeiro', 17)
console.log(bonusTest)

console.log('---------------------------- deposito diferenciado ----------------------------------')
bonusTest.deposit(100)
console.log(bonusTest)