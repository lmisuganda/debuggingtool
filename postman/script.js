NUMBER_OF_DATA_ELEMENTS = 288

function createPostEvent(programId, orgUnitId, vals){
    return {
      "program": programId, // param=programId
      "programStage":'vatbHR3vK9N',
      "orgUnit": orgUnitId, // param=orgUnitId
      "eventDate": "2015-05-17", // TODAYS DATE
      "status": "COMPLETED", // param=status
      "storedBy": "admin", // param=username
    //   "enrollment": "kgZuK9M72bj",
      "trackedEntityInstance": "V4A0EPw7zir",
      //"coordinate": {
        //"latitude": 59.8,
        //"longitude": 10.9
      //},
      "dataValues": [ // param=allDataElementObjects
          { "dataElement": "hNHlGrtIY7V", "value": vals[0] },
          { "dataElement": "D02Vujrum3Q", "value": vals[1] },
          { "dataElement": "azqPaSqH04J", "value": vals[2] },
          { "dataElement": "G2qjaFIDaA9", "value": vals[3] },
          { "dataElement": "z5ZV1JaA2GT", "value": vals[4] },
          { "dataElement": "g5sctsZSQus", "value": vals[5] },
          { "dataElement": "w03zBbCfivq", "value": vals[6] },
          { "dataElement": "y7h0klNkizQ", "value": vals[7] },
          { "dataElement": "Q5RVl5OYo9s", "value": vals[8] },
          { "dataElement": "xTWsCqTOmW8", "value": vals[9] },
          { "dataElement": "t8tx33gGcb8", "value": vals[10] },
          { "dataElement": "GTI82Ypa9mN", "value": vals[11] },
          { "dataElement": "CUfIkaFa9WY", "value": vals[12] },
          { "dataElement": "dI56f6FiwFd", "value": vals[13] },
          { "dataElement": "cADh6GbY4e0", "value": vals[14] },
          { "dataElement": "gzJW2Np24SP", "value": vals[15] },
          { "dataElement": "WROkmTO1A0h", "value": vals[16] },
          { "dataElement": "b8hQobyCBZo", "value": vals[17] },
          { "dataElement": "ce1juoc4RRY", "value": vals[18] },
          { "dataElement": "Fm3pidnKpAx", "value": vals[19] },
          { "dataElement": "QdjIcFCw2Nr", "value": vals[20] },
          { "dataElement": "krUNfcMTpxS", "value": vals[21] },
          { "dataElement": "ifKmgSnus1K", "value": vals[22] },
          { "dataElement": "S2DHHYycNJ6", "value": vals[23] },
          { "dataElement": "bXlpVJuhR7X", "value": vals[24] },
          { "dataElement": "lj7wcOEt37U", "value": vals[25] },
          { "dataElement": "kyliJ2R8MgC", "value": vals[26] },
          { "dataElement": "W2wwOCCZrKL", "value": vals[27] },
          { "dataElement": "Ys2wyDeRrZW", "value": vals[28] },
          { "dataElement": "mMDswiUNTHZ", "value": vals[29] },
          { "dataElement": "nRu87t6X17o", "value": vals[30] },
          { "dataElement": "SPaJ4ZAHKMg", "value": vals[31] },
          { "dataElement": "FFz9jCgOfRD", "value": vals[32] },
          { "dataElement": "plN1XBxSVaR", "value": vals[33] },
          { "dataElement": "fGBsfbZBjDk", "value": vals[34] },
          { "dataElement": "lZwuT1ouIdR", "value": vals[35] },
          { "dataElement": "XNHQPK5S5nf", "value": vals[36] },
          { "dataElement": "fSpPDmFaHmq", "value": vals[37] },
          { "dataElement": "AqR1GxRvkFf", "value": vals[38] },
          { "dataElement": "SBzW5qxyBaY", "value": vals[39] },
          { "dataElement": "GoEjmMJch9Q", "value": vals[40] },
          { "dataElement": "Gvi84bY4vLX", "value": vals[41] },
          { "dataElement": "uBiSJesfYYn", "value": vals[42] },
          { "dataElement": "NeadU3bYQ3x", "value": vals[43] },
          { "dataElement": "ceqcdffjbHN", "value": vals[44] },
          { "dataElement": "N8q6fumWvrw", "value": vals[45] },
          { "dataElement": "hA2fLAYK8jZ", "value": vals[46] },
          { "dataElement": "BOLPX3wnVhd", "value": vals[47] },
          { "dataElement": "HLSa5cUJKT2", "value": vals[48] },
          { "dataElement": "dSTKubvH6Bi", "value": vals[49] },
          { "dataElement": "sCxEBfrs7Im", "value": vals[50] },
          { "dataElement": "RfjcSAgdGBp", "value": vals[51] },
          { "dataElement": "ipUtzEa7WlA", "value": vals[52] },
          { "dataElement": "mUSaNlHeXNR", "value": vals[53] },
          { "dataElement": "uS46CvDZlyd", "value": vals[54] },
          { "dataElement": "KtAlsY9bd34", "value": vals[55] },
          { "dataElement": "lOrCuCFuedN", "value": vals[56] },
          { "dataElement": "DTAJ443CDWv", "value": vals[57] },
          { "dataElement": "iJcR2LcRWwu", "value": vals[58] },
          { "dataElement": "UXMcL0FiYq5", "value": vals[59] },
          { "dataElement": "h2xJGk7AE8o", "value": vals[60] },
          { "dataElement": "DrWEG9HqPgB", "value": vals[61] },
          { "dataElement": "fmxYk2XZ3aR", "value": vals[62] },
          { "dataElement": "MsDuHHeexlI", "value": vals[63] },
          { "dataElement": "COOE5QxvuCo", "value": vals[64] },
          { "dataElement": "cHbSvD1wDC9", "value": vals[65] },
          { "dataElement": "PpXLN9Xo34W", "value": vals[66] },
          { "dataElement": "b62j0YDv83c", "value": vals[67] },
          { "dataElement": "Qa1iYiVGXrx", "value": vals[68] },
          { "dataElement": "tcPXXAo0T1k", "value": vals[69] },
          { "dataElement": "oQelBHWH8PH", "value": vals[70] },
          { "dataElement": "wGMN9Vzl4yq", "value": vals[71] },
          { "dataElement": "lTGIr4jCwNY", "value": vals[72] },
          { "dataElement": "dbWh8mjR0Dm", "value": vals[73] },
          { "dataElement": "s1QgDnr9Mf5", "value": vals[74] },
          { "dataElement": "lAJ66xQeJSO", "value": vals[75] },
          { "dataElement": "aFzZlQarP5i", "value": vals[76] },
          { "dataElement": "bF6s2zVUpeB", "value": vals[77] },
          { "dataElement": "Un20yJ1RnZm", "value": vals[78] },
          { "dataElement": "b9y09WdAoBb", "value": vals[79] },
          { "dataElement": "oytOx2EYRJm", "value": vals[80] },
          { "dataElement": "rmL1LTw8PtB", "value": vals[81] },
          { "dataElement": "OO7Yal4n0oE", "value": vals[82] },
          { "dataElement": "Xi9bKBMAKAH", "value": vals[83] },
          { "dataElement": "N6Xi3Ok3doe", "value": vals[84] },
          { "dataElement": "rKbWPogqkMz", "value": vals[85] },
          { "dataElement": "PPWQrvgxx8N", "value": vals[86] },
          { "dataElement": "OJtjrqglkDj", "value": vals[87] },
          { "dataElement": "qisFxaDQjSK", "value": vals[88] },
          { "dataElement": "ydctWvNa4T2", "value": vals[89] },
          { "dataElement": "pXHnwgxNr8q", "value": vals[90] },
          { "dataElement": "SDrFSVeDnDN", "value": vals[91] },
          { "dataElement": "fDV7Cc7lu8L", "value": vals[92] },
          { "dataElement": "CnPRqfplsy5", "value": vals[93] },
          { "dataElement": "McCTNIgLWcO", "value": vals[94] },
          { "dataElement": "rzwjHPtMP8Y", "value": vals[95] },
          { "dataElement": "GwGV3kbI6vK", "value": vals[96] },
          { "dataElement": "AZiBZBfmVuo", "value": vals[97] },
          { "dataElement": "XVeDlDo7IQK", "value": vals[98] },
          { "dataElement": "uOWtOShbFRN", "value": vals[99] },
          { "dataElement": "ZoNubquWxbU", "value": vals[100] },
          { "dataElement": "JjoT6kz2QT7", "value": vals[101] },
          { "dataElement": "meWaYX1yJbt", "value": vals[102] },
          { "dataElement": "KnDy8E4JzHv", "value": vals[103] },
          { "dataElement": "zGFT4oWqBrM", "value": vals[104] },
          { "dataElement": "r1LM3J9Yi9e", "value": vals[105] },
          { "dataElement": "egUPTO7GrN2", "value": vals[106] },
          { "dataElement": "ITNir7GGSlp", "value": vals[107] },
          { "dataElement": "zKUxQwzm5cl", "value": vals[108] },
          { "dataElement": "Eb37JwaH9eX", "value": vals[109] },
          { "dataElement": "yJ4TvovnA9r", "value": vals[110] },
          { "dataElement": "RLpFpIBn5HJ", "value": vals[111] },
          { "dataElement": "J4q84qo10jh", "value": vals[112] },
          { "dataElement": "qPQMlJGxfPU", "value": vals[113] },
          { "dataElement": "pF4pR8deYFu", "value": vals[114] },
          { "dataElement": "mUn8x3gbSqd", "value": vals[115] },
          { "dataElement": "jNDdIFk1MFo", "value": vals[116] },
          { "dataElement": "DjLukdXqWrm", "value": vals[117] },
          { "dataElement": "cZhEQku0Stn", "value": vals[118] },
          { "dataElement": "hFmfrTrCAZA", "value": vals[119] },
          { "dataElement": "b0G3ng7IeUF", "value": vals[120] },
          { "dataElement": "UD977AN8IIt", "value": vals[121] },
          { "dataElement": "a23sX9EM6U3", "value": vals[122] },
          { "dataElement": "SxGSJ3UgLtA", "value": vals[123] },
          { "dataElement": "WA5PMyh4xBI", "value": vals[124] },
          { "dataElement": "pabxC5iaG9Z", "value": vals[125] },
          { "dataElement": "JZrgHVEKqPS", "value": vals[126] },
          { "dataElement": "A1wIENuw38p", "value": vals[127] },
          { "dataElement": "MyyRxtPc1uw", "value": vals[128] },
          { "dataElement": "UcImMEJRS4f", "value": vals[129] },
          { "dataElement": "tVfNkEdqxkg", "value": vals[130] },
          { "dataElement": "uoUW7OxkzYw", "value": vals[131] },
          { "dataElement": "S2cpucUJ4oh", "value": vals[132] },
          { "dataElement": "Cy18RgM4qb2", "value": vals[133] },
          { "dataElement": "IX784uKJOtT", "value": vals[134] },
          { "dataElement": "SUfH0teOvwH", "value": vals[135] },
          { "dataElement": "QWIfD2c1wX1", "value": vals[136] },
          { "dataElement": "whTUPfZfd8N", "value": vals[137] },
          { "dataElement": "BP9rb80p49Y", "value": vals[138] },
          { "dataElement": "NLw8dqy4GON", "value": vals[139] },
          { "dataElement": "rsLvpNE8OI9", "value": vals[140] },
          { "dataElement": "vj1iCmSrpca", "value": vals[141] },
          { "dataElement": "ikibRTaRAON", "value": vals[142] },
          { "dataElement": "VKYNzI8rCZK", "value": vals[143] },
          { "dataElement": "qtoDgo7QChD", "value": vals[144] },
          { "dataElement": "TSwEpZl2me4", "value": vals[145] },
          { "dataElement": "DU5efK4aOQm", "value": vals[146] },
          { "dataElement": "vaUnpYRQwQB", "value": vals[147] },
          { "dataElement": "mhpx4x8fUHA", "value": vals[148] },
          { "dataElement": "MgfBI9tLHEY", "value": vals[149] },
          { "dataElement": "AMkOpTwvlrx", "value": vals[150] },
          { "dataElement": "aipkA4giWgN", "value": vals[151] },
          { "dataElement": "BNMUw0TIPBJ", "value": vals[152] },
          { "dataElement": "q7SHVdyN7ea", "value": vals[153] },
          { "dataElement": "u9TLXvOK6O0", "value": vals[154] },
          { "dataElement": "qlUpy1By9rm", "value": vals[155] },
          { "dataElement": "UMfe6akghGs", "value": vals[156] },
          { "dataElement": "tq8RWmAlqEI", "value": vals[157] },
          { "dataElement": "KAsfUKxkQ5O", "value": vals[158] },
          { "dataElement": "J8T4mBZq2iY", "value": vals[159] },
          { "dataElement": "t0QJgPTltz3", "value": vals[160] },
          { "dataElement": "vWKyeSCkwu6", "value": vals[161] },
          { "dataElement": "BfNVOpYDgss", "value": vals[162] },
          { "dataElement": "bhVff9ovEKG", "value": vals[163] },
          { "dataElement": "ZXeggdhv0vA", "value": vals[164] },
          { "dataElement": "v37cSnyKGkz", "value": vals[165] },
          { "dataElement": "WHq7oltY8Qw", "value": vals[166] },
          { "dataElement": "ObKZNl4QAmX", "value": vals[167] },
          { "dataElement": "CjRDtYI1Esa", "value": vals[168] },
          { "dataElement": "AV7iAJIbSG4", "value": vals[169] },
          { "dataElement": "tiPdjO275n8", "value": vals[170] },
          { "dataElement": "kN6tSM0qhRv", "value": vals[171] },
          { "dataElement": "lTNOBsCGSeR", "value": vals[172] },
          { "dataElement": "TfG416NFP1R", "value": vals[173] },
          { "dataElement": "Aax7pN7OGZI", "value": vals[174] },
          { "dataElement": "mCDGP9M540f", "value": vals[175] },
          { "dataElement": "vWuymE99ciw", "value": vals[176] },
          { "dataElement": "P9I10z7D4lo", "value": vals[177] },
          { "dataElement": "aCn237HHAsW", "value": vals[178] },
          { "dataElement": "A6aXcDRfowC", "value": vals[179] },
          { "dataElement": "qYYcbn90l0S", "value": vals[180] },
          { "dataElement": "yRjOAJPdXiD", "value": vals[181] },
          { "dataElement": "S5nxY3Oe2jO", "value": vals[182] },
          { "dataElement": "PCyFzXb9kfl", "value": vals[183] },
          { "dataElement": "NXu6054Jpfw", "value": vals[184] },
          { "dataElement": "OneLQgFdrAJ", "value": vals[185] },
          { "dataElement": "TZqOVygdZYt", "value": vals[186] },
          { "dataElement": "xfBZKuxIiQx", "value": vals[187] },
          { "dataElement": "Jtmphd6dQbZ", "value": vals[188] },
          { "dataElement": "uEB9ghE2cSK", "value": vals[189] },
          { "dataElement": "dKmQwG4kRlX", "value": vals[190] },
          { "dataElement": "hVkYDgRlgGH", "value": vals[191] },
          { "dataElement": "zHmQtfIligN", "value": vals[192] },
          { "dataElement": "RYPd01EkzUQ", "value": vals[193] },
          { "dataElement": "eNQZ3Lh4cAa", "value": vals[194] },
          { "dataElement": "cDGHxOy85eC", "value": vals[195] },
          { "dataElement": "echgoPMnuvI", "value": vals[196] },
          { "dataElement": "wTnn44CyD6H", "value": vals[197] },
          { "dataElement": "yDe0gv26EZw", "value": vals[198] },
          { "dataElement": "S4aaoyrWSB0", "value": vals[199] },
          { "dataElement": "V8cqHwCNQz2", "value": vals[200] },
          { "dataElement": "faNPqsGLDmq", "value": vals[201] },
          { "dataElement": "N7uif46sQ2v", "value": vals[202] },
          { "dataElement": "FFqb5ptk1Ht", "value": vals[203] },
          { "dataElement": "BF4Ti8cTqUK", "value": vals[204] },
          { "dataElement": "d08R9ikAVKT", "value": vals[205] },
          { "dataElement": "NYhaj2fgNwV", "value": vals[206] },
          { "dataElement": "yqMCPVgaAaC", "value": vals[207] },
          { "dataElement": "nUi2xi50OnY", "value": vals[208] },
          { "dataElement": "efpQ2PscFgK", "value": vals[209] },
          { "dataElement": "y5onEFJ9nB3", "value": vals[210] },
          { "dataElement": "LECpTHFb3TC", "value": vals[211] },
          { "dataElement": "r0rYuQ63K2r", "value": vals[212] },
          { "dataElement": "lc37AsxoCHb", "value": vals[213] },
          { "dataElement": "Vd6NfVhW9Om", "value": vals[214] },
          { "dataElement": "SUwqx89JWGQ", "value": vals[215] },
          { "dataElement": "ADawaHelM2w", "value": vals[216] },
          { "dataElement": "bJt4nNhePMv", "value": vals[217] },
          { "dataElement": "eQtmiHHGzDg", "value": vals[218] },
          { "dataElement": "WS9jKootcci", "value": vals[219] },
          { "dataElement": "hIieThClGol", "value": vals[220] },
          { "dataElement": "OUI4GoJE557", "value": vals[221] },
          { "dataElement": "RV1WnYyCSNG", "value": vals[222] },
          { "dataElement": "V1fXKue7xSo", "value": vals[223] },
          { "dataElement": "DMZ2Fs032J2", "value": vals[224] },
          { "dataElement": "zDnEHobhUxn", "value": vals[225] },
          { "dataElement": "GQkmR3UkY6h", "value": vals[226] },
          { "dataElement": "LG2TLG9XpYl", "value": vals[227] },
          { "dataElement": "JVPDjT8vllv", "value": vals[228] },
          { "dataElement": "UU1JehSD614", "value": vals[229] },
          { "dataElement": "Kgn5n2guG8o", "value": vals[230] },
          { "dataElement": "mSx5QCUev9Q", "value": vals[231] },
          { "dataElement": "epdgbiVyMJO", "value": vals[232] },
          { "dataElement": "pNqvZx1z43s", "value": vals[233] },
          { "dataElement": "Q5oXpikt1ki", "value": vals[234] },
          { "dataElement": "bHUs8O1TfIN", "value": vals[235] },
          { "dataElement": "td7DzAj0HCr", "value": vals[236] },
          { "dataElement": "pl5OaAW0mdh", "value": vals[237] },
          { "dataElement": "lZa0gdxOBu9", "value": vals[238] },
          { "dataElement": "Vkostf2jlaQ", "value": vals[239] },
          { "dataElement": "xjgr33yt2su", "value": vals[240] },
          { "dataElement": "s9HAQTii3gj", "value": vals[241] },
          { "dataElement": "di6Eq8Jro8k", "value": vals[242] },
          { "dataElement": "vXQIjO1NOMo", "value": vals[243] },
          { "dataElement": "NCawpkA1OgC", "value": vals[244] },
          { "dataElement": "XkRxrEsoFMT", "value": vals[245] },
          { "dataElement": "DrgBalXJEKC", "value": vals[246] },
          { "dataElement": "f0gAX806Q9Q", "value": vals[247] },
          { "dataElement": "KnChRg4lZY3", "value": vals[248] },
          { "dataElement": "SKIwjDDR7R3", "value": vals[249] },
          { "dataElement": "KpGzNajoAHs", "value": vals[250] },
          { "dataElement": "JNUQ4f5ep7g", "value": vals[251] },
          { "dataElement": "llEJBgix3tn", "value": vals[252] },
          { "dataElement": "gHt5wiQt5Il", "value": vals[253] },
          { "dataElement": "Nt1l6wiDB3R", "value": vals[254] },
          { "dataElement": "xiUwf7OG2O8", "value": vals[255] },
          { "dataElement": "akonqpPORjr", "value": vals[256] },
          { "dataElement": "mYWU8yCruxX", "value": vals[257] },
          { "dataElement": "rWkWQNz6JAY", "value": vals[258] },
          { "dataElement": "ZFN9JdayZPw", "value": vals[259] },
          { "dataElement": "u1B5K5jteDt", "value": vals[260] },
          { "dataElement": "mqrUsWNAxPd", "value": vals[261] },
          { "dataElement": "UEezUyDP2NS", "value": vals[262] },
          { "dataElement": "edyw0nlALo5", "value": vals[263] },
          { "dataElement": "TLIcsXjqgSs", "value": vals[264] },
          { "dataElement": "agwfqQdnj4x", "value": vals[265] },
          { "dataElement": "Le1mDr1i30N", "value": vals[266] },
          { "dataElement": "kNrNz3aJsHO", "value": vals[267] },
          { "dataElement": "RMPB1WSQ41V", "value": vals[268] },
          { "dataElement": "DlLs15wkwgT", "value": vals[269] },
          { "dataElement": "Kqt8QiXN8DK", "value": vals[270] },
          { "dataElement": "yfN76pTmoR8", "value": vals[271] },
          { "dataElement": "VuTYBpd7jh0", "value": vals[272] },
          { "dataElement": "FBIWY8ZHK9V", "value": vals[273] },
          { "dataElement": "udbO0lOtYrG", "value": vals[274] },
          { "dataElement": "Lu2PZQcHjlv", "value": vals[275] },
          { "dataElement": "aOpN3m9Tnyy", "value": vals[276] },
          { "dataElement": "qawyhsjeeb7", "value": vals[277] },
          { "dataElement": "bNZwEcNAfGl", "value": vals[278] },
          { "dataElement": "kPg8kHziTly", "value": vals[279] },
          { "dataElement": "KBREHkUOv3M", "value": vals[280] },
          { "dataElement": "NI90kgbyTR3", "value": vals[281] },
          { "dataElement": "qQNpEQzq46Y", "value": vals[282] },
          { "dataElement": "h3yzL4UhbZO", "value": vals[283] },
          { "dataElement": "uwRh8pxTIab", "value": vals[284] },
          { "dataElement": "AI8RUEUOeXQ", "value": vals[285] },
          { "dataElement": "zzNjHNDWqju", "value": vals[286] },
          { "dataElement": "RiS6kpLklAh", "value": vals[287] }
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
        url: '/api/dataElements/' + dataElementId + '.jsonp?paging=false',
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

dataElemList = ['hNHlGrtIY7V', 'D02Vujrum3Q', 'azqPaSqH04J', 'G2qjaFIDaA9', 'z5ZV1JaA2GT', 'g5sctsZSQus', 'w03zBbCfivq', 'y7h0klNkizQ', 'Q5RVl5OYo9s', 'xTWsCqTOmW8', 't8tx33gGcb8', 'GTI82Ypa9mN', 'CUfIkaFa9WY', 'dI56f6FiwFd', 'cADh6GbY4e0', 'gzJW2Np24SP', 'WROkmTO1A0h', 'b8hQobyCBZo', 'ce1juoc4RRY', 'Fm3pidnKpAx', 'QdjIcFCw2Nr', 'krUNfcMTpxS', 'ifKmgSnus1K', 'S2DHHYycNJ6', 'bXlpVJuhR7X', 'lj7wcOEt37U', 'kyliJ2R8MgC', 'W2wwOCCZrKL', 'Ys2wyDeRrZW', 'mMDswiUNTHZ', 'nRu87t6X17o', 'SPaJ4ZAHKMg', 'FFz9jCgOfRD', 'plN1XBxSVaR', 'fGBsfbZBjDk', 'lZwuT1ouIdR', 'XNHQPK5S5nf', 'fSpPDmFaHmq', 'AqR1GxRvkFf', 'SBzW5qxyBaY', 'GoEjmMJch9Q', 'Gvi84bY4vLX', 'uBiSJesfYYn', 'NeadU3bYQ3x', 'ceqcdffjbHN', 'N8q6fumWvrw', 'hA2fLAYK8jZ', 'BOLPX3wnVhd', 'HLSa5cUJKT2', 'dSTKubvH6Bi', 'sCxEBfrs7Im', 'RfjcSAgdGBp', 'ipUtzEa7WlA', 'mUSaNlHeXNR', 'uS46CvDZlyd', 'KtAlsY9bd34', 'lOrCuCFuedN', 'DTAJ443CDWv', 'iJcR2LcRWwu', 'UXMcL0FiYq5', 'h2xJGk7AE8o', 'DrWEG9HqPgB', 'fmxYk2XZ3aR', 'MsDuHHeexlI', 'COOE5QxvuCo', 'cHbSvD1wDC9', 'PpXLN9Xo34W', 'b62j0YDv83c', 'Qa1iYiVGXrx', 'tcPXXAo0T1k', 'oQelBHWH8PH', 'wGMN9Vzl4yq', 'lTGIr4jCwNY', 'dbWh8mjR0Dm', 's1QgDnr9Mf5', 'lAJ66xQeJSO', 'aFzZlQarP5i', 'bF6s2zVUpeB', 'Un20yJ1RnZm', 'b9y09WdAoBb', 'oytOx2EYRJm', 'rmL1LTw8PtB', 'OO7Yal4n0oE', 'Xi9bKBMAKAH', 'N6Xi3Ok3doe', 'rKbWPogqkMz', 'PPWQrvgxx8N', 'OJtjrqglkDj', 'qisFxaDQjSK', 'ydctWvNa4T2', 'pXHnwgxNr8q', 'SDrFSVeDnDN', 'fDV7Cc7lu8L', 'CnPRqfplsy5', 'McCTNIgLWcO', 'rzwjHPtMP8Y', 'GwGV3kbI6vK', 'AZiBZBfmVuo', 'XVeDlDo7IQK', 'uOWtOShbFRN', 'ZoNubquWxbU', 'JjoT6kz2QT7', 'meWaYX1yJbt', 'KnDy8E4JzHv', 'zGFT4oWqBrM', 'r1LM3J9Yi9e', 'egUPTO7GrN2', 'ITNir7GGSlp', 'zKUxQwzm5cl', 'Eb37JwaH9eX', 'yJ4TvovnA9r', 'RLpFpIBn5HJ', 'J4q84qo10jh', 'qPQMlJGxfPU', 'pF4pR8deYFu', 'mUn8x3gbSqd', 'jNDdIFk1MFo', 'DjLukdXqWrm', 'cZhEQku0Stn', 'hFmfrTrCAZA', 'b0G3ng7IeUF', 'UD977AN8IIt', 'a23sX9EM6U3', 'SxGSJ3UgLtA', 'WA5PMyh4xBI', 'pabxC5iaG9Z', 'JZrgHVEKqPS', 'A1wIENuw38p', 'MyyRxtPc1uw', 'UcImMEJRS4f', 'tVfNkEdqxkg', 'uoUW7OxkzYw', 'S2cpucUJ4oh', 'Cy18RgM4qb2', 'IX784uKJOtT', 'SUfH0teOvwH', 'QWIfD2c1wX1', 'whTUPfZfd8N', 'BP9rb80p49Y', 'NLw8dqy4GON', 'rsLvpNE8OI9', 'vj1iCmSrpca', 'ikibRTaRAON', 'VKYNzI8rCZK', 'qtoDgo7QChD', 'TSwEpZl2me4', 'DU5efK4aOQm', 'vaUnpYRQwQB', 'mhpx4x8fUHA', 'MgfBI9tLHEY', 'AMkOpTwvlrx', 'aipkA4giWgN', 'BNMUw0TIPBJ', 'q7SHVdyN7ea', 'u9TLXvOK6O0', 'qlUpy1By9rm', 'UMfe6akghGs', 'tq8RWmAlqEI', 'KAsfUKxkQ5O', 'J8T4mBZq2iY', 't0QJgPTltz3', 'vWKyeSCkwu6', 'BfNVOpYDgss', 'bhVff9ovEKG', 'ZXeggdhv0vA', 'v37cSnyKGkz', 'WHq7oltY8Qw', 'ObKZNl4QAmX', 'CjRDtYI1Esa', 'AV7iAJIbSG4', 'tiPdjO275n8', 'kN6tSM0qhRv', 'lTNOBsCGSeR', 'TfG416NFP1R', 'Aax7pN7OGZI', 'mCDGP9M540f', 'vWuymE99ciw', 'P9I10z7D4lo', 'aCn237HHAsW', 'A6aXcDRfowC', 'qYYcbn90l0S', 'yRjOAJPdXiD', 'S5nxY3Oe2jO', 'PCyFzXb9kfl', 'NXu6054Jpfw', 'OneLQgFdrAJ', 'TZqOVygdZYt', 'xfBZKuxIiQx', 'Jtmphd6dQbZ', 'uEB9ghE2cSK', 'dKmQwG4kRlX', 'hVkYDgRlgGH', 'zHmQtfIligN', 'RYPd01EkzUQ', 'eNQZ3Lh4cAa', 'cDGHxOy85eC', 'echgoPMnuvI', 'wTnn44CyD6H', 'yDe0gv26EZw', 'S4aaoyrWSB0', 'V8cqHwCNQz2', 'faNPqsGLDmq', 'N7uif46sQ2v', 'FFqb5ptk1Ht', 'BF4Ti8cTqUK', 'd08R9ikAVKT', 'NYhaj2fgNwV', 'yqMCPVgaAaC', 'nUi2xi50OnY', 'efpQ2PscFgK', 'y5onEFJ9nB3', 'LECpTHFb3TC', 'r0rYuQ63K2r', 'lc37AsxoCHb', 'Vd6NfVhW9Om', 'SUwqx89JWGQ', 'ADawaHelM2w', 'bJt4nNhePMv', 'eQtmiHHGzDg', 'WS9jKootcci', 'hIieThClGol', 'OUI4GoJE557', 'RV1WnYyCSNG', 'V1fXKue7xSo', 'DMZ2Fs032J2', 'zDnEHobhUxn', 'GQkmR3UkY6h', 'LG2TLG9XpYl', 'JVPDjT8vllv', 'UU1JehSD614', 'Kgn5n2guG8o', 'mSx5QCUev9Q', 'epdgbiVyMJO', 'pNqvZx1z43s', 'Q5oXpikt1ki', 'bHUs8O1TfIN', 'td7DzAj0HCr', 'pl5OaAW0mdh', 'lZa0gdxOBu9', 'Vkostf2jlaQ', 'xjgr33yt2su', 's9HAQTii3gj', 'di6Eq8Jro8k', 'vXQIjO1NOMo', 'NCawpkA1OgC', 'XkRxrEsoFMT', 'DrgBalXJEKC', 'f0gAX806Q9Q', 'KnChRg4lZY3', 'SKIwjDDR7R3', 'KpGzNajoAHs', 'JNUQ4f5ep7g', 'llEJBgix3tn', 'gHt5wiQt5Il', 'Nt1l6wiDB3R', 'xiUwf7OG2O8', 'akonqpPORjr', 'mYWU8yCruxX', 'rWkWQNz6JAY', 'ZFN9JdayZPw', 'u1B5K5jteDt', 'mqrUsWNAxPd', 'UEezUyDP2NS', 'edyw0nlALo5', 'TLIcsXjqgSs', 'agwfqQdnj4x', 'Le1mDr1i30N', 'kNrNz3aJsHO', 'RMPB1WSQ41V', 'DlLs15wkwgT', 'Kqt8QiXN8DK', 'yfN76pTmoR8', 'VuTYBpd7jh0', 'FBIWY8ZHK9V', 'udbO0lOtYrG', 'Lu2PZQcHjlv', 'aOpN3m9Tnyy', 'qawyhsjeeb7', 'bNZwEcNAfGl', 'kPg8kHziTly', 'KBREHkUOv3M', 'NI90kgbyTR3', 'qQNpEQzq46Y', 'h3yzL4UhbZO', 'uwRh8pxTIab', 'AI8RUEUOeXQ', 'zzNjHNDWqju', 'RiS6kpLklAh']
for (var i = 0; i < dataElemList.length; i++){
    getDataElementInformation(dataElemList[i], i);
}

document.getElementById('submit-button').addEventListener("click", function(){
    var program = $('#program').val();
    var orgunit = $('#orgunit').val();

    var vals = [];
    for (var i = 0; i <= NUMBER_OF_DATA_ELEMENTS; i++){
        vals.push($('#dataelem' + i).val());
    }
    var jsn = createPostEvent(program, orgunit, vals);
    sendDataToServer(jsn);
});

document.getElementById('randomized-submit-button').addEventListener("click", function(){
    for (var numberOfSubmits = 0; numberOfSubmits < 10; numberOfSubmits++){
        fillFieldsWithRandomNumbers()
        var program = $('#program').val();
        var orgunit = $('#orgunit').val();

        var vals = [];
        for (var i = 0; i <= NUMBER_OF_DATA_ELEMENTS; i++){
            vals.push($('#dataelem' + i).val());
        }
        var jsn = createPostEvent(program, orgunit, vals);
        sendDataToServer(jsn);
    }
});

var i = 0
for(i = 0; i < NUMBER_OF_DATA_ELEMENTS; i++){
    $('#input-table').append('<tr> <td> <label class="labels" for="dataelem' + i + '">Data elem ' + i + '</label></td><td><input id="dataelem' + i + '" class="input-fields" type="text" value="12345"> </input></td>')
}

function fillFieldsWithRandomNumbers(){
    var i = 0;
    for(i = 0; i < NUMBER_OF_DATA_ELEMENTS; i++){
        randomNumber = Math.floor((Math.random() * 10000) + 1)
        $('#dataelem'+i).val(randomNumber);
    }
}

fillFieldsWithRandomNumbers() // initial filling
