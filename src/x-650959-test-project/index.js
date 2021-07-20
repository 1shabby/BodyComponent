import {createCustomElement} from '@servicenow/ui-core';
import snabbdom from '@servicenow/ui-renderer-snabbdom';
import '@servicenow/now-image';
import styles from './styles.scss';
import '../injured-details';



//Tested in Safari and Chrome

const view = (state,{
	updateState
}) => {
	return (
		<div id="questions">
			<nav id="navigation_bar">
			<ul>
				<li>Info</li>
				<li>Injured Parts</li>
				<li>Description</li>
				<li>Additional Resources</li>
			</ul>
		</nav>
			<section>
				<div id="front_img">
					<img id="front" src="Body-Front.png" usemap="#workmap" alt="Human Body"/>
					<map id="front_image" name="workmap">
						<area 
							alt="Head"
							title="Head"
							coords="102,74,107,78,113,84,120,85,127,79,134,75,137,68,139,61,145,60,147,51,145,44,145,34,144,25,140,17,133,9,123,7,114,5,105,8,98,14,95,23,93,31,93,40,93,46,90,53,92,60,98,61,100,68"
							shape="poly"
							on-click={
								e => updateState({
									path: 'injuries.parts',
									value: e.target.title,
									operation: 'push'
								})}/>
						<area
							alt="Neck"
							title="Neck"
							coords="102,77,106,81,112,85,119,86,126,84,133,79,138,86,140,92,147,96,155,101,146,102,139,101,130,99,123,100,107,100,116,101,98,101,90,104,81,102,88,98,95,95,99,89,99,83"
							shape="poly"
							on-click={
								e => updateState({
									path: 'injuries.parts',
									value: e.target.title,
									operation: 'push'
								})}/>
						<area
							alt="Chest"
							title="Chest"
							coords="72,138,72,129,73,121,73,113,75,107,80,106,87,106,95,105,102,103,109,103,115,103,126,103,132,103,138,104,147,106,152,107,160,107,162,113,164,119,164,126,163,133,160,146,165,141,155,153,159,160,158,169,158,176,157,184,156,193,156,200,156,206,146,203,141,196,136,192,126,183,117,182,111,186,105,190,98,192,95,199,81,205,78,197,77,187,76,174,77,164,78,157,78,149"
							shape="poly"
							on-click={
								e => updateState({
									path: 'injuries.parts',
									value: e.target.title,
									operation: 'push'
								})}/>
						<area
							alt="Waist"
							title="Waist"
							coords="78,211,85,210,91,205,98,200,103,194,108,192,115,189,122,187,129,192,133,195,140,200,145,204,151,208,156,210,161,213,163,219,163,225,163,233,160,240,154,244,150,250,147,256,142,260,137,266,131,269,125,271,119,271,111,271,104,269,97,262,92,254,86,248,80,241,75,234,74,227,73,218"
							shape="poly"
							on-click={
								e => updateState({
									path: 'injuries.parts',
									value: e.target.title,
									operation: 'push'
								})}/>
						<area
							alt="Left_Arm"
							title="Left Arm"
							coords="33,259,36,251,39,242,40,233,40,221,45,207,47,195,49,184,52,166,53,157,52,149,53,139,52,124,56,113,64,107,73,104,73,111,71,123,71,133,70,142,75,149,75,168,73,178,72,191,71,201,70,213,66,224,61,238,56,248,53,257,49,265"
							shape="poly"
							on-click={
								e => updateState({
									path: 'injuries.parts',
									value: e.target.title,
									operation: 'push'
								})}/>
						<area
							alt="Right_Arm"
							title="Right Arm"
							coords="167,137,170,129,169,122,169,116,168,110,170,105,177,108,182,114,185,120,186,128,187,136,186,145,183,153,187,163,188,171,188,181,190,193,194,203,195,213,197,222,197,230,199,239,200,246,202,252,204,257,198,259,192,260,187,264,184,254,180,246,177,237,171,226,169,216,168,201,166,191,164,180,163,167,162,155,162,147"
							shape="poly"
							on-click={
								e => updateState({
									path: 'injuries.parts',
									value: e.target.title,
									operation: 'push'
								})}/>
						<area
							alt="Left_Hand"
							title="Left Hand"
							coords="36,293,37,300,38,310,41,304,42,295,41,289,46,282,47,274,49,266,43,264,37,262,31,261,24,263,17,266,12,273,8,279,9,283,20,275,20,284,18,293,15,301,13,309,17,312,24,292,23,300,21,314,25,315,30,296,28,304,27,314,31,314,32,314"
							shape="poly"
							on-click={
								e => updateState({
									path: 'injuries.parts',
									value: e.target.title,
									operation: 'push'
								})}/>
						<area
							alt="Right_Hand"
							title="Right Hand"
							coords="189,264,205,259,215,264,222,268,226,273,230,280,224,282,218,275,217,283,219,291,222,300,225,308,221,310,212,293,214,300,216,306,216,315,211,310,208,297,208,303,209,315,205,315,201,294,200,308,198,310,195,289,191,280,188,273"
							shape="poly"
							on-click={
								e => updateState({
									path: 'injuries.parts',
									value: e.target.title,
									operation: 'push'
								})}/>
						<area
							alt="Left_Thigh"
							title="Left Thigh"
							coords="76,240,82,243,84,248,91,255,95,264,101,267,106,272,108,282,110,289,113,297,117,302,115,315,113,328,113,336,109,342,107,351,105,362,105,368,105,374,103,380,96,381,88,379,80,381,77,389,69,391,69,365,68,353,67,338,66,320,66,298,67,288,68,273,69,259,70,250"
							shape="poly"
							on-click={
								e => updateState({
									path: 'injuries.parts',
									value: e.target.title,
									operation: 'push'
								})}/>
						<area
							alt="Right_Thigh"
							title="Right Thigh"
							coords="123,299,129,293,133,288,134,281,135,275,140,267,145,261,149,254,156,246,164,238,168,250,169,261,170,270,170,281,171,291,172,304,172,318,171,335,169,354,167,367,166,375,166,382,166,387,159,380,155,378,150,380,145,384,134,390,132,370,132,355,129,345,125,336,123,317,121,308"
							shape="poly"
							on-click={
								e => updateState({
									path: 'injuries.parts',
									value: e.target.title,
									operation: 'push'
								})}/>
						<area
							alt="Left_Knee"
							title="Left Knee"
							coords="69,396,76,386,83,382,90,382,95,385,101,386,103,391,103,397,100,402,97,409,85,411,78,409,72,408,65,407,69,389"
							shape="poly"
							on-click={
								e => updateState({
									path: 'injuries.parts',
									value: e.target.title,
									operation: 'push'
								})}/>
						<area
							alt="Right_Knee"
							title="Right Knee"
							coords="133,386,146,385,153,381,160,382,163,388,166,392,170,397,171,402,172,407,165,408,157,408,150,408,143,403,135,400,134,393"
							shape="poly"
							on-click={
								e => updateState({
									path: 'injuries.parts',
									value: e.target.title,
									operation: 'push'
								})}/>
						<area
							alt="Left_Leg"
							title="Left Leg"
							coords="66,409,95,414,96,426,95,437,96,450,91,469,89,482,86,498,90,511,92,521,93,532,71,529,72,509,69,490,66,475,60,456,60,440,60,427,62,419"
							shape="poly"
							on-click={
								e => updateState({
									path: 'injuries.parts',
									value: e.target.title,
									operation: 'push'
								})}/>
						<area
							alt="Right_Leg"
							title="Right Leg"
							coords="144,415,177,418,177,435,177,447,175,461,171,473,169,489,165,502,165,514,166,524,167,530,146,528,149,510,150,501,152,486,147,474,145,455,142,443,143,434,144,425"
							shape="poly"
							on-click={
								e => updateState({
									path: 'injuries.parts',
									value: e.target.title,
									operation: 'push'
								})}/>
						<area
							alt="Left_Foot"
							title="Left Foot"
							coords="71,530,91,531,95,546,95,558,95,564,93,573,88,578,75,577,66,569,67,559,68,547,70,541,71,537"
							shape="poly"
							on-click={
								e => updateState({
									path: 'injuries.parts',
									value: e.target.title,
									operation: 'push'
								})}/>
						<area
							alt="Right_Foot"
							title="Right Foot"
							coords="166,530,145,531,143,547,142,563,145,573,147,578,155,578,161,576,166,573,169,567,171,561,173,555,171,542"
							shape="poly"
							on-click={
								e => updateState({
									path: 'injuries.parts',
									value: e.target.title,
									operation: 'push'
								})}/>
					</map>
				</div>
				<injured-details injuries={state.injuries.parts}></injured-details>
			</section>
			<p>It is tested in Chrome and Safari</p>
		</div>
	);
};

createCustomElement('x-650959-test-project', {
	renderer: {type: snabbdom},
	view,
	styles,
	initialState: {
		injuries:{
			parts:[]
		}
	}
});