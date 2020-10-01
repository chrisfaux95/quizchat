import { useState, useMemo } from 'react';

import produce from 'immer';

import difference from 'lodash/difference';
import range from 'lodash/range';

import { cellState, cellValue } from '../const';

import { Cell, CellNeighborsUtils } from '../view-models';

export const useField = ({ width, height, minesCount }) => {
  const length = width * height;

  const emptyField = useMemo(() => Array(length).fill(new Cell()), [length]);

  const [field, setField] = useState(emptyField);

  const cellNeighborsUtils = useMemo(() => new CellNeighborsUtils(width, height), [width, height]);

  const getFloodFilledField = (prevField, address, draftFn) => produce(prevField, draft => {
    // eslint-disable-next-line
    draftFn?.(draft);

    draft[address].state = cellState.Visible;

    const floodFill = cellAddr => {
      cellNeighborsUtils.canFloodFill(draft, cellAddr) && cellNeighborsUtils.getAddresses(cellAddr).forEach(addr => {
        const cell = draft[addr];
        const { isMined, isHidden, isFlagged } = cell;

        if (!isMined && isHidden && !isFlagged) {
          cell.state = cellState.Visible;

          floodFill(addr);
        }
      });
    };

    floodFill(address);
  });

  const getBustedField = (prevField, draftFn) => produce(prevField, draft => {
    draftFn(draft);

    draft.forEach((cell, addr) => {
      const { isUnrevealedMine, isMisplacedFlag } = cell;

      isUnrevealedMine && (cell.state = cellState.Visible);
      isMisplacedFlag && (draft[addr] = new Cell(cellValue.IncorrectGuess, cellState.Visible));
    });
  });

  const clear = () => {
    setField(emptyField);
  };

  const init = address => {
    setField(prevField => getFloodFilledField(prevField, address, draft => {
      const addresses = difference(range(length), [address, ...cellNeighborsUtils.getAddresses(address)]);
      const randomAddresses = new Set();

      while (randomAddresses.size < minesCount) randomAddresses.add(addresses[Math.random() * addresses.length | 0]);

      randomAddresses.forEach(addr => {
        draft[addr].value = cellValue.Mine;
      });

      draft.forEach((cell, addr) => {
        !cell.isMined && (cell.value = cellNeighborsUtils.getMinedCount(draft, addr));
      });
    }));
  };

  const revealCell = ({ isMined }, address) => {
    setField(prevField => isMined ? getBustedField(prevField, draft => {
      draft[address] = new Cell(cellValue.BustedMine, cellState.Visible);
    }) : getFloodFilledField(prevField, address));
  };

  const plantFlag = ({ isFlagged }, address) => {
    setField(prevField => produce(prevField, draft => {
      draft[address].state = cellState[isFlagged ? 'Hidden' : 'Flagged'];
    }));
  };

  const revealNeighbors = address => {
    setField(prevField => {
      if (cellNeighborsUtils.canFloodFill(prevField, address)) return getFloodFilledField(prevField, address);

      if (cellNeighborsUtils.canRevealNeighbors(prevField, address)) return getBustedField(prevField, draft => {
        cellNeighborsUtils.getAddresses(address).forEach(addr => {
          const cell = draft[addr];
          const { isUnrevealedMine, isMisplacedFlag } = cell;

          isUnrevealedMine && (cell.value = cellValue.BustedMine);
          isMisplacedFlag && (cell.value = cellValue.IncorrectGuess);

          cell.state = cellState.Visible;
        });
      });

      return prevField;
    });
  };

  const markMines = () => {
    setField(prevField => produce(prevField, draft => {
      draft.forEach(cell => {
        cell.isMined && (cell.state = cellState.Flagged);
      });
    }));
  };

  return { field, clear, init, revealCell, plantFlag, revealNeighbors, markMines };
};
