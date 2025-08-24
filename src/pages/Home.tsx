import React from 'react';
import { Hero } from '../components/home/Hero';
import { ValueProps } from '../components/home/ValueProps';
import { HowItWorks } from '../components/home/HowItWorks';
import { Stats } from '../components/home/Stats';
import { LogoWall } from '../components/home/LogoWall';
import { Testimonial } from '../components/home/Testimonial';
import { CTABand } from '../components/home/CTABand';

export function Home() {
  return (
    <main>
      <Hero />
      <ValueProps />
      <HowItWorks />
      <Stats />
      <LogoWall />
      <Testimonial />
      <CTABand />
    </main>
  );
}