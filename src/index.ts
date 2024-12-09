import initializeCredentials from "./lib/crentials";

import getErrorReportingClient from "./lib/getErrorReportingClient";
import ErrorReportingService from "./lib/ErrorReportingService";

(async () => {
  const credentials = initializeCredentials();

  const errorReportingClient = await getErrorReportingClient(credentials);

  const errorReportingService = new ErrorReportingService();
  errorReportingService.serviceName = "service-name";
  errorReportingService.serviceVersion = "service-version";
  errorReportingService.email = "test@fan3.io";

  errorReportingService.requestContext = {
    url: "/test",
    method: "GET",
    userAgent: "Mozilla/5.0",
  };

  const error = new Error("Test error");

  console.log("Debug.Error:", error);
  console.log("Debug.Error stack:", error.stack);

  await errorReportingService.report(
    error,
    errorReportingClient,
    credentials.project_id
  );
})();
