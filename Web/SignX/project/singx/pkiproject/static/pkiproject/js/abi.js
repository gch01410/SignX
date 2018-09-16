function initAbi() {
    const abi = [
        {
            "anonymous": false,
            "inputs": [
                {
                    "indexed": true,
                    "name": "userId",
                    "type": "bytes32"
                },
                {
                    "indexed": false,
                    "name": "carCorporation",
                    "type": "string"
                },
                {
                    "indexed": false,
                    "name": "accidentInfo",
                    "type": "string"
                },
                {
                    "indexed": false,
                    "name": "timestamp",
                    "type": "uint256"
                }
            ],
            "name": "Accident",
            "type": "event"
        },
        {
            "constant": false,
            "inputs": [
                {
                    "name": "_addr",
                    "type": "address"
                },
                {
                    "name": "_description",
                    "type": "string"
                }
            ],
            "name": "registerCorporation",
            "outputs": [],
            "payable": false,
            "stateMutability": "nonpayable",
            "type": "function"
        },
        {
            "constant": false,
            "inputs": [
                {
                    "name": "_userId",
                    "type": "string"
                }
            ],
            "name": "registerUser",
            "outputs": [],
            "payable": false,
            "stateMutability": "nonpayable",
            "type": "function"
        },
        {
            "constant": false,
            "inputs": [
                {
                    "name": "_stopped",
                    "type": "bool"
                }
            ],
            "name": "setStopped",
            "outputs": [],
            "payable": false,
            "stateMutability": "nonpayable",
            "type": "function"
        },
        {
            "constant": false,
            "inputs": [
                {
                    "name": "_addr",
                    "type": "address"
                }
            ],
            "name": "unRegisterCorporation",
            "outputs": [],
            "payable": false,
            "stateMutability": "nonpayable",
            "type": "function"
        },
        {
            "inputs": [],
            "payable": false,
            "stateMutability": "nonpayable",
            "type": "constructor"
        },
        {
            "constant": false,
            "inputs": [
                {
                    "name": "_userId",
                    "type": "string"
                }
            ],
            "name": "unRegisterUser",
            "outputs": [],
            "payable": false,
            "stateMutability": "nonpayable",
            "type": "function"
        },
        {
            "constant": false,
            "inputs": [
                {
                    "name": "_userId",
                    "type": "string"
                },
                {
                    "name": "_mileage",
                    "type": "uint256"
                }
            ],
            "name": "update",
            "outputs": [],
            "payable": false,
            "stateMutability": "nonpayable",
            "type": "function"
        },
        {
            "constant": false,
            "inputs": [
                {
                    "name": "_userId",
                    "type": "string"
                },
                {
                    "name": "_AccidentInfo",
                    "type": "string"
                },
                {
                    "name": "_timestamp",
                    "type": "uint256"
                }
            ],
            "name": "updateAccident",
            "outputs": [],
            "payable": false,
            "stateMutability": "nonpayable",
            "type": "function"
        },
        {
            "constant": true,
            "inputs": [
                {
                    "name": "",
                    "type": "address"
                }
            ],
            "name": "carCorporations",
            "outputs": [
                {
                    "name": "addr",
                    "type": "address"
                },
                {
                    "name": "description",
                    "type": "string"
                },
                {
                    "name": "exists",
                    "type": "bool"
                }
            ],
            "payable": false,
            "stateMutability": "view",
            "type": "function"
        },
        {
            "constant": true,
            "inputs": [
                {
                    "name": "_addr",
                    "type": "address"
                }
            ],
            "name": "getCarCorporation",
            "outputs": [
                {
                    "name": "",
                    "type": "address"
                },
                {
                    "name": "",
                    "type": "string"
                }
            ],
            "payable": false,
            "stateMutability": "view",
            "type": "function"
        },
        {
            "constant": true,
            "inputs": [
                {
                    "name": "_userId",
                    "type": "string"
                }
            ],
            "name": "getUser",
            "outputs": [
                {
                    "name": "",
                    "type": "bytes32"
                },
                {
                    "name": "",
                    "type": "uint256"
                },
                {
                    "name": "",
                    "type": "uint256"
                },
                {
                    "name": "",
                    "type": "uint256"
                }
            ],
            "payable": false,
            "stateMutability": "view",
            "type": "function"
        },
        {
            "constant": true,
            "inputs": [
                {
                    "name": "",
                    "type": "bytes32"
                }
            ],
            "name": "users",
            "outputs": [
                {
                    "name": "userId",
                    "type": "bytes32"
                },
                {
                    "name": "mileage",
                    "type": "uint256"
                },
                {
                    "name": "numberOfUse",
                    "type": "uint256"
                },
                {
                    "name": "numberOfAccident",
                    "type": "uint256"
                },
                {
                    "name": "exists",
                    "type": "bool"
                }
            ],
            "payable": false,
            "stateMutability": "view",
            "type": "function"
        }
    ];

    return abi;
}