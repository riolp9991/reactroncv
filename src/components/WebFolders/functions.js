import { getLinks as findLinks } from "../../lib/communicators/links/links.render";
export const getLinks = async (link = "") => {
    console.log({ LLLLINKKK: link });
    const data = await findLinks(link);
    console.log({ FETCHED_DATA: data });
    return data;
};
