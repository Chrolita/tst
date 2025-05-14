async function connectSuiWallet() {
    const wallet = window.suiWallet || window.slushWallet || window.wallet;

    if (!wallet) {
        alert("Niciun wallet compatibil Sui nu este instalat în browser.");
        return;
    }

    try {
        const result = await wallet.request({
            method: "sui_connect"
        });

        const address = result.accounts?.[0] || "necunoscut";
        SendMessage("WalletManager", "OnWalletConnected", address);
    } catch (error) {
        alert("Eroare la conectare: " + error.message);
    }
}