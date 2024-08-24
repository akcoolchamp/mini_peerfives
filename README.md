# mini_peerfives

Commands
npm i -- save
npx sequelize-cli init

npx sequelize-cli model:generate --name RewardHistory --attributes points:integer,givenBy:uuid,givenTo:uuid

npx sequelize-cli model:generate --name User --attributes name:string,p5Balance:integer,rewardBalance:integer
