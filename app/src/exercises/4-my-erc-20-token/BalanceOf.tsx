import { ArrowPathIcon } from '@heroicons/react/24/solid';

import { AddressInput } from '../../components/ui/AddressInput';
import { BigNumberDisplay } from '../../components/ui/BigNumberDisplay';
import { Button } from '../../components/ui/Button';
import { Icon } from '../../components/ui/Icon';
import { Loading } from '../../components/ui/Loading';
import { Stat } from '../../components/ui/Stat';

export interface BalanceOfProps {
  onSuccess?: (data: unknown) => void;
}

export function BalanceOf({ onSuccess }: BalanceOfProps) {
  /**
   * TODO
   */
  const setAccount: any = () => null;
  const account = '';
  const isLoading: any = false;
  const symbol = undefined;
  const balance = undefined;
  const refetch = () => null;
  console.info(onSuccess);

  /**
   * Don't touch the code below and keep it as is.
   */
  return (
    <div className="flex w-full max-w-md flex-col space-y-4">
      <AddressInput
        disabled={isLoading}
        id="to"
        label="View balance of account"
        onChange={(event) => setAccount(event.target.value)}
        required
        value={account}
      />
      {isLoading ? (
        <Loading />
      ) : (
        <Stat title="Balance">
          <BigNumberDisplay
            className="font-bold"
            numberFormat={{
              currency: symbol,
              // Amount of decimals that Ether can have
              maximumFractionDigits: 18,
              style: 'currency',
            }}
            value={balance}
          />
        </Stat>
      )}
      <Button className="gap-3" onClick={() => refetch()}>
        <Icon icon={ArrowPathIcon} />
        Refetch
      </Button>
    </div>
  );
}
