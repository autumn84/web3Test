var Web3 = require("web3");

// 连接到以太坊节点
const provider = new Web3.providers.HttpProvider("http://**:8545");
// 创建web3对象
const web3 = new Web3('');
web3.setProvider(provider);

console.log(web3);

(async() => {
const blockAfter = await web3.eth.getBlockNumber();
console.log(blockAfter);

// 合约ABI
var loopringV3Abi = [{"constant":true,"inputs":[],"name":"BURNRATE_TIER2","outputs":[{"name":"","type":"uint16"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"BURNRATE_TIER1","outputs":[{"name":"","type":"uint16"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"downtimePriceLRCPerDay","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"name":"_blockVerifierAddress","type":"address"},{"name":"_exchangeCreationCostLRC","type":"uint256"},{"name":"_tierUpgradeCostBips","type":"uint16"},{"name":"_maxWithdrawalFee","type":"uint256"},{"name":"_downtimePriceLRCPerDay","type":"uint256"},{"name":"_withdrawalFineLRC","type":"uint256"},{"name":"_tokenRegistrationFeeLRCBase","type":"uint256"},{"name":"_tokenRegistrationFeeLRCDalta","type":"uint256"}],"name":"updateSettings","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[],"name":"withdrawalFineLRC","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[{"name":"","type":"uint256"}],"name":"exchanges","outputs":[{"name":"","type":"address"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"name":"exchangeId","type":"uint256"}],"name":"burnAllStake","outputs":[{"name":"burnedLRC","type":"uint256"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[],"name":"lrcAddress","outputs":[{"name":"","type":"address"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"tokenRegistrationFeeLRCDelta","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"wethAddress","outputs":[{"name":"","type":"address"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"TIER_UPGRADE_DURATION","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"BURNRATE_TIER3","outputs":[{"name":"","type":"uint16"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"BURNRATE_TIER4","outputs":[{"name":"","type":"uint16"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[{"name":"token","type":"address"}],"name":"getLRCCostToBuydownTokenBurnRate","outputs":[{"name":"amountLRC","type":"uint256"},{"name":"currentTier","type":"uint8"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"exchangeCreationCostLRC","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"name":"exchangeId","type":"uint256"},{"name":"amountLRC","type":"uint256"}],"name":"depositStake","outputs":[{"name":"stakedLRC","type":"uint256"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[],"name":"totalStake","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"blockVerifierAddress","outputs":[{"name":"","type":"address"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"tokenRegistrationFeeLRCBase","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"exchangeDeployerAddress","outputs":[{"name":"","type":"address"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"name":"exchangeId","type":"uint256"},{"name":"recipient","type":"address"},{"name":"requestedAmount","type":"uint256"}],"name":"withdrawStake","outputs":[{"name":"amount","type":"uint256"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"name":"exchangeId","type":"uint256"},{"name":"amount","type":"uint256"}],"name":"burnStake","outputs":[{"name":"burnedLRC","type":"uint256"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[],"name":"tierUpgradeCostBips","outputs":[{"name":"","type":"uint16"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[{"name":"exchangeId","type":"uint256"}],"name":"getStake","outputs":[{"name":"stakedLRC","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"name":"operator","type":"address"},{"name":"onchainDataAvailability","type":"bool"}],"name":"createExchange","outputs":[{"name":"exchangeId","type":"uint256"},{"name":"exchangeAddress","type":"address"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"name":"token","type":"address"},{"name":"recipient","type":"address"}],"name":"withdrawTheBurn","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[{"name":"token","type":"address"}],"name":"getTokenBurnRate","outputs":[{"name":"burnRate","type":"uint16"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[{"name":"","type":"address"}],"name":"tokens","outputs":[{"name":"tokenAddress","type":"address"},{"name":"tier","type":"uint8"},{"name":"tierValidUntil","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"name":"token","type":"address"}],"name":"buydownTokenBurnRate","outputs":[{"name":"amountBurned","type":"uint256"},{"name":"currentTier","type":"uint8"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[],"name":"maxWithdrawalFee","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"payable":true,"stateMutability":"payable","type":"fallback"},{"anonymous":false,"inputs":[{"indexed":true,"name":"exchangeId","type":"uint256"},{"indexed":true,"name":"exchangeAddress","type":"address"},{"indexed":true,"name":"owner","type":"address"},{"indexed":false,"name":"operator","type":"address"},{"indexed":false,"name":"burnedLRC","type":"uint256"}],"name":"ExchangeCreated","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"name":"exchangeId","type":"uint256"},{"indexed":false,"name":"amount","type":"uint256"}],"name":"StakeDeposited","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"name":"exchangeId","type":"uint256"},{"indexed":false,"name":"amount","type":"uint256"}],"name":"StakeBurned","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"name":"exchangeId","type":"uint256"},{"indexed":false,"name":"amount","type":"uint256"}],"name":"StakeWithdrawn","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"name":"time","type":"uint256"}],"name":"SettingsUpdated","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"name":"token","type":"address"},{"indexed":true,"name":"tier","type":"uint256"},{"indexed":false,"name":"time","type":"uint256"}],"name":"TokenBurnRateDown","type":"event"}];

var exchangeAbi = [{"constant":true,"inputs":[],"name":"getLRCFeeForRegisteringOneMoreToken","outputs":[{"name":"feeLRC","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[{"name":"blockIdx","type":"uint256"}],"name":"getBlock","outputs":[{"name":"merkleRoot","type":"bytes32"},{"name":"publicDataHash","type":"bytes32"},{"name":"blockState","type":"uint8"},{"name":"blockType","type":"uint8"},{"name":"blockSize","type":"uint16"},{"name":"timestamp","type":"uint32"},{"name":"numDepositRequestsCommitted","type":"uint32"},{"name":"numWithdrawalRequestsCommitted","type":"uint32"},{"name":"blockFeeWithdrawn","type":"bool"},{"name":"numWithdrawalsDistributed","type":"uint16"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"name":"tokenAddress","type":"address"}],"name":"registerToken","outputs":[{"name":"tokenID","type":"uint16"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[{"name":"durationSeconds","type":"uint256"}],"name":"getDowntimeCostLRC","outputs":[{"name":"costLRC","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"name":"durationSeconds","type":"uint256"}],"name":"purchaseDowntime","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"name":"blockIdx","type":"uint256"},{"name":"proof","type":"uint256[8]"}],"name":"verifyBlock","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[],"name":"getNumBlocksFinalized","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[],"name":"burnStake","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"name":"tokenAddress","type":"address"}],"name":"disableTokenDeposit","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"name":"blockIdx","type":"uint256"}],"name":"revertBlock","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[],"name":"createFeeRecipientAccount","outputs":[{"name":"accountID","type":"uint24"}],"payable":true,"stateMutability":"payable","type":"function"},{"constant":false,"inputs":[{"name":"tokenAddress","type":"address"},{"name":"amount","type":"uint96"}],"name":"deposit","outputs":[],"payable":true,"stateMutability":"payable","type":"function"},{"constant":true,"inputs":[{"name":"tokenAddress","type":"address"}],"name":"getTokenID","outputs":[{"name":"tokenID","type":"uint16"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[{"name":"index","type":"uint256"}],"name":"getDepositRequest","outputs":[{"name":"accumulatedHash","type":"bytes32"},{"name":"accumulatedFee","type":"uint256"},{"name":"timestamp","type":"uint32"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"name":"_accountCreationFeeETH","type":"uint256"},{"name":"_accountUpdateFeeETH","type":"uint256"},{"name":"_depositFeeETH","type":"uint256"},{"name":"_withdrawalFeeETH","type":"uint256"}],"name":"setFees","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"name":"tokenAddress","type":"address"}],"name":"enableTokenDeposit","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"name":"pubKeyX","type":"uint256"},{"name":"pubKeyY","type":"uint256"}],"name":"createOrUpdateAccount","outputs":[{"name":"accountID","type":"uint24"},{"name":"isAccountNew","type":"bool"}],"payable":true,"stateMutability":"payable","type":"function"},{"constant":true,"inputs":[],"name":"getBlockHeight","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"getNumDepositRequestsProcessed","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"name":"owner","type":"address"},{"name":"token","type":"address"},{"name":"pubKeyX","type":"uint256"},{"name":"pubKeyY","type":"uint256"},{"name":"nonce","type":"uint32"},{"name":"balance","type":"uint96"},{"name":"tradeHistoryRoot","type":"uint256"},{"name":"accountMerkleProof","type":"uint256[20]"},{"name":"balanceMerkleProof","type":"uint256[8]"}],"name":"withdrawFromMerkleTreeFor","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[],"name":"getRemainingDowntime","outputs":[{"name":"durationSeconds","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"name":"tokenAddress","type":"address"},{"name":"amount","type":"uint96"}],"name":"withdraw","outputs":[],"payable":true,"stateMutability":"payable","type":"function"},{"constant":true,"inputs":[],"name":"getGlobalSettings","outputs":[{"name":"MAX_PROOF_GENERATION_TIME_IN_SECONDS","type":"uint32"},{"name":"MAX_OPEN_DEPOSIT_REQUESTS","type":"uint16"},{"name":"MAX_OPEN_WITHDRAWAL_REQUESTS","type":"uint16"},{"name":"MAX_AGE_UNFINALIZED_BLOCK_UNTIL_WITHDRAW_MODE","type":"uint32"},{"name":"MAX_AGE_REQUEST_UNTIL_FORCED","type":"uint32"},{"name":"MAX_AGE_REQUEST_UNTIL_WITHDRAW_MODE","type":"uint32"},{"name":"MAX_TIME_TO_DISTRIBUTE_WITHDRAWALS","type":"uint32"},{"name":"MAX_TIME_IN_SHUTDOWN_BASE","type":"uint32"},{"name":"MAX_TIME_IN_SHUTDOWN_DELTA","type":"uint32"},{"name":"TIMESTAMP_HALF_WINDOW_SIZE_IN_SECONDS","type":"uint32"},{"name":"FEE_BLOCK_FINE_START_TIME","type":"uint32"},{"name":"FEE_BLOCK_FINE_MAX_DURATION","type":"uint32"},{"name":"MAX_NUM_TOKENS","type":"uint256"},{"name":"MAX_NUM_ACCOUNTS","type":"uint256"}],"payable":false,"stateMutability":"pure","type":"function"},{"constant":true,"inputs":[],"name":"isInWithdrawalMode","outputs":[{"name":"","type":"bool"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"name":"token","type":"address"},{"name":"pubKeyX","type":"uint256"},{"name":"pubKeyY","type":"uint256"},{"name":"nonce","type":"uint32"},{"name":"balance","type":"uint96"},{"name":"tradeHistoryRoot","type":"uint256"},{"name":"accountMerkleProof","type":"uint256[20]"},{"name":"balanceMerkleProof","type":"uint256[8]"}],"name":"withdrawFromMerkleTree","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[],"name":"getNumAccounts","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"name":"recipient","type":"address"},{"name":"tokenAddress","type":"address"},{"name":"amount","type":"uint96"}],"name":"depositTo","outputs":[],"payable":true,"stateMutability":"payable","type":"function"},{"constant":false,"inputs":[{"name":"depositIdx","type":"uint256"}],"name":"withdrawFromDepositRequest","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[],"name":"getNumAvailableDepositSlots","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"name":"_operator","type":"address"}],"name":"setOperator","outputs":[{"name":"oldOperator","type":"address"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"name":"pubKeyX","type":"uint256"},{"name":"pubKeyY","type":"uint256"},{"name":"tokenAddress","type":"address"},{"name":"amount","type":"uint96"}],"name":"updateAccountAndDeposit","outputs":[{"name":"accountID","type":"uint24"},{"name":"isAccountNew","type":"bool"}],"payable":true,"stateMutability":"payable","type":"function"},{"constant":false,"inputs":[{"name":"blockIdx","type":"uint256"},{"name":"feeRecipient","type":"address"}],"name":"withdrawBlockFee","outputs":[{"name":"feeAmount","type":"uint256"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[],"name":"isShutdown","outputs":[{"name":"","type":"bool"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"getRequestStats","outputs":[{"name":"numDepositRequestsProcessed","type":"uint256"},{"name":"numAvailableDepositSlots","type":"uint256"},{"name":"numWithdrawalRequestsProcessed","type":"uint256"},{"name":"numAvailableWithdrawalSlots","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"name":"recipient","type":"address"}],"name":"withdrawStake","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"name":"blockType","type":"uint8"},{"name":"blockSize","type":"uint16"},{"name":"data","type":"bytes"}],"name":"commitBlock","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[{"name":"index","type":"uint256"}],"name":"getWithdrawRequest","outputs":[{"name":"accumulatedHash","type":"bytes32"},{"name":"accumulatedFee","type":"uint256"},{"name":"timestamp","type":"uint32"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"getFees","outputs":[{"name":"_accountCreationFeeETH","type":"uint256"},{"name":"_accountUpdateFeeETH","type":"uint256"},{"name":"_depositFeeETH","type":"uint256"},{"name":"_withdrawalFeeETH","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"getNumAvailableWithdrawalSlots","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"getNumWithdrawalRequestsProcessed","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[{"name":"merkleRoot","type":"uint256"},{"name":"accountID","type":"uint24"},{"name":"tokenID","type":"uint16"},{"name":"pubKeyX","type":"uint256"},{"name":"pubKeyY","type":"uint256"},{"name":"nonce","type":"uint32"},{"name":"balance","type":"uint96"},{"name":"tradeHistoryRoot","type":"uint256"},{"name":"accountMerkleProof","type":"uint256[20]"},{"name":"balanceMerkleProof","type":"uint256[8]"}],"name":"isAccountBalanceCorrect","outputs":[{"name":"","type":"bool"}],"payable":false,"stateMutability":"pure","type":"function"},{"constant":false,"inputs":[{"name":"blockIdx","type":"uint256"},{"name":"maxNumWithdrawals","type":"uint256"}],"name":"distributeWithdrawals","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[{"name":"tokenID","type":"uint16"}],"name":"getTokenAddress","outputs":[{"name":"tokenAddress","type":"address"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"name":"blockIdx","type":"uint256"},{"name":"slotIdx","type":"uint256"}],"name":"withdrawFromApprovedWithdrawal","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[{"name":"owner","type":"address"}],"name":"getAccount","outputs":[{"name":"accountID","type":"uint24"},{"name":"pubKeyX","type":"uint256"},{"name":"pubKeyY","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"getStake","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[],"name":"shutdown","outputs":[{"name":"success","type":"bool"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"anonymous":false,"inputs":[{"indexed":true,"name":"owner","type":"address"},{"indexed":true,"name":"id","type":"uint24"},{"indexed":false,"name":"pubKeyX","type":"uint256"},{"indexed":false,"name":"pubKeyY","type":"uint256"}],"name":"AccountCreated","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"name":"owner","type":"address"},{"indexed":true,"name":"id","type":"uint24"},{"indexed":false,"name":"pubKeyX","type":"uint256"},{"indexed":false,"name":"pubKeyY","type":"uint256"}],"name":"AccountUpdated","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"name":"token","type":"address"},{"indexed":true,"name":"tokenId","type":"uint16"}],"name":"TokenRegistered","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"name":"exchangeId","type":"uint256"},{"indexed":false,"name":"oldOperator","type":"address"},{"indexed":false,"name":"newOperator","type":"address"}],"name":"OperatorChanged","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"name":"exchangeId","type":"uint256"},{"indexed":false,"name":"accountCreationFeeETH","type":"uint256"},{"indexed":false,"name":"accountUpdateFeeETH","type":"uint256"},{"indexed":false,"name":"depositFeeETH","type":"uint256"},{"indexed":false,"name":"withdrawalFeeETH","type":"uint256"}],"name":"FeesUpdated","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"name":"timestamp","type":"uint256"}],"name":"Shutdown","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"name":"blockIdx","type":"uint256"},{"indexed":true,"name":"publicDataHash","type":"bytes32"}],"name":"BlockCommitted","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"name":"blockIdx","type":"uint256"}],"name":"BlockVerified","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"name":"blockIdx","type":"uint256"}],"name":"BlockFinalized","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"name":"blockIdx","type":"uint256"}],"name":"Revert","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"name":"depositIdx","type":"uint256"},{"indexed":true,"name":"accountID","type":"uint24"},{"indexed":true,"name":"tokenID","type":"uint16"},{"indexed":false,"name":"amount","type":"uint96"},{"indexed":false,"name":"pubKeyX","type":"uint256"},{"indexed":false,"name":"pubKeyY","type":"uint256"}],"name":"DepositRequested","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"name":"blockIdx","type":"uint256"},{"indexed":false,"name":"amount","type":"uint256"}],"name":"BlockFeeWithdrawn","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"name":"withdrawalIdx","type":"uint256"},{"indexed":true,"name":"accountID","type":"uint24"},{"indexed":true,"name":"tokenID","type":"uint16"},{"indexed":false,"name":"amount","type":"uint96"}],"name":"WithdrawalRequested","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"name":"accountID","type":"uint24"},{"indexed":true,"name":"tokenID","type":"uint16"},{"indexed":false,"name":"to","type":"address"},{"indexed":false,"name":"amount","type":"uint96"}],"name":"WithdrawalCompleted","type":"event"}];

web3.eth.getAccounts()
.then(console.log);

// 合约地址
var v3Addr = "0x0faf647ac905fF0Bc8d0eF88c8f5De968CFC3F43";
var exchangeAddr = "";

// 通过ABI和地址获取已部署的合约对象
var loopringV3 = web3.eth.Contract(loopringV3Abi, v3Addr);
var exchange = web3.eth.Contract(exchangeAbi, exchangeAddr);

var stake = await loopringV3.methods.getStake(0).call();
console.log("stake: ", stake);

var downtimePriceLRCPerDay = await loopringV3.methods.downtimePriceLRCPerDay().call();
console.log("downtimePriceLRCPerDay: ", downtimePriceLRCPerDay);

var lrcAddress = await loopringV3.methods.lrcAddress().call();
console.log("lrcAddress: ", lrcAddress);

var burnRate = await loopringV3.methods.getTokenBurnRate("0x926861324599A614091BB2Cd3b3852cB1C2f465d").call();
console.log("burnRate: ", burnRate);


})();
