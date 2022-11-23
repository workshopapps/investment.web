import React from 'react';
import Section7b from './sections/Section7b';
import Section8 from './sections/Section8';
import SimilarJobs from './sections/SimilarJobs';
import ProductDesigner from './sections/ProductDesigner';
import PageLayout from '../layout';

export default function Plugger() {
    return (
        <PageLayout>
            <div className="font-Hauora" data-testid="plugger">
                <Section8 />
                <ProductDesigner />
                <SimilarJobs />
                <Section7b />
            </div>
        </PageLayout>
    );
}
