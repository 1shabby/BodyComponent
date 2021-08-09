import {createCustomElement} from '@servicenow/ui-core';
import snabbdom from '@servicenow/ui-renderer-snabbdom';
import styles from './styles.scss';
import '../servo-injury-details';

const imagesPath = {
	front: "Body-Front.png",
	back: "Body-Back.png"
}

const view = (state, {updateState}) => {
		function expandAccordion(event){
			event.preventDefault();
			const bodyPart = event.target.id;
			
			updateState({
				path: bodyPart,
				value: {expanded: !state[bodyPart].expanded},
				operation: 'set'
			})
		}
		return (
			<div id="body">
				<div id="question">
					<section>
						<div id="front_img">
							<img id="front" src={state.image_type} usemap={state.usemap_type} alt="Human Body"/>
							<map id="front_image" name="frontmap">
								<area 
									id='ears'
									alt="Ears" 
									coords="100,43,101,62,92,58,89,50,90,46" 
									shape="poly"
									on-click={e => updateState({
										path: 'ears',
										value: {expanded: !state.ears.expanded},
										operation: 'set'
										})}/>
									<p id="body_parts">Ears</p>
								<area 
									id='ears'
									alt="Ears" 
									coords="143,40,148,49,147,55,145,59,136,61,136,40" 
									shape="poly"									on-click={e => updateState({
										path: 'ears',
										value: {expanded: !state.ears.expanded},
										operation: 'set'
									})}/>
									<p id="body_parts">Ears</p>
								<area 
									id='eyes'
									alt="Eyes" 
									coords="101,41,114,41,114,51,101,51" 
									shape="poly"
									on-click={e => updateState({
										path: 'eyes',
										value: {expanded: !state.eyes.expanded},
										operation: 'set'
									})}/>
								<p id="body_parts">Eyes</p>
								<area 
									id='eyes'
									alt="Eyes" 
									coords="122,41,135,41,135,51,122,51"
									shape="poly"
									on-click={e => updateState({
										path: 'eyes',
										value: {expanded: !state.eyes.expanded},
										operation: 'set'
									})}/>
									<p id="body_parts">Eyes</p>
								<area 
									id='nose'
									alt="Nose" 
									coords="118,46,116,52,110,55,112,60,117,60,121,60,126,59,127,55,123,53,120,50,118,46"
									shape="poly"
									on-click={e => updateState({
										path: 'nose',
										value: {expanded: !state.nose.expanded},
										operation: 'set'
									})}/>
									<p id="body_parts">Nose</p>
								<area 
									id='mouth'
									alt="Mouth" 
									coords="108,61,129,61,129,74,108,74"
									shape="poly"
									on-click={e => updateState({
										path: 'mouth',
										value: {expanded: !state.mouth.expanded},
										operation: 'set'
									})}/>
									<p id="body_parts">Mouth</p>
								<area 
									id="head"
									alt="Head" 
									coords="102,74,107,78,113,84,120,85,127,79,134,75,137,68,139,61,145,60,147,51,145,44,145,34,144,25,140,17,133,9,123,7,114,5,105,8,98,14,95,23,93,31,93,40,93,46,90,53,92,60,98,61,100,68"
									shape="poly"
									on-click={e => expandAccordion(e)}/>
									<p id="body_parts">Head</p>
								<area
									id = 'neck'
									alt="Neck" 
									coords="102,77,106,81,112,85,119,86,126,84,133,79,138,86,140,92,147,96,155,101,146,102,139,101,130,99,123,100,107,100,116,101,98,101,90,104,81,102,88,98,95,95,99,89,99,83"
									shape="poly"
									on-click={e => expandAccordion(e)}/>
									<p id="body_parts">Neck</p>
								<area
									id= 'torso'
									alt="Chest" 
									coords="72,138,72,129,73,121,73,113,75,107,80,106,87,106,95,105,102,103,109,103,115,103,126,103,132,103,138,104,147,106,152,107,160,107,162,113,164,119,164,126,163,133,160,146,165,141,155,153,159,160,158,169,158,176,157,184,156,193,156,200,156,206,146,203,141,196,136,192,126,183,117,182,111,186,105,190,98,192,95,199,81,205,78,197,77,187,76,174,77,164,78,157,78,149"
									shape="poly"
									on-click={e => expandAccordion(e)}/>
									<p id="body_parts">Chest</p>
								<area
									id='torso'
									alt="Abdomen" 
									coords="78,211,85,210,91,205,98,200,103,194,108,192,115,189,122,187,129,192,133,195,140,200,145,204,151,208,156,210,161,213,163,219,163,225,163,233,160,240,154,244,150,250,147,256,142,260,137,266,131,269,125,271,119,271,111,271,104,269,97,262,92,254,86,248,80,241,75,234,74,227,73,218"
									shape="poly"
									on-click={e => expandAccordion(e)}/>
									<p id="body_parts">Abdomen</p>
								<area 
									id='arm'
									alt="Left Upper Arm" 
									coords="47,194,69,200,74,172,76,151,71,140,72,134,76,102,62,107,53,114,52,124,52,134,53,146,54,151,52,161,49,173" 
									shape="poly"
									on-click={e => updateState({
										path: 'leftUpperArm',
										value: {expanded: !state.leftUpperArm.expanded},
										operation: 'set'
										})}/>
									<p id="body_parts">Upper Left Arm</p>
								<area
									id='arm' 
									alt="Left Forearm" 
									coords="46,194,70,201,70,212,63,230,59,242,54,254,48,266,32,260,40,238,40,217,44,206" 
									shape="poly"
									on-click={e => updateState({
										path: 'leftForearm',
										value: {expanded: !state.leftForearm.expanded},
										operation: 'set'
										})}/>
									<p id="body_parts">Left Forearm</p>
								<area
									id='arm' 
									alt="Right Upper Arm" 
									coords="168,199,189,194,188,173,184,150,187,127,182,111,170,105,161,102,166,137,161,149,164,173,166,186" 
									shape="poly"
									on-click={e => updateState({
										path: 'rightUpperArm',
										value: {expanded: !state.rightUpperArm.expanded},
										operation: 'set'
										})}/>
									<p id="body_parts">Upper Right Arm</p>
								<area
									id='arm' 
									alt="Right Forearm" 
									coords="167,200,189,194,195,205,198,222,199,239,204,257,188,264,178,243,173,226,168,217" 
									shape="poly"
									on-click={e => updateState({
										path: 'rightForearm',
										value: {expanded: !state.rightForearm.expanded},
										operation: 'set'
										})}/>
									<p id="body_parts">Right Forearm</p>
								<area
									id='arm'
									alt="Left_Hand" title="Left Hand"
									coords="36,293,37,300,38,310,41,304,42,295,41,289,46,282,47,274,49,266,43,264,37,262,31,261,24,263,17,266,12,273,8,279,9,283,20,275,20,284,18,293,15,301,13,309,17,312,24,292,23,300,21,314,25,315,30,296,28,304,27,314,31,314,32,314"
									shape="poly"
									on-click={e => updateState({
										path: 'leftHand',
										value: {expanded: !state.leftHand.expanded},
										operation: 'set'
										})}/>
									<p id="body_parts">Left Hand</p>
								<area
									id='arm'
									alt="Right_Hand" 
									coords="189,264,205,259,215,264,222,268,226,273,230,280,224,282,218,275,217,283,219,291,222,300,225,308,221,310,212,293,214,300,216,306,216,315,211,310,208,297,208,303,209,315,205,315,201,294,200,308,198,310,195,289,191,280,188,273"
									shape="poly"
									on-click={e => updateState({
										path: 'rightHand',
										value: {expanded: !state.rightHand.expanded},
										operation: 'set'
									})}/>
									<p id="body_parts">Right Hand</p>
								<area
									id='leg'
									alt="Left_Thigh" 
									coords="76,240,82,243,84,248,91,255,95,264,101,267,106,272,108,282,110,289,113,297,117,302,115,315,113,328,113,336,109,342,107,351,105,362,105,368,105,374,103,380,96,381,88,379,80,381,77,389,69,391,69,365,68,353,67,338,66,320,66,298,67,288,68,273,69,259,70,250"
									shape="poly"
									on-click={e => updateState({
										path: 'leftThigh',
										value: {expanded: !state.leftThigh.expanded},
										operation: 'set'
										})}/>
									<p id="body_parts">Left Thigh</p>
								<area
									id='leg'
									alt="Right_Thigh" 
									coords="123,299,129,293,133,288,134,281,135,275,140,267,145,261,149,254,156,246,164,238,168,250,169,261,170,270,170,281,171,291,172,304,172,318,171,335,169,354,167,367,166,375,166,382,166,387,159,380,155,378,150,380,145,384,134,390,132,370,132,355,129,345,125,336,123,317,121,308"
									shape="poly"
									on-click={e => updateState({
										path: 'rightThigh',
										value: {expanded: !state.rightThigh.expanded},
										operation: 'set'
										})}/>
									<p id="body_parts">Right Thigh</p>
								<area
									id='leg'
									alt="Left_Knee" 
									coords="69,396,76,386,83,382,90,382,95,385,101,386,103,391,103,397,100,402,97,409,85,411,78,409,72,408,65,407,69,389"
									shape="poly"
									on-click={e => updateState({
										path: 'leftKnee',
										value: {expanded: !state.leftKnee.expanded},
										operation: 'set'
										})}/>
									<p id="body_parts">Left Knee</p>
								<area
									id='leg'
									alt="Right_Knee" 
									coords="133,386,146,385,153,381,160,382,163,388,166,392,170,397,171,402,172,407,165,408,157,408,150,408,143,403,135,400,134,393"
									shape="poly"
									on-click={e => updateState({
										path: 'rightKnee',
										value: {expanded: !state.rightKnee.expanded},
										operation: 'set'
										})}/>
									<p id="body_parts">Right Knee</p>
								<area
									id='leg'
									alt="Left_Shin"
									coords="66,409,95,414,96,426,95,437,96,450,91,469,89,482,86,498,90,511,92,521,93,532,71,529,72,509,69,490,66,475,60,456,60,440,60,427,62,419"
									shape="poly"
									on-click={e => updateState({
										path: 'leftShin',
										value: {expanded: !state.leftShin.expanded},
										operation: 'set'
										})}/>
									<p id="body_parts">Left Shin</p>
								<area
									id='leg'
									alt="Right_Shin" 
									coords="144,415,177,418,177,435,177,447,175,461,171,473,169,489,165,502,165,514,166,524,167,530,146,528,149,510,150,501,152,486,147,474,145,455,142,443,143,434,144,425"
									shape="poly"
									on-click={e => updateState({
										path: 'rightShin',
										value: {expanded: !state.rightShin.expanded},
										operation: 'set'
										})}/>
									<p id="body_parts">Right Shin</p>
								<area
									id='leg'
									alt="Left_Foot" 
									coords="71,530,91,531,95,546,95,558,95,564,93,573,88,578,75,577,66,569,67,559,68,547,70,541,71,537"
									shape="poly"
									on-click={e => updateState({
										path: 'leftFoot',
										value: {expanded: !state.leftFoot.expanded},
										operation: 'set'
										})}/>
									<p id="body_parts">Left Foot</p>
								<area
									id='leg'
									alt="Right_Foot" 
									coords="166,530,145,531,143,547,142,563,145,573,147,578,155,578,161,576,166,573,169,567,171,561,173,555,171,542"
									shape="poly"
									on-click={e => updateState({
										path: 'rightFoot',
										value: {expanded: !state.rightFoot.expanded},
										operation: 'set'
										})}/>
									<p id="body_parts">Right Foot</p>
							</map>
							<map id="back_image" name="backmap">
								<area 
									id='head'
									alt="Head" 
									coords="98,68,137,68,138,63,144,61,147,54,144,47,143,37,142,26,137,17,130,11,122,8,112,9,103,12,98,16,94,23,92,32,91,42,91,50,89,57"
									shape="poly"
									on-click={e => expandAccordion(e)}/>
									<p id="body_parts">Head</p>
								<area
									id='neck'
									alt="Neck" 
									coords="100,69,107,69,113,68,119,69,129,69,135,69,134,77,135,84,129,84,121,84,113,83,100,84"
									shape="poly"
									on-click={e => expandAccordion(e)}/>
									<p id="body_parts">Neck</p>
								<area
									id='torso'
									alt="Back" 
									coords="101,83,97,90,88,94,79,101,70,104,63,107,66,124,69,140,74,149,74,158,76,174,76,184,76,195,76,206,74,219,74,231,71,244,68,255,81,254,93,254,103,254,112,256,118,263,123,255,128,255,136,255,145,255,154,255,162,255,167,255,166,246,163,236,162,227,161,218,159,207,158,198,158,185,160,171,161,159,162,149,167,136,168,123,169,113,170,106,164,102,156,99,147,95,139,89,135,84,125,84,110,83"
									shape="poly"
									on-click={e => expandAccordion(e)}/>
									<p id="body_parts">Back</p>
								<area
									id='torso'
									alt="Buttocks" 
									coords="69,257,78,256,90,256,100,256,109,256,115,260,118,264,122,259,129,256,140,256,157,256,165,256,169,262,169,273,170,283,170,289,170,299,163,301,143,300,127,300,118,297,111,300,98,300,83,301,66,302,67,281"
									shape="poly"
									on-click={e => expandAccordion(e)}/>
									<p id="body_parts">Buttocks</p>
								<area
									id='arm' 
									alt="Upper Left Arm" 
									coords="60,110,68,138,73,151,73,167,72,182,68,196,47,194,51,163,53,150,51,135,52,120" 
									shape="poly"
									on-click={e => updateState({
										path: 'leftUpperArm',
										value: {expanded: !state.leftUpperArm.expanded},
										operation: 'set'
										})}/>
									<p id="body_parts">Upper Left Arm</p>
								<area 
									id='arm'
									alt="Upper Right Arm" 
									coords="174,107,166,139,162,151,163,181,168,196,187,195,183,156,184,130,182,117" 
									shape="poly"
									on-click={e => updateState({
										path: 'rightUpperArm',
										value: {expanded: !state.rightUpperArm.expanded},
										operation: 'set'
										})}/>
									<p id="body_parts">Upper Right Arm</p>
								<area 
									id='arm'
									alt="Left Forearm" 
									coords="46,194,67,196,67,211,65,225,59,238,55,253,48,266,34,259,41,232,40,220" 
									shape="poly"
									on-click={e => updateState({
										path: 'leftForearm',
										value: {expanded: !state.leftForearm.expanded},
										operation: 'set'
										})}/>
									<p id="body_parts">Left Forearm</p>
								<area 
									id='arm'
									alt="Right Forearm"
									coords="168,197,188,195,193,212,194,231,196,241,201,259,187,265,177,242,168,220" 
									shape="poly"on-click={e => updateState({
										path: 'rightForearm',
										value: {expanded: !state.rightForearm.expanded},
										operation: 'set'
										})}/>
									<p id="body_parts">Right Forearm</p>
								<area
									id='arm'
									alt="Left Hand" 
									coords="33,260,49,265,50,271,47,281,43,288,43,296,41,308,39,307,38,301,38,293,35,302,33,313,29,314,30,307,31,294,26,314,22,312,25,301,25,292,18,309,14,308,18,299,20,291,22,283,22,274,17,278,11,283,9,279,16,270,20,265,25,262,11,283,26,261"
									shape="poly"
									on-click={e => updateState({
										path: 'leftHand',
										value: {expanded: !state.leftHand.expanded},
										operation: 'set'
										})}/>
									<p id="body_parts">Left Hand</p>
								<area
									id='arm'
									alt="Right Hand" 
									coords="187,264,202,259,214,265,220,271,225,277,225,282,219,279,214,274,214,283,216,291,219,301,221,307,217,310,213,297,209,291,212,305,213,314,209,315,206,299,204,293,207,314,203,314,201,306,198,293,197,300,197,308,195,307,193,290,188,281,186,274"
									shape="poly"
									on-click={e => updateState({
										path: 'rightHand',
										value: {expanded: !state.rightHand.expanded},
										operation: 'set'
									})}/>
									<p id="body_parts">Right Hand</p>
								<area 
									id='leg'
									alt="Left Thigh" 
									coords="114,300,101,302,65,302,65,334,67,358,69,367,67,394,94,413,103,393,104,361,108,341,113,323" 
									shape="poly"
									on-click={e => updateState({
										path: 'leftThigh',
										value: {expanded: !state.leftThigh.expanded},
										operation: 'set'
										})}/>
									<p id="body_parts">Left Thigh</p>
								<area 
									id='leg'
									alt="Right Thigh" 
									coords="122,300,134,302,170,302,170,338,166,366,166,379,169,397,142,412,133,396,131,375,132,359,126,338,122,320" 
									shape="poly"
									on-click={e => updateState({
										path: 'rightThigh',
										value: {expanded: !state.rightThigh.expanded},
										operation: 'set'
										})}/>
									<p id="body_parts">Right Thigh</p>
								<area 
									alt="Left Calf"
									coords="68,396,93,413,95,441,94,450,91,463,87,479,85,490,87,500,89,510,90,526,87,520,82,514,77,518,71,524,70,502,68,484,62,462,60,433,64,412" 
									shape="poly"
									on-click={e => updateState({
										path: 'leftCalf',
										value: {expanded: !state.leftCalf.expanded},
										operation: 'set'
										})}/>
									<p id="body_parts">Left Calf</p>
								<area 
									alt="Right Calf" 
									coords="141,413,169,398,173,422,176,437,174,454,170,475,166,493,164,507,165,524,158,518,152,514,146,521,146,509,150,492,147,474,142,452,141,433" 
									shape="poly"
									on-click={e => updateState({
										path: 'rightCalf',
										value: {expanded: !state.rightCalf.expanded},
										operation: 'set'
										})}/>
									<p id="body_parts">Right Calf</p>
								<area
									id='leg'
									alt="Left Foot" 
									coords="72,526,76,520,80,516,85,518,89,524,91,529,92,535,93,544,94,554,93,563,91,571,87,576,83,575,79,575,76,572,73,570,70,566,66,563,66,556,66,548,67,540,69,534"
									shape="poly"
									on-click={e => updateState({
										path: 'leftFoot',
										value: {expanded: !state.leftFoot.expanded},
										operation: 'set'
										})}/>
									<p id="body_parts">Left Foot</p>
								<area
									id='leg' 
									alt="Right Foot" 
									coords="145,524,149,518,155,516,149,518,160,519,162,524,165,527,166,533,167,541,168,548,170,555,170,563,166,566,165,569,163,570,159,572,155,574,152,573,149,575,145,572,143,568,143,562,141,555,141,545,143,537,143,530"
									shape="poly"
									on-click={e => updateState({
										path: 'rightFoot',
										value: {expanded: !state.rightFoot.expanded},
										operation: 'set'
										})}/>
									<p id="body_parts">Right Foot</p>
							</map>
							<now-button-iconic 
								id="back_button"
								icon="arrow-clockwise-outline"
								variant="tertiary"
								size="sm"
								config-aria={{"button":{"aria-label":"Settings"}}}
								tooltip-content="Rotate"
								on-click= {
									e => updateState({
										image_type: (state.image_back == true) ? "https://i.ibb.co/ccb4zbG/Body-Front.png" : "https://i.ibb.co/tK26PXK/Body-Back.png",
										usemap_type: (state.map_back == true) ?  "#frontmap" : "#backmap",
										image_back: !state.image_back,
										map_back: !state.map_back
									})
								}
								/>
						</div>
						<injured-details 
							head={state.head.expanded}
							neck={state.neck.expanded}
							torso={state.torso.expanded}
							arms={state.arms.expanded}
							legs={state.legs.expanded}
	
							eyes={state.eyes.expanded}
							ears={state.ears.expanded}
							mouth={state.mouth.expanded}
							nose={state.nose.expanded}
	
							leftUpperArm={state.leftUpperArm.expanded}
							rightUpperArm={state.rightUpperArm.expanded}
							leftForearm={state.leftForearm.expanded}
							rightForearm={state.rightForearm.expanded}
							leftHand={state.leftHand.expanded}
							rightHand={state.rightHand.expanded}
							
							leftThigh={state.leftThigh.expanded}
							rightThigh={state.rightThigh.expanded}
							leftKnee={state.leftKnee.expanded}
							rightKnee={state.rightKnee.expanded}
							leftShin={state.leftShin.expanded}
							rightShin={state.rightShin.expanded}
							leftCalf={state.leftCalf.expanded}
							rightCalf={state.rightCalf.expanded}
							leftFoot={state.leftFoot.expanded}
							rightFoot={state.rightFoot.expanded}/>
					</section>
					<p>It is tested in Chrome and Safari</p>
				</div>
			</div>
	);
};

createCustomElement('x-servo-test-project', {
	renderer: {type: snabbdom},
	view,
	styles,
	initialState: {
		head: {expanded: false},
		neck: {expanded: false},
		torso: {expanded: false},
		arms: {expanded: false},
		legs: {expanded: false},

		eyes: {expanded: false},
		ears: {expanded: false},
		nose: {expanded: false},
		mouth: {expanded: false},

		leftUpperArm: {expanded: false},
		rightUpperArm: {expanded: false},
		leftForearm: {expanded:false},
		rightForearm: {expanded:false},
		leftHand: {expanded: false},
		rightHand: {expanded: false},

		leftThigh: {expanded: false},
		rightThigh: {expanded: false},
		leftKnee: {expanded: false},
		rightKnee: {expanded: false},
		leftShin: {expanded: false},
		rightShin: {expanded: false},
		leftCalf: {expanded: false},
		rightCalf: {expanded: false},
		leftFoot: {expanded: false},
		rightFoot: {expanded: false},

		image_type: "https://i.ibb.co/ccb4zbG/Body-Front.png",
		usemap_type: "#frontmap",
		image_back: false,
		map_back: false 
	}
});
