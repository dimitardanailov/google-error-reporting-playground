import { google, clouderrorreporting_v1beta1 } from "googleapis";

// The file is excluded from the repository, so you need to create it yourself
const SERVICE_ACCOUNT_KEY_FILE = "./credentials.json";

async function getErrorReportingClient(): Promise<clouderrorreporting_v1beta1.Clouderrorreporting> {
  const auth = new google.auth.GoogleAuth({
    keyFile: SERVICE_ACCOUNT_KEY_FILE,
    scopes: ["https://www.googleapis.com/auth/cloud-platform"],
  });

  return google.clouderrorreporting({ version: "v1beta1", auth });
}

export default getErrorReportingClient;
