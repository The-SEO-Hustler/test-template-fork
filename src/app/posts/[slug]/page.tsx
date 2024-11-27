import { Metadata } from "next";
import { notFound } from "next/navigation";
import { getAllPosts, getPostBySlug } from "@/lib/api";
import { pageData } from "@/lib/data";
import markdownToHtml from "@/lib/markdownToHtml";
import Container from "@/components/Container";
import Header from "@/components/header";
import { PostBody } from "@/components/post-body";
import { PostHeader } from "@/components/post-header";

export default async function Post(props: Params) {
  const params = await props.params;
  const post = getPostBySlug(params.slug);
  let schema = ''
  if (!post.schema) {
    schema = JSON.stringify({
      "@context": "https://schema.org",
      "@type": "BlogPosting",
      headline: post.title,
      description: post.excerpt,
      image: post.coverImage,
      author: {
        "@type": "Person",
        name: post.author.name,
        image: post.author.picture,
      },
      datePublished: new Date(post.date).toISOString(),
      dateModified: new Date(post.date).toISOString(),

      publisher: {
        "@type": "Organization",
        name: pageData.website.name,
      },
    })
  }
  else {
    schema = post.schema
  }

  if (!post) {
    return notFound();
  }

  const content = await markdownToHtml(post.content || "");
  console.log("post", post)
  return (
    <main>
      <script
        type="ld+json"
        dangerouslySetInnerHTML={{ __html: schema }}
      />


      <Container>
        <Header />
        <article className="mb-32">
          <PostHeader
            title={post.title}
            coverImage={post.coverImage}
            date={post.date}
            author={post.author}
          />
          <PostBody content={content} />
        </article>
      </Container>
    </main>
  );
}

type Params = {
  params: Promise<{
    slug: string;
  }>;
};

export async function generateMetadata(props: Params): Promise<Metadata> {
  const params = await props.params;
  const post = getPostBySlug(params.slug);

  if (!post) {
    return notFound();
  }

  const title = `${post.title}`;

  return {
    title,
    openGraph: {
      title,
      images: [post.ogImage.url],
    },
  };
}

export async function generateStaticParams() {
  const posts = getAllPosts();

  return posts.map((post) => ({
    slug: post.slug,
  }));
}
