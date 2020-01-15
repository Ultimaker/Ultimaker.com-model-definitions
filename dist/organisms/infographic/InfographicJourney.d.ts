import { OrganismInterface } from '../OrganismInterface';
import { InfographicJourneyStep } from '../../molecules/infographic/InfographicJourneyStep';
import { CtaBlock } from '../../molecules/cta/CtaBlock';
export declare class InfographicJourney implements OrganismInterface {
    title: string;
    subtitle?: string;
    steps: InfographicJourneyStep[];
    ctaBlock?: CtaBlock;
}
