import * as React from 'react';
import {Notification} from 'src/components/notification';
import {IPrimes} from 'src/store/model';

/**
 * Components props.
 *
 * {Function} onHideNotification Callback for removing notification from list.
 * {IPrimes} primes Hash of primes.
 * {number[]} primesOrder Order of founded primes.
 */
interface IProps {
  onHideNotification: (primeNumber: number) => void;
  primes: IPrimes;
  primesOrder: number[];
}

export const PrimesNotificationsList = ({primes, primesOrder, onHideNotification}: IProps) => {
  const handleHideNotification = (primeNumber: number) => () => {
    onHideNotification(primeNumber);
  };

  return (
    <div className="PrimesNotifications">
      <h2>Notifications</h2>
      <div className="PrimesNotifications__scroll">
        {primesOrder.map(prime => {
          const {value, calculationDuration, isHidden} = primes[prime];
          return (
            <Notification
              key={prime}
              onClick={handleHideNotification(prime)}
              value={value}
              calculationDuration={calculationDuration}
              isHidden={isHidden}
          />
          )}
        )}
      </div>
    </div>
  )
};