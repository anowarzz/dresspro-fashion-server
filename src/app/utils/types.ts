// // Custom Error Types
// export interface CustomError extends Error {
//   customMessage?: string;
//   statusCode?: number;
// }

// // Helper function to add custom message to error
// export const addCustomMessage = (error: unknown, message: string): CustomError => {
//   (error as CustomError).customMessage = message;
//   return error as CustomError;
// };
