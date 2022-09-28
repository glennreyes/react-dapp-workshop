import { Address } from '../../components/ui/Address';
import type { ButtonProps } from '../../components/ui/Button';
import { Button } from '../../components/ui/Button';
import { classNames } from '../../utils';

type ConnectWalletProps = ButtonProps;

export function ConnectWallet({ className, ...props }: ConnectWalletProps) {
  /**
   * TODO
   * - Check out wagmi.sh to check out for the necessary Ethereum hooks to get the connect button implementation
   *   working correctly.
   * - The following parts below should be replaced by your implementation:
   */
  const address: any = undefined;
  const isConnected: any = false;
  const connect = () => null;
  const disconnect = () => null;

  /**
   * Don't touch the code below and keep it as is.
   */
  const classes = classNames(
    isConnected ? 'btn-secondary' : 'btn-primary',
    className,
  );

  if (isConnected) {
    const textClasses = classNames(
      'btn btn-ghost btn-disabled text-base-content no-animation normal-case gap-2',
      className,
    );

    return (
      <div className="flex items-center gap-1">
        <p className={textClasses}>
          {address ? (
            <>
              <span>Connected to:</span>
              <Address className="text-accent-focus">{address}</Address>
            </>
          ) : (
            <span>Connected</span>
          )}
        </p>
        <Button className={classes} onClick={() => disconnect()}>
          Disconnect
        </Button>
      </div>
    );
  }

  return (
    <Button className={classes} onClick={() => connect()} {...props}>
      Connect Wallet
    </Button>
  );
}
