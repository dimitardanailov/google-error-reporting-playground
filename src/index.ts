import initializeCredentials from "./lib/crentials";

import getErrorReportingClient from "./lib/getErrorReportingClient";
import ErrorReportingService from "./lib/ErrorReportingService";

(async () => {
  const credentials = initializeCredentials();

  const errorReportingClient = await getErrorReportingClient(credentials);

  const error = new Error("Test error");
  const errorReportingService = new ErrorReportingService();
  await errorReportingService.report(
    error,
    errorReportingClient,
    credentials.project_id
  );
})();
