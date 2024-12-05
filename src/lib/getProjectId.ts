import { google } from "googleapis";

async function getProjectId(): Promise<string> {
  const auth = new google.auth.GoogleAuth({
    keyFile: "./credentials.json",
    scopes: ["https://www.googleapis.com/auth/cloud-platform"],
  });

  const projectId = await auth.getProjectId();

  return projectId;
}

export default getProjectId;
