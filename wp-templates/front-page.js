import * as MENUS from 'constants/menus';

import { useQuery, gql } from '@apollo/client';
import { FaArrowRight } from 'react-icons/fa';
import styles from 'styles/pages/_Home.module.scss';
import {
  EntryHeader,
  Main,
  Button,
  Heading,
  CTA,
  NavigationMenu,
  SEO,
  Footer,
  Posts,
  Testimonials,
} from 'components';
import { BlogInfoFragment } from 'fragments/GeneralSettings';

import AaronHeader from "../components/AaronHeader/AaronHeader";
import AaronHeroNew from "../components/AaronHeroNew/AaronHeroNew";

const postsPerPage = 3;

export default function Component() {
  const { data, loading } = useQuery(Component.query, {
    variables: Component.variables(),
  });
  if (loading) {
    return null;
  }

  const { title: siteTitle, description: siteDescription } =
    data?.generalSettings;
  const primaryMenu = data?.headerMenuItems?.nodes ?? [];
  const footerMenu = data?.footerMenuItems?.nodes ?? [];

  const mainBanner = {
    sourceUrl: '/static/banner.jpeg',
    mediaDetails: { width: 1200, height: 600 },
    altText: 'Portfolio Banner',
  };
  return (
    <>
      <SEO title={siteTitle} description={siteDescription} />

      <AaronHeader menu={primaryMenu} />
      <AaronHeroNew />

      <Main className={styles.home}>
        <EntryHeader image={mainBanner} />
        <div className="container">
          <section className="cta">
            <CTA
              Button={() => (
                <Button href="/posts">
                  Get Started <FaArrowRight style={{ marginLeft: `1rem` }} />
                </Button>
              )}
            >
              <span>
                Learn about Core Web Vitals and how Atlas can help you reach
                your most demanding speed and user experience requirements.
              </span>
            </CTA>
          </section>
          <section className={styles.posts}>
            <Heading className={styles.heading} level="h2">
              Latest Posts
            </Heading>
            <Posts posts={data.posts?.nodes} id="posts-list" />
          </section>
          <section className="cta">
            <CTA
              Button={() => (
                <Button href="/posts">
                  Get Started <FaArrowRight style={{ marginLeft: `1rem` }} />
                </Button>
              )}
            >
              <span>
                Learn about Core Web Vitals and how Atlas can help you reach
                your most demanding speed and user experience requirements.
              </span>
            </CTA>
          </section>
          <section className={styles.testimonials}>
            <Heading className={styles.heading} level="h2">
              Testimonials
            </Heading>
            <p className={styles.description}>
              Here are just a few of the nice things our customers have to say.
            </p>
            <Testimonials testimonials={data?.testimonials?.nodes} />
          </section>
        </div>
      </Main>
      <Footer menuItems={footerMenu} />
    </>
  );
}

Component.variables = () => {
  return {
    headerLocation: MENUS.PRIMARY_LOCATION,
    footerLocation: MENUS.FOOTER_LOCATION,
    first: postsPerPage,
  };
};

Component.query = gql`
  ${BlogInfoFragment}
  ${NavigationMenu.fragments.entry}
  ${Posts.fragments.entry}
  ${Testimonials.fragments.entry}
  query GetPageData(
    $headerLocation: MenuLocationEnum
    $footerLocation: MenuLocationEnum
    $first: Int
  ) {
    posts(first: $first) {
      nodes {
        ...PostsItemFragment
      }
    }
    testimonials {
      nodes {
        ...TestimonialsFragment
      }
    }
    generalSettings {
      ...BlogInfoFragment
    }
    headerMenuItems: menuItems(where: { location: $headerLocation }) {
      nodes {
        ...NavigationMenuItemFragment
      }
    }
    footerMenuItems: menuItems(where: { location: $footerLocation }) {
      nodes {
        ...NavigationMenuItemFragment
      }
    }
  }
`;
