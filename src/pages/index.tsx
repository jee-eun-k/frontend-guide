import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import HomepageFeatures from '@site/src/components/HomepageFeatures';
import Layout from '@theme/Layout';
import type { ReactNode } from 'react';

export default function Home(): ReactNode {
	const { siteConfig } = useDocusaurusContext();
	return (
		<Layout title={`${siteConfig.title}`} description='Frontend Survival Journal'>
			<main>
				<HomepageFeatures />
			</main>
		</Layout>
	);
}
