const fs = require('fs'); 
// The neccessary files for this task
const inputFile = "datatrafficdataset_2000.csv";
  
function fileExists(filename) {
  if (fs.existsSync(filename)) {
    return true
  }
  return false
}
  
function validNumber(value) { // value can be string or numeric
 // returns a boolean 
}


function dataDimensions(dataframe) {
  // returns a list [rows (int), cols (int)]
}


function calculateMean(dataset) {
  // returns a float or false
  
}


function findTotal(dataset) {
  // returns float or false
  
} 


function convertToFloat(dataframe, col){ //dataframe, integer
  // returns an integer, which is the number that were  converted to floats.
  
}


function flatten(dataframe) {
  // returns a dataset (a flattened dataframe)
  
}


function loadCSV(csvFile, ignorerows, ignorecols) {  // string, dataset, dataset
  // returns a list comprising of [dataframe, rows (integer), cols (integer)]

}


function calculateMedian(dataset) {
  // return float or false 
  
}


function createSlice(dataframe, colindex, colpattern, exportcols = []) { // dataframe, integer, string/numeric, dataset
  // returns a dataframe
  
}


console.log(fileExists(inputFile))






module.exports = {
  fileExists, validNumber, dataDimensions, calculateMean, findTotal, convertToFloat, flatten, 
  loadCSV, calculateMedian, createSlice,
} 