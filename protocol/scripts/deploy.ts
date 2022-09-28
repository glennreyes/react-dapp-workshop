import { writeFile } from 'node:fs/promises';

async function main() {
  /**
   * GREETER
   */
  // TODO
  // console.info(`Greeter deployed to ${greeter.address}`);

  /**
   * ETHER WALLET
   */
  // TODO
  // console.info(`EtherWallet deployed to ${etherWallet.address}`);

  /**
   * MY ERC20 TOKEN
   */
  // TODO
  // console.info(`MyToken deployed to ${myToken.address}`);

  // Write the contract addresses to a file
  await writeFile(
    'deployment.json',
    JSON.stringify(
      {
        // TODO
        // etherWallet: { address: etherWallet.address },
        // greeter: { address: greeter.address },
        // myToken: { address: myToken.address },
      },
      null,
      2,
    ),
  );

  console.info('Deployment completed! 🚀');
}

(async () => {
  try {
    await main();
    process.exit(0);
  } catch (error) {
    console.error(error);
    process.exit(1);
  }
})();
