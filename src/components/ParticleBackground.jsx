import { useCallback, useEffect, useState } from 'react'
import Particles from 'react-particles'
import { loadSlim } from 'tsparticles-slim'

const ParticleBackground = () => {
  const [particleColor, setParticleColor] = useState('#ffffff')

  useEffect(() => {
    const updateParticleColor = () => {
      const theme = document.documentElement.getAttribute('data-theme')
      setParticleColor(theme === 'dark' ? '#ffffff' : '#1e40af')
    }

    updateParticleColor()

    const observer = new MutationObserver(updateParticleColor)
    observer.observe(document.documentElement, {
      attributes: true,
      attributeFilter: ['data-theme'],
    })

    return () => observer.disconnect()
  }, [])

  const particlesInit = useCallback(async (engine) => {
    await loadSlim(engine)
  }, [])

  return (
    <Particles
      id="tsparticles"
      init={particlesInit}
      options={{
        background: {
          color: {
            value: 'transparent',
          },
        },
        fpsLimit: 120,
        interactivity: {
          events: {
            onClick: {
              enable: true,
              mode: 'push',
            },
            onHover: {
              enable: true,
              mode: 'repulse',
              parallax: {
                enable: true,
                force: 60,
                smooth: 10,
              },
            },
            resize: true,
          },
          modes: {
            push: {
              quantity: 6,
            },
            repulse: {
              distance: 250,
              duration: 0.6,
              factor: 100,
              speed: 1,
            },
            bubble: {
              distance: 400,
              size: 20,
              duration: 2,
              opacity: 0.8,
            },
          },
        },
        particles: {
          color: {
            value: particleColor,
          },
          links: {
            enable: false,
          },
          move: {
            direction: 'none',
            enable: true,
            outModes: {
              default: 'bounce',
              bottom: 'bounce',
              left: 'bounce',
              right: 'bounce',
              top: 'bounce',
            },
            random: true,
            speed: {
              min: 0.5,
              max: 3,
            },
            straight: false,
            attract: {
              enable: true,
              rotate: {
                x: 600,
                y: 1200,
              },
            },
            trail: {
              enable: false,
            },
            vibrate: false,
            warp: false,
          },
          number: {
            density: {
              enable: true,
              area: 800,
            },
            value: 120,
          },
          opacity: {
            value: 0.5,
            random: {
              enable: true,
              minimumValue: 0.2,
            },
            animation: {
              enable: true,
              speed: 2,
              sync: false,
            },
          },
          shape: {
            type: ['circle', 'triangle', 'polygon'],
            options: {
              polygon: {
                sides: 4,
              },
            },
          },
          size: {
            value: 5,
            random: {
              enable: true,
              minimumValue: 1,
            },
            animation: {
              enable: true,
              speed: 3,
              sync: false,
            },
          },
          rotate: {
            value: 0,
            animation: {
              enable: true,
              speed: 5,
              sync: false,
            },
            direction: 'random',
          },
        },
        detectRetina: true,
      }}
      key={particleColor}
    />
  )
}

export default ParticleBackground
