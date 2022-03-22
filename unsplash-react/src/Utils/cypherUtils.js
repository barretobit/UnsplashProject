var CryptoJS = require("crypto-js");

export function DecypherAccess() {
    const intervention = "givemeacontract,youwontregret";
    const accessEncrypted = "U2FsdGVkX18MCCZzd87lpxCIZdVJNisIC7djcER1aQfm7eOamSns/NCHEprgr81czPrGHI71woeunpQC18791g==";

    function decryptAccess(keyEncoded) {
        var bytes = CryptoJS.AES.decrypt(keyEncoded, intervention);
        return JSON.parse(bytes.toString(CryptoJS.enc.Utf8)).toString();
    }

    return decryptAccess(accessEncrypted);
}