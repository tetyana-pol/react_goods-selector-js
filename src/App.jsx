import 'bulma/css/bulma.css';
import './App.scss';
import { useState } from 'react';
import cn from 'classnames';

export const goods = [
  'Dumplings',
  'Carrot',
  'Eggs',
  'Ice cream',
  'Apple',
  'Bread',
  'Fish',
  'Honey',
  'Jam',
  'Garlic',
];

export const App = () => {
  const [selectedGood, setSelectedGood] = useState('Jam');

  return (
    <main className="section container">
      {selectedGood !== null
        ? (
          <h1 className="title is-flex is-align-items-center">
            {`${selectedGood} is selected`}

            <button
              data-cy="ClearButton"
              type="button"
              className="delete ml-3"
              onClick={() => setSelectedGood(null)}
            />
          </h1>
        )
        : (
          <h1 className="title is-flex is-align-items-center">
            No goods selected
          </h1>
        )
      }

      <table className="table">
        <tbody>
          {goods.map((good) => {
            const isSelectedGood = good === selectedGood;

            return (
              <tr
                key={good}
                data-cy="Good"
                className={cn(
                  {
                    'has-background-success-light': isSelectedGood,
                  },
                )}
              >
                <td>
                  <button
                    data-cy={isSelectedGood ? 'RemoveButton' : 'AddButton'}
                    type="button"
                    className={cn('button', { 'is-info': isSelectedGood })}
                    onClick={() => setSelectedGood(isSelectedGood
                      ? null : good)}
                  >
                    {isSelectedGood ? '-' : '+'}
                  </button>
                </td>

                <td data-cy="GoodTitle" className="is-vcentered">
                  {good}
                </td>
              </tr>
            );
          })
          }
        </tbody>
      </table>
    </main>
  );
};
