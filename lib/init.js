const ora = require("ora");
const chalk = require("chalk");
const download = require("download-git-repo");

module.exports = () => {
  const spinner = ora("\n 开始生成项目，请等待...");
  spinner.start();
  download("QDyanbing/ceu-pro#master","./ceu-project",(err)=>{
    spinner.stop();
    if (err) {
      console.log("下载失败……");
      console.log(err);
      process.exit();
    }
    console.log(chalk.green(`\n √ 项目生成完毕!`));
    console.log(`\n cd ./ceu-project && npm install \n`);
  })
};
