import { Model } from '@vuex-orm/core'
import User from './User'

export default class UserService extends Model {

	static entity = 'user_services'

	static fields () {
		
		return {
			id: this.attr(null),
			user_id: this.attr(null),
			service: this.attr(''),
			hour: this.attr(null),
			min: this.attr(null),
			price: this.attr(null),
			created_at: this.attr(''),
			updated_at: this.attr(''),
			user: this.belongsTo(User, 'user_id')
		}
	}
}