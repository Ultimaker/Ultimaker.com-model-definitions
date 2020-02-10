import { OrganismInterface } from '../OrganismInterface';
import { InfographicJourneyStep } from '../../molecules/infographic/InfographicJourneyStep';
import { Component } from '../../Component';
import { CtaBlock } from '../../molecules/cta/CtaBlock';
export declare class InfographicJourney implements OrganismInterface, Component {
    title: string;
    subtitle?: string;
    steps: InfographicJourneyStep[];
    ctaBlock?: CtaBlock;
}
