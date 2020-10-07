import { OrganismInterface } from '../OrganismInterface';
import { Component } from '../../Component';
import { ContentGeneral } from 'molecules/contentGeneral/ContentGeneral';

export class InfographicJourney implements OrganismInterface, Component {
    elements: ContentGeneral[];
}
