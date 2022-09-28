import type { FormEvent } from 'react';
import { useCallback } from 'react';

import { Alert } from '../../components/ui/Alert';
import { Button } from '../../components/ui/Button';
import { NumberInput } from '../../components/ui/NumberInput';

export interface MintProps {
  onSuccess?: (data: unknown) => void;
}

export function Mint({ onSuccess }: MintProps) {
  /**
   * TODO
   */
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
      <NumberInput
        disabled={isLoading || isSuccess}
        id="amount"
        label="Amount of tokens to mint"
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
