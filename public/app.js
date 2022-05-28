import { useWallet, WalletStatus } from '@terra-money/wallet-provider';
console.log(useWallet);
const {
    status,
    network,
    wallets,
    availableConnectTypes,
    availableInstallTypes,
    availableConnections,
    supportFeatures,
    connect,
    install,
    disconnect,
  } = useWallet();

connect()

