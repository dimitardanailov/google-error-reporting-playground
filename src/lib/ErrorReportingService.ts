import { clouderrorreporting_v1beta1 } from "googleapis";

class ErrorReportingService {
  private _serviceName = "service-name";
  private _serviceVersion = "service-version";
  private _email = "test@email.io";

  /**
   * Resource:
   * https://cloud.google.com/error-reporting/reference/rest/v1beta1/ErrorContext#httprequestcontextx
   */
  private _requestContext: clouderrorreporting_v1beta1.Schema$HttpRequestContext =
    {};

  set serviceName(name: string) {
    this._serviceName = name;
  }

  set serviceVersion(version: string) {
    this._serviceVersion = version;
  }

  set email(email: string) {
    this._email = email;
  }

  set requestContext(
    request: clouderrorreporting_v1beta1.Schema$HttpRequestContext
  ) {
    this._requestContext = request;
  }

  async report(
    error: any,
    errorReportingClient: clouderrorreporting_v1beta1.Clouderrorreporting,
    projectId: string
  ): Promise<void> {
    try {
      const reportedErrorEvent: clouderrorreporting_v1beta1.Schema$ReportedErrorEvent =
        {
          message: error.stack.toString(),
          serviceContext: {
            service: this._serviceName,
            version: this._serviceVersion,
          },
          context: {
            user: this._email,
            httpRequest: this._requestContext,
            reportLocation: {
              lineNumber: error.lineNumber,
              filePath: error.fileName,
              functionName: error.functionName,
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
