import {createCustomElement} from '@servicenow/ui-core';
import snabbdom from '@servicenow/ui-renderer-snabbdom';
import '@servicenow/now-input';
import '@servicenow/now-button';
import '@servicenow/now-checkbox';
import '@servicenow/now-textarea';
import '@servicenow/now-accordion';
import styles from './styles.scss';
//This function is where the sub-components for the right side of the body component
//are added. Within the return statement of the View function, use HTML syntax to 
//add components and configure their location via changing their properties. 

//In the return statement, you will notice different tag in the form of <Name></Name>
//each of these tags build are different components of the HTML. For example <now-checkbox></now-checkbox>
//is the tag used to add a prebuilt ServiceNow checkbox into this component. 
//If you decide to make use of the <now-accordion></now-accordion> pre-built components, you must add a
//<now-accordion-item></now-accordion-item> component which will be the tab that you see in our component on the right side.
//If you want to add a component to the now-accordion-item section, you need to add the 'slot' property to the section.
//This can by done by doing the following <Component-Name slot="content">. If you want to see what the other 
//options for the 'slot' property are, you can visit the ServiceNow Developer site and find the APIs for the now-accordion component.
const view = (state) => {
	return (
		<aside>
			<div id="header">
				<span>Details</span>
			</div>
			<div id="sub_header">
				<span>Please Select a Body Part on the Image</span>
			</div>
			<form>
			<now-accordion heading-level="3" trigger-icon={{"type":"plus-minus","position":"start"}}>
				<now-accordion-item 
					header={{"label":"Head","weight":"bold","size":"sm","variant":"secondary"}} 
					caption={{"label":"Select the head on the image to open","style":"italic","variant":"primary"}} 
					expanded={state.properties.head || state.properties.eyes ||
							  state.properties.ears || state.properties.nose || state.properties.mouth} 
					disabled={!(state.properties.head || state.properties.eyes ||
								state.properties.ears || state.properties.nose || state.properties.mouth)}>	
					<div id="attack" slot="content">
						<now-input label="Weapon(s) used" required={state.properties.head || state.properties.eyes ||
							  state.properties.ears || state.properties.nose || state.properties.mouth}/>
					</div>
					<div id="eyesCheckBox" slot="content">
						<now-checkbox  label="Eyes" checked={state.properties.eyes} readonly={true}/>
					</div>
					<div id="earsCheckBox" slot="content">
						<now-checkbox id="right" label="Ears" checked={state.properties.ears} readonly={true}/>
					</div>
					<div id="noseCheckBox" slot="content">
						<now-checkbox  label="Nose" checked={state.properties.nose} readonly={true}/>
					</div>
					<div id="mouthCheckBox" slot="content">
						<now-checkbox id="right" label="Mouth" checked={state.properties.mouth} readonly={true}/>
					</div>
					<div id="Description" slot="content">
						<now-textarea label="Short Description" 
						required={state.properties.head || state.properties.eyes ||
								  state.properties.ears || state.properties.nose || state.properties.mouth} />
					</div>
					<div id="image-file" slot="content">
						<input id="attach_image" type="file" id="image" accept=".jpg, .jpeg, .png, .mp4"/>
					</div>	
					<div id="headOfficerCheckBox" slot="content">
						<now-checkbox label="Officers involved?"/>
					</div>		
				</now-accordion-item>
				<now-accordion-item 
					header={{"label":"Neck","weight":"bold","size":"sm","variant":"secondary"}} 
					caption={{"label":"Select the neck on the image to open","style":"italic","variant":"primary"}} expanded={state.properties.neck} disabled={!state.properties.neck}>	
					<div id="attack" slot="content">
						<now-input label="Weapon(s) used" required={state.properties.neck} />
					</div>
					<div id="Description" slot="content">
						<now-textarea label="Short Description" required={state.properties.neck} />
					</div>
					<div id="image-file" slot="content">
						<input id="attach_image" type="file" id="image" accept=".jpg, .jpeg, .png, .mp4"/>
					</div>	
					<div id="neckOfficerCheckBox" slot="content">
						<now-checkbox label="Officers involved?"/>
					</div>		
				</now-accordion-item>
				<now-accordion-item 
					header={{"label":"Torso","weight":"bold","size":"sm","variant":"secondary"}} 
					caption={{"label":"Click on a part of the torso to open","style":"italic","variant":"primary"}} 
					expanded={state.properties.chest || state.properties.back ||
							  state.properties.abdomen || state.properties.buttocks} 
					disabled={!(state.properties.chest || state.properties.back ||
						state.properties.abdomen || state.properties.buttocks)}>
					<div id="attack" slot="content">
						<now-input label="Weapon(s) used" required={state.properties.chest || state.properties.abdomen ||
																	state.properties.back || state.properties.buttocks}/>
					</div>
					<div id="chestCheckBox" slot="content">
						<now-checkbox  label="Chest" checked={state.properties.chest} readonly={true}/>
					</div>
					<div id="abdomenCheckBox" slot="content">
						<now-checkbox id="right" label="Abdomen" checked={state.properties.abdomen} readonly={true}/>
					</div>
					<div id="backCheckBox" slot="content">
						<now-checkbox id="left" label="Abdomen" checked={state.properties.back} readonly={true}/>
					</div>
					<div id="buttcoksCheckBox" slot="content">
						<now-checkbox id="right" label="Buttocks" checked={state.properties.buttocks} readonly={true}/>
					</div>
					<div id="Description" slot="content">
						<now-textarea label="Short Description" required={state.properties.chest || state.properties.abdomen ||
																		  state.properties.back || state.properties.buttocks}/>
					</div>
					<div id="image-file" slot="content">
						<input id="attach_image" type="file" id="image" accept=".jpg, .jpeg, .png, .mp4"/>
					</div>
					<div id="torsoOfficerCheckBox" slot="content">
						<now-checkbox label="Officers involved?"></now-checkbox>
					</div>
				</now-accordion-item>
				<now-accordion-item
					id='Arm_section' 
					header={{"label":"Arms","weight":"bold","size":"sm","variant":"secondary"}} 
					caption={{"label":"Click on a part of the arm to open","style":"italic","variant":"primary"}} 
					expanded={state.properties.leftHand || state.properties.rightHand ||
							  state.properties.leftUpperArm || state.properties.rightUpperArm ||
							  state.properties.leftForearm || state.properties.rightForearm}
					disabled={!(state.properties.leftHand || state.properties.rightHand ||
								state.properties.leftUpperArm || state.properties.rightUpperArm ||
								state.properties.leftForearm || state.properties.rightForearm)}>	
					<div id="attack" slot="content">
						<now-input label="Weapon(s) used" required={state.properties.leftHand || state.properties.rightHand ||
																   state.properties.leftUpperArm || state.properties.rightUpperArm ||
							  									   state.properties.leftForearm || state.properties.rightForearm} />
					</div>
					<p slot="content">Selected arm sections:</p>
					<div id="checkBox" slot="content">
						<now-checkbox  label="Left Upper Arm" checked={state.properties.leftUpperArm} readonly={true}></now-checkbox>
					</div>
					<div id="checkBox" slot="content">
						<now-checkbox id="right" label="Right Upper Arm" checked={state.properties.rightUpperArm} readonly={true}></now-checkbox>
					</div>
					<div id="checkBox" slot="content">
						<now-checkbox  label="Left Forearm" checked={state.properties.leftForearm} readonly={true}></now-checkbox>
					</div>
					<div id="checkBox" slot="content">
						<now-checkbox id="right" label="Right Forearm" checked={state.properties.rightForearm} readonly={true}></now-checkbox>
					</div>
					<div id="checkBox" slot="content">
						<now-checkbox  label="Left Hand" checked={state.properties.leftHand} readonly={true}></now-checkbox>
					</div>
					<div id="checkBox" slot="content">
						<now-checkbox id="right" label="Right Hand" checked={state.properties.rightHand} readonly={true}></now-checkbox>
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
					caption={{"label":"Click on a part of the legs to open","style":"italic","variant":"primary"}} 
					expanded={state.properties.leftThigh || state.properties.rightThigh || 
							  state.properties.leftKnee || state.properties.rightKnee ||
							  state.properties.leftShin || state.properties.rightShin ||
							  state.properties.leftCalf || state.properties.rightCalf ||
						      state.properties.leftFoot || state.properties.rightFoot}
					disabled={!(state.properties.leftThigh || state.properties.rightThigh || 
								state.properties.leftKnee || state.properties.rightKnee ||
								state.properties.leftShin || state.properties.rightShin ||
								state.properties.leftCalf || state.properties.rightCalf ||
								state.properties.leftFoot || state.properties.rightFoot)}>	
					<div id="attack" slot="content">
						<now-input label="Weapon(s) used" required={state.properties.leftThigh || state.properties.rightThigh || 
																   state.properties.leftKnee || state.properties.rightKnee ||
																   state.properties.leftShin || state.properties.rightShin ||
																   state.properties.leftCalf || state.properties.rightCalf ||
																   state.properties.leftFoot || state.properties.rightFoot }/>
					</div>
					<div id="lthighCheckBox" slot="content">
						<now-checkbox  label="Left Thigh" checked={state.properties.leftThigh} readonly={true}></now-checkbox>
					</div>
					<div id="rthighCheckBox" slot="content">
						<now-checkbox id="right" label="Right Thigh" checked={state.properties.rightThigh} readonly={true}></now-checkbox>
					</div>
					<div id="lkneeCheckBox" slot="content">
						<now-checkbox  label="Left Knee" checked={state.properties.leftKnee} readonly={true} ></now-checkbox>
					</div>
					<div id="rkneeCheckBox" slot="content">
						<now-checkbox id="right" label="Right Knee" checked={state.properties.rightKnee} readonly={true}></now-checkbox>
					</div>
					<div id="lthighCheckBox" slot="content">
						<now-checkbox  label="Left Shin" checked={state.properties.leftShin} readonly={true}></now-checkbox>
					</div>
					<div id="rthighCheckBox" slot="content">
						<now-checkbox id="right" label="Right Shin" checked={state.properties.rightShin} readonly={true}></now-checkbox>
					</div>
					<div id="lthighCheckBox" slot="content">
						<now-checkbox  label="Left Calf" checked={state.properties.leftCalf} readonly={true}></now-checkbox>
					</div>
					<div id="rthighCheckBox" slot="content">
						<now-checkbox id="right" label="Right Calf" checked={state.properties.rightCalf} readonly={true}></now-checkbox>
					</div>
					<div id="lfootCheckBox" slot="content">
						<now-checkbox  label="Left Foot" checked={state.properties.leftFoot} readonly={true}></now-checkbox>
					</div>
					<div id="rfootCheckBox" slot="content">
						<now-checkbox id="right" label="Right Foot" checked={state.properties.rightFoot} readonly={true}></now-checkbox>
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
				<div>
					<now-button id="submit" label="Submit" variant="primary" size="md" icon="" tooltip-content=""
					disabled={!(state.properties.leftThigh || state.properties.rightThigh || 
						state.properties.leftKnee || state.properties.rightKnee ||
						state.properties.leftShin || state.properties.rightShin ||
						state.properties.leftCalf || state.properties.rightCalf ||
						state.properties.leftFoot || state.properties.rightFoot ||
						state.properties.leftHand || state.properties.rightHand ||
						state.properties.leftUpperArm || state.properties.rightUpperArm ||
						state.properties.leftForearm || state.properties.rightForearm ||
						state.properties.chest ||state.properties.abdomen || state.properties.back || 
						state.properties.buttocks || state.properties.neck || state.properties.head ||
						state.properties.eyes || state.properties.ears || state.properties.nose || state.properties.mouth)}/>
				</div>
			</form>
		</aside>
	);
};
//This is where states, and properties get added to the component. 
//With states and properties you can send data through the component,
//allowing you to change properties of the component via certain conditions.

//Below we are setting the properties of the default state for each of the selectable limbs.
//This allows us to set the starting state of the compoenent to false for each section because
//the default state should have no limbs selected. In the other clickable-body file we will 
//utilize these properties connecting them to each of the clickable sections which then allows us
//to change properties of other components when a body area is clicked.
createCustomElement('servo-injury-details', {
	renderer: {type: snabbdom},
	initialState: {},
	properties: {
		head: {default: false},
		neck: {default: false},
		torso: {default: false},
		//Head Specific Sections
		eyes: {default: false},
		ears: {default: false},
		mouth: {default: false},
		nose: {default: false},
		//Torso Specific Sections
		chest: {default: false},
		abdomen: {default: false},
		back: {default: false},
		buttocks: {default: false},
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
