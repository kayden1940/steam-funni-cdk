
- lib/cdk-workshop-stack.ts：CDK 主要的程式位置
- bin/cdk-workshop.ts：主要的程式進入點預設會引用 `lib/cdk-workshop-stack.ts`
- package.json：npm 模組清單裡面定義了套件的版本與指令，例如：`build`、`watch`、`test` 與 `cdk`
- cdk.json：告訴 toolkit 如何執行 app
- tsconfig.json：typescript 設定檔
- .gitignore：告訴 git 應該要排除的文件
- .npmignore：告訴 npm 應該要排除的文件
- node_modules：nodejs 套件包執行完 `npm install` 後的文件都會安裝在此資料夾裡面
- test：CDK 測試的程式位置


cloudwatch

    automate functions

lambda

    get popular games
    get all reviews from a game
        sort by funni
        word count
    save to db
    twitts

dynamodb