var admin = require("firebase-admin");

var serviceAccount = {
  type: "service_account",
  project_id: "personalportpolio",
  private_key_id: "757c3aaf55e4fb169d24289762d8f79c59c19377",
  private_key:
    "-----BEGIN PRIVATE KEY-----\nMIIEvQIBADANBgkqhkiG9w0BAQEFAASCBKcwggSjAgEAAoIBAQCrUB71r+NfuEvG\nBWrJNEeHbMdrkz+x44K7ootpcMGZLoUUXwR7QungeEZXl2DU3+Qs6hHdAW85zC8X\nE7jRn7kEoWxquow2nkNK9TpCrwgyDd2toRzrUuE4Y6x9tGButmmyr76ezKKALMcJ\nY5RcEd8pL3uiPotCSn1vdUB+DrAikzVzHJc4iVCDkKMXF2adeM7ui4teJHQJW9xb\nCI72ih4QiVZuYPSPYD6pVhRwHpw4qy1Xk9AC18KQ31ozEo+xmRaB2oeo1Qnug3Go\niP0jXREWL1WPc6CaHwGpWh06zPeUmu+EPT4L33bavK/W5fF0WfGDZvinwkK3rpal\nsecSIAuRAgMBAAECggEAANbuvukgs/T0FJ1tTn0BynxuTgT5yYA2IV+on6C6hyrY\n4r6cN9MuMKAgRqC+nA54mJ6BTcgqdJHfS3V4mPjnnAnjPVLqmeAsz+DLqzzevTmP\njAC7krzsTwWgiFluZU6CLjqxpEc4FukZRN7SwOCCy6mwmT0Fm1Kggp/ETBXb98Bn\nQi9tJBxESk5vZdy4Y5pBYHj39F0+yo8rE95ShPa9MOG1qfl8xkcu3Z3B6sMAAZm6\nj9EbAKSk8gHJSCRCWjOcJYzsASnE7M34g91nA+cXlADd8K9pYJbqw2MMKrfBP3CN\nkzfTQZLEwlT118W5Yx9CmMiw1WGahNEkQjOljn5BQQKBgQDiGm269Sh7iKlTChr2\nUX7NljsLIBsHzp6gT1x1ZXOPFoBMxkn1hniatmb2BVfUFcHXFhmSUbRMYnmAuQW0\nPnDkVJv6Dcr5NI2gITnOG3TVYsIzKb+H5NOg1IDw9aA/DcANad9rilTswxVTZVjJ\n3aRgkYUv3CYu56KZlcUdncYwwQKBgQDB9wwnNKgY0eAgPYLwQ34U497IAn912aHG\n5qPFQC5+8IzP7GpJsgLf1ld0e3sZJ8FnwR65ohOzCM1Vn62EDjY3IUir7NEbLbbL\n7ksLhMIKTssuNjLGwuiQECE2a5g/0a/ICGmy54r4zRrXv/TxHSR6vfHUsY6B96vi\nfHKu8OO+0QKBgQCkNceN6bFODtHS8lrknAl47GvTR6z5/ZDtItYmmNjVieUCXVyn\nidMboe+jK/w+ltKiEHXf86D7fOV7nGTNJDA/VEe30r6gQQ++xYLC8uPmegRKvj5R\nRtqASvWeivWn9aeO1l6iLuRA0+owGEHk0ikozWcqfDvrAuXvn3t6Z/ThwQKBgDW+\nbTijx3vxE0f7oz9NhC7noMAMqSKPZdsF5xTtnrR/lJS8LgszbsZ0zpCw8j/bGyTT\nht7qwMiXxMVX1C1F/tGxwEAbAymjtgW1hkevxlAy2ut4CwO119irD3jTwUDVqf4k\nDp2KuKANvMVRI953M7dq0AoeFJ2Acbj0wJYmmwQxAoGAOr60hZJu88unLwJA61J0\nnZyAdrzhoxLcQW8por2dZ+zJ3PbzjXj5oDvgQ84OoJrrP61KRyGDCmRd0mA7ub3e\nKqPHaoELMNgNHjMv9o3TaNVlE6y6ea1wJFrVVEcpHt7+iHSXjg/ViSyS9baamQJ8\nBFBdlfCoR/3ZZDswBnLEBwM=\n-----END PRIVATE KEY-----\n",
  client_email:
    "firebase-adminsdk-y0z36@personalportpolio.iam.gserviceaccount.com",
  client_id: "116511509404075675015",
  auth_uri: "https://accounts.google.com/o/oauth2/auth",
  token_uri: "https://oauth2.googleapis.com/token",
  auth_provider_x509_cert_url: "https://www.googleapis.com/oauth2/v1/certs",
  client_x509_cert_url:
    "https://www.googleapis.com/robot/v1/metadata/x509/firebase-adminsdk-y0z36%40personalportpolio.iam.gserviceaccount.com",
  universe_domain: "googleapis.com",
};

// Initialize Firebase Admin
const adminFirebase = admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
});

export default adminFirebase;
