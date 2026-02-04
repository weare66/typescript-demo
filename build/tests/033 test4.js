"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var PaymentStatus;
(function (PaymentStatus) {
    PaymentStatus["Success"] = "success";
    PaymentStatus["Failed"] = "failed";
})(PaymentStatus || (PaymentStatus = {}));
///
// type f = (res: IResponseSuccess | IResponseFailed) => number;
// type Res = IResponseSuccess | IResponseFailed;
// function isSuccses(res: Res) res is IResponseSuccess {
// 	if (res.status === PaymentStatus.Success) {
// 		return true
// 	}
// 	return false;
// }
// function getIdFromData(res: Res): number {
// 	if (isSuccses(res)) {
// 		return res.data.databaseId;
// 	} else {
// 		throw new Error(res.data.errorMessage)
// 	}
// }
////my
// function IResF(res: IResponseSuccess | IResponseFailed) res is IResponseFailed {
//  return res;
// }
// function IResS(res: IResponseSuccess | IResponseFailed) res is IResponseSuccess {
// }
// function statusPay (res: IResponseSuccess | IResponseFailed) {
// 	if (IResS) {
// 		return 'databaseId'
// 	} else {
// 		throw new Error('!!!!');
// 	}
// }
