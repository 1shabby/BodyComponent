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
						<now-checkbox id="left" label="Eyes" checked={false}></now-checkbox>
					</div>
					<div id="earsCheckBox" slot="content">
						<now-checkbox id="right" label="Ears" checked={false}></now-checkbox>
					</div>
					<div id="noseCheckBox" slot="content">
						<now-checkbox id="left" label="Nose" checked={false}></now-checkbox>
					</div>
					<div id="mouthCheckBox" slot="content">
						<now-checkbox id="right" label="Mouth" checked={false}></now-checkbox>
					</div>
					<div id="Description" slot="content">
						<now-textarea label="Short Description" />
					</div>
					<div id="image-file" slot="content">
						<input id="attach_image" type="file" id="image" accept=".jpg, .jpeg, .png, .mp4"></input>
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
						<input id="attach_image" type="file" id="image" accept=".jpg, .jpeg, .png, .mp4"></input>
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
						<input id="attach_image" type="file" id="image" accept=".jpg, .jpeg, .png, .mp4"></input>
					</div>
					<div id="torsoOfficerCheckBox" slot="content">
						<now-checkbox label="Officers involved?"></now-checkbox>
					</div>
				</now-accordion-item>
				<now-accordion-item 
					header={{"label":"Arms","weight":"bold","size":"sm","variant":"secondary"}} 
					caption={{"label":"Sub-label 1","style":"italic","variant":"primary"}} 
					expanded={state.properties.leftHand || state.properties.rightHand ||
							  state.properties.leftUpperArm || state.properties.rightUpperArm ||
							  state.properties.leftForearm || state.properties.rightForearm}>	
					<div id="attack" slot="content">
						<now-input label="Type of Force" required={state.properties.leftHand || state.properties.rightHand ||
																   state.properties.leftUpperArm || state.properties.rightUpperArm ||
							  									   state.properties.leftForearm || state.properties.rightForearm} />
					</div>
					<div id="checkBox" slot="content">
						<now-checkbox id="left" label="Left Upper Arm" checked={state.properties.leftUpperArm}></now-checkbox>
					</div>
					<div id="checkBox" slot="content">
						<now-checkbox id="right" label="Right Upper Arm" checked={state.properties.rightUpperArm}></now-checkbox>
					</div>
					<div id="checkBox" slot="content">
						<now-checkbox id="left" label="Left Forearm" checked={state.properties.leftForearm}></now-checkbox>
					</div>
					<div id="checkBox" slot="content">
						<now-checkbox id="right" label="Right Forearm" checked={state.properties.rightForearm}></now-checkbox>
					</div>
					<div id="checkBox" slot="content">
						<now-checkbox id="left" label="Left Hand" checked={state.properties.leftHand}></now-checkbox>
					</div>
					<div id="checkBox" slot="content">
						<now-checkbox id="right" label="Right Hand" checked={state.properties.rightHand}></now-checkbox>
					</div>
					<div id="Description" slot="content">
						<now-textarea label="Short Description" required={state.properties.leftHand || state.properties.rightHand ||
							  											  state.properties.leftUpperArm || state.properties.rightUpperArm ||
							  											  state.properties.leftForearm || state.properties.rightForearm}/>
					</div>
					<div id="image-file" slot="content">
						<input id="attach_image" type="file" id="image" accept=".jpg, .jpeg, .png, .mp4"></input>
					</div>	
					<div id="armOfficerCheckBox" slot="content">
						<now-checkbox label="Officers involved?"></now-checkbox>
					</div>		
				</now-accordion-item>
				<now-accordion-item 
					header={{"label":"Legs","weight":"bold","size":"sm","variant":"secondary"}} 
					caption={{"label":"Sub-label 1","style":"italic","variant":"primary"}} expanded={state.properties.leftThigh || state.properties.rightThigh || 
																									state.properties.leftKnee || state.properties.rightKnee ||
																									state.properties.leftShin || state.properties.rightShin ||
																									state.properties.leftCalf || state.properties.rightCalf ||
																									state.properties.leftFoot || state.properties.rightFoot }>	
					<div id="attack" slot="content">
						<now-input label="Type of Force" required={state.properties.leftThigh || state.properties.rightThigh || 
																									state.properties.leftKnee || state.properties.rightKnee ||
																									state.properties.leftShin || state.properties.rightShin ||
																									state.properties.leftCalf || state.properties.rightCalf ||
																									state.properties.leftFoot || state.properties.rightFoot }/>
					</div>
					<div id="lthighCheckBox" slot="content">
						<now-checkbox id="left" label="Left Thigh" checked={state.properties.leftThigh}></now-checkbox>
					</div>
					<div id="rthighCheckBox" slot="content">
						<now-checkbox id="right" label="Right Thigh" checked={state.properties.rightThigh}></now-checkbox>
					</div>
					<div id="lkneeCheckBox" slot="content">
						<now-checkbox id="left" label="Left Knee" checked={state.properties.leftKnee}></now-checkbox>
					</div>
					<div id="rkneeCheckBox" slot="content">
						<now-checkbox id="right" label="Right Knee" checked={state.properties.rightKnee}></now-checkbox>
					</div>
					<div id="lthighCheckBox" slot="content">
						<now-checkbox id="left" label="Left Shin" checked={state.properties.leftShin}></now-checkbox>
					</div>
					<div id="rthighCheckBox" slot="content">
						<now-checkbox id="right" label="Right Shin" checked={state.properties.rightShin}></now-checkbox>
					</div>
					<div id="lthighCheckBox" slot="content">
						<now-checkbox id="left" label="Left Calf" checked={state.properties.leftCalf}></now-checkbox>
					</div>
					<div id="rthighCheckBox" slot="content">
						<now-checkbox id="right" label="Right Calf" checked={state.properties.rightCalf}></now-checkbox>
					</div>
					<div id="lfootCheckBox" slot="content">
						<now-checkbox id="left" label="Left Foot" checked={state.properties.leftFoot}></now-checkbox>
					</div>
					<div id="rfootCheckBox" slot="content">
						<now-checkbox id="right" label="Right Foot" checked={state.properties.rightFoot}></now-checkbox>
					</div>
					<div id="Description" slot="content">
						<now-textarea label="Short Description" required={state.properties.leftThigh || state.properties.rightThigh || 
																									state.properties.leftKnee || state.properties.rightKnee ||
																									state.properties.leftShin || state.properties.rightShin ||
																									state.properties.leftCalf || state.properties.rightCalf ||
																									state.properties.leftFoot || state.properties.rightFoot }/>
					</div>
					<div id="image-file" slot="content">
						<input id="attach_image" type="file" id="image" accept=".jpg, .jpeg, .png, .mp4"></input>
					</div>	
					<div id="legOfficerCheckBox" slot="content">
						<now-checkbox label="Officers involved?"></now-checkbox>
					</div>
				</now-accordion-item>
				</now-accordion>
				<div id="Injuries">
					<now-input id="injure" value={state.properties.injuries} placeholder="Click parts on the image" label="Body parts injured" disabled={true} required />
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
		//Arm Specific Sections
		leftUpperArm: {default: false},
		rightUpperArm: {default: false},
		leftForearm: {default: false},
		rightForearm: {default: false},
		leftHand: {default: false},
		rightHand: {default: false},
		//Leg Specific Sections
		leftThigh: {default: false},
		rightThigh: {default: false},
		leftKnee: {default: false},
		rightKnee: {default: false},
		leftShin: {default: false},
		rightShin: {default: false},
		leftCalf: {default: false},
		rightCalf: {default: false},
		leftFoot: {default: false},
		rightFoot: {default: false}
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