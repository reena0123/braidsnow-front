import { Model } from '@vuex-orm/core'
import Role from './Role'
import Permission from './Permission'

export default class RolePermission extends Model {

	static entity = 'role_permissions'
	static fields () {
		
		return {
			id: this.attr(null),
			role_id : this.attr(null),
			permission_id : this.attr(null),
			created_at: this.attr(''),
			updated_at: this.attr(''),
			role: this.belongsTo(Role, 'role_id'),
			Permission: this.belongsTo(Permission, 'permission_id')

		}
	}
}