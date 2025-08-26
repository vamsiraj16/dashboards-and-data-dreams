import type { Config } from "tailwindcss";

export default {
	darkMode: ["class"],
	content: [
		"./pages/**/*.{ts,tsx}",
		"./components/**/*.{ts,tsx}",
		"./app/**/*.{ts,tsx}",
		"./src/**/*.{ts,tsx}",
	],
	prefix: "",
	theme: {
		container: {
			center: true,
			padding: '2rem',
			screens: {
				'2xl': '1400px'
			}
		},
		extend: {
			fontFamily: {
				inter: ['Inter', 'sans-serif'],
			},
			colors: {
				border: 'hsl(var(--border))',
				input: 'hsl(var(--input))',
				ring: 'hsl(var(--ring))',
				background: 'hsl(var(--background))',
				foreground: 'hsl(var(--foreground))',
				primary: {
					DEFAULT: 'hsl(var(--primary))',
					foreground: 'hsl(var(--primary-foreground))'
				},
				secondary: {
					DEFAULT: 'hsl(var(--secondary))',
					foreground: 'hsl(var(--secondary-foreground))'
				},
				destructive: {
					DEFAULT: 'hsl(var(--destructive))',
					foreground: 'hsl(var(--destructive-foreground))'
				},
				muted: {
					DEFAULT: 'hsl(var(--muted))',
					foreground: 'hsl(var(--muted-foreground))'
				},
				accent: {
					DEFAULT: 'hsl(var(--accent))',
					foreground: 'hsl(var(--accent-foreground))'
				},
				popover: {
					DEFAULT: 'hsl(var(--popover))',
					foreground: 'hsl(var(--popover-foreground))'
				},
				card: {
					DEFAULT: 'hsl(var(--card))',
					foreground: 'hsl(var(--card-foreground))'
				},
				sidebar: {
					DEFAULT: 'hsl(var(--sidebar-background))',
					foreground: 'hsl(var(--sidebar-foreground))',
					primary: 'hsl(var(--sidebar-primary))',
					'primary-foreground': 'hsl(var(--sidebar-primary-foreground))',
					accent: 'hsl(var(--sidebar-accent))',
					'accent-foreground': 'hsl(var(--sidebar-accent-foreground))',
					border: 'hsl(var(--sidebar-border))',
					ring: 'hsl(var(--sidebar-ring))'
				}
			},
			borderRadius: {
				lg: 'var(--radius)',
				md: 'calc(var(--radius) - 2px)',
				sm: 'calc(var(--radius) - 4px)'
			},
			animation: {
				'accordion-down': 'accordion-down 0.2s ease-out',
				'accordion-up': 'accordion-up 0.2s ease-out',
				'data-flow': 'data-flow 20s ease-in-out infinite',
				'data-drift': 'data-drift 15s ease-in-out infinite',
				'fade-in-up': 'fade-in-up 0.8s ease-out',
				'scale-in': 'scale-in 0.6s ease-out',
				'glow-pulse': 'glow-pulse 3s ease-in-out infinite',
				'data-stream-flow': 'data-stream-flow 8s linear infinite',
				'float-data-point': 'float-data-point 15s linear infinite',
				'network-pulse': 'network-pulse 6s ease-in-out infinite',
				'math-float': 'math-float 20s linear infinite',
				'skill-float': 'skill-float 3s ease-in-out infinite',
				'counter-pop': 'counter-pop 0.6s ease-out',
				'typing': 'typing 3.5s steps(40, end)',
				'blink-caret': 'blink-caret 0.75s step-end infinite',
				'progress-glow': 'progress-glow 2s ease-in-out infinite alternate',
				'bounce-in': 'bounce-in 0.8s cubic-bezier(0.68, -0.55, 0.265, 1.55)',
				'stagger-fade-in': 'stagger-fade-in 0.6s ease-out forwards'
			},
			keyframes: {
				'accordion-down': {
					from: {
						height: '0'
					},
					to: {
						height: 'var(--radix-accordion-content-height)'
					}
				},
				'accordion-up': {
					from: {
						height: 'var(--radix-accordion-content-height)'
					},
					to: {
						height: '0'
					}
				},
				'data-flow': {
					'0%, 100%': {
						opacity: '0.1',
						transform: 'translateX(-100px) translateY(-50px)'
					},
					'50%': {
						opacity: '0.3',
						transform: 'translateX(100px) translateY(50px)'
					}
				},
				'data-drift': {
					'0%, 100%': {
						transform: 'translateY(0px) translateX(0px) rotate(0deg)',
						opacity: '0.05'
					},
					'33%': {
						transform: 'translateY(-30px) translateX(20px) rotate(120deg)',
						opacity: '0.15'
					},
					'66%': {
						transform: 'translateY(20px) translateX(-15px) rotate(240deg)',
						opacity: '0.08'
					}
				},
				'fade-in-up': {
					'0%': {
						opacity: '0',
						transform: 'translateY(40px)'
					},
					'100%': {
						opacity: '1',
						transform: 'translateY(0)'
					}
				},
				'scale-in': {
					'0%': {
						opacity: '0',
						transform: 'scale(0.9)'
					},
					'100%': {
						opacity: '1',
						transform: 'scale(1)'
					}
				},
				'glow-pulse': {
					'0%, 100%': {
						boxShadow: '0 0 20px hsl(217 91% 60% / 0.3)'
					},
					'50%': {
						boxShadow: '0 0 40px hsl(217 91% 60% / 0.6), 0 0 60px hsl(142 76% 36% / 0.3)'
					}
				},
				'data-stream-flow': {
					'0%': {
						transform: 'translateY(-100vh)',
						opacity: '0'
					},
					'10%': {
						opacity: '1'
					},
					'90%': {
						opacity: '1'
					},
					'100%': {
						transform: 'translateY(100vh)',
						opacity: '0'
					}
				},
				'float-data-point': {
					'0%': {
						transform: 'translateY(100vh) translateX(0px)',
						opacity: '0'
					},
					'10%': {
						opacity: '1'
					},
					'50%': {
						transform: 'translateY(50vh) translateX(20px)',
						opacity: '0.6'
					},
					'90%': {
						opacity: '1'
					},
					'100%': {
						transform: 'translateY(-10vh) translateX(-10px)',
						opacity: '0'
					}
				},
				'network-pulse': {
					'0%, 100%': {
						opacity: '0.1',
						transform: 'scaleX(0.8)'
					},
					'50%': {
						opacity: '0.4',
						transform: 'scaleX(1.2)'
					}
				},
				'math-float': {
					'0%': {
						transform: 'translateY(100vh) translateX(0px) rotate(0deg)',
						opacity: '0'
					},
					'5%': {
						opacity: '0.8'
					},
					'25%': {
						transform: 'translateY(75vh) translateX(30px) rotate(90deg)'
					},
					'50%': {
						transform: 'translateY(50vh) translateX(-20px) rotate(180deg)'
					},
					'75%': {
						transform: 'translateY(25vh) translateX(40px) rotate(270deg)'
					},
					'95%': {
						opacity: '0.8'
					},
					'100%': {
						transform: 'translateY(-10vh) translateX(-30px) rotate(360deg)',
						opacity: '0'
					}
				},
				'skill-float': {
					'0%, 100%': {
						transform: 'translateY(0px)'
					},
					'50%': {
						transform: 'translateY(-5px)'
					}
				},
				'counter-pop': {
					'0%': {
						transform: 'scale(0.8)',
						opacity: '0'
					},
					'50%': {
						transform: 'scale(1.1)'
					},
					'100%': {
						transform: 'scale(1)',
						opacity: '1'
					}
				},
				'typing': {
					'from': {
						width: '0'
					},
					'to': {
						width: '100%'
					}
				},
				'blink-caret': {
					'from, to': {
						borderColor: 'transparent'
					},
					'50%': {
						borderColor: 'hsl(var(--primary))'
					}
				},
				'progress-glow': {
					'0%': {
						boxShadow: '0 0 5px hsl(var(--primary) / 0.5)'
					},
					'100%': {
						boxShadow: '0 0 20px hsl(var(--primary) / 0.8), 0 0 30px hsl(var(--accent) / 0.6)'
					}
				},
				'bounce-in': {
					'0%': {
						transform: 'scale(0.3)',
						opacity: '0'
					},
					'50%': {
						transform: 'scale(1.05)'
					},
					'70%': {
						transform: 'scale(0.9)'
					},
					'100%': {
						transform: 'scale(1)',
						opacity: '1'
					}
				},
				'stagger-fade-in': {
					'to': {
						opacity: '1',
						transform: 'translateY(0)'
					}
				},
				'grid-move': {
					'0%': { transform: 'translate(0, 0)' },
					'100%': { transform: 'translate(50px, 50px)' }
				},
				'particle-float': {
					'0%': {
						transform: 'translateY(100vh) translateX(0) scale(0)',
						opacity: '0'
					},
					'10%': {
						opacity: '1',
						transform: 'translateY(90vh) translateX(10px) scale(1)'
					},
					'90%': {
						opacity: '1',
						transform: 'translateY(10vh) translateX(-10px) scale(1)'
					},
					'100%': {
						transform: 'translateY(0) translateX(0) scale(0)',
						opacity: '0'
					}
				}
			}
		}
	},
	plugins: [require("tailwindcss-animate")],
} satisfies Config;
