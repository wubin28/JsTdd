import { ToggleswitchComponent } from './toggleswitch.component';

describe('ToggleswitchComponent', () => {

  let comp: ToggleswitchComponent;
	
	beforeEach(() => {
	  comp = new ToggleswitchComponent();
	});

  it('ToggleswitchComponent off initially', () => {
		expect(comp.isOn).toBe(false);
		expect(comp.status).toBe('Toggleswitch is off');
		expect(comp.buttonLabel).toBe('TURN ON');
	});
	
  it('ToggleswitchComponent is on after 1 click', () => {
	  comp.clicked();
		expect(comp.isOn).toBe(true);
		expect(comp.status).toBe('Toggleswitch is on');
		expect(comp.buttonLabel).toBe('TURN OFF');
	});
	
  it('ToggleswitchComponent is off after 2 clicks', () => {
	  comp.clicked();
	  comp.clicked();
		expect(comp.isOn).toBe(false);
		expect(comp.status).toBe('Toggleswitch is off');
		expect(comp.buttonLabel).toBe('TURN ON');
	});
});
