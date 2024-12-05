import { clouderrorreporting_v1beta1 } from "googleapis";

class ErrorReportingService {
  async report(
    error: any,
    errorReportingClient: clouderrorreporting_v1beta1.Clouderrorreporting,
    projectId: string
  ): Promise<void> {
    try {
      const reportedErrorEvent: clouderrorreporting_v1beta1.Schema$ReportedErrorEvent =
        {
          message: error.message || "Unknown error",
          serviceContext: {
            service: "service-name",
            version: "service-version",
          },
          context: {
            user: "user@example.com",
            httpRequest: {
              method: "GET",
              url: "http://example.com/some-endpoint",
              userAgent: "Mozilla/5.0",
              referrer: "http://referrer.com",
              responseStatusCode: 500,
            },
          },
        };

      await errorReportingClient.projects.events.report({
        projectName: `projects/${projectId}`,
        requestBody: reportedErrorEvent,
      });

      console.log("Error reported successfully");
    } catch (err) {
      console.error("Failed to report error:", err);
    }
  }
}

export default ErrorReportingService;
