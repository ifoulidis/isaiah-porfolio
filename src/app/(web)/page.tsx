import ContentGrid from "@/components/content-grid";
import markdownToHtml from "@/lib/markdownToHtml";
import { load } from "outstatic/server";
import Logo from "../../../public/images/personal-logo.png";
import Image from "next/image";
import Reveal from "@/components/ui/reveal";

export default async function Index() {
  const { content, allPosts, otherCollections } = await getData();

  return (
    <>
      <section className="my-8 md:my-16 min-h-[50vh] md:min-h-[calc(100vh-200px)] items-start relative flex-col ">
        <div
          className="prose lg:prose-2xl home-intro prose-outstatic home-hero-fade"
          dangerouslySetInnerHTML={{ __html: content }}
        ></div>
        <div className="md:absolute bottom-0 left-0 md:right-0 w-400 h-400">
          <Reveal delay={1.2}>
            <Image src={Logo} alt="Personal Logo" width={300} height={300} />
          </Reveal>
        </div>
      </section>
      <div className="animate-fade-in delay-1000 opacity-0 duration-500">
        {Object.keys(otherCollections).map((collection) => {
          if (!collection.length) return null;
          return (
            <ContentGrid
              key={collection}
              title={collection}
              items={otherCollections[collection]}
              collection={collection}
              viewAll
            />
          );
        })}

        {allPosts.length > 0 && (
          <ContentGrid
            title="posts"
            items={allPosts}
            collection="posts"
            priority
            viewAll
          />
        )}
      </div>
    </>
  );
}

async function getData() {
  const db = await load();

  // get content for the homepage
  const page = await db
    .find({ collection: "pages", slug: "home" }, ["content"])
    .first();

  // convert markdown to html
  const content = await markdownToHtml(page.content);

  // get all posts. Example of fetching a specific collection
  const allPosts = await db
    .find({ collection: "posts", status: "published" }, [
      "title",
      "publishedAt",
      "slug",
      "coverImage",
      "description",
      "tags",
    ])
    .sort({ publishedAt: -1 })
    .limit(3)
    .toArray();

  // get remaining collections
  const collections = await db
    .find(
      {
        // $nor is an operator that means "not or"
        $nor: [{ collection: "posts" }, { collection: "pages" }],
        status: "published",
      },
      [
        "collection",
        "title",
        "publishedAt",
        "slug",
        "coverImage",
        "description",
      ]
    )
    .sort({ publishedAt: -1 })
    .limit(3)
    .toArray();

  // group remaining collections by collection
  const otherCollections = collections.reduce<{
    [key: string]: (typeof collections)[0][];
  }>((acc, item) => {
    if (!acc[item.collection]) {
      acc[item.collection] = [];
    }

    acc[item.collection].push(item);

    return acc;
  }, {});

  return {
    content,
    otherCollections,
    allPosts,
  };
}
