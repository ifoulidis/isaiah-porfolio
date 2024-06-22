import { getCollections, load } from "outstatic/server";
import { MobileMenu } from "./mobile-menu";
import { ThemeToggle } from "./theme-toggle";
import FromLeft from "./ui/from-left";
import FromTop from "./ui/from-y";
import SequentialTabs from "./ui/sequential-tabs";

export type MenuProps = {
  pages: {
    title: string;
    slug: string;
  }[];
  collections: string[];
};

const Header = async () => {
  const data = await getData();
  const { pages, collections } = data;

  return (
    <header className=" py-4 fixed bottom-0 border-t border-blue-900 md:bottom-auto md:top-0 w-full z-20 border-b bg-background">
      <nav className="max-w-6xl mx-auto w-full layout flex items-center justify-between ">
        <FromLeft title="Isaiah Foulidis" value={-100} />
        <SequentialTabs>
          {pages.map(({ title, slug }, index) => (
            <FromTop title={title} slug={slug} y={index % 2 === 0 ? -50 : 50} />
          ))}
          {collections.map((collection, index) => (
            <FromTop
              title={collection}
              slug={collection}
              y={index % 2 === 0 ? -50 : 50}
            />
          ))}
          <ThemeToggle />
        </SequentialTabs>
        <MobileMenu pages={pages} collections={collections} />
      </nav>
    </header>
  );
};

async function getData() {
  const db = await load();

  // get all pages
  const pages = await db
    .find(
      {
        collection: "pages",
        slug: { $nin: ["home"] },
        status: "published",
      },
      ["title", "slug"]
    )
    .toArray();

  const collections = getCollections().filter(
    (collection) => collection !== "pages"
  );

  return {
    pages,
    collections,
  } as MenuProps;
}

export default Header;
