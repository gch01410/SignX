
    if(window.web3){
        web3Provider = window.web3.currentProvider
    } else {
        web3Provider = new web3.providers.HttpProvider("http://localhost:7545");
    }
    window.web3 = new Web3(web3Provider);

    web3.eth.defaultAccount = '0xc91325635fadce727f04dcf5bd9dbc2d946649fa';
    const contract = web3.eth.contract(initAbi());
    window.app = contract.at('0x0ab3976b6dcd267b4597868efe61d345ef50e0e2');



    app.updateAccident.sendTransaction('user1','대인사고',+new Date(), (e,r)=>{
        console.log('success')
    });

    app.Accident({userId: user}, {fromBlock: 0, toBlock: 'latest'})
        .get((e,r)=>{
            console.log(r[0].args.accidentInfo, r[0].args.carCorporation, getDate(new Date(r[0].args.timestamp.c[0])));
        });


function getDate(timestamp) {
    let date = new Date(timestamp*1000);
    let year = date.getFullYear();
    let month = date.getMonth()+1;
    let day = date.getDate();
    return year+'.'+(month<10?'0'+month : month)+'.'+(day<10?'0'+day:day);
}