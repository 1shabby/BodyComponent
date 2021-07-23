import {createCustomElement} from '@servicenow/ui-core';
import snabbdom from '@servicenow/ui-renderer-snabbdom';
import '@servicenow/now-dropdown';
import '@servicenow/now-input';
import '@servicenow/now-button';
import '@servicenow/now-select';
import '@servicenow/now-checkbox';
import '@servicenow/now-textarea';
import '@servicenow/now-radio-buttons';
import styles from './styles.scss';



const view = (state,{
	updateState
}) => {
	return (
		<aside>
			<div id="header">
				<span>Details</span>
			</div>
			<div id="sub_header">
				<span>Please fill the boxes</span>
			</div>
			<form>
				<div id="Injuries">
					<now-input id="injure" value={state.properties.injuries} placeholder="Click parts on the image" label="Body parts injured" disabled={true} required />
					<now-input label="Extent of Injuries" required />
				</div>
				<div id="attack">
					<now-input label="Type of Force" required />
				</div>
				<div id="Description">
					<now-textarea label="Short Description" />
				</div>
				<div id="checkBox">
					<now-checkbox label="Officers involved?"></now-checkbox>
				</div>
				<div id="image-file">
					<input id="attach_image" type="file" id="image"></input>
				</div>
				<div>
					<now-button id="submit" label="Submit" variant="primary" size="md" icon="" tooltip-content=""/>
				</div>
			</form>
		</aside>
	);
};

createCustomElement('injured-details', {
	renderer: {type: snabbdom},
	initialState: {},
	properties: {
		injuries: {
			default: []
		}
	},
	view,
	styles
});