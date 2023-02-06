//SPDX-License-Identifier: Unlicense
pragma solidity >=0.5.0 <0.9.0;
import "hardhat/console.sol";

contract Signup_signin {
    mapping(string => User) public users;

    struct User {
        string name;
        string email;
        bytes32 password;
        bool isVerified;
    }

    function signup(
        string memory _name,
        string memory _email,
        string memory _password
    ) public {
        require(!users[_email].isVerified, "User already exists");

        // Hash the password for storage
        bytes32 passwordHash = sha256(abi.encodePacked(_password));
        users[_email].name = _name;
        users[_email].email = _email;
        users[_email].password = passwordHash;
        users[_email].isVerified = true;
    }

    // function updateProfile(string memory _name, string memory _email, string memory _password) public {
    //    // require(users[msg.sender].name != "");
    //     users[msg.sender].name = _name;
    //     users[msg.sender].email = _email;
    //     users[msg.sender].password = _password;
    // }

    function signin(string memory _email, string memory _password)
        public
        view
        returns (bool)
    {
        // if (bytes(users[msg.sender].email).length != bytes(_email).length) {
        //     return false;
        // }
        // return keccak256(abi.encodePacked(users[msg.sender].email)) == keccak256(abi.encodePacked(_email));

        bool _check = false;
        if (!users[_email].isVerified) {
            _check = false;
            console.log("bye bye not exist");
            return _check;
        }

        // bytes32 passwordHash = sha256(abi.encodePacked(_password));
        // if (users[_email].password == passwordHash) {
        //     _check = true;
        // }

        bytes32 passwordHash = sha256(abi.encodePacked(_password));
        if (users[_email].password == passwordHash ) {
            _check = true;
        }
        
        return _check;
    }

    receive() external payable {}
}
