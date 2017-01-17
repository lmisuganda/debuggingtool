eventData = [];

function getAllPrograms(){
    return $.ajax({
        url: "/dhis/api/programs.jsonp?paging=false&",
        type: 'GET',
        dataType: 'jsonp',
        contentType:'application/jsonp',
        authorization: "Bearer 7fa34aca-a5ba-485b-b108-b18faad54c6d",
        error: function (data) {
            console.log(JSON.stringify(data));
        },
        success: function (data) {
            data.programs.map((val, idx) => {
                $('#program_selector').append( '<option id="' + val.id + '">' + val.displayName + '</option>' );
            })
        }
    });

}
function getGeneralProgramInfo(programId, filter) {
    return $.ajax({
        url: '/dhis/api/programs/' + programId + '.jsonp',
        type: 'GET',
        dataType: 'jsonp',
        contentType:'application/jsonp',
        authorization: "Bearer 7fa34aca-a5ba-485b-b108-b18faad54c6d",
        error: function (data) {
            console.log(JSON.stringify(data));
        },
        success: function (data) {
            eventData = data;
            var str = '<li>   ' + data.displayName.toUpperCase() + ' </li>';
            str += '<li> ---------------- </li>';
            $('#programinfo').append(str);
            $('#programinfo').append( liElement('Program Type', data.programType) );
            $('#programinfo').append( liElement('Accesses', 'del:' + data.access.delete + ', externalize:' + data.access.externalize + ", manage:" + data.access.manage + ", read:" + data.access.read + ", update:" + data.access.update + ", write:" + data.access.write ));
            $('#programinfo').append( liElement('Id', data.id) );
            $('#programinfo').append( liElement('Version', data.version) );
            $('#programinfo').append( liElement('URI', data.href) );
            $('#programinfo').append( liElement('Ignore Overdue Events', data.ignoreOverdueEvents) );
            $('#programinfo').append( liElement('Description', data.description) );
            $('#programinfo').append( liElement('Display Description', data.displayDescription) );
            $('#programinfo').append( liElement('Display ShortName', data.displayShortName) );
            $('#programinfo').append( liElement('Display Name', data.displayName) );
            $('#programinfo').append( liElement('Created date', displaySexyDate(data.created)) );
            $('#programinfo').append( liElement('Last Updated date', displaySexyDate(data.lastUpdated)) );
            data.organisationUnits.map( (val, idx) => {
                $('#programinfo').append( liElement('Connected orgunit' + (idx+1), val.id) );
            })

            data.programStages.map( (val, idx) => {
                $('#programinfo').append( liElement('Containing Program Stage' + (idx+1), val.id) );
            })
            getProgramStageInfo();
        }
    });
}
function getEnteredProgramData(programId, filter) {
    return $.ajax({
        url: '/dhis/api/events.jsonp?program=' + programId + '&paging=false&' + filter,
        type: 'GET',
        dataType: 'jsonp',
        contentType:'application/jsonp',
        authorization: "Bearer 7fa34aca-a5ba-485b-b108-b18faad54c6d",
        error: function (data) {
            console.log(JSON.stringify(data));
        },
        success: function (data) {
            data.events.map( (event, idx) => {
                var str = '<ul class="eventdatafields" id="' + idx + '">';
                str += '<li> EVENT NR ' + (idx+1) + ' </li>';
                str += '<li> ---------------- </li>';
                str += liElement('Completed by', event.completedBy);
                str += liElement('Orgunit Name', event.orgUnitName);
                str += liElement('Status', event.status);
                str += liElement('Coordinates', (event.coordinate.latitude + "," + event.coordinate.longitude));
                event.dataValues.map((dataelement, idx) =>{
                        str += liElement('Data Value' + (idx+1), dataelement.value);
                })
                str += liElement('Program', event.program);
                str += liElement('Program Stage', event.programStage);
                str += liElement('Orgunit', event.orgUnit);
                str+= '</ul>';
                $('#eventdata').append(str);
            })

        }
    });
}

function getProgramStageInfoFromInstance(programStageId, stageNr){
    return $.ajax({
        url: '/dhis/api/programStages/' + programStageId + '.jsonp',
        type: 'GET',
        dataType: 'jsonp',
        contentType:'application/jsonp',
        authorization: "Bearer 7fa34aca-a5ba-485b-b108-b18faad54c6d",
        error: function (data) {
            console.log(JSON.stringify(data));
        },
        success: function (data) {
            var str = '<ul id="program_stages_info'+ stageNr +'">';
            console.log("1", stageNr)
            str += '<li> STAGE NR ' + stageNr + ' </li>';
            str += '<li> ---------------- </li>';
            str += liElement('Name', data.name);
            str += liElement('Displayed name', data.displayName);
            str += liElement('Description', data.description);
            str += liElement('Connected to program', data.program.id);
            str += liElement('Id', data.id);
            str += liElement('URI', data.href);

            programStageDataElementIds = [];
            data.programStageDataElements.map((programStageDataElement, idx) =>{
                    str += '<li> ProgramStageDataElement' + (idx+1) + ': ' + programStageDataElement.id + '</li>';
                    programStageDataElementIds.push(programStageDataElement.id)
            })
            data.programStageSections.map((programStageSection, idx) =>{
                    str += '<li> programStageSection' + (idx+1) + ': ' + programStageSection.id + '</li>';
            })
            $('#programstagesinfolist').append(str);
            extractEachDataElementId(programStageDataElementIds, stageNr)

        }
    });
}

function extractDataElementId(programDataElementId, idx, stageNr){
    return $.ajax({
        url: '/dhis/api/programStageDataElements/' + programDataElementId + '.jsonp?fields=dataElement',
        type: 'GET',
        dataType: 'jsonp',
        contentType:'application/jsonp',
        authorization: "Bearer 7fa34aca-a5ba-485b-b108-b18faad54c6d",

        error: function (data) {
            console.log(JSON.stringify(data));
        },
        success: function (data) {
            getDataElementInformation(data.dataElement.id, idx, stageNr)
        }
    });
}

function getDataElementInformation(dataElementId, idx, stageNr){
    return $.ajax({
        url: '/dhis/api/dataElements/' + dataElementId + '.jsonp',
        type: 'GET',
        dataType: 'jsonp',
        contentType:'application/jsonp',
        authorization: "Bearer 7fa34aca-a5ba-485b-b108-b18faad54c6d",
        error: function (data) {
            console.log(JSON.stringify(data));
        },
        success: function (data) {
            var str = '<li> DATA ELEMENT </li>'
            str += '<ul>'
            str += liElement('Display Name', data.displayName);
            str += liElement('Value type', data.valueType);
            str += liElement('Domain Type', data.domainType);
            str += liElement('Short name', data.shortName);
            str += liElement('Display Short name', data.displayShortName);
            str += liElement('Last Updated', displaySexyDate(data.lastUpdated) );

            str += liElement('URI', data.href);

            str += '</ul>';

            $('#program_stages_info'+stageNr).append(str)
        }
    });
}

function extractEachDataElementId(programStageDataElementIds, stageNr){
    programStageDataElementIds.map( (programDataElementId, idx) =>{
        extractDataElementId(programDataElementId, (idx+1), stageNr);
    });
}

function getProgramStageInfo() {
    eventData.programStages.map( (val, idx) =>{
        getProgramStageInfoFromInstance(val.id, (idx+1));
    });
}
function sendTestData(jsonObject) {
    return $.ajax({
        data: JSON.stringify(jsonObject),
        url: "/dhis/api/events",
        type: 'POST',
        dataType: 'json',
        contentType:'application/json',
        authorization: "Bearer 7fa34aca-a5ba-485b-b108-b18faad54c6d",
        error: function (data) {
            console.log(JSON.stringify(data));
        },
        success: function (data) {
        }
    });
}

function displaySexyDate(notSexyDate){
    return notSexyDate.substring(0,notSexyDate.length-18);
}

function liElement(id, val){
    return '<li>' + id + ": " + val + '</li>';
}


// sendTestData(jsn);
function renderWebpage(){

    $('#eventdata').text('');
    $('#programinfo').text('');
    for (var i = 0; i < 100; i++){ // forelopig hatløsning
        $('#program_stages_info'+i).remove();
    }
    extractedProgramId = $('#program_selector option:selected').attr('id');
    var programId = (extractedProgramId == "" || extractedProgramId == undefined ) ? 'VeKFkhMK5H0' : extractedProgramId;

    extractedFilter = $('#filter_selector option:selected').val();
    var filter = (extractedFilter == "Choose Filter Options" || extractedFilter == undefined) ? 'paging=false' : extractedFilter;

    getGeneralProgramInfo( programId, filter );
    getEnteredProgramData( programId, filter );
}


$( "#program_selector" ).change(function() {
    renderWebpage();
});

$( "#filter_selector" ).change(function() {
    renderWebpage();
});

getAllPrograms();
renderWebpage();
