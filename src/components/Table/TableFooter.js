import React, { useCallback } from 'react';

// Components
import { PreviousButton, NextButton } from './Table.styles';

export function TableFooter({ colSpan, onPreviousPage, disabledPreviousPage, onNextPage, disabledNextPage }) {
  return (
    <tfoot>
      <tr>
        <td colSpan={colSpan}>
          <div className="d-flex justify-content-end">
            <PreviousButton onClick={onPreviousPage} disabled={disabledPreviousPage} />
            <NextButton onClick={onNextPage} disabled={disabledNextPage} />
          </div>
        </td>
      </tr>
    </tfoot>
  );
}