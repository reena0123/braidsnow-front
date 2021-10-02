import { Model } from '@vuex-orm/core'
import User from './User'

export default class Favourite extends Model {

	static entity = 'favourites'

	static fields () {
		
		return {
			id: this.attr(null),
			user_id: this.attr(null),
			braider_id: this.attr(null),
			created_at: this.attr(''),
			updated_at: this.attr(''),
			user: this.belongsTo(User, 'user_id'),
			braider: this.belongsTo(User, 'braider_id')
		}
	}
}