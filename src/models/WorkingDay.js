import { Model } from '@vuex-orm/core'

export default class WorkingDay extends Model {

	static entity = 'working_days'
	static fields () {
		
		return {
			id: this.attr(null),
			name: this.attr(''),
			status: this.attr(null),
			created_at: this.attr(''),
			updated_at: this.attr(''),
			
		}
	}
}