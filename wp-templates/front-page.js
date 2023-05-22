import * as MENUS from 'constants/menus';

import { useQuery, gql } from '@apollo/client';
import {
  Main,
  NavigationMenu,
  SEO,
  Footer,
  Posts,
  Testimonials,
} from 'components';
import { BlogInfoFragment } from 'fragments/GeneralSettings';
import {Container} from "@mui/material";

import TopNav from "../src/components/TopNav";

import Topbar from '/src/layouts/Fixed/components/Topbar/Topbar.js';

import BlogCardsWithFullBackgroundImage from "../src/blocks/blog/BlogCardsWithFullBackgroundImage";
import SimpleHeroWithImageAndCtaButtons from "../src/blocks/heroes/SimpleHeroWithImageAndCtaButtons";


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
  //const primaryMenu = data?.headerMenuItems?.nodes ?? [];
  const footerMenu = data?.footerMenuItems?.nodes ?? [];

  return (
    <>
      <SEO title={siteTitle} description={siteDescription} />

      <Main>
        <Container maxWidth={'xl'}>
          <TopNav />
          <Topbar />
          <SimpleHeroWithImageAndCtaButtons />
          <BlogCardsWithFullBackgroundImage />
        </Container>

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
