import { Component } from '../../Component';
import { Form } from './Form';
import { Heading } from '../../atoms/heading/Heading';
import { Paragraph } from '../../atoms/paragraph/Paragraph';
export declare class FormSection implements Component {
    heading?: Heading;
    description?: Paragraph;
    form: Form;
}
