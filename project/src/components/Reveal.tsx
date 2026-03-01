import React, { useEffect, useRef } from 'react';

type RevealProps = {
  children: React.ReactNode;
  delay?: number;
};

const spring = (from: number, to: number, onUpdate: (value: number) => void) => {
  let position = from;
  let velocity = 0;
  const mass = 1;
  const stiffness = 400;
  const damping = 40;
  const frame = () => {
    const dt = 1 / 60;
    const force = -stiffness * (position - to);
    const dampingForce = -damping * velocity;
    const acceleration = (force + dampingForce) / mass;
    velocity += acceleration * dt;
    position += velocity * dt;
    onUpdate(position);
    if (Math.abs(position - to) > 0.001 || Math.abs(velocity) > 0.001) {
      requestAnimationFrame(frame);
    } else {
      onUpdate(to);
    }
  };
  requestAnimationFrame(frame);
};

const Reveal = ({ children, delay = 0 }: RevealProps) => {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    el.style.opacity = '0';
    el.style.transform = 'translateY(20px)';
    let revealed = false;

    const obs = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !revealed) {
          revealed = true;
          const start = performance.now() + delay;
          const tick = () => {
            if (performance.now() < start) {
              requestAnimationFrame(tick);
              return;
            }
            spring(20, 0, (y) => {
              el.style.transform = `translateY(${y}px)`;
              const progress = Math.min(1, 1 - y / 20);
              el.style.opacity = String(progress);
            });
          };
          requestAnimationFrame(tick);
          obs.disconnect();
        }
      },
      { threshold: 0.2 }
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, [delay]);

  return <div ref={ref}>{children}</div>;
};

export default Reveal;
