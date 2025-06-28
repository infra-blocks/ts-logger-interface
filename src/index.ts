export type LogLevel = "trace" | "debug" | "info" | "warn" | "error";

export const LOG_LEVELS: LogLevel[] = [
  "trace",
  "debug",
  "info",
  "warn",
  "error",
];

export type Logger = {
  /**
   * Logs using the provided log level. Does nothing if the current log level does not
   * allow the provided level.
   *
   * @param level The message's log level.
   * @param message The message to log.
   * @param args The message's formatting arguments, as describe in {@link utils.format}.
   */
  log(level: LogLevel, message: string, ...args: unknown[]): void;
  /**
   * Logs at trace level. Functionally equivalent to `log("trace", message, ...args)`.
   *
   * @param message The message to log.
   * @param args The message's formatting arguments, as describe in {@link utils.format}.
   */
  trace(message: string, ...args: unknown[]): void;
  /**
   * Logs at debug level. Functionally equivalent to `log("debug", message, ...args)`.
   *
   * @param message The message to log.
   * @param args The message's formatting arguments, as describe in {@link utils.format}.
   */
  debug(message: string, ...args: unknown[]): void;
  /**
   * Logs at info level. Functionally equivalent to `log("info", message, ...args)`.
   *
   * @param message The message to log.
   * @param args The message's formatting arguments, as describe in {@link utils.format}.
   */
  info(message: string, ...args: unknown[]): void;
  /**
   * Logs at warn level. Functionally equivalent to `log("warn", message, ...args)`.
   *
   * @param message The message to log.
   * @param args The message's formatting arguments, as describe in {@link utils.format}.
   */
  warn(message: string, ...args: unknown[]): void;
  /**
   * Logs at error level. Functionally equivalent to `log("error", message, ...args)`.
   *
   * @param message The message to log.
   * @param args The message's formatting arguments, as describe in {@link utils.format}.
   */
  error(message: string, ...args: unknown[]): void;
  /**
   * Returns whether the trace level is enabled.
   * @returns
   */
  isTraceEnabled(): boolean;
  /**
   * Returns whether the debug level is enabled.
   * @returns
   */
  isDebugEnabled(): boolean;
  /**
   * Returns whether the info level is enabled.
   * @returns
   */
  isInfoEnabled(): boolean;
  /**
   * Returns whether the warn level is enabled.
   * @returns
   */
  isWarnEnabled(): boolean;
  /**
   * Returns whether the error level is enabled.
   * @returns
   */
  isErrorEnabled(): boolean;
};
