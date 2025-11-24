"use client";

import Particles from "react-tsparticles";
import { loadSlim } from "tsparticles-slim";
import { useCallback } from "react";

export default function ParticlesBackground() {
    const particlesInit = useCallback(async (engine) => {
        await loadSlim(engine);
    }, []);

    return (
        <Particles
            id="tsparticles"
            init={particlesInit}
            className="absolute inset-0 -z-10"
            options={{
                background: { color: "#000101" }, // dark background
                fpsLimit: 60,
                interactivity: {
                    events: {
                        onHover: { enable: true, mode: "repulse" }, // particles repel on hover
                        onClick: { enable: true, mode: "push" }, // click adds particles
                    },
                    modes: {
                        repulse: { distance: 120, duration: 0.4 },
                        push: { quantity: 2 },
                    },
                },
                particles: {
                    number: { value: 60, density: { enable: true, area: 900 } },
                    color: { value: ["#14b8a6", "#0f766e", "#4290a4"] }, // teal shades
                    links: {
                        enable: true,
                        color: "#0f766e",
                        distance: 150,
                        opacity: 0.8,
                        width: 1.5,
                    },
                    move: {
                        enable: true,
                        speed: 1,
                        direction: "none",
                        outModes: { default: "bounce" },
                    },
                    size: { value: { min: 2, max: 4 } },
                    opacity: { value: { min: 0.2, max: 0.7 }, animation: { enable: true, speed: 1, minimumValue: 0.2, sync: false } },
                },
                detectRetina: true,
            }}
        />
    );
}
