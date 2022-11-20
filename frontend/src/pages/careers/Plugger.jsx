import React from 'react';
import Section7b from './sections/Section7b';
import Section8 from './sections/Section8';
import SimlarJobs from './sections/SimlarJobs';
import ProductDesigner from './sections/ProductDesigner';
import Header from '../../components/Header/Header';
import Footer from '../../components/Footer/Footer';

export default function Plugger() {
    return (
        <div className="font-Hauora">
            <Header />
            <Section8 />
            <ProductDesigner />
            <SimlarJobs />
            <Section7b />
            <Footer />
        </div>
    );
}
