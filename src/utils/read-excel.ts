// import * as XLSX from 'xlsx';

// /**
//  * Read a file excel then export to json object
//  *
//  * @param {string} filePath   - the path lead to the file
//  * @param {string} sheetName  - the sheet name
//  *
//  * @return {object} the excel file content
//  */
// export function readExcel(filePath: string, sheetName: string) {
//   const workbook = XLSX.readFile(filePath);
//   const worksheet = workbook.Sheets[sheetName];
//   const range = XLSX.utils.decode_range(worksheet['!ref']);
//   return XLSX.utils.sheet_to_json(worksheet, { range });
// }
import * as XLSX from 'xlsx';

/**
 * Read a file excel then export to json object
 *
 * @param {string} filePath   - the path to the file
 * @param {string} sheetName  - the sheet name
 *
 * @return {object} the excel file content
 */
export function readExcel(filePath: string, sheetName: string) {
  // Read the workbook
  const workbook = XLSX.readFile(filePath);
console.log(filePath, sheetName)
  // Check if the sheet exists
  const worksheet = workbook.Sheets[sheetName];
  if (!worksheet) {
    throw new Error(`Sheet with name "${sheetName}" not found in the Excel file.`);
  }

  // Check if the worksheet has the '!ref' property (i.e., a valid range)
  if (!worksheet['!ref']) {
    throw new Error(`Sheet "${sheetName}" has no reference range ('!ref').`);
  }

  // Decode the range of the sheet
  const range = XLSX.utils.decode_range(worksheet['!ref']);
  
  // Convert the worksheet to JSON, using the decoded range
  return XLSX.utils.sheet_to_json(worksheet, { range });
}
