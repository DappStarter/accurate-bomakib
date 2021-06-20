require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'gesture brand tail tooth blanket crater remain evil hope area surge shaft'; 
let testAccounts = [
"0xf39715d4bb9cfbb559bc6aed6737c72ba77ca47da9de6a757ce5f6bb90188e0e",
"0x8a17d853bd1e6485074346587c902cf806086b3e4dd5efe349f9ce27ec3d8ca8",
"0x3819db10ae7166aa98c24791243010464333883b9d6ded816f1cac328860172f",
"0xf49db44f84fbd3818cf36b0cc57ea354d895167dec83175b0064edb876b6419a",
"0x58a12bed501bc1eebb1e0853864c93a7ba6ba58951c8bbe649f913c6f491449e",
"0x8193a77bff6515749556f9ae3d6cb839c91ed2088aa79a44753a42c415b7a043",
"0xe55a62d7556317f307452bfdcfe74a274348895d3d393963fc27525d47150ad3",
"0x9b12b1d063ea729ef668ff03e493bfc0773acb6df5bab1b5db0e6b4b91a69b8d",
"0xe8d655491160895aa0de3d35a3bd51e39701bcc21517941bd80a7bc555e41f9a",
"0x46b14f6b3e5e579527b0d49c207aeaf189c321864bfb15582043544569465569"
]; 
let devUri = 'https://rpc-mumbai.matic.today';

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
                10, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            gas: 2000000,
            network_id: 80001,
            confirmations: 1,
            timeoutBlocks: 100,
            skipDryRun: true
        }
    },
    compilers: {
        solc: {
            version: '^0.5.11'
        }
    }
};

