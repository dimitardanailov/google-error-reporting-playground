import { google } from "googleapis";
import { Credentials } from "./crentials";

async function getProjectId(credentials: Credentials): Promise<string> {
  try {
    const auth = new google.auth.GoogleAuth({
      credentials: {
        ...credentials,
        private_key: credentials.private_key.replace(/\\n/g, "\n"),
      },
      scopes: ["https://www.googleapis.com/auth/cloud-platform"],
    });

    const projectId = credentials.project_id || (await auth.getProjectId());
    if (!projectId) {
      throw new Error("Project ID could not be determined.");
    }

    return projectId;
  } catch (error) {
    console.error("Failed to retrieve project ID:", error);

    throw new Error(
      "Unable to authenticate or retrieve project ID. Check credentials."
    );
  }
}

export default getProjectId;
