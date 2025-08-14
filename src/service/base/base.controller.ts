import {
	ERR_CODE,
	IReqApp,
	ReqUser,
	UPermission,
	UnAuthErr,
	getRealIp,
} from '../../common'

export abstract class ControllerBase<
	TRU extends ReqUser = ReqUser,
	TP extends string[] = UPermission[],
> {
	protected request: IReqApp

	protected constructor(request: IReqApp) {
		this.request = request
	}

	// lấy thông tin của session mới
	protected getActivitySession<
		TR extends boolean,
		R = TR extends true
		? {
			clientIp: string
			userAgent: string
			currentUser: Omit<TRU, 'permissions'> & {
				permissions: TP
			}
		}
		: {
			clientIp: string
			userAgent: string
		},
	>(includeUser?: TR): R {
		const clientIp = getRealIp(this.request)
		const userAgent = this.request.headers['user-agent'] || 'Unknown'
		const currentUser = this.request.user
		if (includeUser && !currentUser) {
			throw new UnAuthErr(ERR_CODE.PERMISSION_DENIED)
		}
		return { clientIp, userAgent, currentUser } as R
	}
}
