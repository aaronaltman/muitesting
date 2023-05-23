import * as MENUS from 'constants/menus';

import { useQuery, gql } from '@apollo/client';

import Categories from '/src/views/Elearning/components/Categories';
import Main from '/src/layouts/Main/Main';
import SimpleHeroWithImageAndCtaButtons from '/src/blocks/heroes/SimpleHeroWithImageAndCtaButtons';
import CtaWithIllustration from '/src/blocks/cta/CtaWithIllustration/CtaWithIllustration.js';

import {
  NavigationMenu,
  SEO,
  Posts,
  Testimonials,
} from 'components';
import { BlogInfoFragment } from 'fragments/GeneralSettings';

import Page from "/src/components/Page.js";

import {Container} from "@mui/material";

//import {Container} from "@mui/material";


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
  //const footerMenu = data?.footerMenuItems?.nodes ?? [];

  return (
    <>
      <Page>
      <SEO title={siteTitle} description={siteDescription} />

      <Main>
        <SimpleHeroWithImageAndCtaButtons />
        <CtaWithIllustration />
        <Container maxWidth="lg">
        <Categories />
        </Container>
      </Main>
      </Page>
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
