import { Model } from '@vuex-orm/core'

export default class Permission extends Model {

	static entity = 'permissions'
	static fields () {
		
		return {
			id: this.attr(null),
			slug: this.attr(''),
			title: this.attr(''),
			created_at: this.attr(''),
			updated_at: this.attr(''),
			

		}
	}
}