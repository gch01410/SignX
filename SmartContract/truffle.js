const HDWalletProvider = require("truffle-hdwallet-provider-privkey");
const privateKey = '0E18F78995340A702EA5A9D2A8B78EB35630B2C734140C7DBED5F539DE66AB9B';
const accessToken = '76997662fe974862805187c5fb128d97';

module.exports = {
    networks: {
        ropsten: {
            provider: () => new HDWalletProvider([privateKey], 'https://ropsten.infura.io/' + accessToken),
            network_id: 2,
            gas: 6000000,
            gasPrice: 20000000000
        }, development: {
            host: "127.0.0.1",
            port: 8545,
            gas:  4000000,
            network_id: "*"
        }
    }
};
