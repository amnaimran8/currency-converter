import inquirer from "inquirer";
import chalk from "chalk";
async function convert1() {
    console.log(chalk.whiteBright.underline.bold("\n\n\t\t\t\t Currency Converter \n\n"));
    let input1 = await inquirer.prompt([
        {
            type: "list",
            name: "input",
            choices: ["DOLLAR", "PKR", "IND", "EURO", "WON", "YAUN", "LIRA", "TAKKA", "DIRHAM", "RIYAL"],
            message: (chalk.blueBright("FROM WHICH CURRENCY DO YOU WANT TO CONVERT :")),
            prefix: "*"
        }
    ]);
    console.log("\n");
    let output1 = await inquirer.prompt([
        {
            type: "list",
            name: "output",
            choices: ["DOLLAR", "PKR", "IND", "EURO", "WON", "YAUN", "LIRA", "TAKKA", "DIRHAM", "RIYAL"],
            message: (chalk.blueBright("TO WHICH CURRENCY DO YOU WANT TO CONVERT :")),
            prefix: "*"
        }
    ]);
    console.log("\n");
    let amount = await inquirer.prompt([
        {
            type: "number",
            name: "amount1",
            message: chalk.blueBright("HOW MUCH AMOUNT DO YOU WANT TO CONVERT :"),
            prefix: "*"
        }
    ]);
    let base = {
        PKR: 1,
        DOLLAR: 0.0036,
        IND: 0.30,
        EURO: 0.0034,
        WON: 4.99,
        YAUN: 0.026,
        LIRA: 0.12,
        TAKKA: 0.42,
        DIRHAM: 0.013,
        RIYAL: 0.013
    };
    let user_input = base[input1.input];
    let user_output = base[output1.output];
    let user_amount = amount.amount1;
    let base_conversion = user_amount / user_input;
    let convert = base_conversion * user_output;
    let convertround = Math.round(convert);
    console.log(chalk.yellowBright("\nYOU ARE CONVERRTING " + input1.input + " TO " + output1.output + "\n"));
    console.log(chalk.greenBright("YOUR CONVERTED AMOUNT IS:  " + convertround + ""));
    console.log("\n");
    let again = await inquirer.prompt([
        {
            type: "list",
            name: "again",
            choices: ["YES", "NO"],
            message: (chalk.magentaBright("DO YOU WANT TO CONVERT MORE CURRENCIES? :")),
            prefix: "*"
        }
    ]);
    if (again.again == "YES") {
        console.log("\n");
        console.log(convert1());
    }
    else {
        console.log("\n");
        console.log(chalk.red("THANK YOU"));
    }
}
convert1();
