interface IPayment {
  sum: number;
  from: number;
  to: number;
}

enum PaymentStatus {
  Success = 'success',
  Failed = 'failed',
}

interface IPaymentRequest extends IPayment {}

interface IDataSuccess extends IPayment {
  databaseId: number;
}

interface IDataFailed {
  errorMessage: string;
  errorCode: number;
}

interface IResponseSuccess {
  status: PaymentStatus.Success;
  data: IDataSuccess;
}

interface IResponseFailed {
  status: PaymentStatus.Failed;
  data: IDataFailed;
}

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
