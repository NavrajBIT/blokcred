import { addSouvenir } from "../apiCalls";
import { create_metadata } from "./metadata";

export const uploadSouvenir = async (
  account,
  name,
  description,
  file,
  addedBy
) => {
  let ipfsResponse = await create_metadata(file, name, description);
  if (ipfsResponse.status === "Success") {
    let image = ipfsResponse.imageURL;
    let metadata = ipfsResponse.metadataURL;
    return await addSouvenir(
      account,
      name,
      description,
      metadata,
      image,
      addedBy
    );
  } else {
    return { status: "Failed" };
  }
};
