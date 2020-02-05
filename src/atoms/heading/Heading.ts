import { Component } from '../../Component';
import { HeadingVariantEnum } from './HeadingVariantEnum';

export class Heading implements Component {
    text: string;
    variant: HeadingVariantEnum;
}
