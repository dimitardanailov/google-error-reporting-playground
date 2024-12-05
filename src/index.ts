import getErrorReportingClient from "./lib/getErrorReportingClient";
import ErrorReportingService from "./lib/ErrorReportingService";
import getProjectId from "./lib/getProjectId";

(async () => {
  const projectId = await getProjectId();
  console.log(`Project ID: ${projectId}`);

  const errorReportingClient = await getErrorReportingClient();

  const error = new Error("Test error");
  const errorReportingService = new ErrorReportingService();
  await errorReportingService.report(error, errorReportingClient, projectId);
})();
