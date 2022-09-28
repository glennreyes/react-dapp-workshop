import { ArrowPathIcon } from '@heroicons/react/24/solid';

import { Button } from '../../components/ui/Button';
import { Icon } from '../../components/ui/Icon';
import { Loading } from '../../components/ui/Loading';
import { Stat } from '../../components/ui/Stat';

export interface ReadGreetingDataProps {
  onSuccess?: (data: unknown) => void;
}

export function ReadGreetingData({ onSuccess }: ReadGreetingDataProps) {
  /**
   * TODO
   */
  const data: any = undefined;
  const isLoading: any = false;
  const isError: any = false;
  const refetch = () => null;
  console.info(onSuccess);

  /**
   * Don't touch the code below and keep it as is.
   */
  if (isError) {
    return <h3>N/A</h3>;
  }

  if (isLoading) {
    return <Loading />;
  }

  return (
    <>
      {typeof data === 'string' && <Stat title="Greeting">{data}</Stat>}
      <Button className="gap-3" onClick={() => refetch()}>
        <Icon icon={ArrowPathIcon} />
        Refetch
      </Button>
    </>
  );
}
