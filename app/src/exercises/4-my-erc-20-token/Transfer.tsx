import type { FormEvent } from 'react';
import { useCallback } from 'react';

import { AddressInput } from '../../components/ui/AddressInput';
import { Alert } from '../../components/ui/Alert';
import { Button } from '../../components/ui/Button';
import { NumberInput } from '../../components/ui/NumberInput';

export interface TransferProps {
  onSuccess?: (data: unknown) => void;
}

export function Transfer({ onSuccess }: TransferProps) {
  /**
   * TODO
   */
  const setTo: any = () => null;
  const to = '';
  const setAmount: any = () => null;
  const amount = '';
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
      <AddressInput
        disabled={isLoading || isSuccess}
        id="to"
        label="To address"
        onChange={(event) => setTo(event.target.value)}
        required
        value={to}
      />
      <NumberInput
        disabled={isLoading || isSuccess}
        id="amount"
        label="Amount"
        onChange={(event) => setAmount(event.target.value)}
        required
        value={amount}
      />
      <Button disabled={isLoading} loading={isLoading} type="submit">
        {isSuccess ? 'Send new transaction' : 'Submit'}
      </Button>
      {isSuccess && <Alert>Transaction successful!</Alert>}
    </form>
  );
}
