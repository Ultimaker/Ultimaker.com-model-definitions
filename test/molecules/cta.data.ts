import { Cta, CtaModifier } from '../../model/molecules/cta';

export const cta: Cta =  {
    label: 'Ik ben label',
    uri: {
        scheme: 'https',
        host: 'ultimaker.com',
        path: '/doei'
    },
    modifier: CtaModifier.BUTTON
}