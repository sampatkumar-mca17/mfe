import {mount} from 'marketing/MarketingApp';
import React, {useRef, useEffect} from 'react';

function MarketingApp() {
    const ref = useRef(null);
    useEffect(() => {
        mount(ref.current);
    }, []);
    return <div ref={ref}></div>;
}

export default MarketingApp;