import { google, clouderrorreporting_v1beta1 } from "googleapis";
import { Credentials } from "./crentials";

async function getErrorReportingClient(
  credentials: Credentials
): Promise<clouderrorreporting_v1beta1.Clouderrorreporting> {
  try {
    const auth = new google.auth.GoogleAuth({
      credentials,
      scopes: ["https://www.googleapis.com/auth/cloud-platform"],
    });

    return google.clouderrorreporting({ version: "v1beta1", auth });
  } catch (error) {
    console.error("Failed to retrieve error reporting client:", error);

    throw new Error(
      "Unable to authenticate or retrieve error reporting client. Check credentials."
    );
  }
}

export default getErrorReportingClient;
