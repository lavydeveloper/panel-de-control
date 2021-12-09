export const getID = () =>{

    let client = new ClientJS(); //Crear fingerprint
    let fingerprint = client.getFingerprint(); //Obtener huella del cliente

    return fingerprint;
}