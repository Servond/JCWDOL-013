import { documentToHtmlString } from "@contentful/rich-text-html-renderer";
import Image from "next/image";
import parse from "html-react-parser";
async function getData() {
  try {
    const rawResponse = await fetch("http://localhost:3001/api/test", {
      next: {
        revalidate: 5,
      },
    });
    const response = await rawResponse.json();

    const imageObject = [];
    await response.includes?.Asset.forEach((item) => {
      imageObject.push({
        id: item.sys.id,
        url: item.fields.file.url,
      });
    });
    const result = {
      items: response.items,
      assets: imageObject,
    };

    return result;
  } catch (err) {
    console.log(err);
  }
}

export default async function Test() {
  const { items, assets } = await getData();
  console.log(assets);
  return (
    <div>
      {items?.map((blog) => {
        const content = parse(documentToHtmlString(blog.fields.content));
        const { url } = assets.find(
          ({ id }) => id === blog.fields.image.sys.id
        );
        // console.log(url);
        return (
          <div key={blog.sys.id}>
            <h1>{blog.fields.title}</h1>
            <div> {content}</div>
            {/* <div>{url}</div> */}
            {/* <img src={`https:${url}`} alt="gambar" /> */}
            <Image src={`https:${url}`} alt="gambar" width="150" height="150" />
          </div>
        );
      })}
    </div>
  );
}
