import { nanoid } from "nanoid";
import URL from "../model/url.js";

export async function handleGenerateNewShortURL(req, res) {
  const body = req.body;
  if (!body.url) {
    return res.status(400).json({ error: "You must pass url to shorten it" });
  }
  const shortId = nanoid(8);
  await URL.create({
    shortId: shortId,
    redirectId: body.url,
    visitHistory: [],
  });
  return res.json({ message: `Successfully created for ID : ${shortId}` });
}
export async function handleGetRedirectId(req, res) {
  const shortId = req.params.id;
  const dataObj = await URL.findOneAndUpdate(
    { shortId },
    {
      $push: {
        visitHistory: {
          timeStamp: Date.now(),
        },
      },
    }
  );
  // return res.json({ RedirectURL: `${dataObj?.redirectId}` });
  res.redirect(dataObj.redirectId)
}
export default { handleGenerateNewShortURL, handleGetRedirectId };
