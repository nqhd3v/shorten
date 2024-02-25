import * as admin from "firebase-admin";
const FIREBASE_APP_NAME = "think@fb";

const initialFirebase = () => {
  const firebaseConfig = {
    type: "service_account",
    project_id: process.env.NEXT_PUBLIC_FIREBASE_PROJECT_ID,
    private_key_id: process.env.FIREBASE_PRIVATE_KEY_ID,
    private_key: process.env.FIREBASE_PRIVATE_KEY,
    client_email: process.env.FIREBASE_CLIENT_EMAIL,
    client_id: process.env.FIREBASE_CLIENT_ID,
    auth_uri: process.env.FIREBASE_AUTH_URI,
    token_uri: process.env.FIREBASE_TOKEN_URI,
    auth_provider_x509_cert_url: process.env.FIREBASE_AUTH_CERT_URL,
    client_x509_cert_url: process.env.FIREBASE_CLIENT_CERT_URL,
    universe_domain: process.env.FIREBASE_UNIVERSAL_DOMAIN,
  } as admin.ServiceAccount;

  const appInitialized = admin.apps.find(
    (a) => a && a.name === FIREBASE_APP_NAME
  );

  return (
    appInitialized ||
    admin.initializeApp(
      {
        credential: admin.credential.cert(firebaseConfig),
        // databaseURL: `https://${firebaseConfig.projectId}.firebaseio.com`,
        storageBucket: `${firebaseConfig.projectId}.appspot.com`,
      },
      FIREBASE_APP_NAME
    )
  );
};

export default initialFirebase();
