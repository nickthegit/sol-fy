export const settings = `
*[_type == "settings"][0] {
  siteTitle,
  siteDescription,
  siteLogo,
  sharingImage,
  email,
  instagramLink,
  footerLinks
}
`;

export const meta = `
*[_type == "settings"][0] {
  siteTitle,
  siteDescription,
  sharingImage
}
`;

export const header = `
*[_type == "settings"][0] {
  siteLogo,
  siteTitle,
  email,
  instagramLink  
}
`;

export const footer = `
*[_type == "settings"][0] {
  siteTitle,
  footerLinks[]->
}
`;

export const onePager = `
{
  "hero": *[_type == "onePager"][0] {
    heading1,
    heading2,
    heroImage
  },
  "intro": *[_type == "onePager"][0] {
    introTitle,
    introText,
    introImage,
    "introCtaLink": *[_type == "settings"][0].email
  },
  "gallery": *[_type == "onePager"][0].galleryImages,
  "benefits": *[_type == "onePager"][0].benefits,
  "testimonials": *[_type == "onePager"][0].testimonials,
  "footerCta": *[_type == "onePager"][0] {
    footerStatement,
    affiliateLogos,
    logos
  }
}
`;

export const companyPage = (slug: string) => `
  *[_type == "legalDoc" && slug.current == "${slug}"][0]
`;
