import { ArrowPathIcon } from '@heroicons/react/24/solid';
import { BigNumber } from 'ethers';

import { BigNumberDisplay } from '../../components/ui/BigNumberDisplay';
import { Button } from '../../components/ui/Button';
import { Icon } from '../../components/ui/Icon';
import { Loading } from '../../components/ui/Loading';
import { Stat } from '../../components/ui/Stat';

export interface GetBalanceProps {
  onSuccess?: (data: unknown) => void;
}

export function GetBalance({ onSuccess }: GetBalanceProps) {
  /**
   * TODO
   */
  const isLoading: any = false;
  const isError: any = false;
  const data: any = undefined;
  const refetch = () => null;
  console.info(onSuccess);

  if (isError) {
    return <h3>N/A</h3>;
  }

  if (isLoading) {
    return <Loading />;
  }

  const value = BigNumber.isBigNumber(data) ? BigNumber.from(data) : undefined;

  /**
   * Don't touch the code below and keep it as is.
   */
  return (
    <>
      <Stat title="Balance">
        <BigNumberDisplay
          className="font-bold"
          numberFormat={{
            currency: 'ETH',
            // Amount of decimals that Ether can have
            maximumFractionDigits: 18,
            style: 'currency',
          }}
          value={value}
        />
      </Stat>
      <Button className="gap-3" onClick={() => refetch()}>
        <Icon icon={ArrowPathIcon} />
        Refetch
      </Button>
    </>
  );
}
