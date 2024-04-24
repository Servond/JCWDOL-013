import fs from "fs";

export const logErrorHandler = (message: string): void => {
  const timeStamp = new Date().toISOString();
  const logMessage = `${timeStamp} - ${message}\n`;

  fs.appendFile("error.log", logMessage, (err) => {
    if (err) {
      console.error(`Error writing to the log file: ${err.message}`);
    }
  });
};
