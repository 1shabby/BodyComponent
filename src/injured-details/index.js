import {createCustomElement} from '@servicenow/ui-core';
import snabbdom from '@servicenow/ui-renderer-snabbdom';
import '@servicenow/now-dropdown';
import '@servicenow/now-input';
import '@servicenow/now-button';
import '@servicenow/now-select';
import '@servicenow/now-checkbox';
import '@servicenow/now-textarea';
import '@servicenow/now-radio-buttons';
import '@servicenow/now-accordion';
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
			<now-accordion heading-level="3" trigger-icon={{"type":"plus-minus","position":"start"}}>
				<now-accordion-item 
					header={{"label":"Head","weight":"bold","size":"sm","variant":"secondary"}} 
					caption={{"label":"Sub-label 1","style":"italic","variant":"primary"}} expanded={false}>	
					<div id="attack" slot="content">
						<now-input label="Type of Force" required />
					</div>
					<div id="Description" slot="content">
						<now-textarea label="Short Description" />
					</div>
					<div id="image-file" slot="content">
						<input id="attach_image" type="file" id="image"></input>
					</div>	
					<div id="checkBox" slot="content">
						<now-checkbox label="Officers involved?"></now-checkbox>
					</div>		
				</now-accordion-item>
				<now-accordion-item 
					header={{"label":"Neck","weight":"bold","size":"sm","variant":"secondary"}} 
					caption={{"label":"Sub-label 1","style":"italic","variant":"primary"}} expanded={false}>	
					<div id="attack" slot="content">
						<now-input label="Type of Force" required />
					</div>
					<div id="Description" slot="content">
						<now-textarea label="Short Description" />
					</div>
					<div id="image-file" slot="content">
						<input id="attach_image" type="file" id="image"></input>
					</div>	
					<div id="checkBox" slot="content">
						<now-checkbox label="Officers involved?"></now-checkbox>
					</div>		
				</now-accordion-item>
				<now-accordion-item 
					header={{"label":"Torso","weight":"bold","size":"sm","variant":"secondary"}} 
					caption={{"label":"Sub-label 1","style":"italic","variant":"primary"}}>
					<div id="attack" slot="content">
						<now-input label="Type of Force" required />
					</div>
					<div id="Description" slot="content">
						<now-textarea label="Short Description" />
					</div>
					<div id="image-file" slot="content">
						<input id="attach_image" type="file" id="image"></input>
					</div>
					<div id="checkBox" slot="content">
						<now-checkbox label="Officers involved?"></now-checkbox>
					</div>
				</now-accordion-item>
				<now-accordion-item 
					header={{"label":"Arms","weight":"bold","size":"sm","variant":"secondary"}} 
					caption={{"label":"Sub-label 1","style":"italic","variant":"primary"}} expanded={false}>	
					<div id="attack" slot="content">
						<now-input label="Type of Force" required />
					</div>
					<div id="Description" slot="content">
						<now-textarea label="Short Description" />
					</div>
					<div id="image-file" slot="content">
						<input id="attach_image" type="file" id="image"></input>
					</div>	
					<div id="checkBox" slot="content">
						<now-checkbox label="Officers involved?"></now-checkbox>
					</div>		
				</now-accordion-item>
				<now-accordion-item 
					header={{"label":"Legs","weight":"bold","size":"sm","variant":"secondary"}} 
					caption={{"label":"Sub-label 1","style":"italic","variant":"primary"}} expanded={false}>	
					<div id="attack" slot="content">
						<now-input label="Type of Force" required />
					</div>
					<div id="Description" slot="content">
						<now-textarea label="Short Description" />
					</div>
					<div id="image-file" slot="content">
						<input id="attach_image" type="file" id="image"></input>
					</div>	
					<div id="checkBox" slot="content">
						<now-checkbox label="Officers involved?"></now-checkbox>
					</div>		
				</now-accordion-item>
				</now-accordion>
				<div id="Injuries">
					<now-input id="injure" value={state.properties.injuries} placeholder="Click parts on the image" label="Body parts injured" disabled={true} required />
					<now-input label="Extent of Injuries" required />
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