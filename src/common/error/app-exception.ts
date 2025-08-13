import { HttpStatus } from '@nestjs/common'
import { ERR_CODE, RES_CODE } from '../../common'

export class CoreErr<T extends string = ERR_CODE> extends Error {
	public readonly response?: { stack?: object; message?: string }
	public readonly status: HttpStatus
	public readonly code: T

	constructor(
		code: T,
		status: HttpStatus = HttpStatus.INTERNAL_SERVER_ERROR,
		response?: {
			stack?: object
			message?: string
		},
	) {
		super()
		this.status = status
		this.response = response
		this.code = code
	}
}

export class BadReqRErr extends CoreErr {
	constructor(
		code: ERR_CODE,
		response?: {
			stack?: object
			message?: string
		},
	) {
		super(code, HttpStatus.BAD_REQUEST, response)
	}
}

export class UnAuthErr extends CoreErr {
	constructor(
		code: ERR_CODE,
		response?: {
			stack?: object
			message?: string
		},
	) {
		super(code, HttpStatus.UNAUTHORIZED, response)
	}
}

export class NotFoundErr extends CoreErr {
	constructor(
		code: ERR_CODE,
		response?: {
			stack?: object
			message?: string
		},
	) {
		super(code, HttpStatus.NOT_FOUND, response)
	}
}
