import type { FormEvent } from 'react';
import { useCallback } from 'react';

import { Alert } from '../../components/ui/Alert';
import { Button } from '../../components/ui/Button';
import { NumberInput } from '../../components/ui/NumberInput';

export interface DepositEtherProps {
  onSuccess?: (data: unknown) => void;
}

export function DepositEther({ onSuccess }: DepositEtherProps) {
  /**
   * TODO
   */
  const setValue: any = () => null;
  const value = '';
  const isLoading: any = false;
  const isSuccess: any = false;
  console.info(onSuccess);

  const handleSubmit = useCallback((event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    // TODO: Implement this
  }, []);

  /**
   * Don't touch the code below and keep it as is.
   */
  return (
    <form
      className="flex w-full max-w-md flex-col space-y-4"
      onSubmit={handleSubmit}
    >
      <NumberInput
        disabled={isLoading || isSuccess}
        id="value"
        label="Amount in ETH"
        onChange={(event) => setValue(event.target.value)}
        required
        value={value}
      />
      <Button disabled={isLoading} loading={isLoading} type="submit">
        {isSuccess ? 'Send new transaction' : 'Submit'}
      </Button>
      {isSuccess && <Alert>Transaction successful!</Alert>}
    </form>
  );
}
