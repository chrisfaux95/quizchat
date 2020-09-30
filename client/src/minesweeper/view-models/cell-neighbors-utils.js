import { CellAddressUtils } from './internals/cell-address-utils';

export class CellNeighborsUtils {
  constructor(
    fieldWidth,
    fieldHeight
  ) {
    this._fieldWidth = fieldWidth;
    this._fieldHeight = fieldHeight;
    this._cellAddressUtils = new CellAddressUtils(fieldWidth);
  }

  canFloodFill(state, address) {
    return !this.getAddresses(address).some(addr => state[addr].isUnrevealedMine);
  }

  getAddresses(address) {
    const [rowAddress, cellAddress] = this._cellAddressUtils.to2DAddresses(address);
    const addresses = [];

    for (let rowAddressOffset = -1; rowAddressOffset < 2; rowAddressOffset++)
      for (let cellAddressOffset = -1; cellAddressOffset < 2; cellAddressOffset++)
        if (rowAddressOffset || cellAddressOffset) {
          const rowAddressWithOffset = rowAddress + rowAddressOffset;
          const cellAddressWithOffset = cellAddress + cellAddressOffset;

          this._doesAddressExist(rowAddressWithOffset, this._fieldWidth)
            && this._doesAddressExist(cellAddressWithOffset, this._fieldHeight)
              && addresses.push(this._cellAddressUtils.to1DAddress(rowAddressWithOffset, cellAddressWithOffset));
        }

    return addresses;
  }

  getMinedCount(state, address) {
    return this._getCountBy(state, address, 'isMined');
  }

  canRevealNeighbors(state, address) {
    return this.getMinedCount(state, address) === this._getCountBy(state, address, 'isFlagged');
  }

  _getCountBy(state, address, propName) {
    return this.getAddresses(address).reduce((acc, addr) => state[addr][propName] ? acc + 1 : acc, 0);
  }

  _doesAddressExist(address, criteria) {
    return -1 < address && address < criteria;
  }
}
