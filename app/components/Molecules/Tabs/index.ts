import dynamic from 'next/dynamic';

const Tabs = dynamic(() => import('./Tabs'), { ssr: false });


// export { default } from './Tabs';
export * from './TabPane';
export { default as TabPane } from './TabPane';

export default Tabs;
