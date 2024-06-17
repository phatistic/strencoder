function StrecStartEncode () {
    StrecEncodedStr = ""
}
function StrecSetupCode (LetterGroup: string, Header: string, DisFindIndex: boolean) {
    StrecEncodedI = 0
    StrecSymbolEncoder.push("---" + Header + "---")
    for (let index = 0; index < LetterGroup.length; index++) {
        StrecC = LetterGroup.charAt(StrecEncodedI)
        StrecC2 = StrecSymbolEncoder.indexOf(StrecC)
        if (DisFindIndex || StrecSymbolEncoder[StrecC2] != StrecC) {
            StrecSymbolEncoder.push(StrecC)
        }
        StrecEncodedI += 1
    }
}
function StrecStartDecode () {
    StrecEncodedI = 0
}
function StrecSetupCodeList () {
    StrecSymbolEncoder = []
    StrecSetupCode("0123456789@#฿&_-()=%\"*':/!?+,.$€¥¢¤©®™~¿[]{}<>«»¡`;÷\\|¦¬^×§¶° ", "Sy", false)
    StrecSetupCode("abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ", "en", true)
    StrecEncodedStr = ""
}
function StrecReadAndDecode () {
    StrecNval = ""
    while (StrecEncodedI < StrecEncodedStr.length) {
        StrecI = parseFloat(StrecEncodedStr.charAt(StrecEncodedI))
        StrecC = ""
        for (let index = 0; index < StrecI; index++) {
            StrecEncodedI += 1
            StrecC = "" + StrecC + StrecEncodedStr.charAt(StrecEncodedI)
        }
        StrecEncodedI += 1
        StrecNval = "" + StrecNval + StrecSymbolEncoder[parseFloat(StrecC)]
        if (parseFloat(StrecEncodedStr.charAt(StrecEncodedI)) == 0) {
            break;
        }
    }
    StrecEncodedI += 1
    return StrecNval
}
function StrecWriteAndEncode (Text: string) {
    StrecTval = Text
    for (let StrecI2 = 0; StrecI2 <= StrecTval.length - 1; StrecI2++) {
        StrecC = StrecTval.charAt(StrecI2)
        StrecC2 = StrecSymbolEncoder.indexOf(StrecC)
        StrecNval = convertToText(StrecC2)
        StrecEncodedStr = "" + StrecEncodedStr + convertToText(StrecNval.length) + StrecNval
    }
    StrecEncodedStr = "" + StrecEncodedStr + "0"
    return StrecEncodedStr
}
let StrecTval = ""
let StrecI = 0
let StrecNval = ""
let StrecC2 = 0
let StrecC = ""
let StrecSymbolEncoder: string[] = []
let StrecEncodedI = 0
let StrecEncodedStr = ""
StrecSetupCodeList()
