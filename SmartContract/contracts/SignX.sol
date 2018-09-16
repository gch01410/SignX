pragma solidity ^0.4.0;



contract SignX {

    address private owner;
    bool private stopped;

    struct User{
        bytes32 userId;
        uint mileage;
        uint numberOfUse;
        uint numberOfAccident;
        bool exists;
    }

    struct CarCorporation{
        address addr;
        string description;
        bool exists;
    }

    mapping(bytes32 => User) public users;
    mapping(address => CarCorporation) public carCorporations;

    event Accident(bytes32 indexed userId, string carCorporation, string accidentInfo, uint timestamp);


    modifier onlyOwner(){
        require(msg.sender == owner);
        _;
    }

    modifier onlyCorporation(){
        CarCorporation memory carCorporation = carCorporations[msg.sender];
        require(carCorporation.exists);
        _;
    }

    modifier isStopped(){
        require(stopped == false);
        _;
    }

    constructor() public{
        owner = msg.sender;
    }

    function stringToBytes32(string memory source) private pure returns (bytes32 result) {
        bytes memory tempEmptyStringTest = bytes(source);
        if (tempEmptyStringTest.length == 0) {
            return 0x0;
        }

        assembly {
            result := mload(add(source, 32))
        }
    }



    function registerUser(string _userId) external onlyCorporation isStopped{   // 카쉐어링회사가 트랜잭션을 발생? 개인이 발생? signX가 발생?
        bytes32 userId = stringToBytes32(_userId);
        User storage user = users[userId];

        require(!user.exists);

        user.userId = userId;
        user.exists = true;
    }



    function registerCorporation(address _addr, string _description) external onlyOwner isStopped{
        CarCorporation storage carCorporation = carCorporations[_addr];

        require(!carCorporation.exists);

        carCorporation.addr = _addr;
        carCorporation.description = _description;
        carCorporation.exists = true;
    }

    function unRegisterUser(string _userId) external onlyOwner isStopped{
        bytes32 userId = stringToBytes32(_userId);
        delete users[userId];
    }

    function unRegisterCorporation(address _addr) external onlyOwner isStopped{
        delete carCorporations[_addr];
    }

    function update(string _userId, uint _mileage) external onlyCorporation isStopped{
        bytes32 userId = stringToBytes32(_userId);
        User storage user = users[userId];

        require(user.exists);

        user.mileage += _mileage;
        user.numberOfUse ++;
    }

    function updateAccident(string _userId, string _AccidentInfo, uint _timestamp) external onlyCorporation isStopped{   // time을 timestamp로 할지? string으로 직접 입력할지?
        bytes32 userId = stringToBytes32(_userId);
        User storage user = users[userId];
        CarCorporation memory carCorporation = carCorporations[msg.sender];

        require(user.exists);

        user.numberOfAccident ++;

        emit Accident(user.userId, carCorporation.description, _AccidentInfo, _timestamp);
    }

    function getUser(string _userId) external isStopped view returns(bytes32, uint, uint, uint){
        bytes32 userId = stringToBytes32(_userId);
        User memory user = users[userId];

        require(user.exists);

        return (user.userId, user.mileage, user.numberOfUse, user.numberOfAccident);
    }

    function getCarCorporation(address _addr) external isStopped view returns (address, string){
        CarCorporation memory carCorporation = carCorporations[_addr];

        require(carCorporation.exists);

        return (carCorporation.addr, carCorporation.description);
    }

    function setStopped(bool _stopped) external onlyOwner{
        stopped = _stopped;
    }
}