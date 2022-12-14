import Video from "../models/Video";


//Video.find({}, (error,videos) => {}

export const home = async(req, res) => {
    const videos = await Video.find({})
    console.log(videos);
    return res.render("home", { pageTitle: "Home", videos });
};

// render(파일명, 보내고자 하는 변수)
export const watch = async(req, res) => {
  const { id } = req.params;
  const video = await Video.findById(id);
  if(!video) {
    return res.render("404", {pageTitle: "Video not found"});
  }
  return res.render("watch", { pageTitle: video.title,video});
};
export const getEdit = async(req, res) => {
  const { id } = req.params;
  const video = await Video.findById(id);
  if(!video) {
    return res.render("404", {pageTitle: "Video not found"});
  }
  return res.render("edit", { pageTitle: `Edit: ${video.title}`, video});
};

export const postEdit = (req, res) => {
  const { id } = req.params;
  const { title } = req.body;
  return res.redirect(`/videos/${id}`);
};

export const getUpload = (req, res) => {
  return res.render("upload", {pageTitle: "Upload Video"})
};

export const postUpload = async (req, res) => {
  // req.body -> input에서 데이터를 받아오기 위해 사용
  const { title, description, hashtags } = req.body;
  try{
    await Video.create({
    title,
    description,
    hashtags: hashtags.split(",").map(word=> `#${word}`),
  });
  return res.redirect("/");
  } catch (error) {
    return res.render("upload", {
      pageTitle: "Upload Video",
      errorMessage: error._message,
    });
  } 
};