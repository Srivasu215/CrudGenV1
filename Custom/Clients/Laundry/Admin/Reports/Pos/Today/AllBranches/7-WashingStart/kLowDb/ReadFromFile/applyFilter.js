import { StartFunc as buildData } from '../../../CommonFuncs/buildData.js';

let StartFunc = () => {
    const LocalQrCodeData = buildData();

    // let jVarLocalTransformedData = jFLocalMergeFunc({ inQrData: Qrdb });
    let LocalArrayReverseData = LocalQrCodeData.slice().reverse();

    return LocalArrayReverseData;
};

let jFLocalMergeFunc = ({ inQrData }) => {

    let jVarLocalReturnObject = inQrData.map(loopQr => {
        return {
            QrCodeId: loopQr.pk,
            ItemName: loopQr.ItemName,
            Rate: loopQr.Rate,
            FactorySelected: loopQr.location,
            OrderNo: loopQr.GenerateReference.ReferncePk,
            DeliveryDateTime: loopQr.DeliveryDateTime,
            location: loopQr.location,
            OrderDateTime: loopQr.BookingData.OrderData.Currentdateandtime,
            BranchName: loopQr.BookingData.OrderData.BranchName,
            TimeSpan: TimeSpan({ DateTime: loopQr.DateTime })
        };
    });


    return jVarLocalReturnObject;
};

function TimeSpan({ DateTime }) {
    var diffMs = new Date() - new Date(DateTime);
    var diffMonths = Math.floor(diffMs / 2629800000); // approximate months (30.44 days)
    var diffDays = Math.floor((diffMs % 2629800000) / 86400000);
    var diffHrs = Math.floor((diffMs % 86400000) / 3600000);
    var diffMins = Math.round((diffMs % 3600000) / 60000);

    if (diffMonths > 0) {
        return diffMonths + " months, " + diffDays + " days, " + diffHrs + " hours, " + diffMins + " min";
    } else if (diffDays > 0) {
        return diffDays + " days, " + diffHrs + " hours, " + diffMins + " min";
    } else if (diffHrs > 0) {
        return diffHrs + " hours, " + diffMins + " min";
    } else {
        return diffMins + " min";
    }
}

//  StartFunc()
export { StartFunc };
