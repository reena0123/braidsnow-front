import { Model } from '@vuex-orm/core'

export default class Migration extends Model {

	static entity = 'migrations'
	static fields () {
		
		return {
			id: this.attr(null),
			migration: this.attr(''),
			batch: this.attr('null'),
			
			

		}
	}
}