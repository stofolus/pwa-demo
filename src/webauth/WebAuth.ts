import { User } from "../database/UserStorage";

export class WebAuth {
  static async create(user: User) {
    const options: CredentialCreationOptions = {
      publicKey: {
        challenge: Uint8Array.from(getSecureString(), c => c.charCodeAt(0)),
        rp: {
          name: "My Company",
          id: "My Company Inc."
        },
        user: {
          id: Uint8Array.from(user.id, c => c.charCodeAt(0)),
          name: user.name,
          displayName: user.name
        },
        pubKeyCredParams: [{ alg: -7, type: "public-key" }],
        authenticatorSelection: {
          authenticatorAttachment: "cross-platform"
        },
        timeout: 60000,
        attestation: "none"
      }
    }
    console.log(options)
    try {
      const credential = await navigator.credentials.create(options);
      console.log(credential)
    } catch(e) {
      console.error(e);
    }
  }
}


/**
 * "Secure" ^^
 */
function getSecureString() {
  return (
    Math.random()
      .toString(36)
      .substr(2, 9) +
    Math.random()
      .toString(36)
      .substr(2, 9) +
    Math.random()
      .toString(36)
      .substr(2, 9)
  );
}
