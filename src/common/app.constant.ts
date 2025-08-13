import { SETTING_DATA_TYPE } from 'generated/prisma'
import dayjs from 'dayjs'

export enum METADATA_KEY {
	IS_PUBLIC_KEY = 'IS_PUBLIC_KEY',
	PERMISSION = 'PERMISSION',
}

export enum ENV {
	TEST = 'test',
	DEV = 'dev',
	PRODUCTION = 'production',
}

export enum SETTING {
	MAINTENANCE_END_DATE = 'MAINTENANCE_END_DATE',
	ENB_PASSWORD_ATTEMPT = 'ENB_PASSWORD_ATTEMPT',
	ENB_PASSWORD_EXPIRED = 'ENB_PASSWORD_EXPIRED',
	ENB_NOTI_LOGIN = 'ENB_NOTI_LOGIN',
	ENB_ROTATE_ADMIN_PASSWORD = 'ENB_ROTATE_ADMIN_PASSWORD',
	MFA_REQUIRED = 'MFA_REQUIRED',
	ENB_IP_WHITELIST = 'ENB_IP_WHITELIST',
	ENB_ONLY_ONE_SESSION = 'ENB_ONLY_ONE_SESSION',
	TELEGRAM_OPERATOR_CHAT_ID = 'TELEGRAM_OPERATOR_CHAT_ID',
	TELEGRAM_BOT_TOKEN = 'TELEGRAM_BOT_TOKEN',
	S3_ENDPOINT = 'S3_ENDPOINT',
	S3_BUCKET = 'S3_BUCKET',
	S3_REGION = 'S3_REGION',
	S3_ACCESS_KEY = 'S3_ACCESS_KEY',
	S3_SECRET_KEY = 'S3_SECRET_KEY',
}

export const MODULE_OPTIONS_PROVIDER = 'BECORE_MODULE_OPTIONS_PROVIDER'
export const REGEX_SIZE = /^[0-9]+(kb|MB|GB|TB)$/i
export const REGEX_TIME =
	/^\d+\s*(seconds?|minutes?|hours?|days?|weeks?|months?|years?)$/i

export enum FILE_MIME {
	JPG = 'image/jpg',
	JPEG = 'image/jpeg',
	PNG = 'image/png',
	XLSX = 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet',
	CSV = 'text/csv',
	PDF = 'application/pdf',
	MPEG = 'audio/mpeg',
	MP3 = 'audio/mp3',
	M4A = 'audio/x-m4a',
	MP4 = 'video/mp4',
}

export enum RES_CODE {
	SUCCESS = 'success',
	ISE = 'ise',
}

export enum ERR_CODE {
	MFA_BROKEN = 'mfa-broken',
	INVALID_OTP = 'invalid-otp',
	MFA_REQUIRED = 'mfa-required',
	MFA_METHOD_UNAVAILABLE = 'mfa-method-unavailable',

	INVALID_TOKEN = 'invalid-token',
	EXPIRED_TOKEN = 'expired-token',

	PASSWORD_NOT_MATCH = 'password-not-match',
	PASSWORD_MAX_ATTEMPT = 'password-max-attempt',
	PASSWORD_EXPIRED = 'password-expired',

	FILE_IS_REQUIRED = 'file-is-required',
	FILE_RICH_MAX_FILE = 'file-rich-max-file',
	INVALID_FILE = 'invalid-file',
	FILE_TOO_LARGE = 'file-too-large',

	USER_EXISTED = 'user-existed',
	I18N_EXISTED = 'i18n-existed',

	INVALID_SETTING_VALUE = 'invalid-setting-value',

	INVALID_API_KEY = 'invalid-api-key',
	API_KEY_NOT_ACTIVE = 'api-key-not-activate',

	USER_NOT_ACTIVE = 'user-not-active',

	SESSION_EXPIRED = 'session-expired',

	VALIDATION_ERROR = 'validation-error',
	INTERNAL_SERVER_ERROR = 'internal-server-error',
	PERMISSION_DENIED = 'permission-denied',
	TOO_MANY_REQUEST = 'too-many-request-request',
	SERVICE_UNAVAILABLE = 'server-unavailable',

	USER_NOT_FOUND = 'user-not-found',
	SETTING_NOT_FOUND = 'setting-not-found',
	SESSION_NOT_FOUND = 'session-not-found',
	ITEM_NOT_FOUND = 'item-not-found',
	API_KEY_NOT_FOUND = 'api-key-not-found',
	FILE_NOT_FOUND = 'file-not-found',
	PROXY_NOT_FOUND = 'proxy-not-found',
	LIST_NOT_FOUND = 'List-not-found',
	ERROR = "error",
}

export const ADMIN_USER_ID = 'a8bpd742rslg'
export const ADMIN_USERNAME = 'admin'
export const SYS_USER_ID = 'xs6ua3wp0rtm'
export const SYS_USERNAME = 'system'
export const defaultRoles: Record<
	'administrator' | 'user',
	{ id: string; title: string; description: string }
> = {
	administrator: {
		id: 'x4tu1hzoh13g',
		title: 'Administrator',
		description: 'Administrator role',
	},
	user: { id: 'sabb8hc2pqmd', title: 'User', description: 'User role' },
}

export const defaultSettings: Record<
	SETTING,
	{
		value: string
		type: SETTING_DATA_TYPE
		description?: string
		isSecret: boolean
	}
> = {
	[SETTING.ENB_IP_WHITELIST]: {
		type: SETTING_DATA_TYPE.BOOLEAN,
		value: 'true',
		isSecret: false,
	},
	[SETTING.MAINTENANCE_END_DATE]: {
		type: SETTING_DATA_TYPE.DATE,
		value: dayjs(0).toJSON(),
		isSecret: false,
	},
	[SETTING.ENB_PASSWORD_ATTEMPT]: {
		type: SETTING_DATA_TYPE.BOOLEAN,
		value: 'false',
		isSecret: false,
	},
	[SETTING.ENB_PASSWORD_EXPIRED]: {
		type: SETTING_DATA_TYPE.BOOLEAN,
		value: 'false',
		isSecret: false,
	},
	[SETTING.MFA_REQUIRED]: {
		type: SETTING_DATA_TYPE.BOOLEAN,
		value: 'true',
		isSecret: false,
	},
	[SETTING.ENB_ONLY_ONE_SESSION]: {
		type: SETTING_DATA_TYPE.BOOLEAN,
		value: 'false',
		description: 'Only one session per user',
		isSecret: false,
	},
	[SETTING.TELEGRAM_BOT_TOKEN]: {
		type: SETTING_DATA_TYPE.STRING,
		value: '',
		isSecret: true,
	},
	[SETTING.TELEGRAM_OPERATOR_CHAT_ID]: {
		type: SETTING_DATA_TYPE.STRING,
		value: '',
		isSecret: false,
	},
	[SETTING.S3_REGION]: {
		type: SETTING_DATA_TYPE.STRING,
		value: '',
		isSecret: false,
	},
	[SETTING.S3_ACCESS_KEY]: {
		type: SETTING_DATA_TYPE.STRING,
		value: '',
		isSecret: true,
	},
	[SETTING.S3_ENDPOINT]: {
		type: SETTING_DATA_TYPE.STRING,
		value: '',
		isSecret: false,
	},
	[SETTING.S3_BUCKET]: {
		type: SETTING_DATA_TYPE.STRING,
		value: '',
		isSecret: false,
	},
	[SETTING.S3_SECRET_KEY]: {
		type: SETTING_DATA_TYPE.STRING,
		value: '',
		isSecret: true,
	},
	[SETTING.ENB_NOTI_LOGIN]: {
		type: SETTING_DATA_TYPE.BOOLEAN,
		value: 'false',
		isSecret: false,
	},
	[SETTING.ENB_ROTATE_ADMIN_PASSWORD]: {
		type: SETTING_DATA_TYPE.BOOLEAN,
		value: 'false',
		isSecret: false,
	},
}

export const PERMISSIONS = {
	ACTIVITY: {
		VIEW: { roles: [defaultRoles.administrator.id, defaultRoles.user.id] },
		VIEW_ALL: { roles: [defaultRoles.administrator.id] },
	},
	FILE: {
		UPLOAD: { roles: [defaultRoles.administrator.id] },
	},
	SESSION: {
		VIEW: { roles: [defaultRoles.administrator.id, defaultRoles.user.id] },
		VIEW_ALL: { roles: [defaultRoles.administrator.id] },
		REVOKE: { roles: [defaultRoles.administrator.id, defaultRoles.user.id] },
		REVOKE_ALL: { roles: [defaultRoles.administrator.id] },
	},
	SETTING: {
		VIEW: { roles: [defaultRoles.administrator.id, defaultRoles.user.id] },
		UPDATE: { roles: [defaultRoles.administrator.id] },
	},
	I18N: {
		VIEW: { roles: [defaultRoles.administrator.id] },
		UPDATE: { roles: [defaultRoles.administrator.id] },
		DELETE: { roles: [defaultRoles.administrator.id] },
	},
	IPWHITELIST: {
		VIEW: { roles: [defaultRoles.administrator.id] },
		CREATE: { roles: [defaultRoles.administrator.id] },
		DELETE: { roles: [defaultRoles.administrator.id] },
	},
	USER: {
		VIEW: { roles: [defaultRoles.administrator.id] },
		UPDATE: { roles: [defaultRoles.administrator.id] },
		RESET_MFA: { roles: [defaultRoles.administrator.id] },
	},
	ROLE: {
		VIEW: { roles: [defaultRoles.administrator.id] },
		UPDATE: { roles: [defaultRoles.administrator.id] },
		DELETE: { roles: [defaultRoles.administrator.id] },
	},
	TELE_BOT: {
		VIEW: { roles: [defaultRoles.administrator.id] },
		UPDATE: { roles: [defaultRoles.administrator.id] },
		DELETE: { roles: [defaultRoles.administrator.id] },
	},
	TELE_CHAT: {
		VIEW: { roles: [defaultRoles.administrator.id] },
		UPDATE: { roles: [defaultRoles.administrator.id] },
		DELETE: { roles: [defaultRoles.administrator.id] },
	},
	TELE_TEMPLATE: {
		VIEW: { roles: [defaultRoles.administrator.id] },
		UPDATE: { roles: [defaultRoles.administrator.id] },
		DELETE: { roles: [defaultRoles.administrator.id] },
		SEND: { roles: [defaultRoles.administrator.id] },
	},
	API_KEY: {
		VIEW: { roles: [defaultRoles.administrator.id, defaultRoles.user.id] },
		VIEW_ALL: { roles: [defaultRoles.administrator.id] },
		UPDATE: { roles: [defaultRoles.administrator.id] },
		DELETE: { roles: [defaultRoles.administrator.id] },
	},
	PROXY: {
		VIEW: { roles: [defaultRoles.administrator.id] },
		UPSERT: { roles: [defaultRoles.administrator.id] },
		DELETE: { roles: [defaultRoles.administrator.id] },
	},
}

export enum TF_TYPE {
	HOUR = 'HOUR',
	DAY = 'DAY',
}

export enum ACTIVITY_TYPE {
	LOGIN = 'login',
	LOGOUT = 'logout',
	CHANGE_PASSWORD = 'change-password',
	SETUP_MFA = 'setup-mfa',

	CREATE_USER = 'create-user',
	UPDATE_USER = 'update-user',

	CREATE_ROLE = 'create-role',
	UPDATE_ROLE = 'update-role',
	DEL_ROLE = 'del-role',

	REVOKE_SESSION = 'revoke-session',
	RESET_MFA = 'reset-mfa',

	CREATE_IP_WHITELIST = 'create-ipwhitelist',
	DEL_IP_WHITELIST = 'del-ipwhitelist',

	UPDATE_SETTING = 'update-setting',

	CREATE_TELEGRAM_BOT = 'create-telegram-bot',
	UPDATE_TELEGRAM_BOT = 'update-telegram-bot',
	DEL_TELEGRAM_BOT = 'del-telegram-bot',

	CREATE_API_KEY = 'create-api-key',
	UPDATE_API_KEY = 'update-api-key',
	DEL_API_KEY = 'del-api-key',

	CREATE_PROXY = 'create-proxy',
	UPDATE_PROXY = 'update-proxy',
	DEL_PROXY = 'del-proxy',
}

export enum MFA_METHOD {
	TELEGRAM = 'telegram',
	TOTP = 'totp',
}

export enum LOGIN_RES_TYPE {
	COMPLETED = 'completed',
	MFA_SETUP = 'mfa-setup',
	MFA_CONFIRM = 'mfa-confirm',
}
