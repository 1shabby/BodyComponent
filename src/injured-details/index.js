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
					caption={{"label":"Sub-label 1","style":"italic","variant":"primary"}} expanded={state.properties.head}>	
					<div id="attack" slot="content">
						<now-input label="Type of Force" required/>
					</div>
					<div id="eyesCheckBox" slot="content">
						<now-checkbox label="Eyes" checked={false}></now-checkbox>
					</div>
					<div id="earsCheckBox" slot="content">
						<now-checkbox label="Ears" checked={false}></now-checkbox>
					</div>
					<div id="noseCheckBox" slot="content">
						<now-checkbox label="Nose" checked={false}></now-checkbox>
					</div>
					<div id="mouthCheckBox" slot="content">
						<now-checkbox label="Mouth" checked={false}></now-checkbox>
					</div>
					<div id="Description" slot="content">
						<now-textarea label="Short Description" />
					</div>
					<div id="image-file" slot="content">
						<input id="attach_image" type="file" id="image"></input>
					</div>	
					<div id="headOfficerCheckBox" slot="content">
						<now-checkbox label="Officers involved?"></now-checkbox>
					</div>		
				</now-accordion-item>
				<now-accordion-item 
					header={{"label":"Neck","weight":"bold","size":"sm","variant":"secondary"}} 
					caption={{"label":"Sub-label 1","style":"italic","variant":"primary"}} expanded={state.properties.neck}>	
					<div id="attack" slot="content">
						<now-input label="Type of Force" required />
					</div>
					<div id="Description" slot="content">
						<now-textarea label="Short Description" />
					</div>
					<div id="image-file" slot="content">
						<input id="attach_image" type="file" id="image"></input>
					</div>	
					<div id="neckOfficerCheckBox" slot="content">
						<now-checkbox label="Officers involved?"></now-checkbox>
					</div>		
				</now-accordion-item>
				<now-accordion-item 
					header={{"label":"Torso","weight":"bold","size":"sm","variant":"secondary"}} 
					caption={{"label":"Sub-label 1","style":"italic","variant":"primary"}} expanded={state.properties.torso}>
					<div id="attack" slot="content">
						<now-input label="Type of Force" required />
					</div>
					<div id="Description" slot="content">
						<now-textarea label="Short Description" />
					</div>
					<div id="image-file" slot="content">
						<input id="attach_image" type="file" id="image"></input>
					</div>
					<div id="torsoOfficerCheckBox" slot="content">
						<now-checkbox label="Officers involved?"></now-checkbox>
					</div>
				</now-accordion-item>
				<now-accordion-item 
					header={{"label":"Arms","weight":"bold","size":"sm","variant":"secondary"}} 
					caption={{"label":"Sub-label 1","style":"italic","variant":"primary"}} expanded={state.properties.arms}>	
					<div id="attack" slot="content">
						<now-input label="Type of Force" required />
					</div>
					<div id="checkBox" slot="content">
						<now-checkbox label="Left Hand" checked={state.properties.leftHand}></now-checkbox>
					</div>
					<div id="checkBox" slot="content">
						<now-checkbox label="Right Hand" checked={false}></now-checkbox>
					</div>
					<div id="Description" slot="content">
						<now-textarea label="Short Description" />
					</div>
					<div id="image-file" slot="content">
						<input id="attach_image" type="file" id="image"></input>
					</div>	
					<div id="armOfficerCheckBox" slot="content">
						<now-checkbox label="Officers involved?"></now-checkbox>
					</div>		
				</now-accordion-item>
				<now-accordion-item 
					header={{"label":"Legs","weight":"bold","size":"sm","variant":"secondary"}} 
					caption={{"label":"Sub-label 1","style":"italic","variant":"primary"}} expanded={state.properties.legs}>	
					<div id="attack" slot="content">
						<now-input label="Type of Force" required />
					</div>
					<div id="lkneeCheckBox" slot="content">
						<now-checkbox label="Left Knee" checked={false}></now-checkbox>
					</div>
					<div id="rkneeCheckBox" slot="content">
						<now-checkbox label="Right Knee" checked={false}></now-checkbox>
					</div>
					<div id="lfootCheckBox" slot="content">
						<now-checkbox label="Left Foot" checked={false}></now-checkbox>
					</div>
					<div id="rfootCheckBox" slot="content">
						<now-checkbox label="Right Foot" checked={false}></now-checkbox>
					</div>
					<div id="Description" slot="content">
						<now-textarea label="Short Description" />
					</div>
					<div id="image-file" slot="content">
						<input id="attach_image" type="file" id="image"></input>
					</div>	
					<div id="legOfficerCheckBox" slot="content">
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
		head: {default: false},
		neck: {default: false},
		torso: {default: false},
		arms: {default: false},
		legs: {default: false},

		leftHand: {default: false}
	},
	view,
	styles
});	

/**
 * 2 approaches: Delivery team and company
 * 
 * UI Builder
 * Why is it important?
 * 	- Non-technical approach
 * What?
 *  - 5 things
 *  - 
 * 
 */