
function openSQLPopupWithSQLStatement() {
    let tables = createJsonArrayFromModels()
    let sqlStatement = createSqlStatementFromJson();
    let tableHTML = ""
    tables.forEach(table => {

        tableHTML += "<b>" + table.name + "</b><table><tr>"
        let primary = "";
        table.columns.forEach(column =>{
            if (column.name === "PRIMARY KEY"){
               primary = column.dataType;
            }
        })

        table.columns.forEach(column =>{
            if (column.name !== "PRIMARY KEY"){
                if (("("+column.name+")") === primary){
                    tableHTML += "<td>" + column.name + "</td>"
                }else {
                    tableHTML += "<td>" + column.name + "</td>"
                }

            }

        })
        tableHTML += "</tr><tr>"
        table.columns.forEach(column =>{
            if (column.name !== "PRIMARY KEY"){
                tableHTML += "<td>" + column.dataType + "</td>"
            }
        })
        tableHTML += "</tr></table>"


    })

    //document.getElementById("SQLText").textContent = sqlStatement
    document.getElementById("SQLTables").innerHTML = tableHTML
    document.getElementById("SQLText").innerHTML = sqlStatement
    popupVisibility('sqlPopup')
    //throwGenericAlert(sqlStatement)
    console.log(tableHTML)
}