import { Component } from '../../Component';
import { CtaBlock } from '../../molecules/cta/CtaBlock';
import { Heading } from '../../atoms/heading/Heading';
import { InfographicJourneyStep } from '../../molecules/infographic/InfographicJourneyStep';
import { Paragraph } from '../../atoms/paragraph/Paragraph';
export declare class HeroJourney implements Component {
    heading: Heading;
    steps: InfographicJourneyStep[];
    subheading?: Heading;
    description?: Paragraph;
    ctaBlock?: CtaBlock;
}
