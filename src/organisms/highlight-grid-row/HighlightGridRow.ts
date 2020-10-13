import { OrganismInterface } from '../OrganismInterface';
import { Component } from '../../Component';
import { ContentGeneral } from 'molecules/contentGeneral/ContentGeneral';

export class HighlightGridRow implements OrganismInterface, Component {
    title: string;
    elements: ContentGeneral[];
}
