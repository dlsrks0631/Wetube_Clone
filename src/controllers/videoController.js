import Video from "../models/Video";


export const home = (req, res) => {
  Video.find({}, (error, videos) => {
    console.log("errors", error);
    console.log("videos", videos);
  })
  return res.render("home", { pageTitle: "Home", videos: [] });
};

// render(파일명, 보내고자 하는 변수)
export const watch = (req, res) => {
  const { id } = req.params;
  return res.render("watch", { pageTitle: `Watching `});
};
export const getEdit = (req, res) => {
  const { id } = req.params;
  return res.render("edit", { pageTitle: `Editing:`});
};

export const postEdit = (req, res) => {
  const { id } = req.params;
  const { title } = req.body;
  return res.redirect(`/videos/${id}`);
};

export const getUpload = (req, res) => {
  return res.render("upload", {pageTitle: "Upload Video"})
};

export const postUpload = (req, res) => {
  // req.body -> input에서 데이터를 받아오기 위해 사용
  const { title } = req.body;
  return res.redirect("/");
};