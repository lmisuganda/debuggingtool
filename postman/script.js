function createPostEvent(programId, orgUnitId, vals){
    return {
      "program": programId, // param=programId
      "programStage":'TclNMDdoAau',
      "orgUnit": orgUnitId, // param=orgUnitId
      "eventDate": "2015-05-17", // TODAYS DATE
      "status": "COMPLETED", // param=status
      "storedBy": "admin", // param=username
      "enrollment": "kgZuK9M72bj",
      "trackedEntityInstance": "BWhiJ4dV64s",
      //"coordinate": {
        //"latitude": 59.8,
        //"longitude": 10.9
      //},
      "dataValues": [ // param=allDataElementObjects
        { "dataElement": "x4CCf93uPcI", "value": vals[0] },
        { "dataElement": "YGseVCuuGHr", "value": vals[1] },
        { "dataElement": "JBwgjzxSFez", "value": vals[2] },
        { "dataElement": "pZF0HWm14cY", "value": vals[3] },
        { "dataElement": "yWoqdPbp68h", "value": vals[4] },
        { "dataElement": "ExIWEOxI0DR", "value": vals[5] },
        { "dataElement": "uD2gwFkhVEx", "value": vals[6] },
        { "dataElement": "FkGNzWYqbxo", "value": vals[7] },
        { "dataElement": "gLleSTXLaH1", "value": vals[8] }
      ]
    };
}

function sendDataToServer(jsonObject) {
    return $.ajax({
        data: JSON.stringify(jsonObject),
        url: "/api/events",
        type: 'POST',
        dataType: 'json',
        contentType:'application/json',
        authorization: "Bearer 7fa34aca-a5ba-485b-b108-b18faad54c6d",
        error: function (data) {
            $('#output').html("<b>Actually sent to server:</b> <br/><br/>" + JSON.stringify(jsonObject) + "<br/><br/> <b>Server responded to this with:</b> <br/><br/>" + JSON.stringify(data));
        },
        success: function (data) {
            $('#output').html("<b>Actually sent to server:</b> <br/><br/>" + JSON.stringify(jsonObject) + "<br/><br/> <b>Server responded to this with:</b> <br/><br/>" + JSON.stringify(data));
        }
    });
}

// Below function temporarly a duplicate of the one in debugger-app
function getDataElementInformation(dataElementId, idx){
    return $.ajax({
        url: '/api/dataElements/' + dataElementId + '.jsonp',
        type: 'GET',
        dataType: 'jsonp',
        contentType:'application/jsonp',
        authorization: "Bearer 7fa34aca-a5ba-485b-b108-b18faad54c6d",
        error: function (data) {
            console.log(JSON.stringify(data));
        },
        success: function (data) {
            var str = "label[for='dataelem" + idx + "'] ";
            $(str).html(data.code);
        }
    });
}

dataElemList = ['uD2gwFkhVEx','YGseVCuuGHr','yWoqdPbp68h','x4CCf93uPcI','JBwgjzxSFez','FkGNzWYqbxo','gLleSTXLaH1','pZF0HWm14cY','ExIWEOxI0DR'];
for (var i = 0; i < dataElemList.length; i++){
    getDataElementInformation(dataElemList[i], (i+1));
}

document.getElementById('submit-button').addEventListener("click", function(){
    var program = $('#program').val();
    var orgunit = $('#orgunit').val();

    var vals = [];
    for (var i = 1; i <= 9; i++){
        vals.push($('#dataelem' + i).val());
    }
    var jsn = createPostEvent(program, orgunit, vals);
    sendDataToServer(jsn);
});
