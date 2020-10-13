import { OrganismInterface } from '../OrganismInterface';
import { Component } from '../../Component';
import { ContentGeneral } from 'molecules/contentGeneral/ContentGeneral';
export declare class HighlightGridRow implements OrganismInterface, Component {
    title: string;
    elements: ContentGeneral[];
}
