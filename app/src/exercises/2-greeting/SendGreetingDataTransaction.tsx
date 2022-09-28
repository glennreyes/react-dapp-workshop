import type { FormEvent } from 'react';
import { useCallback } from 'react';

import { Alert } from '../../components/ui/Alert';
import { Button } from '../../components/ui/Button';
import { TextInput } from '../../components/ui/TextInput';

export interface SendGreetingDataTransactionProps {
  onSuccess?: (data: unknown) => void;
}

export function SendGreetingDataTransaction({
  onSuccess,
}: SendGreetingDataTransactionProps) {
  /**
   * TODO
   */
  const setGreeting: any = () => null;
  const greeting = '';
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
      <TextInput
        disabled={isLoading || isSuccess}
        id="greeting"
        label="Greeting"
        minLength={2}
        maxLength={56}
        onChange={(event) => setGreeting(event.target.value)}
        required
        value={greeting}
      />
      <Button disabled={isLoading} loading={isLoading} type="submit">
        {isSuccess ? 'Send new transaction' : 'Submit'}
      </Button>
      {isSuccess && <Alert>Transaction successful!</Alert>}
    </form>
  );
}
