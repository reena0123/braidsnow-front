import { Model } from '@vuex-orm/core'

export default class PasswordReset extends Model {

	static entity = 'password_resets'
	static fields () {
		
		return {
			id: this.attr(null),
			email: this.attr(''),
			token: this.attr(''),
			created_at: this.attr(''),
			
			
		}
	}
}