
var ToxAddon = require('./build/Release/ToxAddon');
module.exports.ToxAddon = ToxAddon;

var tox = new ToxAddon.ToxCore();

// Example: 
tox.toxOptionsNew();
tox.toxNew();

tox.toxCallbackSelfConnectionStatus(function(connectionStatus) { console.log("Connected: " + connectionStatus); });
tox.updateToxCallbackSelfConnectionStatus();

tox.toxBootstrap("178.62.250.138", 33445, "788236D34978D1D5BD822F0A5BEBD2C53C64CC31CD3149350EE27D4D9A2F9B6B");
tox.toxBootstrap("130.133.110.14", 33445, "461FA3776EF0FA655F1A05477DF1B3B614F7D6B124F7DB1DD4FE3C08B03B640F");
tox.toxBootstrap("128.199.199.197", 33445, "B05C8869DBB4EDDD308F43C1A974A20A725A36EACCA123862FDE9945BF9D3E09");
tox.toxBootstrap("146.185.136.123", 33445, "09993FAF174DFFDC515B398A2EFC5639C4E6D7B736FC864F89786B50EAF88C1A");
tox.toxBootstrap("193.124.186.205", 5228, "9906D65F2A4751068A59D30505C5FC8AE1A95E0843AE9372EAFA3BAB6AC16C2C");
tox.toxBootstrap("185.25.116.107", 33445, "DA4E4ED4B697F2E9B000EEFE3A34B554ACD3F45F5C96EAEA2516DD7FF9AF7B43");
tox.toxBootstrap("5.189.176.217", 33445, "2B2137E094F743AC8BD44652C55F41DFACC502F125E99E4FE24D40537489E32F");
tox.toxBootstrap("46.101.197.175", 443, "CD133B521159541FB1D326DE9850F5E56A6C724B5B8E5EB5CD8D950408E95707");
tox.toxBootstrap("46.101.197.175", 443, "CD133B521159541FB1D326DE9850F5E56A6C724B5B8E5EB5CD8D950408E95707");

(async function tick() {
	tox.toxIterate();
	setTimeout(tick, tox.toxIterationInterval());
})();