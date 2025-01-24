import axios from "axios";
export const imgUpload = async (img_data) => {
  const form_Data = new FormData();
  form_Data.append("image", img_data);
  const image_hosting_key = import.meta.env.VITE_Image_Hosting_key;
  const image_upload_api = `https://api.imgbb.com/1/upload?key=${image_hosting_key}`;
  const { data } = await axios.post(image_upload_api, form_Data);
  return data.data.display_url;
};
