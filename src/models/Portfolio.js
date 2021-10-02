import { Model } from '@vuex-orm/core'

export default class Portfolio extends Model {

	static entity = 'portfolios'
	static fields () {
		
		return {
			id: this.attr(null),
			braider_id	: this.attr(null),
			image: this.attr(''),
			created_at: this.attr(''),
			updated_at: this.attr('')

		}
	}
}