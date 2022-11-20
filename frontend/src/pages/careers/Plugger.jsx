import React from 'react';
import Section7b from './sections/Section7b';
import Section8 from './sections/Section8';
import SimlarJobs from './sections/SimlarJobs';
import ProductDesigner from './sections/ProductDesigner';
import PageLayout from '../layout';

export default function Plugger() {
    return (
        <PageLayout>
            <div className="font-Hauora">
                <Section8 />
                <ProductDesigner />
                <SimlarJobs />
                <Section7b />
            </div>
        </PageLayout>
    );
}
