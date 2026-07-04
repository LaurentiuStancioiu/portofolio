import type { ISourceOptions } from '@tsparticles/engine';

export const particlesOptions: ISourceOptions = {
	particles: {
		number: {
			value: 80,
			density: {
				enable: true,
				width: 800
			}
		},
		color: {
			value: '#ffffff'
		},
		shape: {
			type: 'circle'
		},
		opacity: {
			value: 0.5
		},
		size: {
			value: { min: 0.1, max: 3 },
			animation: {
				enable: true,
				speed: 40,
				minimumValue: 0.1
			}
		},
		links: {
			enable: true,
			distance: 150,
			color: '#ffffff',
			opacity: 0.4,
			width: 1
		},
		move: {
			enable: true,
			speed: 6,
			direction: 'none',
			outModes: {
				default: 'out'
			}
		}
	},
	interactivity: {
		events: {
			onHover: {
				enable: true,
				mode: 'repulse'
			},
			onClick: {
				enable: true,
				mode: 'push'
			}
		},
		modes: {
			repulse: {
				distance: 200,
				duration: 0.4
			},
			push: {
				quantity: 4
			}
		}
	},
	retinaDetect: true
};
