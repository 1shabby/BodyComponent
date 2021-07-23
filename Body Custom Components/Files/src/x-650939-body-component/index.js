import {createCustomElement} from '@servicenow/ui-core';
import snabbdom from '@servicenow/ui-renderer-snabbdom';
import styles from './styles.scss';
//ServiceNow imports
import '@servicenow/now-button';
import '@servicenow/now-accordion';
import '@servicenow/now-image';
import '@servicenow/now-textarea';
import '@servicenow/now-radio-buttons';
import '@servicenow/now-card';
import '@servicenow/now-input';
import '@servicenow/now-dropdown';
import '@servicenow/now-checkbox';
import onStateChange from '@servicenow/ui-renderer-snabbdom/lib/onStateChange';



const view = (state, {updateState}) => {
	return (
		<div className="float-container">
			<div className="float-child">
				Visual Selector:
				<now-card className="image_card">
					<img  src="https://i.postimg.cc/GhKwkdwt/Resized-Body-Front.png" usemap="#front_map"/>
					<img  src="https://i.postimg.cc/YCx6rDWJ/Resized-Body-Back.png" usemap="#back_map"/>
					<p>Click on a limb to include details about the injury.</p>
					<map name="front_map">
						<area className="head" target="" id="head" alt="Head" title="Head"   coords="121,88,130,88,139,83,144,78,145,71,146,65,151,63,155,58,155,52,153,46,153,38,152,30,150,22,145,14,138,8,130,6,122,5,116,7,109,10,103,16,99,24,98,32,98,40,97,49,94,53,97,61,104,64,105,72,107,79,114,84" shape="poly" 
							on-click={ 
								e => updateState({
									head_section : "true",
									neck_section : "false",
									arm_section : "false",
									shoulder_section : "false",
									leg_section : "false",
									torso_section :"false",
									other_section : "false"

								})
							}/>
    					<area className="neck" target="" id="neck" alt="Neck" title="Neck"  coords="143,80,143,87,145,94,148,100,154,104,162,106,168,109,158,111,151,109,145,107,138,105,129,106,120,106,112,106,104,107,96,108,89,109,82,109,95,104,105,96,107,88,107,80,114,83,120,87,127,88,135,85" shape="poly"
							on-click={ 
								e => updateState({
									head_section : "false",
									neck_section : !state.neck_section,
									arm_section : "false",
									shoulder_section : "false",
									leg_section : "false",
									torso_section :"false",
									other_section : "false"

								})
							}/>
    					<area className="r_shoulder" target="" id="r_shoulder" alt="Right Shoulder" title="Right Shoulder"  coords="54,144,61,144,70,144,76,144,81,139,84,131,85,124,86,117,86,110,80,108,72,110,64,113,58,118,54,125,54,132" shape="poly"
							on-click={ 
								e => updateState({
									head_section : "false",
									neck_section : "false",
									arm_section : "false",
									shoulder_section : !state.shoulder_section,
									leg_section : "false",
									torso_section :"false",
									other_section : "false"

								})}/>
    					<area className="l_shoulder" target="" id="l_shoulder" alt="Left Shoulder" title="Left Shoulder"  coords="196,145,185,145,176,145,170,139,168,130,168,121,167,115,168,108,174,110,181,112,189,116,194,122,196,132,196,139" shape="poly"
							on-click={ 
								e => updateState({
									head_section : "false",
									neck_section : "false",
									arm_section : "false",
									shoulder_section : !state.shoulder_section,
									leg_section : "false",
									torso_section :"false",
									other_section : "false"

								})}/>
    					<area className="r_arm" target="" id="r_arm" alt="Right Arm" title="Right Arm"  coords="54,144,77,145,78,151,81,157,81,165,80,174,79,183,78,192,76,202,75,211,75,220,73,231,69,239,66,247,63,258,60,265,56,273,52,280,35,275,39,261,42,247,42,235,44,224,46,213,50,201,53,188,54,172,57,159" shape="poly"
							on-click={ 
								e => updateState({
									head_section : "false",
									neck_section : "false",
									arm_section : "true",
									shoulder_section : "false",
									leg_section : "false",
									torso_section :"false",
									other_section : "false"

								})}/>
    					<area className="l_arm" target="" id="l_arm" alt="Left Arm" title="Left Arm"  coords="175,145,196,145,195,155,193,161,196,168,196,175,198,184,198,194,200,202,202,209,205,216,207,225,207,232,208,240,208,248,211,257,213,265,216,273,199,279,192,266,187,249,180,236,176,222,177,208,174,194,171,178,170,157" shape="poly"
							on-click={ 
								e => updateState({
									head_section : "false",
									neck_section : "false",
									arm_section : "true",
									shoulder_section : "false",
									leg_section : "false",
									torso_section :"false",
									other_section : "false"

								})}/>
    					<area className="r_hand" target="" id="r_hand" alt="Right Hand" title="Right Hand"  coords="34,274,24,278,17,281,14,287,8,293,6,298,11,299,21,291,21,298,19,307,16,319,12,326,18,327,26,309,24,317,21,331,25,333,32,312,31,321,30,332,34,331,36,322,38,311,39,326,43,323,45,305,50,292,51,280" shape="poly"
							on-click={ 
								e => updateState({
									head_section : "false",
									neck_section : "false",
									arm_section : "true",
									shoulder_section : "false",
									leg_section : "false",
									torso_section :"false",
									other_section : "false"

								})}/>
    					<area className="l_hand" target="" id="l_hand" alt="Left Hand" title="Left Hand"  coords="199,280,198,287,201,294,204,300,206,305,206,311,206,317,208,324,212,322,212,309,214,314,217,330,221,330,219,310,221,317,225,333,230,329,225,308,230,317,233,328,238,326,231,304,229,296,230,290,236,296,242,298,243,296,236,286,229,279,216,274" shape="poly"
							on-click={ 
								e => updateState({
									head_section : "false",
									neck_section : "false",
									arm_section : "true",
									shoulder_section : "false",
									leg_section : "false",
									torso_section :"false",
									other_section : "false"

								})}/>
    					<area className="chest" target="" id="chest" alt="Chest" title="Chest"  coords="86,111,85,119,84,128,82,136,78,143,77,150,81,158,81,168,78,184,80,194,81,204,81,219,87,220,96,214,101,207,108,202,113,198,118,195,132,194,136,198,142,203,147,207,154,213,159,217,164,221,169,219,169,212,168,203,170,194,170,187,170,177,170,169,170,160,172,152,175,145,171,139,168,130,167,119,167,110,159,110,149,107,139,105,121,107,103,107" shape="poly"
							on-click={ 
								e => updateState({
									head_section : "false",
									neck_section : "false",
									arm_section : "false",
									shoulder_section : "false",
									leg_section : "false",
									torso_section :"true",
									other_section : "false"

								})}/>
    					<area className="stomach" target="" id="stomach" alt="Stomach" title="Stomach"  coords="80,220,79,230,78,238,77,247,76,251,81,252,76,251,85,256,89,261,94,267,97,273,102,278,107,283,112,287,118,289,125,289,132,288,138,287,143,283,148,279,151,274,156,267,159,262,164,257,168,252,173,249,172,240,171,231,170,224,169,221,161,219,151,212,140,201,131,193,118,194,106,204,99,211,90,218" shape="poly"
							on-click={ 
								e => updateState({
									head_section : "false",
									neck_section : "false",
									arm_section : "false",
									shoulder_section : "false",
									leg_section : "false",
									torso_section :"true",
									other_section : "false"

								})}/>
    					<area className="groin" target="" id="groin" alt="Groin" title="Groin"  coords="107,284,109,289,111,297,114,302,116,308,119,314,125,314,131,312,135,306,137,300,138,294,138,287,128,289,118,289" shape="poly"
							on-click={ 
								e => updateState({
									head_section : "false",
									neck_section : "false",
									arm_section : "false",
									shoulder_section : "false",
									leg_section : "false",
									torso_section :"true",
									other_section : "false"

								})}/>
    					<area className="r_leg" target="" id="r_leg" alt="Right Leg" title="Right Leg"  coords="76,253,73,266,71,281,70,292,69,309,68,322,68,338,69,355,70,368,71,379,74,389,72,399,72,413,70,425,67,437,63,454,63,467,64,481,67,493,70,507,73,520,74,530,75,541,95,541,93,529,91,517,94,507,97,495,99,482,102,474,100,450,100,439,104,428,110,418,111,404,111,394,111,380,114,365,118,354,120,345,121,335,122,323,123,317,118,311,115,302,109,291,107,283,96,272,86,256" shape="poly"
							on-click={ 
								e => updateState({
									head_section : "false",
									neck_section : "false",
									arm_section : "false",
									shoulder_section : "false",
									leg_section : "true",
									torso_section :"false",
									other_section : "false"

								})}/>
    					<area className="l_leg" target="" id="l_leg" alt="Left Leg" title="Left Leg"  coords="172,249,177,264,179,285,180,300,181,317,181,330,181,347,180,364,179,378,177,392,179,407,179,419,182,430,184,444,187,457,186,478,184,492,180,507,177,520,175,534,156,535,160,521,155,498,148,463,151,439,143,424,139,410,139,391,139,378,133,356,129,336,128,314,134,307,138,296,138,287,146,280,154,270,161,260" shape="poly"
							on-click={ 
								e => updateState({
									head_section : "false",
									neck_section : "false",
									arm_section : "false",
									shoulder_section : "false",
									leg_section : "true",
									torso_section :"false",
									other_section : "false"

								})}/>
    					<area className="r_foot" target="" id="r_foot" alt="Right Foot" title="Right Foot"  coords="75,541,74,552,75,559,73,566,71,578,69,585,68,596,73,600,74,606,79,607,84,610,89,611,95,610,99,603,101,590,100,578,99,569,97,559,96,549,95,542,85,541" shape="poly"
							on-click={ 
								e => updateState({
									head_section : "false",
									neck_section : "false",
									arm_section : "false",
									shoulder_section : "false",
									leg_section : "true",
									torso_section :"false",
									other_section : "false"

								})}/>
    					<area className="l_foot" target="" id="l_foot" alt="Left Foot" title="Left Foot"  coords="156,536,154,544,154,552,152,560,151,569,150,578,149,587,150,596,151,604,154,609,163,611,168,608,173,605,177,600,181,596,181,588,180,578,178,567,175,557,177,549,175,540,174,534" shape="poly"
							on-click={ 
								e => updateState({
									head_section : "false",
									neck_section : "false",
									arm_section : "false",
									shoulder_section : "false",
									leg_section : "true",
									torso_section :"false",
									other_section : "false"

								})}/>
        			</map>	
					<map name="back_map">
						<area target="" alt="Head" title="Head"  coords="121,88,130,88,139,83,144,78,145,71,146,65,151,63,155,58,155,52,153,46,153,38,152,30,150,22,145,14,138,8,130,6,122,5,116,7,109,10,103,16,99,24,98,32,98,40,97,49,94,53,97,61,104,64,105,72,107,79,114,84" shape="poly"
							on-click={ 
								e => updateState({
									head_section : "true",
									neck_section : "false",
									arm_section : "false",
									shoulder_section : "false",
									leg_section : "false",
									torso_section :"false",
									other_section : "false"

								})}/>
    					<area target="" alt="Neck" title="Neck"  coords="143,80,143,87,145,94,148,100,154,104,162,106,168,109,158,111,151,109,145,107,138,105,129,106,120,106,112,106,104,107,96,108,89,109,82,109,95,104,105,96,107,88,107,80,114,83,120,87,127,88,135,85" shape="poly"
							on-click={ 
								e => updateState({
									head_section : "false",
									neck_section : "true",
									arm_section : "false",
									shoulder_section : "false",
									leg_section : "false",
									torso_section :"false",
									other_section : "false"

								})}/>
						<area target="" alt="Left Shoulder" title="Left Shoulder"  coords="54,144,65,144,71,144,77,145,79,152,84,159,88,162,93,165,99,167,104,160,104,151,103,141,103,133,104,125,102,114,98,106,91,102,82,106,76,108,69,112,62,116,57,122,54,131" shape="poly"
							on-click={ 
								e => updateState({
									head_section : "false",
									neck_section : "false",
									arm_section : "false",
									shoulder_section : "true",
									leg_section : "false",
									torso_section :"false",
									other_section : "false"

								})}/>
    					<area target="" alt="Right Shoulder" title="Right Shoulder"  coords="194,143,182,143,175,143,166,147,162,155,159,164,151,166,143,161,141,151,142,142,145,134,143,127,142,117,146,107,152,101,163,105,174,109,182,114,188,119,193,128" shape="poly"
							on-click={ 
								e => updateState({
									head_section : "false",
									neck_section : "false",
									arm_section : "false",
									shoulder_section : "true",
									leg_section : "false",
									torso_section :"false",
									other_section : "false"

								})}/>
    					<area target="" alt="Left Arm" title="Left Arm"  coords="54,144,77,145,78,151,81,157,81,165,80,174,79,183,78,192,76,202,75,211,75,220,73,231,69,239,66,247,63,258,60,265,56,273,52,280,35,275,39,261,42,247,42,235,44,224,46,213,50,201,53,188,54,172,57,159" shape="poly"
							on-click={ 
								e => updateState({
									head_section : "false",
									neck_section : "false",
									arm_section : "true",
									shoulder_section : "false",
									leg_section : "false",
									torso_section :"false",
									other_section : "false"

								})}/>
    					<area target="" alt="Right Arm" title="Right Arm"  coords="175,145,196,145,195,155,193,161,196,168,196,175,198,184,198,194,200,202,202,209,205,216,207,225,207,232,208,240,208,248,211,257,213,265,216,273,199,279,192,266,187,249,180,236,176,222,177,208,174,194,171,178,170,157" shape="poly"
							on-click={ 
								e => updateState({
									head_section : "false",
									neck_section : "false",
									arm_section : "true",
									shoulder_section : "false",
									leg_section : "false",
									torso_section :"false",
									other_section : "false"

								})}/>
    					<area target="" alt="Left Hand" title="Left Hand"  coords="34,274,24,278,17,281,14,287,8,293,6,298,11,299,21,291,21,298,19,307,16,319,12,326,18,327,26,309,24,317,21,331,25,333,32,312,31,321,30,332,34,331,36,322,38,311,39,326,43,323,45,305,50,292,51,280" shape="poly"
							on-click={ 
								e => updateState({
									head_section : "false",
									neck_section : "false",
									arm_section : "true",
									shoulder_section : "false",
									leg_section : "false",
									torso_section :"false",
									other_section : "false"

								})}/>
    					<area target="" alt="Right Hand" title="Right Hand"  coords="199,280,198,287,201,294,204,300,206,305,206,311,206,317,208,324,212,322,212,309,214,314,217,330,221,330,219,310,221,317,225,333,230,329,225,308,230,317,233,328,238,326,231,304,229,296,230,290,236,296,242,298,243,296,236,286,229,279,216,274" shape="poly"
							on-click={ 
								e => updateState({
									head_section : "false",
									neck_section : "false",
									arm_section : "true",
									shoulder_section : "false",
									leg_section : "false",
									torso_section :"false",
									other_section : "false"

								})}/>
    					<area target="" alt="Buttocks" title="Buttocks"  coords="72,270,122,268,176,268,177,293,180,318,141,318,130,316,121,315,113,317,106,317,68,319,71,290" shape="poly"
							on-click={ 
								e => updateState({
									head_section : "false",
									neck_section : "false",
									arm_section : "false",
									shoulder_section : "false",
									leg_section : "false",
									torso_section :"true",
									other_section : "false"

								})}/>
						<area target="" alt="Left Leg" title="Left Leg"  coords="76,253,73,266,71,281,70,292,69,309,68,322,68,338,69,355,70,368,71,379,74,389,72,399,72,413,70,425,67,437,63,454,63,467,64,481,67,493,70,507,73,520,74,530,75,541,95,541,93,529,91,517,94,507,97,495,99,482,102,474,100,450,100,439,104,428,110,418,111,404,111,394,111,380,114,365,118,354,120,345,121,335,122,323,123,317,118,311,115,302,109,291,107,283,96,272,86,256" shape="poly"
							on-click={ 
								e => updateState({
									head_section : "false",
									neck_section : "false",
									arm_section : "false",
									shoulder_section : "false",
									leg_section : "true",
									torso_section :"false",
									other_section : "false"

								})}/>
    					<area target="" alt="Right Leg" title="Right Leg"  coords="172,249,177,264,179,285,180,300,181,317,181,330,181,347,180,364,179,378,177,392,179,407,179,419,182,430,184,444,187,457,186,478,184,492,180,507,177,520,175,534,156,535,160,521,155,498,148,463,151,439,143,424,139,410,139,391,139,378,133,356,129,336,128,314,134,307,138,296,138,287,146,280,154,270,161,260" shape="poly"
							on-click={ 
								e => updateState({
									head_section : "false",
									neck_section : "false",
									arm_section : "false",
									shoulder_section : "false",
									leg_section : "true",
									torso_section :"false",
									other_section : "false"

								})}/>
    					<area target="" alt="Left Foot" title="Left Foot"  coords="75,541,74,552,75,559,73,566,71,578,69,585,68,596,73,600,74,606,79,607,84,610,89,611,95,610,99,603,101,590,100,578,99,569,97,559,96,549,95,542,85,541" shape="poly"
							on-click={ 
								e => updateState({
									head_section : "false",
									neck_section : "false",
									arm_section : "false",
									shoulder_section : "false",
									leg_section : "true",
									torso_section :"false",
									other_section : "false"

								})}/>
    					<area target="" alt="Right Foot" title="Right Foot"  coords="156,536,154,544,154,552,152,560,151,569,150,578,149,587,150,596,151,604,154,609,163,611,168,608,173,605,177,600,181,596,181,588,180,578,178,567,175,557,177,549,175,540,174,534" shape="poly"
							on-click={ 
								e => updateState({
									head_section : "false",
									neck_section : "false",
									arm_section : "false",
									shoulder_section : "false",
									leg_section : "true",
									torso_section :"false",
									other_section : "false"

								})}/>
						<area target="" alt="Back" title="Back"  coords="94,103,148,103,144,108,142,114,142,120,144,127,144,136,142,142,141,148,142,156,145,161,150,165,159,163,161,156,167,146,176,142,172,155,170,161,170,167,168,181,167,192,168,206,169,225,170,235,172,251,174,261,176,267,156,267,132,267,115,268,98,268,72,269,77,243,79,220,81,198,79,185,79,172,77,161,75,150,73,142,82,155,87,160,95,163,101,164,105,158,103,142,104,129,101,111" shape="poly"
							on-click={ 
								e => updateState({
									head_section : "false",
									neck_section : "false",
									arm_section : "false",
									shoulder_section : "false",
									leg_section : "false",
									torso_section :"true",
									other_section : "false"

								})}/>
    					
        			</map>	
				</now-card>
			</div>
			<div className="float-child">
				<p>  </p>
				<now-accordion heading-level="3" trigger-icon={{"type":"plus-minus","position":"start"}} expandSingle="true" >
					<now-accordion-item 
						expanded={state.arm_section}
						header={{"label":"Arm","weight":"bold","size":"md","variant":"secondary"}} 
						caption={{"label":"Select which arm, and provide additional details about the injury","style":"italic","variant":"primary"}}>
						<now-radio-buttons 
							slot="content" 
							helper-content="" 
							label="" 
							layout="vertical" 
							options={[{"id":"left_arm","label":"Left Arm"},{"id":"right_arm","label":"Right Arm"},{"id":"both_arms","label":"Left and right arms"}]}>
						</now-radio-buttons>
						<now-input 
							slot="content"
							helper-content="" 
							label="Weapon Type" 
							placeholder="" 
							type="text" 
							value={state.arm_weapon}>
						</now-input>
						<now-textarea 
							slot="content" 
							label="Description of injury" 
							maxlength={1000}  
							showCounter="true" 
							rows="7"
							value={state.arm_description}>
						</now-textarea>
					</now-accordion-item>
					<now-accordion-item 
						expanded={state.leg_section}
						header={{"label":"Leg","weight":"bold","size":"md","variant":"secondary"}} 
						caption={{"label":"Select which leg, and provide additional details about the injury","style":"italic","variant":"primary"}}>
						<now-radio-buttons 
							slot="content" 
							helper-content="" 
							label="" 
							layout="vertical" 
							messages='' 
							options={[{"id":"left_leg","label":"Left leg"},{"id":"right_leg","label":"Right Leg"},{"id":"both_legs","label":"Left and right legs"}]}>
						</now-radio-buttons>
						<now-input 
							slot="content"
							helper-content="" 
							label="Weapon Type" 
							messages={[]} 
							placeholder="" 
							type="text" 
							value={state.leg_weapon}>
						</now-input>
						<now-textarea 
							slot="content" 
							label="Description of injury" 
							maxlength={1000}  
							showCounter="true" 
							rows="7" 
							value={state.leg_description}>
							</now-textarea>
					</now-accordion-item>
					<now-accordion-item 
						expanded={state.torso_section}
						header={{"label":"Torso","weight":"bold","size":"md","variant":"secondary"}} 
						caption={{"label":"Provide information about the injury","style":"italic","variant":"primary"}}>
						<now-dropdown 
							slot="content"
							items={[
								{"id":"chest","label":"Chest"},
								{"id":"stomach","label":"Stomach"},
								{"id":"back","label":"Back"},
								{"id":"side","label":"Side"},
								{"id":"buttocks","label":"Buttocks"},
								{"id":"combo","label":"Any combination of the above options"},
								{"id":"other","label":"Other (Provide deatails below)"}]} 
							selected-items={[]} 
							select="single" 
							placeholder="Select location" 
							icon="" 
							variant="secondary" 
							size="md" 
							tooltip-content="" 
							panel-fit-props={{}} 
							config-aria={{}} 
							search="none">	
						</now-dropdown>
						<now-input 
							slot="content"
							helper-content="" 
							label="Weapon Type" 
							messages={[]} 
							placeholder="" 
							type="text" 
							value={state.torso_weapon}>
						</now-input>
						<now-textarea 
							slot="content" 
							label="Description of injury" 
							maxlength={1500}  
							showCounter="true" 
							rows="7" 
							value={state.torso_description}>
							</now-textarea>
					</now-accordion-item>
					<now-accordion-item 
					expanded={state.shoulder_section}
					header={{"label":"Shoulder","weight":"bold","size":"md","variant":"secondary"}} 
					caption={{"label":"Select which shoulder, and provide additional details about the injury","style":"italic","variant":"primary"}}>
						<now-radio-buttons 
							slot="content" 
							helper-content="" 
							label="" 
							layout="vertical" 
							messages="" 
							options={[{"id":"left_shoulder","label":"Left Shoulder"},{"id":"right_shoulder","label":"Right Shoulder"},{"id":"both_shoulders","label":"Left and right shoulders"}]}>
						</now-radio-buttons>
						<now-dropdown 
							slot="content"
							items={[
								{"id":"front","label":"Front"},
								{"id":"back","label":"Back"},
								{"id":"both","label":"Both"}]} 
							selected-items={[]} 
							select="single" 
							placeholder="Select side" 
							icon="" 
							variant="secondary" 
							size="md" 
							tooltip-content="" 
							panel-fit-props={{}} 
							config-aria={{}} 
							search="none">	
						</now-dropdown>
						<now-input 
							slot="content"
							helper-content="" 
							label="Weapon Type" 
							messages={[]} 
							placeholder="" 
							type="text" 
							value={state.shoulder_weapon}>
						</now-input>
						<now-textarea 
							slot="content" 
							label="Description of injury" 
							maxlength={1000}  
							showCounter="true"
							rows="7" 
							value={state.shoulder_description}>
						</now-textarea>
					</now-accordion-item>
					<now-accordion-item 
						expanded={state.head_section}
						header={{"label":"Head","weight":"bold","size":"md","variant":"secondary"}} 
						caption={{"label":"Provide information about the injury","style":"italic","variant":"primary"}}>
						<now-input 
							slot="content"
							helper-content="" 
							label="Weapon Type" 
							messages={[]} 
							placeholder="" 
							type="text" 
							value={state.head_weapon}>
						</now-input>
						<now-textarea 
							slot="content" 
							label="Description of injury" 
							maxlength={1000}  
							showCounter="true" 
							rows="7" 
							value={state.head_description}>
						</now-textarea>
					</now-accordion-item>
					<now-accordion-item 
						expanded={state.neck_section}
						header={{"label":"Neck","weight":"bold","size":"md","variant":"secondary"}} 
						caption={{"label":"Provide information about the injury","style":"italic","variant":"primary"}}>
						<now-input 
							slot="content"
							helper-content="" 
							label="Weapon Type" 
							messages={[]} 
							placeholder="" 
							type="text" 
							value="">
						</now-input>
						<now-textarea 
							slot="content" 
							label="Description of injury" 
							maxlength={1000}  
							showCounter="true" 
							rows="7" >
						</now-textarea>
					</now-accordion-item>
					<now-accordion-item 
					expanded={state.other_section}
						header={{"label":"Other","weight":"bold","size":"md","variant":"secondary"}} 
						caption={{"label":"If your injury does not fit the other groups, describe it here and be as descriptive as possible.","style":"italic","variant":"primary"}}>
						<now-input 
							slot="content"
							helper-content="" 
							label="Weapon Type" 
							messages={[]} 
							placeholder="" 
							type="text" 
							value={state.other_weapon}>
						</now-input>
						<now-textarea 
							slot="content" 
							label="Description of injury" 
							maxlength={2000}  
							showCounter="true" 
							rows="7" 
							value={state.other_description}>
						</now-textarea>
					</now-accordion-item>
				</now-accordion>

				<now-button label="Clear Selctions" 
					variant="primary" 
					size="md" 
					icon="" 
					config-aria={{}} 
					on-click={ 
						e => updateState({
							head_section : "false",
							neck_section : "false",
							arm_section : "false",
							shoulder_section : "false",
							leg_section : "false",
							torso_section :"false",
							other_section : "false",

							arm_weapon : "",
							shoulder_weapon : "",
							leg_weapon : "",
							torso_weapon : "",
							other_weapon : "",
							neck_weapon : "",

							arm_description : "",
							leg_description : "",
							torso_description : "",
							shoulder_description : "",
							head_description : "",
							other_description : ""


						})}
					tooltip-content="" >
				</now-button >
				<now-button 
					label="Submit" 
					variant="primary" 
					size="md" 
					icon="" 
					config-aria={{}} 
					tooltip-content="" >
				</now-button>
			</div>
		</div>
	);
};

createCustomElement('x-650939-body-component', {
	renderer: {type: snabbdom},
	view,
	styles,
	initialState: {
		arm_weapon : "test",
		leg_weapon : "",
		torso_weapon : "",
		head_weapon : "",
		shoulder_weapon : "",
		neck_weapon : "",
		other_weapon : "",
		arm_description : "",
		leg_description : "",
		torso_description : "",
		shoulder_description : "",
		head_description : "",
		other_description : "",
		head_section : "false",
		neck_section : "false",
		torso_section : "false",
		shoulder_section : "false",
		arm_section : "false",
		leg_section : "false",
		other_section : "false"
	}
});