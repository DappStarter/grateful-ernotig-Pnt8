require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'guess narrow fringe skull guard render remain purity hover knife bottom soda'; 
let testAccounts = [
"0xd518398f6b7f694162c698c50ed707e0f506405c46592ce9dc479674ee69f3fb",
"0xd2d57dbcc15fe361ac99d5bb4d6cdf537df7ca07f93c716e106927fcf0ca1774",
"0x6da596ac5652b70e7d4c22e1068eee8b9caeb12105d7d08e9c13b0ccdcf54e5b",
"0xb5defa447679fc2bd203d363a7755c4a48a6083ca9ebd94fa5ecc7dc91f35e5b",
"0x9a8e06bf6774c9e24ee93f4e8c7064d5467ed4274d80111891670cd97f2c8c5c",
"0x76a45804cc01ec81ade33943ce0cd3c407f714d2fdcfc9c589f90baf08ccfcd0",
"0xc632849c014d1fbdb15b38397c5ac0d8f138116409b8d892a075d789c2681b15",
"0xbe12502f5fc66ecfcf870bf9a6d9d05323b03028261a56905d3c2be6c2486de7",
"0xa56f3ae2013f4b5cf75d489bae44a12704aac07e023a9c81b86202b75fdc698c",
"0x362afc7d1978b73fc748f605576c01f4e8cea43f31ec3d35e98b411d7b8ee556"
]; 
let devUri = 'https://api.avax-test.network/ext/bc/C/rpc';

module.exports = {
    testAccounts,
    mnemonic,
    networks: {
        development: {
            uri: devUri,
            provider: () => new HDWalletProvider(
                mnemonic,
                devUri, // provider url
                0, // address index
                6, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            gas: 8000000,
            network_id: '*',
            chainId: 43113,
            skipDryRun: true
        }
    },
    compilers: {
        solc: {
            version: '^0.8.0'
        }
    }
};


