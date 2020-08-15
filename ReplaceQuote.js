/*
input json 

var obj = {
  "StartDate": "2020-08-02",
  "EndDate": "2020-08-29",
  "ExcludePromoStatus": [
    "0"
  ],
  "PromoFilters": {
    "Channel": [],
    "ChainDescription": []
  },
  "ProductFilters": {
    "Division": [
      "APPAREL ATHLETIC"
    ],
    "Department": [
      "MEN'S ATHLETIC APPAREL"
    ],
    "SubDepartment": [
      "MEN'S ATH APP RESERVE"
    ],
    "Class": [
      "MEN'S ATH APP RESERVE"
    ],
    "SubClass": [],
    "Vendor": []
  },
  "view": "month"
}

*/

var replaceSingleQuoteWithDouble = (obj) => {


    Object.keys(obj).forEach(key => {

    console.log(`key: ${key}, value: ${obj[key]} and typeof value is ${typeof(obj[key])}`)
    if(typeof(obj[key])==="string"){
        
        if(obj[key].includes(`'`) && key !== ""){
             console.log("Quote conversion ")
              let convertedStr = obj[key].replace(/'/g, '"')
                console.log("Printing final JSON ".finalJson)
              obj[key] = convertedStr
             
        }
    }

    if (typeof obj[key] === 'object') {
        replaceSingleQuoteWithDouble(obj[key])
        }
    })
    return JSON.stringify(obj)
}

replaceSingleQuoteWithDouble(obj)

/*output will print with double quotes instead of single quote