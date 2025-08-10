import { HttpStatus } from '@nestjs/common'
import { ProxyProtocol, SETTING_DATA_TYPE, User } from 'generated/prisma'
import { Request } from 'express'
import { ReadStream } from 'fs-extra'
import { Paths } from 'type-fest'
import {
	ACTIVITY_TYPE,
	LOGIN_RES_TYPE,
	MFA_METHOD,
	PERMISSIONS,
	SETTING,
} from './app.constant'

export type PermissionKey = Paths<typeof PERMISSIONS, { maxRecursionDepth: 1 }>
export type ValidPermissionKey<T> = T extends `${string}.${string}` ? T : never
export type UPermission = ValidPermissionKey<PermissionKey>

export interface ActivityTypeMap extends Record<ACTIVITY_TYPE, object> {
	[ACTIVITY_TYPE.LOGIN]: Record<string, never>
	[ACTIVITY_TYPE.LOGOUT]: Record<string, never>
	[ACTIVITY_TYPE.CHANGE_PASSWORD]: Record<string, never>
	[ACTIVITY_TYPE.SETUP_MFA]: {
		method: MFA_METHOD
		telegramUsername?: string
	}

	[ACTIVITY_TYPE.DEL_ROLE]: {
		roleIds: string[]
	}
	[ACTIVITY_TYPE.CREATE_ROLE]: {
		id: string
		description: string
		title: string
		permissionIds: string[]
		playerIds: string[]
	}
	[ACTIVITY_TYPE.UPDATE_ROLE]: {
		id: string
		description: string
		title: string
		permissionIds: string[]
		playerIds: string[]
	}

	[ACTIVITY_TYPE.REVOKE_SESSION]: {
		sessionId: string
	}
	[ACTIVITY_TYPE.RESET_MFA]: {
		userIds: string[]
	}
	[ACTIVITY_TYPE.CREATE_IP_WHITELIST]: {
		ip: string
		note?: string
	}
	[ACTIVITY_TYPE.DEL_IP_WHITELIST]: {
		ips: string[]
	}
	[ACTIVITY_TYPE.UPDATE_SETTING]: {
		key: string
		value: string
	}

	[ACTIVITY_TYPE.CREATE_TELEGRAM_BOT]: {
		id: string
	}
	[ACTIVITY_TYPE.UPDATE_TELEGRAM_BOT]: {
		id: string
	}
	[ACTIVITY_TYPE.DEL_TELEGRAM_BOT]: {
		botIds: string[]
	}

	[ACTIVITY_TYPE.CREATE_USER]: {
		id: string
		enabled: boolean
		roleIds: string[]
		username: string
	}
	[ACTIVITY_TYPE.UPDATE_USER]: {
		id: string
		enabled?: boolean
		roleIds?: string[]
		username?: string
	}

	[ACTIVITY_TYPE.CREATE_API_KEY]: {
		id: string
	}
	[ACTIVITY_TYPE.UPDATE_API_KEY]: {
		id: string
	}
	[ACTIVITY_TYPE.DEL_API_KEY]: {
		apiKeyIds: string[]
	}

	[ACTIVITY_TYPE.CREATE_PROXY]: {
		id: string
		host: string
		port: number
		protocol: ProxyProtocol
	}
	[ACTIVITY_TYPE.UPDATE_PROXY]: {
		id: string
		host: string
		port: number
		protocol: ProxyProtocol
		enabled: boolean
	}
	[ACTIVITY_TYPE.DEL_PROXY]: {
		proxies: {
			id: string
			host: string
			port: number
			protocol: ProxyProtocol
		}[]
	}
}

// region file
export interface IFile extends Omit<Express.Multer.File, 'filename'> {
	password?: string
}

export interface IStorageBackend {
	upload(filePath: string, contentType: IContentType): Promise<string>
	download(filename: string): Promise<IDownloadRes>
}

export interface IDownloadRes {
	content: ReadStream
	contentType: {
		mime: string
		ext: string
	}
}

export interface IContentType {
	mime: string
	ext: string
}

export interface IReqApp<TU extends ReqUser = ReqUser> extends Request {
	id: string
	user?: TU
	apiKey?: {
		id: string
		name: string
		userId: string
	}
}

export type SettingBody = {
	value: string
	isSecret: boolean
	type: SETTING_DATA_TYPE
	description?: string
}
export type PermissionObj = Record<
	string,
	Record<
		string,
		{
			description?: string
			roles: string[]
		}
	>
>

export interface ModuleOptions<
	T extends Record<string, string> = typeof SETTING,
	TRU extends ReqUser = ReqUser,
	TUR extends UserResult = UserResult,
> {
	appSetting?: T
	appDefaultSettings?: Partial<Record<keyof T, SettingBody>>
	appPermissions?: PermissionObj
	getReqUser?: (currentUser: ReqUser) => Promise<TRU>
	getResultUser?: (currentUser: UserResult) => Promise<TUR>
}

export interface IErrorRes {
	code: string
	t: Date
	message: string
	statusCode: HttpStatus
	errors?: unknown
}

export interface ICursorPagingData<T> {
	docs: T[]
	hasNext: boolean
	nextCursor?: string
}

export interface IPagingData<T> {
	docs: T[]
	count: number
}

export interface ReqUser
	extends Pick<
		User,
		| 'id'
		| 'username'
		| 'mfaTelegramEnabled'
		| 'mfaTotpEnabled'
		| 'totpSecret'
		| 'telegramUsername'
		| 'enabled'
		| 'created'
		| 'modified'
	> {
	sessionId: string
	password: string
	permissions: UPermission[]
}

export type UserResult = Omit<
	ReqUser,
	'sessionId' | 'password' | 'totpSecret'
> & {
	telegramUsername: string | null
	permissions: UPermission[]
}

export interface IUserMFA {
	mfaTotpEnabled: boolean
	totpSecret?: string | null
	id: string
	mfaTelegramEnabled: boolean
	telegramUsername?: string | null
}

export interface ITokenPayload {
	userId: string
	loginDate: Date
	sessionId: string
	ip: string
}

export type ITokenDecoded = ITokenPayload & {
	exp: number
	iat: number
}

export interface ILoginRes {
	type: LOGIN_RES_TYPE.COMPLETED
	accessToken: string
	refreshToken: string
	exp: number
	expired: string
	user?: UserResult
}

export interface ILoginMFASetupRes {
	type: LOGIN_RES_TYPE.MFA_SETUP
	mfaToken: string
	totpSecret: string
}

export interface ILoginMFARes {
	type: LOGIN_RES_TYPE.MFA_CONFIRM
	mfaToken: string
	token: string
	availableMethods: MFA_METHOD[]
}

export type S3Config = {
	endpoint: string
	accessKey: string
	secretKey: string
	bucket: string
	region?: string
}
