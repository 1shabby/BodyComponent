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
import '../front_image-project'



const view = (state, {updateState}) => {
	return (
		<body>
			<section>
				<div id="front_img">
					<img id="front" src="Body-Front.png" usemap="#workmap" alt="Human Body"></img>
						<map name="#workmap">
							<area shape="poly" alt="test" title="test" coords="172,344,148,452,560,456,564,324,544,332" href="http://www.naver.com" target="_blank" />
						</map>
						{/* <input type="radio" name="body_parts" id="head" value="Head"
						on-click={
							e => updateState({injure: e.target.value})}></input>
						<input type="radio" name="body_parts" id="neck" value="Neck"
						on-click={
							e => updateState({injure: e.target.value})}></input>
						<input type="radio" name="body_parts" id="chest" value="Chest"
						on-click={
							e=> updateState({injure: e.target.value})}></input>
						<input type="radio" name="body_parts" id="waist" value="Waist"
						on-click={
							e=> updateState({injure: e.target.value})}></input>
						<input type="radio" name="body_parts" id="left_arm" value="Left arm"
						on-click={
							e=> updateState({injure: e.target.value})}></input>
						<input type="radio" name="body_parts" id="right_arm" value="Right arm"
						on-click={
							e=> updateState({injure: e.target.value})}></input>
						<input type="radio" name="body_parts" id="left_hand" value="Left hand"
						on-click={
							e=> updateState({injure: e.target.value})}></input>
						<input type="radio" name="body_parts" id="right_hand" value="Right hand"
						on-click={
							e=> updateState({injure: e.target.value})}></input>
						<input type="radio" name="body_parts" id="left_thigh" value="Left thigh"
						on-click={
							e=> updateState({injure: e.target.value})}></input>
						<input type="radio" name="body_parts" id="right_thigh" value="Right thigh"
						on-click={
							e=> updateState({injure: e.target.value})}></input>
						<input type="radio" name="body_parts" id="left_knee" value="Left knee"
						on-click={
							e=> updateState({injure: e.target.value})}></input>
						<input type="radio" name="body_parts" id="right_knee" value="Right knee"
						on-click={
							e=> updateState({injure: e.target.value})}></input>
						<input type="radio" name="body_parts" id="left_leg" value="Left leg"
						on-click={
							e=> updateState({injure: e.target.value})}></input>
						<input type="radio" name="body_parts" id="right_leg" value="Right leg"
						on-click={
							e=> updateState({injure: e.target.value})}></input>
						<input type="radio" name="body_parts" id="left_foot" value="Left foot"
						on-click={
							e=> updateState({injure: e.target.value})}></input>
						<input type="radio" name="body_parts" id="right_foot" value="Right foot"
						on-click={
							e=> updateState({injure: e.target.value})}></input> */}
				</div>
				<article>
					<div id="header">
						<span>Details</span>
					</div>
					<div id="sub_header">
						<span>Please fill the boxes</span>
					</div>
					<form>
						<div id="Injuries">
							<now-input id="injure" value={state.injure} placeholder="Click the parts" label="Which part of body gets injured?" required />
							<now-input label="Extent of Injuries" placeholder="Extent of Injuries" required />
						</div>
						<div id="attack">
							<now-input label="Type of Force" required />
						</div>
						<div id="Description">
							<now-textarea label="Short Description" />
						</div>
						<div id="checkBox">
							<now-checkbox label="Do people get involved?"></now-checkbox>
						</div>
						<div id="image-file">
							<input type="file" id="image"></input>
						</div>
						<div>
						<now-button id="submit" label="Submit" variant="primary" size="md" icon="" config-aria={{}} tooltip-content=""></now-button>
						</div>
					</form>

					{/* <label for="cause">Cause </label>
					<now-dropdown  items={[{"id":"acc","label":"Accident"},{"id":"for","label":"Force"},{"id":"wea","label":"Weapon"}]} selectedItems={["acc"]} select="single" placeholder="" icon="" variant="secondary" size="md" tooltipContent="" panelFitProps={{}} configAria={{}}></now-dropdown> */}
				</article>
			</section>
		</body>
		
	);
};

createCustomElement('x-650959-test-project', {
	renderer: {type: snabbdom},
	view,
	styles,
	initialState: {
		injure: ""
	}
});