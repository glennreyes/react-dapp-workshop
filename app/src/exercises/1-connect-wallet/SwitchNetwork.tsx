import type { ButtonProps } from '../../components/ui/Button';
import { Button } from '../../components/ui/Button';
import { classNames } from '../../utils';

type SwitchNetworkProps = ButtonProps;

export function SwitchNetwork({ className, ...props }: SwitchNetworkProps) {
  /**
   * TODO
   * - Check out wagmi.sh to check out for the necessary Ethereum hooks to get the connect button implementation
   *   working correctly.
   * - The following parts below should be replaced by your implementation:
   */
  const chainName = 'Unknown';
  const isHardhatNetwork: any = false;
  const switchNetwork: any = undefined;
  const handleSwitchNetworkClick = () => null;

  if (!switchNetwork) {
    return null;
  }

  /**
   * Don't touch the code below and keep it as is.
   */
  const classes = classNames('btn-warning', className);
  const textClasses = classNames(
    'btn btn-ghost btn-disabled text-base-content no-animation normal-case gap-2',
    className,
  );

  return (
    <div className="flex items-center gap-1">
      <p className={textClasses}>
        Connected to{' '}
        <span className="text-accent-content inline-flex items-center gap-1">
          {chainName}
        </span>
      </p>
      {!isHardhatNetwork && (
        <Button
          className={classes}
          onClick={handleSwitchNetworkClick}
          {...props}
        >
          Switch Network
        </Button>
      )}
    </div>
  );
}
