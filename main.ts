#! /usr/bin/env node
import inquirer from "inquirer";
const currency:any = {
  USD: 1,
  UAE: 3.67,
  PKR: 278.4,
  EUR: 0.93,
};
let user_ans = await inquirer.prompt([
    {
    name: "from",
    message: "Enter from currency",
    type: "list",
    choices: ['USD','UAE', 'PKR', 'EUR'],
  },
  {
    name: "to",
    message: "Enter To currency",
    type: "list",
    choices: ['USD', 'UAE', 'PKR', 'EUR'],
  },
  {
    name: "amount",
    message: "Enter your amount currency",
    type: "number",
  },
]);
let fromAmount:any = currency[user_ans.from]
let toAmount:any =currency[user_ans.to]
let amount =user_ans.amount
let baseAmount= amount / fromAmount
let convertedAmount =baseAmount*toAmount
console.log(`${user_ans.from} currency is converted to   ${user_ans.to} currency`);
console.log(convertedAmount);
