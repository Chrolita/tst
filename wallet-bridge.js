async function connectSuiWallet() {
    if (window.suiWallet) {
        try {
            const result = await window.suiWallet.request({
                method: "sui_connect"
            });

            const address = result.accounts?.[0] || "necunoscut";
            SendMessage("WalletManager", "OnWalletConnected", address);
        } catch (error) {
            alert("Eroare la conectare: " + error.message);
        }
    } else {
        alert("Sui Wallet nu este instalat.");
    }
}
