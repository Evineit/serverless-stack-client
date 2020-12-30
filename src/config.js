const config = {
    STRIPE_KEY: "pk_test_51I3DiqJIYLEQPAB8QIqJfYvv9l91W5atma0pwDmzNvUZjgKv43eWSrZAzFvu5CGWrEqRJbjGKnexMPt5vBBeoGys00KfUsrSfT",
    MAX_ATTACHMENT_SIZE: 5000000,
    s3: {
      REGION: "us-east-1",
      BUCKET: "notes-api-bs3",
    },
    apiGateway: {
      REGION: "us-east-1",
      URL: "https://vncnpwiri3.execute-api.us-east-1.amazonaws.com/prod",
    },
    cognito: {
      REGION: "us-east-1",
      USER_POOL_ID: "us-east-1_FsNa9122r",
      APP_CLIENT_ID: "6qa728j404mkou3m4imq6jesu8",
      IDENTITY_POOL_ID: "us-east-1:062dcf39-3b8e-4b9e-8727-ef2c2dd58b09",
    },
  };
export default config;