'use client';

import React from 'react';
import { useInView } from 'react-intersection-observer';

const AnimatedSection = ({ children, id, initialClass = '', animateClass = '', threshold = 0.5, ...props }) => {
  const [ref, inView] = useInView({
    threshold: threshold,
    triggerOnce: true,
  });

  // Combine classes: initial + animate when in view
  const sectionClasses = `${initialClass} ${inView ? animateClass : ''}`;

  return (
    <section id={id} ref={ref} className={sectionClasses} {...props}>
      {children}
    </section>
  );
};

export default AnimatedSection;