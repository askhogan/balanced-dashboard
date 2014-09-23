import LinkedTextCellView from "./linked-text-cell";

var LinkedTwoLinesCellView = LinkedTextCellView.extend({
	isBlank: Ember.computed.empty('primaryLabelText'),
	labelText: function() {
		var label = '<span class="primary">%@</span><span class="secondary">%@</span>';
		var secondaryLabel = this.get('secondaryLabelText') || '';
		return Balanced.Utils.safeFormat(label, this.get('primaryLabelText'), secondaryLabel).htmlSafe();
	}.property('primaryLabelText', 'secondaryLabelText')
});

export default LinkedTwoLinesCellView;