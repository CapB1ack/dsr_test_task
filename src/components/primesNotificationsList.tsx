import * as React from 'react';
import {Notification} from 'src/components/notification';
import {IPrimes} from 'src/store/model';

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
        {primesOrder.map(prime => <Notification
            key={prime}
            onClick={handleHideNotification(prime)}
            value={primes[prime].value}
            calculationDuration={primes[prime].calculationDuration}
            isHidden={primes[prime].isHidden}
          />
        )}
      </div>
    </div>
  )
};