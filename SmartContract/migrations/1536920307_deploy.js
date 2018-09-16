const SignX = artifacts.require('./SignX');

module.exports = function(deployer) {
    deployer.deploy(SignX);
};