import { OrganismInterface } from '../OrganismInterface';
import { Component } from '../../Component';
import { HighlightGridRow } from '../../molecules/highlight-grid-row/HighlightGridRow';

export class HighlightGrid implements OrganismInterface, Component {
    elements: HighlightGridRow[];
}
