import { TLink, TNewLink } from "@/types";
import randomStr from "randomstring";
import firebase from ".";
import bcrypt from "bcryptjs";
import Joi from "joi";

export const createNewLink = async (data: TNewLink) => {
  try {
    const id = randomStr.generate({
      charset: "alphanumeric",
      length: 10,
    });
    const password = data.password ? await bcrypt.hash(data.password, 5) : null;
    const { error } = Joi.object({
      url: Joi.string().uri().required(),
    }).validate({ url: data.target });
    if (error) return Response.json({ error }, { status: 400 });

    await firebase
      .firestore()
      .collection("shorten_url")
      .doc(id)
      .set({
        ...data,
        id,
        password,
        expiresMin: data.expiresMin || 0,
        ts: data.ts || Date.now(),
      });

    return id;
  } catch (err: any) {
    console.error("Error when save new LINK:", err.message);
    return null;
  }
};

export const getLinkById = async (
  id: TLink["id"],
  password?: string
): Promise<TLink["target"] | null> => {
  try {
    const doc = await firebase
      .firestore()
      .collection("shorten_url")
      .doc(id)
      .get();
    if (!doc.exists) return null;

    const data = doc.data() as TLink;
    if (data.password) {
      if (!password) return null;
      const isOk = await bcrypt.compare(password, data.password);
      if (!isOk) return null;
    }
    if (data.expiresMin && Date.now() > data.ts + data.expiresMin * 60 * 1000)
      return null;

    return data.target;
  } catch (err: any) {
    console.error("Error when retrieve LINK by id:", err.message);
    return null;
  }
};
