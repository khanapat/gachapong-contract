// SPDX-License-Identifier: MIT

pragma solidity 0.8.7;

import "@openzeppelin/contracts/access/Ownable.sol";
import "@openzeppelin/contracts/utils/structs/EnumerableSet.sol";

import "./utils/ICurrencyManager.sol";

contract CurrencyManager is Ownable, ICurrencyManager {
    using EnumerableSet for EnumerableSet.AddressSet;

    EnumerableSet.AddressSet private _whitelistedCurrencies;

    event CurrencyRemoved(address indexed currency);
    event CurrencyWhitelisted(address indexed currency);

    function addCurrency(address _currency) external override onlyOwner {
        require(
            _whitelistedCurrencies.add(_currency),
            "Currency: Already whitelisted."
        );

        emit CurrencyWhitelisted(_currency);
    }

    function removeCurrency(address _currency) external override onlyOwner {
        require(
            _whitelistedCurrencies.remove(_currency),
            "Currency: Not whitelisted."
        );

        emit CurrencyRemoved(_currency);
    }

    function isCurrencyWhitelisted(address _currency)
        external
        view
        override
        returns (bool)
    {
        return _whitelistedCurrencies.contains(_currency);
    }

    function viewCountWhitelistedCurrencies()
        external
        view
        override
        returns (uint256)
    {
        return _whitelistedCurrencies.length();
    }

    function viewWhitelistedCurrencies(uint256 _cursor, uint256 _size)
        external
        view
        override
        returns (address[] memory, uint256)
    {
        if (_size > _whitelistedCurrencies.length() - _cursor) {
            _size = _whitelistedCurrencies.length() - _cursor;
        }

        address[] memory whitelistedCurrencies = new address[](_size);

        for (uint256 i = 0; i < _size; i++) {
            whitelistedCurrencies[i] = _whitelistedCurrencies.at(_cursor + i);
        }

        return (whitelistedCurrencies, _cursor + _size);
    }
}
