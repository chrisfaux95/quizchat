export class CellAddressUtils {
  constructor(
    fieldWidth
  ) {
    this._fieldWidth = fieldWidth;
  }

  to2DAddresses(address) {
    const rowAddress = address % this._fieldWidth;

    return [rowAddress, (address - rowAddress) / this._fieldWidth];
  }

  to1DAddress(rowAddress, cellAddress) {
    return cellAddress * this._fieldWidth + rowAddress;
  }
}
