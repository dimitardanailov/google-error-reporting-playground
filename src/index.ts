import getErrorReportingClient from "./lib/getErrorReportingClient";

(async () => {
  const errorReportingClient = await getErrorReportingClient();

  console.log(errorReportingClient);
})();
