import { Model } from '@vuex-orm/core'

export default class Service extends Model {

	static entity = 'services'
	static fields () {
		
		return {
			id: this.attr(null),
			uuid: this.attr(''),
			title: this.attr(''),
			slug: this.attr(''),
			image : this.attr(''),
			created_at: this.attr(''),
			updated_at: this.attr(''),
			
		}
	}
}